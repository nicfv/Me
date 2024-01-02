---
date: 2024-01-02
categories:
  - Project
tags:
  - tech
  - website
  - mkdocs
---
# Website Updates

Over the last week or so, I've been working on updating my website to make it look prettier, easier for a visitor to navigate, and easier for me to maintain. One major (but surprisingly simple!) project was to redirect my "permanent" domain to my "common" domain. Another major update was consolidating all my ["main" websites](./2023-08-12-mkdocs.md) as subdirectories under my common domain instead of using subdomains, which helps greatly for maintainability and uniformity. Lastly, the idea of setting up an Instagram account came about when encountering file size issues in my photography website.

<!-- more -->

I call [nicolasventura.com](https://nicolasventura.com/) my "permanent" domain because I intend to always keep it, since it is my full name after all! I doubt I will ever change my name. (Although... what would I change it to?) I call [nicfv.com](https://nicfv.com/) my "common" domain since that is the apex domain I'm using for all my websites, as well as my username for many of my accounts. My "common" domain is something that I might change in the future. I have no plans to change nicfv.com to anything else, **BUT** it's happened in the past... many times! I've owned all these domains sometime in the past:

> **WARNING**: I no longer own these domains. Navigate to them at your own risk!!

- nicov.net
- qanic.com
- nicven.com
- 40nv.com
- ventura.tk
- And maybe more that I've forgotten about

So, looking at my history, I thought it would be a good idea to redirect my permanent domain (nicolasventura.com) to whatever my "common" domain is! That way, if it ever changes, I can just change the redirection in nicolasventura.com to whatever my new "common" domain is, and anyone who visits nicolasventura.com will always be able to find my most current website. So, how is that done?

## URL Redirection

Most domain registrars offer an easy solution: a simple URL redirection. What that looks like, is when you visit `http://(www.)nicolasventura.com` in your browser, the URL will automatically change to whatever it is set to in the redirect record. It's very simple, and requires no maintenance at all, but it's limited.

As an example of one of its limitations, there can be only one source and one destination. `http://blog.nicolasventura.com` is a dead-end, as well as `http://www.nicolasventura.com/blog`. You would need a new redirect record for each of these URLs you want to redirect, which could get out of hand very quickly.

Did you catch something wrong in the URL examples? Most modern web browsers will force the `https` protocol, which is much more secure than `http`. URL redirection this way occurs over `http` only. At best, your browser will annoy you with a popup stating that the website is insecure. At worst, it will block it completely.

### First Solution

So obviously, I wanted to find a better option that solves both of these issues. One idea was to set up hosting and a static webpage at `https://(www.)nicolasventura.com` which would solve the `https` issue. The redirect could be done easily with a bit of JavaScript on that page:

```js
window.location.replace('https://nicfv.com');
```

Unfortunately, this doesn't solve the issue with redirecting multiple pages (blog, photos, individual blog posts, etc...) For that I would need to create a static page for each of those redirections, which again would be a nightmare to maintain. I need to think deeper.

### Final Solution

I was already halfway there with my [first solution](#first-solution). I just need a clever way to redirect for any subdirectory in nicolasventura.com. Luckily, that's where Apache comes in! By creating the file [.htaccess](https://httpd.apache.org/docs/2.4/howto/htaccess.html) in your host directory, you can password-protect your files, block IPs from accessing your website, or add rewrite rules. Basically, a rewrite rule can just grab another page from your original request.

> For example: A visitor goes to `google.com/maps` which would normally serve a fille called `maps`. The rewrite rule tells the server to serve the `maps.html` file, even though it still just shows `maps` in your navigation bar.

This is exactly what I need, and with a mind-numbingly simple 2 lines of code, I can rewrite any subdirectory to my single index page using the wildcard `.*`.

```
RewriteEngine On
RewriteRule .* /
```

Now the index page is nearly as simple:

```php
<?php
$dest = 'https://nicfv.com' . $_SERVER['REQUEST_URI'];
echo "<p>Redirecting to <a href=\"$dest\">$dest</a>...</p>\n";
echo "<script type=\"text/javascript\">window.location.replace('$dest');</script>";
```

The 2nd line builds the new URL based on the requested URL. So, https://nicolasventura.com/blog turns into https://nicfv.com/blog. Try it for yourself! See how simple it would be to change it if I get a new common domain? The 3rd line is totally optional, it shows a redirect message with a hyperlink, in case the visitor's browser has disabled URL redirect. And the 4th line is exactly my [first solution](#first-solution), which actually redirects. The best part about this was the fact that I did not need to mess with DNS records for nicolasventura.com at all!

## Consolidating Subdomains

My second big part of this project was migrating my blog and photos into the same website hosting as my homepage. That's why the URLs changed from *blog.nicfv.com* (a separate subdomain) to *nicfv.com/blog* (a subdirectory within the apex domain) for example. I made this change for a few reasons.

1. It makes it easier for a visitor to navigate between my websites, since they are all part of the same top level directory. I'm also able to add navigation tabs using `mkdocs` which further improves the user experience and makes my website look better.
1. It more strictly makes them look uniform to one another, since I can now use a single `mkdocs.yml` configuration file for all 3 websites.
1. If I want to add more websites, I can do so directly in this one by creating a new subdirectory and index page, and it will automatically use all the same styling rules as the rest of them.
1. It cleans up the DNS records for nicfv.com. Also, a side effect of this also benefits my [URL redirection](#url-redirection) since everything is a subdirectory and not a subdomain. (With subdomains, I would actually have to create a redirect for each one individually, since wildcard subdomains pose a security risk.)
1. It makes it easier for me to maintain, since everything is in once place and in one GitHub repository.

This actually isn't as complicated as it sounds, either. For the blog, I merged my repository's history with my portfolio's history. This was a bit of a challenge, since Git doesn't like to merge unrelated histories. Also, it probably wasn't necessary, but I wanted to keep the histories anyway, in case I needed to look back on something. I just had to add my portfolio as a second Git remote to my blog, and then I was able to fetch, merge, and push.

I decided not to go this route for my photography website (which was *photos.nicfv.com*.) The main reason being I was reaching the file limit, or maybe already there. According to [GitHub](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github), the recommended limit is 1GB with a hard cap of 5GB. With 140 pictures posted at the time, I was already at 1.1GB, so I knew that continuing like this was unsustainable and I needed to find a different solution.

I pondered some ideas like hosting my own media server from my Raspberry Pi, but that would just be another project to maintain, and I do not want any external traffic entering my network. So, that idea is completely out.

## Instagram

It took me an embarassingly long time to come up with this, but the most obvious solution to almost anyone would be to create an Instagram account to share photos! Free, unlimited\* image hosting, it's so well-known and used by so many people already, and best of all, no maintenance is required! So that's exactly what I did. I created my [account](../../photos/index.md) (on PC, not the app) and began posting all the pictures I had on my old website.

Instagram's website is a bit buggy and would not let me edit post captions for posts with multiple images, so I decided to post each image individually. I did this until I got to 96 images, and then everything seemed to stop working. \*I discovered that I was temporarily **blocked** from posting more images!! Turns out, Instagram does have (poorly documented) rate limits! I assume at this time, that is 100 posts per day (since I had already deleted a few multi-image posts before getting to 96.) What a bummer, but luckily I think it is just a one-time thing for me to post 100+ images per day anyway. At the time of writing this, I've already had my account for 3 days and was able to finish posting the rest of my old website's images, and several images from my [France trip](./2023-12-16-france.md).

### Embedding Posts

I still would like my own website for my images however. I considered getting the image direct URLs off Instagram to link to, but one thing that Instagram allows you to do is simply embed their posts. This is perfect, since it will allow people to like and comment on my photos directly from my website. But if you have Instagram, I leave an exercise to the reader. Log in to [instagram.com](https://www.instagram.com/) and copy the embed code of one of your posts, and paste it in Notepad. How long is it?

> It's HTML code nearly 7,000 characters long!

After playing around with an embedded post on a mockup page, I was able to shorten it to this, only ~150 characters, or just **2%** of the original size:

```html
<blockquote class="instagram-media" data-instgrm-captioned
    data-instgrm-permalink="https://www.instagram.com/p/<POST_ID>/">
</blockquote>
```

If you do this on your own website, just make sure to include their helper script somewhere on the page:

```html
<script async src="//www.instagram.com/embed.js"></script>
```

## Conclusion

I will probably not include every single photo I post on Instagram on my website, but definitely major trips with 10+ pictures. So it's a significant change, but as long as I stick to this plan, it will be very easy to keep both my Instagram and website fresh. I'm really doing all this for myself, to keep records of places I go, and things I see. Same thing with this blog, it's just fun to write about things I do, and I don't mind if nobody actually reads this. I'm just keeping a record of myself, for myself. If you are reading this, and find it interesting, feel free to send me an email! Just use the mail link at the bottom of this page to get my address.