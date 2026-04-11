# CCTV Hacking

In late March, an *event* occurred which caused me to request CCTV footage from a local transportation service. That will be saved for another story. But if you're here to read about computery stuff, this is the tale for you.

## The Request

I made a request directly through the Muni agency for their dashboard camera footage, which was promptly denied, but I was redirected to make the request through the city of San Francisco Public Records department. So, I did and got an automated reply stating that my case would be reviewed within 10 business days, due to the Sunshine Act. So, I waited.

## The Reply

Eventually, I did receive a reply with a note, two files, and an immediate case closure. The note stated that the video was only playable in Windows. Of course. I use Linux at home and my work computer is a Mac. The video was a 1.3GB file in `.dvs` format, and there was also a `.zip` attachment. I downloaded both, figuring that was the logical next step.

## The Windows Attempt

The first thing I tried was just opening the `.dvs` file directly on my Linux machine. It couldn't open, and I tried to force it to open with VLC, but I got an error. Since that was not working, I had to figure out how to get access to a Windows machine.

I tried looking up "Windows PC online" to see if anyone has set up a public Windows server I could access. And surprisingly, that exists! Sort of. It was actually a Linux server with a Windows "skin" on top. Unfortunately I couldn't get my files onto that machine since it was blocking internet access or something. I didn't try too long because it was pretty sketchy and I doubt it would've worked anyway. So onto the next attempt.

I thought maybe a Docker image would work, but before I found out how to implement that, I came across Virtual Machines (VMs)! I can't believe I didn't think of that first, since that is a very common way to run applications in a data center like where I work.

I installed VirtualBox and set it up with Windows 11. I got the disk image directly from Microsoft so I know it was legit and I made sure it matched the `sha256sum` provided. There was some difficulty getting it set up because I didn't want to log into my Microsoft account. So, I found a way to bypass that online by opening a console, entering the following code, and then rebooting with the network interface turned off.

```bash
OOBE\BYPASSNRO
```

It's a super roundabout way but it actually worked, I skipped the horrible forced "sign in with Microsoft" dialog and was finally inside my virtual machine. This time, I had to reboot with the network interface turned back on so I could download those files from my public records case.

Soon enough I had my files and tried to directly open the `.dvs` file again with no luck. So I turned to the `.zip` file. Inside it contained the **DVSS Client** installer, a `.bat` script, and a `.docx` file, sort of like a readme. I installed the DVSS Client and tried to run it, but I kept getting an error that `msvcp100.dll` and `msvcr100.dll` were not found. The readme was of no help, of course. Thanks to a Google search and StackOverflow, I found out that I had to install **Microsoft Visual C++ 2010 Redistributable** to fill those missing holes. You heard that right, **2010**, which is 16 years old at this point! That's a *long* time for software to be around. The kicker? I already had Microsoft Visual C++ 2015 Redistributable installed on my machine. And I guess that wasn't old enough for this DVSS Client software. Luckily, I was still able to download this from the official Microsoft website. Finally, I could run DVSS Client.

I nearly laughed when I saw the interface. It looked like an extremely old TV/VCR system. I tried to launch the `.dvs` file in the application, but I kept getting a read error. I tried opening it *with* DVSS Client, I tried running the batch file first, and opening it with the batch file, but nothing was working. After all this time, frustrated, I turn to AI.

## The AI Age

Sadly, Gemini doesn't really know anything about the DVSS Client software, so we try some things together, but still nothing seems to work. I explain my problem and ask if there is a way I can open the file natively inside my Linux host machine. It recommends inspecting the first few bytes using the `xxd` command-line utility.

```sh
head -c 256 "file.dvs" | xxd
```

It immediately recognized the binary output as an H.264 video format with extra header garbage. Remember that this file was 1.3GB? These commands were taking so long to execute, so Gemini helped me create a "chunk" of this file to test things out on.

```sh
head -c 50M "file.dvs" > chunk.dvs
```

After a lot of back-and-forth, we found that this command successfully generated an output!

```sh
ffmpeg -f h264 -i "file.dvs" output.mp4
```

