# Connecting to Public Wifi

I'm currently writing this from my laptop running Kubuntu 24.04 in a public space; Peet's Coffee. (The matcha latte here is good.) I had some difficulty connecting to the public wifi. Luckily, I had my smartphone with me, which gave me options.

<!-- more -->

Normally, when you connect to these public free wifi networks, you'll get a popup on your phone or laptop asking to agree to some terms and conditions. The issue was that it was not popping up on my computer at all, meaning that even though I was technically online, I couldn't access anything on the internet.

For one, I could have simply enabled wifi hotspot and connected my laptop to that. But since I was in a place with free wifi, I wanted to use that. The fact that I had my smartphone though was lucky, since I could look up potential solutions to my problem.

I stumbled across a [StackOverflow post](https://askubuntu.com/questions/826998/cannot-log-in-to-public-open-wifi-connection) that recommended to run a command from the terminal to find the IP address of the default gateway.

```shell
route -n
```

Unfortunately, it didn't work for me, since I didn't have the `route` utility installed, and of course, I couldn't install it as I couldn't access the internet. Luckily, the post offered another solution to get the address.

```shell
ip route
```

This gave me the IP address of the default gateway, which I then copy and pasted into a new browser tab. This then pulled up the terms and conditions directly in my browser, which I then signed my life away by accepting it, and then was able to access the internet and write this absolutely riveting post!