graph TD
1[index.html]
2[p58-customer-summary.html]
2--Continue BTN -->15[p61-write-your-pin.html]
2--Cancel BTN --> 4(Tank is returned M/F)
4-->5[p71-exchange-tank-get-back.html]
5--Door is closed -->1
15-- Cancel BTN -->1
15-->16(payment terminal decision M/F)
16-- Wrong Pin Number -->18[p62-pin-code-error.html]
18-->19(payment terminal decision M/F)
19--wrong pin-->18
19--Not accepted -->20[p63-payment-denied.html]
19--Accepted -->17
16-- Accepted -->17[p64-deliver-tank.html]
16-- Not Accepted --> 20
17-->21[p49-email-receipt.html]
21-- Delay 5 seconds -->1
21 -- No BTN --> 1
21 -- Yes BTN --> 22[p52-receipt-email-form.html]
22 -- Delay 3 minutes -->1
22 -- Cancel BTN-->1
22 --Send BTN -->23[p51-sent-receipt-email-confirmation.html]
23 -- Delay 5 seconds -->1
20-- Delay 30 seconds -->24(Tank is returned M/F)
24-- Delay 10 seconds -->5
