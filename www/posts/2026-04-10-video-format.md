# CCTV Hacking

In late March, an *event* occurred which caused me to request CCTV footage from a local transportation service. That will be saved for another story. But if you're here to read about computery stuff, this is the tale for you.

## The Request

I made a request directly through the Muni agency for their dashboard camera footage, which was promptly denied, but I was redirected to make the request through the city of San Francisco Public Records department. So, I did and got an automated reply stating that my case would be reviewed within 10 business days, due to the Sunshine Act. So, I waited.

## The Reply

Eventually, I did receive a reply with a note, two files, and an immediate case closure. The note stated that the video was only playable in Windows. Of course. I use Linux at home and my work computer is a Mac. The video file was in `.dvs` format and there was also a `.zip` attachment. I downloaded both, figuring that was the logical next step.

## The Windows Attempt

The first thing I tried was just opening the `.dvs` file directly on my Linux machine. It couldn't open, and I tried to force it to open with VLC, but I got an error. Since that was not working, I had to figure out how to get access to a Windows machine.

I tried looking up "Windows PC online" to see if anyone has set up a public Windows server I could access. And surprisingly, that exists! Sort of. It was actually a Linux server with a Windows "skin" on top. Unfortunately I couldn't get my files onto that machine since it was blocking internet access or something. I didn't try too long because it was pretty sketchy and I doubt it would've worked anyway. So onto the next attempt.

I thought maybe a Docker image would work, but before I found out how to implement that, I came across Virtual Machines (VMs)! I can't believe I didn't think of that first, since that is a very common way to run applications in a data center like where I work.

I installed VirtualBox and set it up with Windows 11. I got the disk image directly from Microsoft so I know it was legit and I made sure it matched the `sha256sum` provided. There was some difficulty getting it set up because I didn't want to log into my Microsoft account so I found a way to bypass that online by opening a console, entering the following code, and then rebooting with the network interface turned off.

```bash
OOBE\BYPASSNRO
```

It's a super roundabout way but it actually worked, I skipped the horrible forced "sign in with Microsoft" dialog and was finally inside my virtual machine. This time, I had to reboot with the network interface turned back on so I could download those files from my public records case.

Soon enough I had my files and tried to directly open the `.dvs` file again with no luck. So I turned to the `.zip` file. Inside it contained the **DVSS Client** installer, a `.bat` script, and a `.docx` file, sort of like a readme. I installed the DVSS Client and tried to run it, but I kept getting an error that `msvcp100.dll` and `msvcr100.dll` were not found. Thanks to a Google search and StackOverflow, I found out that I had to install **Microsoft Visual C++ 2010 Redistributable** to fill those missing holes. You heard that right, **2010**, which is 16 years old at this point! That's a *long* time for software to be around. The kicker? I already had Microsoft Visual C++ 2015 Redistributable installed on my machine. And I guess that wasn't old enough for this DVSS Client software. Luckily, I was still able to download this from the official Microsoft website. Finally, I could run DVSS Client.

I nearly laughed when I saw the interface. It looked like an extremely old TV/VCR system. I tried to launch the `.dvs` file in the application, but I kept getting a read error. I tried opening it *with* DVSS Client, I tried running the batch file first, and opening it with the batch file, but nothing was working. After all this time, frustrated, I turn to AI.

## The AI Age


