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
15--Propane gas BTN-->6[p3-transaction-type.html]
6-- Buy - BTN -->7[p5-product-option-5.html DYN]
7-- Cancel BTN -->1
7--> 8[ProductX BTN]
8--> 9[available valve types - CONF]
9-- Valve types = 1 -->11(check if ProductX+valve type is available in inventory M/F)
9-- Valve types >1 --> 12[p43-choose-valve-type.html DYN]
12-->11
11-- Not Available -->13[p60-no-tank-available.html]
13-- delay 10 seconds -->1
11-- Available -->14[p76-customer-summary-buy.html]