Now, I was able to actually see what the Public Records department actually sent me. This output was an incredibly messy stream, with a few frames of a camera before jumping to a few frames of a different camera, seemingly with different frame rates, too. But, we had something!

## Post-Processing

From inspecting the video stream, I discovered that I actually received a file containing recordings from 8 different cameras all filming simultaneously! They appeared to be "chunked" in a regular pattern:

- 10 frames for camera 1
- 30 frames for camera 2
- 30 frames for camera 3
- 10 frames for camera 4
- 10 frames for camera 5
- 10 frames for camera 6
- 10 frames for camera 7
- 10 frames for camera 8

And it would reset back to camera 1 every 120 frames. So, this is perfect, I can work with this! I asked AI to make a script for me that would split the output video stream into 8 per-camera videos. Basically, it just needed to count frame-by-frame and place each frame in the corresponding video. We did that, but the videos were still very choppy. As it turns out, the pattern I "found" wasn't *always* true, sometimes a camera would generate 11 frames, so the per-camera outputs would slowly "drift" and become choppy again. Great.

Working more with AI, I found out that we could determine the "scene changes" using another script, which would check to see if the entire frame is redrawn versus just a few pixels needing to be manipulated. We used this script to generate the raw "frame jumps" from camera to camera.

```sh
# Detect the camera jumps with a threshold of 0.02
ffmpeg -i output.mp4 -vf "select='gt(scene,0.02)',metadata=print:file=raw_jumps.txt" -f null -
# Actually extract the timestamps from the raw output
grep "pts_time" raw_jumps.txt | cut -d':' -f4 > clean_times.txt
```

Now I had a list of timestamps, but a lot more than I needed, because there is a lot of false positives in this list. I used a Python script to cut out some of the timestamps with a threshold of 0.1sec between them. So, any jumps that were recorded in quick succession could be assumed to be a false positive.

I had AI write me another script to trim `output.mp4` into these video segments and "stitch" them into 8 per-camera videos, by cycling 1 through 8. Unfortunately, I realized that occasionally, a camera may "drop out" and its video would be out of order, or missing, so the cameras would essentially be "rotated" multiple times through the per-camera videos.

At this point, I was getting so frustrated, and trust me, I tried *so* many things. Of course, with enough time and resources, this file format could be reverse-engineered, but I just couldn't do it. So do you want to know what I did?

## My Brute-Force Solution

I went back to the step where we trimmed out little "pieces" of `output.mp4`, where one segment is a single camera recording. (Mostly, there were a few instances where we had a false negative and a segment contained output for multiple cameras.) There was a particular segment of the full output I was interested in, so I used `ffmpeg` to trim the main output to just the time range I wanted.

```sh
ffmpeg -i "output.mp4" -ss 00:12:00 -to 00:22:00 trimmed.mp4
```

That way I had something more manageable to work with. I then ran the script to generate the timestamps for the camera jumps and then split the file into over 1,200 video segments of 0.5-2 seconds! And this is the ugly part. I went through, piece by piece, putting them in their correct "bins" one by one. That's right. However, I could speed things up since there were only 3 cameras I was interested in (and later found out I only needed 2 of them) so I would put those in their respective folders, deleting the rest. AI helped me write the script to stitch them together into 3 per-camera videos.

```sh
dirname='cameraXYZ'
printf "file '%s'\n" ${dirname}/*.mp4 > join_list.txt
ffmpeg -f concat -safe 0 -i join_list.txt -c copy "${dirname}_full.mp4"
```

There were still a *few* artifacts, but by golly this was the best output I'd seen all day. It was like a ray of sunshine when I saw the final solution.

## Conclusion

Brute-forcing each per-camera video was a pain, but luckily I was able to judge them pretty well based on the thumbnails. I got through them all in about half an hour, which in all the time I've spent on this, is not that much. However, if I sorted the whole video (e.g. `output.mp4`) and wanted all 8 cameras, that would have been in the 10,000s of snippets.

In fact, this whole process was a great deal of work, but I was locked in. It was so interesting to do a deep dive on reverse-engineering a piece of software, and slowly seeing the result get better and better. I felt like a true hacker. I've far from perfected this process, but maybe someday, someone will bring `.dvs` files into the 21st century or make them open-source.
