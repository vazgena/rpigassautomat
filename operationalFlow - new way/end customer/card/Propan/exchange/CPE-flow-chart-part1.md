graph TD
1[index.html DYN]
1--Card payment - BTN -->2
2(check all doors closed - M/F)
2--False-->3
2--True-->5
3[p10-p15door-open-warning.html DYN]
3-->4(check all doors closed - M/F)
4--False-->3
4--True-->
5[p2-insert-card.html]
5-- Cancel - BTN -->1
5-- card detected M/F. -->
6[p3-transaction-type.html]
6-- Cancel - BTN --> 1
6--Exchange-->
7(check for empty place M/F)
7-- True -->
8[p16-gas-type.html DYN]
7-- False -->
9[p41-no-empty-place-customer.html]
9-- Delay 20 seconds --> 1
8-- Welding gas BTN -->
10[belongs to another chart]
8-- Propane BTN -->
11[p4-exchange-propane-decision.html]
11-- Yes SameT BTN -->
12(open door with empty place M/F)
11-- No NoSameT BTN -->13[see flow-chart part2]
12-- True -->
18[p65-put-the-empty-container.html]
12--False -->
19[p66-door-blocked.html]
19--Delay 10 seconds-->1
18--Cancel BTN-->1
18-->20[wait for door closed signal M/F]
20--FALSE wait for 3 minutes-->1
20--TRUE-->
21[p67-cylinder-detection.html]
21-->50(wait-for-bottle-identification M/F)
50--Bottle not recognized-->
22[p68-cylinder-not-recognized.html]
22--Delay 10 seconds-->29
50--Process interrupted-->23
50--Bottle recognized-->
24[Available valve types CONF]
24-- Valve types = 1-->
25(check if ProductX+valve type is available in inventory M/F)
24-- Valve types > 1-->
26[p70-valve-type-exchange.html DYN]
26-->25
25--True-->
27[p58-customer-summary.html]
25--False-->
28[p60-no-tank-available.html]
28-->29(Tank is returned M/F)
29--Door is closed-->1
27-->30[Check flow-chart-part4]
