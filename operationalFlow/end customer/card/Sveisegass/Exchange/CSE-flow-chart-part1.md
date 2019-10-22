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
10[p48-verify-sms.html]
8-- Propane BTN -->
11[see CPE flow-chart]
10--True-->
12[See flow-chart-part2]
10--False-->
13[p50-verify-sms-code-not-found.html]
13--Cancel-->1
13--Retry-->10
