graph TD
1[index.html]
3[p58-payment-summary.html]
3-- Cancel BTN -->1
3-- Continue --> 4[p59-vipps-phone-number.html]
4-- Cancel BTN --> 1
4-- Send BTN --> 5[p19-vipps-pay-confirm.html]
5-- Cancel BTN -->1
5--Send-->11[p73-preparing-for-payment.html]
11-->6(Check Token M/F)
6-- Token exists --> 7(Token Valid M/F)
6-- Token doesn't exist -->8(Get new token M/F)
7-- Token is valid -->9(Initiate Payment M/F)
7-- Token is expired -->8
8-- Success-->9
8-- Failed-->10[p72-no-connection-with-server.html]
10-- Delay 15 seconds -->1
9--> 12[p19-vipps-pay-confirm.html]
12-- I have paid in Vipps BTN-->15[p18-payment-status.html]
15-->13(Check order status M/F)
13-- Payment Found-reserve -->14[Capture Payment M/F]
13-- Payment Status Initiate-->15(Check order status M/F)
15-->13
14-- Capture Payment success -->17[p64-deliver-tank.html]
17--Door is closed-->
21(Send exchange validation request M/F)
21 -- Delay 5 seconds -->1
