# Cost of Driving to Work

I don't think many people *like* driving to work. Some might - I personally *love* driving, but not when I have to. It makes me wonder, how much does it cost to drive for work-related purposes? I've developed a formula that takes into account not only the cost for gas, but also the cost of overhead services and opportunity cost associated with the time spent commuting to and from work.

## Time Cost

This one is easy and represents the direct time spent traveling on average per day. It takes the average one-way commute time $T_{1}$ and turns it into an average daily commute time based on frequency traveled to work per week $f_{w}$, assuming a 5-day work week.

$$T = \frac{f_{w}}{5} \times \frac{T_{1}}{60} \times 2 \text{ [Hr]}$$

For example, if your one-way commute time was 30 minutes and you traveled on average 3 days per week, your time cost would look like this:

$$T = \frac{3}{5} \times \frac{30}{60} \times 2 = 0.6 \text{ (36 minutes)}$$

This formula claims that the commuter in the example spends on average 36 minutes per day in transit to and from work.

To convert this into a monetary cost, multiply that number by your hourly salary, or annual divided by 2,000. This essentially provides the opportunity cost associated with the time lost from driving to work.

$$\$_{T} = \frac{\$_{yr}}{2000} \times \frac{f_{w}}{5} \times \frac{T_{1}}{60} \times 2$$

## Gas Cost

To determine the cost of gas, we can determine the cost per mile first. That depends on gas prices $\$_{gal}$ (dollars per gallon) and your vehicle mileage $m$ (miles per gallon), assuming you have a standard combustion engine. If you own an electric car, the "gas price" would be the price to charge your vehicle, and your mileage would be your range. This formula calculates the cost per mile to drive your vehicle.

$$\$_{mi,gas} = \frac{\$_{gal}}{m}$$

For example, gas prices are $4, and your vehicle can go 25 miles per gallon.

$$\$_{mi,gas} = \frac{4}{25} = \$0.16 \text{ per mile}$$

Similar logic can be used to determine the average daily two-way cost of driving to and from work based on the one-way distance $d_{1}$.

$$\$_{gas} = \frac{\$_{gal}}{m} \times \frac{f_{w}}{5} \times d_{1} \times 2$$

## Overhead Cost

This part is a lot more subtle and tricky. There are other costs associated with owning a car such as maintenance, insurance, or the car payments itself that haven't been considered so far, which I'll call "overhead costs".

Some common fixed vehicle costs include registration (paid annually at the DMV), oil changes (typically done every few months), insurance (paid annually or biannually), and smog check (a California requirement). There are also variable costs such as highway tolls, parking, car wash, and general repairs. I got hit with a parking ticket recently, which could also be factored into this formula here, where $\$_{x}$ is any fixed or variable cost relating to your vehicle, and $f_{x}$ is the *annual* frequency of that event.

$$\$_{yr} = \sum_{x=0}^{n} \$_{x}f_{x}$$

We can spread this cost over a distance, to create a cost-per-distance similar to our [gas](#gas-cost) mileage cost. This depends on the number of miles $D_{yr}$ driven annually.

$$\$_{mi,oh} = \frac{\$_{yr}}{D_{yr}}$$

For example, my registration costs \$250, oil change is \$80, insurance is \$1200, and smog check is \$60 once every 2 years. I also pay an average of \$100 of tolls and \$50 of repairs, both monthly. I drive around 15,000 miles annually, as a very rough estimate.

$$\$_{mi,oh} = \frac{1}{15000} \times \left(250 \times 1 + 80 \times 4 + 1200 \times 1 + 60 \times \frac{1}{2} + (100 + 50) \times 12 \right) \approx \$0.24$$

If I add the mileage costs together, I get my total mileage cost.

$$\$0.16 + \$0.24 = \$0.40/\text{mi}$$

Lastly, we can use this to determine the average daily overhead cost, using the same logic as before.

$$\$_{oh} = \frac{1}{D_{yr}} \times \sum_{x=0}^{n} \$_{x}f_{x} \times \frac{f_{w}}{5} \times d_{1} \times 2$$

## Combining Costs

We can simply add up our average daily costs to determine the total average daily cost of commuting to work.

$$\$_{daily} = \$_{T} + \$_{gas} + \$_{oh}$$

$$\$_{daily} = \left[ \left( \frac{\$_{yr}}{2000} \times \frac{T_{1}}{60} \right) + \left( \left[ \frac{\$_{gal}}{m} + \frac{1}{D_{yr}} \times \sum_{x=0}^{n} \$_{x}f_{x} \right] \times d_{1} \right) \right] \times \frac{f_{w}}{5} \times 2$$

A human-way to read this formula is...

$$\text{average daily cost} = \left[ \left( \text{one-way opportunity cost} \right) + \left( \left[ \text{total cost per mile} \right] \times \text{one-way distance} \right) \right] \times \text{weekly frequency}$$

I run this for my numbers, and got in the range of \$40-\$50! (Real amount hidden because I don't want anyone to reverse-engineer my salary, distance to work, or frequency.) I was surprised how much the opportunity cost contributed to this amount.

Some ways to decrease this amount are to decrease the distance or time you live to work (which may not be an option for most people), reduce the frequency of driving into work (again may not be an option), get a more fuel-efficient or lower-maintenance vehicle, or use your vehicle more frequently for non-work-related travelling. This would spread out those overhead costs more towards your other miles traveled. Ironically, a lower salary would also reduce this amount, effectively lowering the opportunity cost. I don't recommend going that route.

If you wanted to convert this cost into a time spent in the car or making money to pay for it, you could divide the total average daily cost by your hourly salary.

$$T_{daily} = \frac{2000}{\$_{yr}} \times \$_{daily} \text{ [Hr]}$$

> **Conclusion:** Remote jobs are a sweet gig! In other news, water is wet!