## Operational Flow Description

*See the flow charts in the .png files*

*Vending machine structure and physical configuration:*  

> Carousel = the moving frame that has 8 horizontal columns and 3 vertical rows.
 8x3 = 24 cylinders for one side, 48 for 2 sides.   
> Left carousel = the moving frame from left side  
> Right carousel = the moving frame from right side  
> Doors = 3 doors for left and 3 for the right  
> Pick-up/drop-in positions = the position behind the doors in which the
cylinders can be loaded/unloaded to/from the vending machine.  


|LEFT SIDE   |COL 1|COL 2|COL 3|COL 4|COL 5|COL 6|COL 7|COL 8|
|-----------:|-----|-----|-----|-----|-----|-----|-----|-----|
| ROW 1      |     |     |     |     |     |     |     |     |
| ROW 2      |     |     |     |     |     |     |     |     |
| ROW 3      |     |     |     |     |     |     |     |     |     


|RIGHT SIDE   |COL 1|COL 2|COL 3|COL 4|COL 5|COL 6|COL 7|COL 8|
|-----------:|-----|-----|-----|-----|-----|-----|-----|-----|
| ROW 1      |     |     |     |     |     |     |     |     |
| ROW 2      |     |     |     |     |     |     |     |     |
| ROW 3      |     |     |     |     |     |     |     |     |     

*Terms description:*

> BTN =  button activated by the user on the screen  
> M/F = Method or Function performed by the script after an action or when a
.html page is loaded.  
> DYN = Page with Dynamic Content.  
> CONF = Configuration  
> x.html = x is the name of the .html file.          

*Products*
Propane:

|Name                     | Material   | Volume  | Valve      |  Country  |
|-------------------------|------------|---------|------------|-----------|
|11 Kg Stål Standard      |  Steel     |   11 Kg |  Click     |  Norway   |
|11 Kg Stål Industri      |  Steel     |   11 Kg |Industrial  |  Norway   |
|5 Kg Stål                |  Steel     |   5 Kg  |  Click     |  Norway   |
|10 Kg Kompositt Standard |  Composite |   10 Kg | Click      |  Norway   |
10 Kg Kompositt Industri  |  Composite |   10 Kg | Industrial |  Norway   |
|5 Kg Kompositt           |  Composite |   5 Kg  |   Click    |  Norway   |
|P 11                     |  Steel     |   11 Kg | Industrial |  Sweden   |
|P 11 Click               |  Steel     |   11 Kg |  Click     |  Sweden   |
|P 6                      |  Steel     |   6 Kg  | Industrial |  Sweden   |
|PC 10                    |  Composite |   10 Kg | Industrial |  Sweden   |
|PC 10 Click              |  Composite |   10 Kg | Click      |  Sweden   |
|PC 5                     |  Composite |   5 Kg  | Industrial |  Sweden   |

Welding gas:

| Name       | Volume  | Country  |
|:-:         |---      |---       |
| Argon      | 11 L    | Norway   |
| Argon Mix  | 11 L    | Norway   |
| Co2        | 11 L    | Norway   |

### [- Buy new propane cylinder. Pay with card](https://github.com/sicabboy1/rpigassautomat/tree/master/operationalFlow/end%20customer/card/Propan/buy)


0.  Initial screen presents the payment methods available
1.  Payment with card method is chosen
2.  Type of transaction is chosen (Buy)
3.  Type of cylinder to be bought is chosen
4.  Program search if the wanted cylinder exists in the inventory.  
5.  Type of valve available for the cylinder above is chosen.  
    This step is skipped if the cylinder has only 1 type of valve available.  
6.  Program search if the wanted cylinder with chosen valve exists in the inventory   
7.  A page with an overview of the chosen cylinder and price for buy is presented to the customer.  
    If he declines the process is stopped and the card is not charged.  
    If he accepts the process continues and the customer is asked to present the card. Insert it in the card reader or use the contactless chip.
8.  The payment is processed by the payment provider.  
    If it's accepted, the cylinder chosen at step 3 that has the valve chosen at step 5 is delivered as described at step 9.
    If it's not accepted, an error message is shown on the screen and the buying process is aborted.
