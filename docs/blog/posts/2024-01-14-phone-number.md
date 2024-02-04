---
date:
  created: 2024-01-14
categories:
  - Shower Thought
tags:
  - tech
  - website
  - math
---
# Phone Number Verification

Something that always irks me is when a website or app requires phone number verification, often called SMS authentication. Usually, that means whenever you want to log in to, let's call it BookFace, it will text you an automated code that you enter, or a link to click, to verify that the number is really yours and it is really you trying to log in. Many websites are now beginning to enforce this policy. In my opinion, this is a terrible system for several reasons.

<!-- more -->

> I'm using "BookFace" as an example company/app name. It could represent Gmail, Instagram, or something very critical like your mobile banking app.

## Weak Argument

One very weak argument is that not everyone has a phone. Okay... [survey says](https://www.pewresearch.org/internet/fact-sheet/mobile/) that in 2021, 97% of Americans and 100% ages 18-49 own a cell phone of some kind. I *said* it was a weak argument! A counter argument to this, is those people signing up for BookFace likely have a phone, and may even be accessing BookFace directly from their phone. A counter to the counter, is that these figures are cell phone ownership - not necessarily the number of mobile phone *subscriptions* or activated SIM cards.

## Medium Argument 1

Your phone battery could die. Then what? You're locked out of BookFace until you charge it.

> Remember that "BookFace" can represent any app/website - including ones that might be very time sensitive, e.g. to your job, finances, academics, or family.

Okay, what if you lose your phone? In most cases, that means you lose your phone number with it. Unfortunately, it's not that simple to recover your lost phone number. So, no phone = no phone number = locked out of your accounts? What a horrible day that would be!

## Medium Argument 2

This is more of a personal one. To me, my phone number feels more personal to me than my email or other modes of online communication. I simply don't like sharing my personal phone number with BookFace - especially since I know it will not respect privacy laws and will sell my personal data. I've seriously considered obtaining a "burner" phone to use for all my account authentication methods, but then I would need to be carrying 2 phones around and pay for additional data, and of course there is the issue of phone number reuse (mentioned [later](#reuse) in this article.)

## Strong Argument

In my opinion, this reason alone should be more than enough to stop companies from *requiring* your phone number. And *please*, if you are in the position to decide how your company authenticates users, read and consider this.

### Phone Number Supply

With our current setup of how phone numbers work, there is a limited supply. In the United States, for example, the phone number pattern begins with "1" (because of the [world zone](https://en.wikipedia.org/wiki/List_of_country_calling_codes)) and consists of a 3-digit area code, a 3-digit office code, and a 4-digit line number, with rules based on the [North American Numbering Plan (NANP)](https://en.wikipedia.org/wiki/North_American_Numbering_Plan). Here's the pattern visualized without any rules\*:

```
+1(XXX)-XXX-XXXX
```

There are 10 variable digits, each with 10 possibilities (0-9) so that means the total supply of phone numbers is $10^{10}$ or about 10 billion, in the United States, right? <!-- Surely that is enough phone numbers to go around. --> **Wrong!**

\*The NANP assigns special rules for area and office codes which further limit the supply:

- Area codes must start with a digit 2-9
- The middle digit of the area code cannot be 9
- Office codes must start with a digit 2-9
- Office codes cannot end in "11"
- Office code cannot be "555"

After applying these rules, there are only 6.27 billion *possible* phone numbers. But, there aren't 6.27 billion phone numbers out there, because in 2022, there are/were only 335 area codes, which means only 2.65 billion phone numbers, assuming every area code is at its max capacity! All right, that is still plenty more than the 335 million Americans.

> During proof-reading, I noticed the interesting coincidence: **335** area codes & **335** million Americans!

### Reuse

Even though there's enough for each American to have almost 8 unique phone numbers, existing phone numbers that are deactivated are **still** reactivated and put back into the pool! According to [this](https://www.telesign.com/blog/number-deactivation-and-the-recycled-phone-number-dilemma) article, over 35 million phone numbers are reused each year. That's a lot!

Even disregarding the main topic of account authentication, there's some glaring issues here. If my phone number is deactivated and reassigned to someone else, everyone that has my number saved will be contacting that other person. On the other hand, if I get a new phone and it has a reassigned phone number, I will be getting contacted and possibly spammed from all of the previous owner's contacts, depending on how private they kept their phone number.

More annoyingly, let's say the previous owner already used this phone number to create their BookFace account. That means, I'm now stuck and cannot create one myself, since a phone number is required for registration.

A worst-case scenario is registering a phone with a reassigned number from a known spammer or someone that otherwise abused their phone communication. Those actions may have caused that number to be added to several blacklists and possibly even blocked from using it as an authentication method for more tech-savvy companies, like BookFace.

## Alternatives

Okay, so far I've just been complaining and offering no solution. But trust me, there are *plenty* of better ways to achieve authentication security than forcing users to provide their phone numbers.

### Email Link

Send a link to your email address. When clicked on, you are logged into BookFace.

### Email OTP

Send a one-time passcode to your email address. Entering it into BookFace will log you in.

### Backup Email

Either of the last 2 methods, but to a secondary email address you associate with the account.

### Hardware Token

Plug in a USB device that generates codes which authenticate your identity. Unfortunately, this one only works for desktop/laptop computers.

### Biometrics

I actually *really* hate this one, even more than SMS authentication, but I wanted to include it for completeness. Some examples of biometric authentication include fingerprint scanning or face ID.

But if the hardware is scanning incorrectly, or you're wearing a face mask, these don't work. Similarly to my [second medium argument](#medium-argument-2), I don't want to give BookFace access to my biometric data.

### Software Token

In my opinion, this is my favorite alternative to SMS authentication, and there are 2 main methods for this. You could use an app that enables push notifications. When you try to log in to BookFace, you receive a notification on your phone that may say something like "Is this really you?" Clicking "Yes" will log you in.

The other option is an authenticator app that continually generates one-time passcodes. When logging into BookFace, it will ask for the one-time passcode, and entering it correctly will log you in.

### User Choice

Allow the user to select their preferred method from the list above or SMS authentication.

### Nothing

We're all forgetting the most obvious solution here. (In fact, I'm writing this during my proof-read since I forgot to include it initially!) Just **do nothing**. Don't require users to set up multi-factor authentication at all. Perhaps enforce stricter password requirements, but with modern password managers, who cares? I'll generate a 99-character-long random password just for you, BookFace.

## Conclusion

I think software tokens work the best, because they are very similar to SMS authentication, but without the drawbacks. Since it can be all on your phone, then you won't notice any difference. In fact, you *may* be able to install some of these apps on your computer as well for convenience (e.g. phone dying or getting lost!) Most of these push notification or authenticator apps will have a way to "backup" your codes, so if you lose your phone then you can import your data into the new one. Also, you don't share your phone number with BookFace, which I think is a nice bonus.