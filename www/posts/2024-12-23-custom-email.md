---
date: 2024-12-23
categories:
  - Project
tags:
  - domain
  - email
  - organization
  - tech
---
# Custom Domains in Gmail

Go to
| [\#1](./2024-02-11-backup.md)
| [\#2](./2024-02-18-passwords.md)
| [\#3](./2024-02-25-gmails.md)
| [\#4](./2024-02-26-github.md)
| [\#5](./2024-03-11-mail-plus.md)
| [\#6](./2024-04-28-gatekeep.md)
| \#7

I'm reviving an old series here. This one branches off of story [\#5](./2024-03-11-mail-plus.md), where I split up my Gmail account to use a custom email for each online account. But now, instead of exposing my Gmail account, I can use one of the custom domains I own to send *and* receive emails, directly in my Gmail mail client, for free! For example, I can now send and receive emails from an address like <example@nicfv.com>. It was an adventure to figure out this project and quite a lengthy headache at times.

<!-- more -->

## Web Hosting

Originally, I had achived this behavior using my web hosting provider. Before I learned about GitHub pages, I used **Hostinger** for all my web hosting needs. With the plan I paid for, I had more storage space than I ever needed, and it also came with a business email package. With that, I could use the domains I parked at Hostinger's nameservers to send and receive email. Hostinger has their own mail client, but they also provide [easy instructions](https://support.hostinger.com/en/articles/4305847-set-up-hostinger-email-on-your-applications-and-devices) on how to connect the business email to your personal Gmail account, to send and receive mail there.

I liked this method because everything was handled by Hostinger's services, and I did not need to manually set up any DNS record beyond parking my domain, nor install anything on my own network. Also, emails were sent through secure SSL/TLS channels and signed with a key associated with my domain. If a Gmail account receives an email sent from my domain on Hostinger's services, they would see something like this in the email header:

```
     from:  Nicolas Ventura <example@nicfv.com>
       to:  "recipient@gmail.com" <recipient@gmail.com>
     date:  Dec 23, 2024, 11:22 AM
  subject:  Test Email
mailed-by:  nicfv.com
signed-by:  nicfv.com
 security:  Standard encryption (TLS)
```

This was really nice, because even if you downloaded the email's source and inspected the sender's ID, it would only show the path through Hostinger and no references to Gmail or my personal Gmail address. However, the main drawback of this method is that it is not free.

## Zoho Mail

When I started researching alternatives, I came across Zoho Mail, where you can get a free account of up to 5 users. (I'm assuming that means 5 separate inboxes.) Zoho exposes an SMTP server for their free plans which allows for sending mail from other email clients, like Gmail. By following [these instructions](https://www.zoho.com/mail/help/zoho-smtp.html), I was able to get my Gmail set up with an alias to send mail from my custom domain. Zoho also has [instructions](https://www.zoho.com/mail/help/pop-access.html) on how to receive mail in an external client, using their POP server. Unfortunately, this is only available for paid plans (which to be fair, are the cheapest I've found so far in my research.)

Without the ability to receive mail in Gmail, these efforts ended up being pretty useless. I was able to send mail from Gmail using my custom domain, but I would need to log into their email client to check mail. To be fair, I really did like their email client, but it would take a lot to push me away from using the Gmail client (like knowing that Google is reading all my mail and slowly building an AI copy of me...)

For people interested in running their own custom email domain, and don't like the Gmail client, I would personally recommend Zoho. You get a free plan of up to 5 users and it's easy to upgrade to a paid plan and get more users and features with it. It's a *much* cheaper version of Google Workspace (formerly G-Suite.)

## Gmail SMTP

The main drawback of the previous two methods discussed is the fact that they are both paid plans for the features I want. From my own intuition, I had assumed there was a way to send mail through Gmails mail servers itself. That's what happens when I send mail from my personal Gmail account, at least. Finding the documentation on this was difficult, and I had to piece together a few different YouTube videos, but I'm going to put the cleaned-up, straightforward instructions here.

### Receiving Mail

Most modern registrars provide free email forwarding services with domain names registered through them. If yours doesn't, transfer your domains right away to a new registrar and stop supporting that garbage company. I personally have used NameCheap for several years.

1. To enable email forwarding, you must set the nameservers to be either *NameCheap BasicDNS* or *NameCheap Web Hosting DNS*. I assume one of these are set by default depending on your account plan, so you probably don't have to do anything for this step.
1. In the *Redirect Email* section, either add a forwarder or catch-all. If you add a forwarder, type the part of the email before the "@" to use to forward emails in the *Alias* box, and your personal email to forward them to in the *Forward to* box. For example, if I want emails sent to <example@nicfv.com> forwarded to <personal@gmail.com>, I would type `example` in *Alias*, and `personal@gmail.com` in *Forward to*.
1. In the *Advanced DNS* page, under *Mail Settings* make sure that there is a `TXT` record with the host of `@` and value of `v=spf1 include:spf.efwd.registrar-servers.com ~all`. This should already be enabled by default.
1. Send a test email from another email account, or use [sendtestemail.com](https://sendtestemail.com/). Check to make sure that you received the email in your personal Gmail account!

### Sending Mail

This part is more complicated, and I'll break it down in to bite-size steps.

1. Open your [Google Account](https://myaccount.google.com/) settings.
1. In the search bar, type `App passwords`. (I don't think its able to be found any other way for security reasons.) You will need to re-sign in.
1. Under *App name*, type something memorable like `custom email` and click *Create*.
1. Copy the 16-character password, and paste it into a notepad to use later. Click *Done*.
1. Open [Gmail](https://mail.google.com/) and click the gear icon, *See all settings*, then *Accounts and Import*.
1. Under *Send mail as*, click *Add another email address* and a popup will appear.
1. Enter your name as you want it displayed to email recipients, and the email address you created from step 2 in [receiving mail](#receiving-mail). This time, append the "@" and the custom domain. For me, this would be `example@nicfv.com`. Leave *Treat as an alias* checked if you want emails sent to the custom email to show up in the same inbox as emails sent to your personal Gmail address. Click *Next*.
1. In *SMTP Server*, type `smtp.gmail.com`, with the port number as `587`.
1. Under *Username*, type your personal Gmail address without the "@gmail.com" portion. So if my Gmail address was <personal@gmail.com>, my username is `personal`.
1. Under *Password*, open up your notepad copy and paste the 16-character password from step 4, leaving the spaces.
1. Leave *Secure Using TLS* checked and click *Add Account*.
1. Close the window, and go back to your Gmail inbox.
1. Look for the email titled *Gmail Confirmation - Send Mail as example@nicfv.com* and click the link provided in the email. Click *Confirm*.
1. Compose a new message, and now the "From" field is a dropdown with your personal Gmail address and your new custom one. Select your custom email address and send an email to another account or a service like [temp-mail.org](https://temp-mail.org/en/). Make sure it works!

## Conclusion

If you send a test email to another Gmail account, you'll see these headers.

```
     from:  Nicolas Ventura <example@nicfv.com> via gmail.com 
       to:  "recipient@gmail.com" <recipient@gmail.com>
     date:  Dec 23, 2024, 12:59 PM
  subject:  Test Email
mailed-by:  gmail.com
 security:  Standard encryption (TLS)
```

Compare this to what we saw when I was using [web hosting](#web-hosting). There's 3 differences here.

1. The `from` header now shows `via gmail.com`.
1. The `mailed-by` header is now `gmail.com`.
1. There is no `signed-by` header. (This doesn't mean that the email is insecure. I think it's signed by Google, but simply not shown because it would be redundant.)

You'll notice a few things when you download the email's source. You'll see that the `Return-Path` header contains your personal Gmail address. I'm not sure how to remove this, and I'm not sure it's possible. I tried changing the SPF record to `v=spf1 include:_spf.google.com ~all`, but it didn't have any impact at all. I'm assuming that behind the scenes, Google is basically routing all mail (incoming and outgoing) through your personal Gmail account. It's definitely more than a little annoying, since it does essentially expose your private email address to someone tech-savvy enough. But I suppose someone tech-savvy enough wouldn't even need you to send them an email to figure that out.

To be honest, even with these drawbacks, it's quite an amazing and simple result. No need for web hosting, business email, or anything else. Simply a domain registration and a Google account. It even still supports the "plus" notation! (I could receive emails sent to <example+test@nicfv.com>.) And most importantly, it's **free**. (Well, you do need to pay to register a domain.) Forget that part, though!
