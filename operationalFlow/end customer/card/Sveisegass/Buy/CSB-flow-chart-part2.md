graph TD
1[index.html DYN]
2[p45-sales-conditions.html]
2-->
3[Accept]
2--Deny-->1
3-->
4[p47-customer-details.html]
4--Cancel-->1
4--Send-->
5[p48-verify-sms.html]
5--Cancel-->1
5-->6(Verify SMS M/F)
6--Code found-->
7[p58-customer-summary.html]
6--Code not found-->
8[p50-verify-sms-code-not-found]
8--Try again-->
5
8--Cancel-->1
7--Cancel-->1
7--Confirm-->
9[flow-chart-part3]