9.  To deliver the cylinder the program identifies the ROW and the COLUMN for LEFT or RIGHT carousel in which the desired cylinder (3) which has desired valve (5) is.
10. Program rotate the carousel to bring the cylinder in the pick-up position.
11. Step (10) can be skipped if the cylinder is already present in the pick-up position.
12. After the cylinder position (column+row) is in pick-up position, one of the 6 doors will open, customer will pick his cylinder and close the door.      
13. After the door is closed, a question for receiving receipt comes on the screen. If customer wants receipt he press "Yes", if not, he press "No". For no, the process is reset and for yes it goes to next step.
14. For receiving a receipt customer must write his e-mail address on the screen and press "Send".
15. The required information is sent to server which sends the receipt to customer.
16. Customer is informed that we have sent the receipt and process is reset.    


### [- Change empty propane cylinder with full one of same type. Pay with card:](https://github.com/sicabboy1/rpigassautomat/tree/master/operationalFlow/end%20customer/card/Propan/exchange)

0.  Screen presents the payment methods available.
1.  Payment with card method is chosen.
2.  Type of transaction is chosen (change).
3.  Exchange to same type of cylinder is chosen.
4.  Program search if an empty spot exists in the inventory. Process continues if it exists or else an error message is displayed.
5.  To receive the empty cylinder the program identifies the ROW and the COLUMN for LEFT or RIGHT carousel in which the empty spot is. If no empty spot is found, an error message is shown.  
    Note: Usually this empty spot is always behind the door that was used to deliver the full cylinder in the previous trade. An empty spot is also left available during the loading cycle.
6.  Sale and GDPR conditions are shown on the screen and the customer has to accept them in order to continue. If he doesn't, his bottle is returned and process is reset.
7.  If an empty spot is found and if it's not behind one of the doors, the carousel is rotated until the empty spot is brought behind a door.
8.  The door opens and user is instructed to place in his empty cylinder and close the door.
9.  After the door is registered as closed, the carousel is moved to the identification position and the customer is instructed to wait.
10. The bottle is scanned and identified.
11. A page with an overview of the identified cylinder and price for change to same type is presented to the customer.  
    If he declines the process is stopped.
    If he accepts the process continues and the customer is asked to present the card. Insert it in the card reader or use the contactless chip.
12. The payment is processed by the payment provider.  
    If it's accepted, the cylinder detected (10) is delivered as described at step 16.
    If it's not accepted, an error message is shown on the screen and the buying process is aborted.
13. To deliver the cylinder the program identifies the ROW and the COLUMN for LEFT or RIGHT carousel in which the desired cylinder (3) is.
14. Program rotate the carousel to bring the cylinder in the pick-up position.
15. Step (10) can be skipped if the cylinder is already present in the pick-up position.
16. After the cylinder position (column+row) is in pick-up position, one of the 6 doors will open, customer will pick his cylinder and close the door.
17. After the door is closed, a question for receiving receipt comes on the screen. If customer wants receipt he press "Yes", if not, he press "No". For no, the process is reset and for yes it goes to next step.
18. For receiving a receipt customer must write his e-mail address on the screen and press "Send".
19. The required information is sent to server which sends the receipt to customer.
20. Customer is informed that we have sent the receipt and process is reset.   


### [- Change empty propane cylinder with full one of different type. Pay with card:](https://github.com/sicabboy1/rpigassautomat/tree/master/operationalFlow/end%20customer/card/Propan/exchange)

0.  Screen presents the payment methods available.
1.  Payment with card method is chosen.
2.  Type of transaction is chosen (change).
3.  Exchange to different type of cylinder is chosen.
4.  The list with cylinders is shown and the customer chose the one that he wants.
5.  Program search if the wanted cylinder exists in the inventory. Process continues if it exists or else an error message is displayed.
6.  Type of valve available for the cylinder above is chosen.  
    This step is skipped if the cylinder has only 1 type of valve available.
7.  Program search if the wanted cylinder with chosen valve exists in the inventory
8.  To receive the empty cylinder the program identifies the ROW and the COLUMN for LEFT or RIGHT carousel in which the empty spot is. If no empty spot is found, an error message is shown.  
    Note: Usually this empty spot is always behind the door that was used to deliver the full cylinder in the previous trade. An empty spot is also left available during the loading cycle.
