graph TD
1[index.html DYN]
1--Card payment - BTN -->2
2(check all doors closed - M/F)
2--No-->3
2--Yes-->5
3[p10-p15door-open-warning.html DYN]
3-->4(check all doors closed - M/F)
4--No-->3
4--Yes-->5[p2-insert-card.html]
5-- Cancel - BTN -->1
5-- card detected M/F. -->15[p16-gas-type.html]
15--Welding gas BTN-->6[p3-transaction-type.html]
6-- Cancel - BTN --> 1
6-- Buy - BTN -->7[welding-gass-products.html DYN]
7-- Cancel BTN -->1
7--> 8[Welding gas productX BTN]
8--Cancel-->1
8--> 11(check if selected product exists in inventory M/F)
11-- Not Available -->13[p60-no-tank-available.html]
13-- delay 10 seconds -->1
11-- Available -->14[p45-sales-conditions.html]
14--Accept --> 16[See flow-chart-part2]
14--Decline -->1
