---
title: Brownie Crust Ratio
description: Discover the optimal way to cook brownies.
author: Nicolas Ventura
date: 2025-10-03
tags:
    - food
thumbnail: https://media.istockphoto.com/id/168731372/photo/fresh-homemade-chocolate-brownie.jpg?s=2048x2048&w=is&k=20&c=zXOgoCTKbPM22kI-P0xjRowgwRfvmwPg9Tjyi3mQkso=
---
Do you like brownie crust? Or do you prefer the amazing, gooey, chocolatey "guts" of the brownie? There's only one right answer. But in case you're a crazy person, this guide will also help you to determine the optimal shape for your brownie pan.

We'll define the crust-to-brownie ratio as follows:

$$CTB = \frac{\text{perimeter(pan)}}{\text{area(pan)}}$$

We are trying to minimize this number. Unless you like crust. Then you want to maximize this number.

## Square pan

If you're using a square pan with side length \\\(L\\\), that means the total area of brownie you can make is \\\(L^2\\\). The crust, or perimeter would be \\\(4L\\\).

Therefore, the crust-to-brownie ratio is...

$$CTB = \frac{4L}{L^2} = \frac{4}{L}$$

To standardize on our measurements, let's say our brownie mix is enough for one square brownie. \\\(\text{area(pan)}=L^2=1\\\) which means that \\\(L=1\\\). Therefore, \\\(CTB=4\\\), or there is 4 units of crust per unit of brownie.

## Rectangular pan

If you have a rectangular pan with side lengths \\\(L_1\\\) and \\\(L_2\\\), the total area of brownie you can make is \\\(L_1L_2\\\) and the crust would be \\\(2(L_1+L_2)\\\). We can again figure out the crust-to-brownie ratio. Remember that we have just enough brownie mix to make 1 square brownie, so \\\(L_1L_2=1\\\).

$$CTB = \frac{2(L_1+L_2)}{L_1L_2}$$

Let's say that \\\(L_1=L\\\) and \\\(L_2 = aL\\\) where \\\(a\\\) is the aspect ratio of our pan. So our total area is \\\(L \cdot aL = \text{area(pan) = 1}\\\). By rearranging that formula, \\\(L=\frac{1}{\sqrt{a}}\\\) and plugging that in, we can say \\\(L_1 = \frac{1}{\sqrt{a}}\\\) and \\\(L_2 = \sqrt{a}\\\) so now we can simplify \\\(CTB\\\).

$$CTB = \frac{2\left(\frac{1}{\sqrt{a}}+\sqrt{a}\right)}{\frac{1}{\sqrt{a}}\sqrt{a}} = 2\left(\frac{1}{\sqrt{a}}+\sqrt{a}\right)$$

Now all we need to do is select the optimal pan, with \\\(a\\\) being our pan aspect ratio. Here are some common pan aspect ratios, with their corresponding pan geometries and crust-to-brownie ratios.

| Aspect Ratio \\\(a\\\) | Short Length \\\(L_1\\\) | Long Length \\\(L_2\\\) | CTB Ratio \\\(CTB\\\) |
|:----:|:----:|:----:|:----:|
| 1:1 | 1.000 | 1.000 | 4.000 |
| 4:3 | 0.866 | 1.155 | 4.041 |
| 3:2 | 0.816 | 1.225 | 4.082 |
| 16:9 | 0.750 | 1.333 | 4.167 |
| 2:1 | 0.707 | 1.414 | 4.243 |
| 4:1 | 0.500 | 2.000 | 5.000 |
| 10:1 | 0.316 | 3.162 | 6.957 |
| 20:1 | 0.224 | 4.472 | 9.391 |
| \\\(\infty\\\):1 | 0.000 | \\\(\infty\\\) | \\\(\infty\\\) |

The trend here shows that the longer and narrower our brownie pan is, the more crust we get per brownie. This makes sense. If we have an infinitely long brownie pan, it will be infinitely thin as well. Conceptually, we would make an infinite amount of crust with practically no brownie at all.

So far, the square brownie pan has the lowest crust-to-brownie ratio of 4 units of crust per unit of brownie.

## Pie Tin

What if we think out of the "box", and use a pie tin instead, baking our brownies in the shape of a circle? Blasphemy! But delicious blasphemy. We would bake \\\(\pi D\\\) crust and make \\\(\frac{\pi}{4}D^2\\\) brownie.

Using the same brownie mix as before, we can still only make one square unit of brownie, so \\\(\frac{\pi}{4}D^2 = 1\\\), or \\\(D = \frac{2}{\sqrt{\pi}} \approx 1.128\\\).

> Isn't it funny that the number "pi" (\\\(\pi\\\)) always shows up when we talk about pies?

Next, we'll set up the same formula as before to figure out our crust-to-brownie ratio.

$$CTB = \frac{\pi D}{\frac{\pi}{4}D^2} = \frac{\pi \frac{2}{\sqrt{\pi}}}{\frac{\pi}{4}\left(\frac{2}{\sqrt{\pi}}\right)^2}=2\sqrt{\pi} \approx 3.545$$

Look at that! An 11% reduction of crust, compared to the square brownie pan!

## Conclusion

If you like the chocolatey goodness being the warm, gooey interior of the brownie, you should definitely grab your pie tin next time you whip up some batter. If you prefer brownie crust, find the longest, narrowest pan you own and use that instead. Either way, you can't go wrong with brownies. Eat 'em up!