9.  If an empty spot is found and if it's not behind one of the doors, the carousel is rotated until the empty spot is brought behind a door.
10. Sale and GDPR conditions are shown on the screen and the customer has to accept them in order to continue. If he doesn't, his bottle is returned and process is reset.  
11. The door opens and user is instructed to place in his empty cylinder and close the door.
12. After the door is registered as closed, the carousel is moved to the identification position and the customer is instructed to wait.
13. The bottle is scanned and identified.
14. A page with an overview of the identified cylinder and price for change to same type is presented to the customer.  
    If he declines the process is stopped.
    If he accepts the process continues and the customer is asked to present the card. Insert it in the card reader or use the contactless chip.
15. The payment is processed by the payment provider.  
    If it's accepted, the cylinder chosen at step 3 that has the valve chosen at step 6 is delivered as described at step 19.
    If it's not accepted, an error message is shown on the screen and the buying process is aborted.
16. To deliver the cylinder the program identifies the ROW and the COLUMN for LEFT or RIGHT carousel in which the desired cylinder (4) which has desired valve (9) is.
17. Program rotate the carousel to bring the cylinder in the pick-up position.
18. Step (10) can be skipped if the cylinder is already present in the pick-up position.
19. After the cylinder position (column+row) is in pick-up position, one of the 6 doors will open, customer will pick his cylinder and close the door.
20. After the door is closed, a question for receiving receipt comes on the screen. If customer wants receipt he press "Yes", if not, he press "No". For no, the process is reset and for yes it goes to next step.
21. For receiving a receipt customer must write his e-mail address on the screen and press "Send".
22. The required information is sent to server which sends the receipt to customer.
23. Customer is informed that we have sent the receipt and process is reset.   


### [- Buy new welding gas cylinder. Pay with card:](https://github.com/sicabboy1/rpigassautomat/tree/master/operationalFlow/end%20customer/card/Sveisegass/Buy)

0.  Screen presents the payment methods available.
1.  Payment with card method is chosen.
2.  Type of transaction is chosen (buy).
3.  If the vending machine is configured to sell welding gas, at this step the customer is prompted to chose the type of gas. Welding gas is chosen.
4. Welding gas sale and GDPR conditions are shown on the screen and the customer has to accept them in order to continue. If he doesn't, his bottle is returned and process is reset.
5. The customer has to write his personal details on the screen including the phone number.
6. The program sends an SMS with an unique code to the phone number written in the step above.
7. The customer writes the code received on the screen and the program checks it.
8. If the code is valid, customer will see a summary with type of cylinder and price.
9. A page with an overview of the chosen cylinder and price for buy is presented to the customer.  
    If he declines the process is stopped and the card is not charged.  
    If he accepts the process continues and the customer is asked to present the card. Insert it in the card reader or use the contactless chip.
10.  The payment is processed by the payment provider.  
    If it's accepted, the cylinder chosen at step 3 that has the valve chosen at step 5 is delivered as described at step 9.
    If it's not accepted, an error message is shown on the screen and the buying process is aborted.
11.  To deliver the cylinder the program identifies the ROW and the COLUMN for LEFT or RIGHT carousel in which the desired cylinder is.
12. Program rotate the carousel to bring the cylinder in the pick-up position.
13. Step (10) can be skipped if the cylinder is already present in the pick-up position.
14. After the cylinder position (column+row) is in pick-up position, one of the 6 doors will open, customer will pick his cylinder and close the door.
15. A receipt is automatically sent to the customer by e-mail.


### [- Exchange welding gas cylinder. Pay with card:](https://github.com/sicabboy1/rpigassautomat/tree/master/operationalFlow/end%20customer/card/Sveisegass/Exchange)

0.  Screen presents the payment methods available.
1.  Payment with card method is chosen.
2.  Type of transaction is chosen (change).
3.  If the vending machine is configured to sell welding gas, at this step the customer is prompted to chose the type of gas. Welding gas is chosen.
4. Customer is prompted to write his contract code. If the code is valid, the process continues. Else it's aborted.
5. Based on the contract code the program informs the user of the bottle type he is about to change. If he agrees, the process continues. If he denies, the process is aborted.
Program search if the wanted cylinder with chosen valve exists in the inventory
6.  To receive the empty cylinder the program identifies the ROW and the COLUMN for LEFT or RIGHT carousel in which the empty spot is. If no empty spot is found, an error message is shown.  
    Note: Usually this empty spot is always behind the door that was used to deliver the full cylinder in the previous trade. An empty spot is also left available during the loading cycle.
