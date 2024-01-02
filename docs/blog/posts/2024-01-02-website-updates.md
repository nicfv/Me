---
date: 2024-01-02
categories:
  - Project
tags:
  - dns
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

This is exactly what I need, and with a mind-numbingly simple 2 lines of code, I can rewrite any subdirectory to my single index page.

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

The 2nd line builds the new URL based on the requested URL. So, https://nicolasventura.com/blog turns into https://nicfv.com/blog. Try it for yourself! See how simple it would be to change it if I get a new common domain? The 3rd line is totally optional, it shows a redirect message with a hyperlink, in case the visitor's browser has disabled URL redirect. And the 4th line is exactly my [first solution](#first-solution), which actually redirects.

<!-- # Creating DNAME Records

A [CNAME](https://en.wikipedia.org/wiki/CNAME_record) record is a common [DNS](https://en.wikipedia.org/wiki/Domain_Name_System) record that maps one domain to another. -->