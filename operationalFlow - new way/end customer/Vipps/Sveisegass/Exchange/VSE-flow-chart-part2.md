graph TD
1[index.html DYN]
2[p48-verify-sms.html]
2--True-->18
18[p65-put-the-empty-container.html]
18--Cancel BTN-->1
18-->20[wait for door closed signal M/F]
20--FALSE wait for 3 minutes-->1
20--TRUE-->
21[p67-cylinder-detection.html]
21-->50(wait-for-bottle-identification M/F)
50--Bottle not recognized-->
22[p68-cylinder-not-recognized.html]
22--Delay 10 seconds-->1
50--Process interrupted-->23
50--Bottle recognized-->
60[p58-customer-summary.html]
60--Continue BTN -->
61[See flow-chart-part3]
60--Cancel BTN -->
62(Tank is returned M/F)
62-->
63[p71-exchange-tank-get-back.html]
63--Door is closed -->1