7.  If an empty spot is found and if it's not behind one of the doors, the carousel is rotated until the empty spot is brought behind a door.
8. Sale and GDPR conditions are shown on the screen and the customer has to accept them in order to continue. If he doesn't, his bottle is returned and process is reset.  
9. The door opens and user is instructed to place in his empty cylinder and close the door.
10. After the door is registered as closed, the carousel is moved to the identification position and the customer is instructed to wait.
11. The bottle is scanned and identified.
12. A page with an overview of the identified cylinder and price for change to same type is presented to the customer.  
    If he declines the process is stopped and the card is not charged.  
    If he accepts the process continues and the customer is asked to present the card. Insert it in the card reader or use the contactless chip.
13. The payment is processed by the payment provider.  
    If it's accepted, the cylinder chosen at step 5 is delivered as described at step 14.
    If it's not accepted, an error message is shown on the screen and the buying process is aborted.
14. To deliver the cylinder the program identifies the ROW and the COLUMN for LEFT or RIGHT carousel in which the desired cylinder (5) is.
15. Program rotate the carousel to bring the cylinder in the pick-up position.
16. Step (10) can be skipped if the cylinder is already present in the pick-up position.
17. After the cylinder position (column+row) is in pick-up position, one of the 6 doors will open, customer will pick his cylinder and close the door.          
18. Receipt is automatically sent to the customer.


### [- Buy new propane cylinder. Pay with Vipps](https://github.com/sicabboy1/rpigassautomat/tree/master/operationalFlow/end%20customer/Vipps/Propan/Buy)


0.  Initial screen presents the payment methods available
1.  Payment with Vipps method is chosen
2.  Type of transaction is chosen (Buy)
3.  Type of cylinder to be bought is chosen
4.  Program search if the wanted cylinder exists in the inventory.  
5.  Type of valve available for the cylinder above is chosen.  
    This step is skipped if the cylinder has only 1 type of valve available.  
6.  Program search if the wanted cylinder with chosen valve exists in the inventory   
7.  A page with an overview of the chosen cylinder and price for buy is presented to the customer.  
    If he declines the process is stopped and the card is not charged.  
    If he accepts the process continues and the customer is asked to write in his phone number.
8. Program sends a payment request to his phone number and the customer needs to accept it in his personal Vipps app.
9. The payment is processed and if it's accepted, the cylinder chosen at step 3 that has the valve chosen at step 5 is delivered as described at step 10.
    If it's not accepted, an error message is shown on the screen and the buying process is aborted.
10.  To deliver the cylinder the program identifies the ROW and the COLUMN for LEFT or RIGHT carousel in which the desired cylinder (3) which has desired valve (5) is.
11. Program rotate the carousel to bring the cylinder in the pick-up position.
12. Step (10) can be skipped if the cylinder is already present in the pick-up position.
13. After the cylinder position (column+row) is in pick-up position, one of the 6 doors will open, customer will pick his cylinder and close the door.      
14. After the door is closed, a question for receiving receipt comes on the screen. If customer wants receipt he press "Yes", if not, he press "No". For no, the process is reset and for yes it goes to next step.
15. For receiving a receipt customer must write his e-mail address on the screen and press "Send".
16. The required information is sent to server which sends the receipt to customer.
17. Customer is informed that we have sent the receipt and process is reset.

### [- Change empty propane cylinder with full one of same type. Pay with Vipps:](https://github.com/sicabboy1/rpigassautomat/tree/master/operationalFlow/end%20customer/Vipps/Propan/Exchange)

0.  Screen presents the payment methods available.
1.  Payment with Vipps method is chosen.
2.  Type of transaction is chosen (change).
3.  Exchange to same type of cylinder is chosen.
4.  Program search if an empty spot exists in the inventory. Process continues if it exists or else an error message is displayed.
5.  To receive the empty cylinder the program identifies the ROW and the COLUMN for LEFT or RIGHT carousel in which the empty spot is. If no empty spot is found, an error message is shown.  
    Note: Usually this empty spot is always behind the door that was used to deliver the full cylinder in the previous trade. An empty spot is also left available during the loading cycle.
