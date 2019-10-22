graph TD
1[index.html]
14[p58-customer-summary.html]
14-- Deny BTN -->1
14-- Confirm -->
15[p61-write-your-pin.html]
15-- Cancel BTN --> 1
15-->16(payment terminal decision M/F)
16-- Wrong Pin Number -->
18[p62-pin-code-error.html]
18-->19(payment terminal decision M/F)
19--wrong pin-->18
19--Not accepted -->
20[p63-payment-denied.html]
20--Delay 10 seconds -->1
19--Accepted -->17
16-- Accepted -->
17[p64-deliver-tank.html]
16-- Not Accepted --> 20
17-->21(Send validation request M/F)
21--Delay 5 seconds-->1
