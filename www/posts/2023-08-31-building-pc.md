---
categories:
  - Project
tags:
  - tech
  - computer
---
# Building My PC

Want to learn about my frustrating journey to building my second PC? Read on!

<!-- more -->

## Part I: Diagnosis

Sometime in August 2023, my power shut off for a few hours when I wasn't home. I'm not sure if this was the reason, but when I returned home, my computer would no longer turn on. To be more precise, it was getting power, the fans were spinning, but none of the LEDs would light up, and of course, no signal to the monitor. I tried everything I could find online to fix my PC, including but not limited to...

### The simple fixes:

- Unplugging my PC and trying a different power outlet
- Trying different HDMI cables
- Use the motherboard's IO port, instead of the GPU's, in an attempt to run off the CPU's graphics software

### The still-pretty-simple fixes:

- Clearing the CMOS
- Reseating the RAM
- Making sure the interior of the case is dust-free

### The mildly-annoying fixes:

- Replacing the CMOS battery
- Unplugging all the PSU cables from the motherboard and plugging them back in one by one

### The complicated fixes:

- Removing all components from the case
- Unplugging all the front IO cables and manually jumping pins to turn on
- Removing all components, only install those in order for the PC to POST
- Try 1 stick of ram at a time

After all these were through and through with no visible progress made, I narrowed down the issue to the motherboard or CPU, and decided it was simply time for an upgrade. After thorough research, I picked out [these components](https://pcpartpicker.com/list/HJ84qR) on PCPartPicker. The RAM, SSD, and PSU were salvaged from my current (previous) build. Remember this for later.

## Part II: Rebuild

I ordered all my new parts through Amazon, and put it together *extremely* carefully. I made the best effort not to touch any pins or contacts and grounded myself before any instance I needed to handle the motherboard. The first thing I did was to remove the old case fans from my previous case to install on the new one. No problem.

Then, I did a minimal installation sitting atop a cardboard box. It's just the CPU and 1 stick of RAM, all connected to the power supply. After jumping the on/off pins, the fans spin up and the LEDs turned on. After connecting the HDMI cable, I get a signal, hooray! Surprisingly, no issues at all so far.

Things start to get a little tricky with the SSD and GPU - this motherboard has a heatsink for the SSD, which is very close to where the GPU sits. But again, after some finesse with the installation, they fit perfectly. After plugging the HDMI into the GPU and powering on, I luckily get an error message; turns out I forgot to supply power to the GPU fans. After fixing that, so far so good.

Next step is to install everything in the case, which is difficult due to the lack of clearance on 2 sides of the motherboard. I was terrified during this step, because it is nearly impossible to avoid touching pins/metal on the motherboard. Eventually I get everything screwed in thanks to a magnetic screwdriver.

The last step was to plug in all the front IO cables and hope for the best. This was difficult once again due to lack of clearance, I had to wiggle the cables just to sit on top of the pins, and gently push them in using pliers. After finding the power button (which blended into the case, I'm not proud of how long it took me...) the monitor received a signal! The only issue was the case LEDs not turning on. I tried a different set of pins, still no luck. I actually gave up on this, but later found out there was a small button on the case to turn them on! (Wow, this is embarrassing.)

So as of now, my fully-built computer turns on and sends a signal to the monitor.

> **Fun fact:** I actually finished the build at around 2:00 AM. It was an extremely warm night and I couldn't sleep.

## Part III: Backup

My SSD still has old files which I want to keep. It also contains my old OS, Windows and drivers for my old PC components. I read online that booting a new computer with a disk containing drivers built for your old components can *potentially* cause damage to your hardware. (E.g. voltage/current settings.) Despite the low risk, I did not want to risk this. So now I'm stuck with a disk I cannot boot into.

Luckily, my computer scientist friend taught me to create a bootable USB with Ubuntu OS, which access files on your disk. This is exactly what I did. I created a bootable USB using [Kubuntu OS (22.04)](https://kubuntu.org/) and booted with that. I also had an empty flash drive to use for my backup files. The backup took *forever*, and actually froze at one point and I had to restart, but eventually it ran to completion.

## Part IV: Install

After my files were backed up on a flash drive, I installed Kubuntu. It destroyed any data that was left over on the SSD and replaced it with the new operating and file systems. This should have been the end of story, but unfortunately, that couldn't be further from the truth.

Up until now, the hardware and software installs have been relatively straightforward, with no major hitches. From the first power-on with the new Kubuntu OS, it was stuck in the boot loader, which displays a low-resolution terminal called Grub. To actually complete the boot, I ran the following commands I found in [this StackOverflow post](https://askubuntu.com/questions/883992/stuck-at-grub-command-line).

```shell
set prefix=(hd0,gpt3)/boot/grub
set root=(hd0,gpt3)
insmod linux
insmod normal
normal
```

After the OS finally finished booting up, I discovered all sorts of software problems, since my OS was still in "recovery mode." That post, as well as others, recommends a permanent fix by running `sudo update-grub` and `sudo grub-install`, or by installing the [Boot Repair](https://help.ubuntu.com/community/Boot-Repair) utility. None of these fixed the problem; every time I would reboot, my computer would get stuck in the boot loader stage. I attempted to re-install Kubuntu, twice (once with 3rd party drivers, and once with a minimal installation), and ran into the exact same issues both times.

From the error messages I received from the Grub commands and Boot Repair, I finally discovered that my SSD was using the incorrect file system type. At the moment I'm writing this, I cannot recall what file system type it was, but the Linux OS family uses the EXT4 file system type. There was an option in my motherboard's BIOS to format and sanitize the SSD. After this ran to completion, and reinstalling Kubuntu, it finally booted with no errors.

The only small catch was that my GPU was unrecognized, so I needed to install the corresponding driver for it.

## Part V: Printer Shenanigans

Home stretch...

- The hardware is fully built out
- The software runs as intended
- The OS boots completely every time
- I've done some fun customization with on-board LEDs
- Essential software is installed (GPU drivers)
- "Essential" software is installed (VS Code, Brave, Inkscape...)
- I've imported my backup from the flash drive

I own a Canon MX410 wireless printer, which is already connected to my network. My PC can "see" it, so I give it a try. No response from the printer, and the printer queue is immediately emptied. This is going to be fun, isn't it...

Kubuntu comes with several printer drivers pre-installed, but naturally the MX410 is not in the list. The next logical step is to check the [Canon MX410 website](https://en.canon-cna.com/support/consumer/products/printers/pixma/mx-series/pixma-mx410.html?type=drivers&os=Linux%20(64-bit)), which contains not the driver itself, but source files, which need to be compiled and built. On first attempt, the build fails due to lack of dependencies. Usually, this is no problem, but two of those dependencies are `libpng12` and `libtff4`, which are now deprecated for their newer versions `16` and `5` respectively. Of course, I install the newer versions, being the only option anyway. This doesn't satisfy the requirement, and since these versions are not found to download, I turn to other options. I explore the list of pre-installed Canon drivers and try some at random, with no results. [OpenPrinting](https://openprinting.github.io/) contains drivers for several legacy printers, but no luck again. That means it's time to track down the deprecated libraries and manually build the driver. Sure enough, someone on StackOverflow asked the exact thing I am trying to achieve ([`libpng12`](https://askubuntu.com/questions/1194386/how-to-correctly-install-libpng12-0-on-the-ubuntu-19-10) and [`libtiff4`](https://askubuntu.com/questions/1359381/missing-libtiff4-while-installing-canon-mx410-driver-on-ubuntu-21-04)). With some sweat and tears, and these commands...

```shell
tar zxvf cnijfilter-mx410series-3.50-1-deb.tar.gz
cd cnijfilter-mx410series-3.50-1-deb
sudo ./install.sh
```

...The driver built sucessfully, and the printer was finally conquered!