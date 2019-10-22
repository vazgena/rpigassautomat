graph TD
1[index.html]
17-->18[p65-put-the-empty-container.html]
18--Cancel BTN-->1
18-->20[wait for door closed signal M/F]
20--FALSE wait for 3 minutes-->1
20--TRUE-->21[p67-cylinder-detection.html]
21--TRUE-->50(bottle-identification M/F)
50--Bottle not recognized-->22[p68-cylinder-not-recognized.html]
22-->29(tank is returned  M/F)
29--Door is closed-->1
29--Door is closed-->1
50--Process interrupted-->23
50--Bottle recognized-->24[Available valve types CONF]
24-- Valve types = 1-->25(check if ProductX+valve type is available in inventory M/F)
24-- Valve types > 1-->26[p43-choose-valve-type.html DYN]
26-->25
25--True-->27[p58-customer-summary.html]
25--False-->28[p60-no-tank-available.html]
28--Delay 10 seconds-->29
27-->30[See flow-chart-part4]