6.  Sale and GDPR conditions are shown on the screen and the customer has to accept them in order to continue. If he doesn't, his bottle is returned and process is reset.
7.  If an empty spot is found and if it's not behind one of the doors, the carousel is rotated until the empty spot is brought behind a door.
8.  The door opens and user is instructed to place in his empty cylinder and close the door.
9.  After the door is registered as closed, the carousel is moved to the identification position and the customer is instructed to wait.
10. The bottle is scanned and identified.
11. A page with an overview of the identified cylinder and price for change to same type is presented to the customer.  
    If he declines the process is stopped.
    If he accepts the process continues and the customer is asked to write his phone number on the screen and press "Send"
12. The payment is requested on customer's phone trough Vipps app, accepted and processed by Vipps.  
    If it's accepted, the cylinder detected (10) is delivered as described (16).
    If it's not accepted, an error message is shown on the screen and the buying process is aborted.
13. To deliver the cylinder the program identifies the ROW and the COLUMN for LEFT or RIGHT carousel in which the desired cylinder (3) is.
14. Program rotate the carousel to bring the cylinder in the pick-up position.
15. Step (10) can be skipped if the cylinder is already present in the pick-up position.
16. After the cylinder position (column+row) is in pick-up position, one of the 6 doors will open, customer will pick his cylinder and close the door.
17. After the door is closed, a question for receiving receipt comes on the screen. If customer wants receipt he press "Yes", if not, he press "No". For no, the process is reset and for yes it goes to next step.
18. For receiving a receipt customer must write his e-mail address on the screen and press "Send".
19. The required information is sent to server which sends the receipt to customer.
20. Customer is informed that we have sent the receipt and process is reset.

### [- Change empty propane cylinder with full one of different type. Pay with Vipps:](https://github.com/sicabboy1/rpigassautomat/tree/master/operationalFlow/end%20customer/Vipps/Propan/Exchange)

0.  Screen presents the payment methods available.
1.  Payment with Vipps method is chosen.
2.  Type of transaction is chosen (change).
3.  Exchange to different type of cylinder is chosen.
4.  The list with cylinders is shown and the customer chose the one that he wants.
5.  Program search if the wanted cylinder exists in the inventory. Process continues if it exists or else an error message is displayed.
6.  Type of valve available for the cylinder above is chosen.  
    This step is skipped if the cylinder has only 1 type of valve available.
7.  Program search if the wanted cylinder with chosen valve exists in the inventory
8.  To receive the empty cylinder the program identifies the ROW and the COLUMN for LEFT or RIGHT carousel in which the empty spot is. If no empty spot is found, an error message is shown.  
    Note: Usually this empty spot is always behind the door that was used to deliver the full cylinder in the previous trade. An empty spot is also left available during the loading cycle.
9.  If an empty spot is found and if it's not behind one of the doors, the carousel is rotated until the empty spot is brought behind a door.
10. Sale and GDPR conditions are shown on the screen and the customer has to accept them in order to continue. If he doesn't, his bottle is returned and process is reset.  
11. The door opens and user is instructed to place in his empty cylinder and close the door.
12. After the door is registered as closed, the carousel is moved to the identification position and the customer is instructed to wait.
13. The bottle is scanned and identified.
14. A page with an overview of the identified cylinder and price for change to same type is presented to the customer.  
    If he declines the process is stopped.
    If he accepts the process continues and the customer is asked to write his phone number on the screen and press "Send"
15. The payment is requested on customer's phone trough Vipps app, accepted and processed by Vipps.  
    If it's accepted, the cylinder detected (13) is delivered as described (19).
    If it's not accepted, an error message is shown on the screen and the buying process is aborted.
16. To deliver the cylinder the program identifies the ROW and the COLUMN for LEFT or RIGHT carousel in which the desired cylinder is.
17. Program rotate the carousel to bring the cylinder in the pick-up position.
18. Step (10) can be skipped if the cylinder is already present in the pick-up position.
19. After the cylinder position (column+row) is in pick-up position, one of the 6 doors will open, customer will pick his cylinder and close the door.
20. After the door is closed, a question for receiving receipt comes on the screen. If customer wants receipt he press "Yes", if not, he press "No". For no, the process is reset and for yes it goes to next step.
21. For receiving a receipt customer must write his e-mail address on the screen and press "Send".
22. The required information is sent to server which sends the receipt to customer.
23. Customer is informed that we have sent the receipt and process is reset.   
