# Living Cost Comparison

[Go Back](/)

<script type="text/javascript" async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML"></script>

In this paper, _rent_ is referred to the collective sum of rent $$r$$ and any additional monthly fees, which may include utilities $$u$$, water, garbage, internet $$i$$, and taxes. The variable $$H_{M}$$ is defined to refer to the total monthly payment of all housing costs.

$$H_{M}=\sum\left(\texttt{monthly payments}\right)\approx r+u+i$$

To not be confused with the [apartment, house, etc...] list price per month, rent will be referred as the total monthly payment to sustain a housing environment.

It then goes unsaid that the total payment sunk into housing costs is the total _rent_ times the number of months.

$$H=H_{M}\times t_{M}$$

If the time stayed in the apartment does not equate to an integer number of years, the rent can be normalized to an monthly payment for an annual basis.


$$\bar{H}=\frac{H}{12}=\frac{H_{M}\times t_{M}}{12}=\left(r+u+i\right)\times\frac{t_{M}}{12}$$

For instance, if one were to stay in an apartment for 10 months, $$\bar{H}$$ can be written as a percentage of $$H$$ using this formula: $$\bar{H}=\frac{H_{M}\times 10}{12}\approx 83\%\times H_{M}$$.

The normalized rent $$\bar{H}$$ will be pivotal in determining the cost-of-living number $$\bar{L}$$ for comparisons of different housing situations.

## Transportation Costs

Assuming travel is required and self-funded, there may be addidional costs on top of housing. These costs may not repeat by month, but possibly repeat weekly or daily. These costs will depend on distance driven, efficiency of the vehicle, price per gallon, additional transportation fees, and frequency of travel. Additional transportation fees may includes parking, tolls, or other fees required for every travel instance. Assume a one-way travel distance of $$x$$, the vehicle's miles per gallon $$m$$, a price per gallon $$g$$, and extra two-way transportation fee $$p$$, travel days per week $$d$$, and weeks per year $$w$$.

The price of gas of a single two-way trip is a ratio of the distance, miles per gallon, and price per gallon.

$$G=2\times\frac{x\times g}{m}$$

The total times traveled normalized to one year (assuming one two-way trip per day traveled) is the product of days per week and weeks per year.

$$D=d\times w$$

Then, the total transportation costs over one year is as follows.

$$Z=\left(G+f\right)\times D=\left(\frac{2\times x\times g}{m}+p\right)\times d\times w$$

Similar to $$\bar{H}$$, the total transportation cost $$Z$$ can be normalized by month.

$$\bar{Z}=\frac{Z}{12}=\left(\frac{2\times x\times g}{m}+p\right)\times\frac{d\times w}{12}$$

## Extra Costs

Also, there could be some other costs related to the living situation, such as moving or purchasing furniture. There could be flat costs $$F$$ or daily (floating) costs $$f$$. Assume $$N_{d}$$ daily costs per month. The daily costs are regular payments to non-housing services such as subscriptions to things or doing laundry. These costs also must be normalized. The total extra cost is as follows.

$$E=F+12\times f\times N_{d}$$

Where the normalized extra cost is simply put.


$$\bar{E}=\frac{E}{12}=\frac{F}{12}+f\times N_{d}$$

## Time Costs

For living situations that require a longer commute, the cost of time must also be factored in. For this, you must know the one-way travel time $$t$$, and estimate your value of time per hour $$h$$. The variables $$d$$ (days per week) and $$w$$ (weeks per year) from the section on transportation are reused here.

The following equation shows the total time cost. This is an opportunity cost.

$$T=2\times h\times t\times d\times w$$

To normalize, simply divide by 12.

$$\bar{T}=\frac{T}{12}=\frac{h\times t\times d\times w}{6}$$

## Conflict Costs

In several living situations, you may find yourself with 1 or more roommates or housemates. Let $$N_{p}$$ be the population of the household including you, the reader. The frequency of interpersonal conflicts is directly proportional to the total possible pairs of people, or about half the square of the population of the household.

$$N_{2}=0+1+2+3+\dots+(N_{p}-1)=\frac{N_{p}^{2}-N_{p}}{2}$$

The difficulty with enumerating this cost is the fact that there are more variables in play, such as the time spent by each member in the house and the disposition of each member. It also depends on the reader's value of time for conflict resolution. The first step is to convert the number of pairs in the household into a frequency of conflict using the conversion number, the number of conflicting interactions $$N_{c}$$ per person per month. Then multiply this by an amount willing to forgo to avoid the conflict, $$N_{a}$$. A good starting point for $$N_{a}$$ could be a fraction or multiple of $$h$$. Finally, we can construct the conflict cost formula.

$$\bar{C}=N_{a}\times N_{c}\times N_{2}$$

Due to the fact that $$N_{c}$$ is already defined as the number of conflicting interactions per person _per month_, then this cost is already normalized by month.

$$\bar{C}=N_{a}\times N_{c}\times\frac{N_{p}^{2}-N_{p}}{2}$$

## Total Living Costs

The total living cost per month is hereby defined as $$\bar{L}$$. This number is the sum of the derived numbers above in equations for $$\bar{H}$$, $$\bar{Z}$$, $$\bar{E}$$, $$\bar{T}$$, and $$\bar{C}$$.

$$\bar{L}=\bar{H}+\bar{Z}+\bar{E}+\bar{T}+\bar{C}$$

The following equation has the definitions plugged in.

$$\bar{L}=\left(r+u+i\right)\times\frac{t_{M}}{12}
+\left(\frac{2\times x\times g}{m}+p\right)\times\frac{d\times w}{12}
+\frac{F}{12}+f\times N_{d}
+\frac{h\times t\times d\times w}{6}
+N_{a}\times N_{c}\times\frac{N_{p}^{2}-N_{p}}{2}$$

To choose the most cost-efficient living space, plug in all the numbers to the above equation for each of your living options, and choose the one with the minimum $$\bar{L}$$. And that's it!

[Go Back](/)