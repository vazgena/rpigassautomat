
**Pages description**

 - *Contains written description of the pages from pngPages folder. This description tries to explain the contents of the page as well as background actions that might take place when the pages are displayed.*
 - *The order is in no way related to the order the pages are actually shown in real case scenarios. For real case scenarios see the **Project Flow** part of this document*.
 - *The number inside the parenthesis represents an unique index of the page from the actual system (Automation Studio). This index will help us adapt the existing code to Python.* 
 **Terms description**
 
 - User: person that has access to **maintenance** and/or **loading cycle** HMI pages of the machine.
 - Customer: person that **ONLY** has access to buying and exchanging HMI pages of the machine 

 **Error Pages:**
 - *axisError_(40).png*
	Shown when one of the axis is not operable due to physical or software errors.

 - *gasLeak_(39)*
Shown when the gas sensor detects a leak. There is an input voltage coming from the gas sensor. This page overwrites any other page displayed at a current moment. 
 
 - *SvGasError1_(96)*
	Contract code not found - shown in the buying process of a welding gas bottle. 

 - *SvGasError2_(97)*
	Retry to send contract code - shown in the buying process of a welding gas bottle.
	
	SvGasError3_(99)
	Shown when there is a problem connecting to the internet during a welding gas exchange
	
 - *SvGasFormErrNo_(102)*
	Shown when there is a problem with the phone number written in the buy/exchange welding gas form. 
	
 - *SvGassSmsNotReceived_(93)*
	Shown when the server couldn't send the code by SMS to the phone number specified. 
	
**Maintenance:** 

 - *pgServ_(33)*
	Shown when from various cases the machine cannot be used. Usually when some repairs need to be physically done. 

 - *Init_Page_(0)*
	Shown to users which have access to debugging menus.  

 - Maintenance_(1)
	Shown to users which have access to debugging menus.  

 - *INVENTORY_(2)*
	Allows the user to do actions regarding inventory. Loading cycle, set of empty bottles etc. 
	
 - AxisSelect_(48)
	Allows user to select right/left axis in order to open the control 				page for the axis on that side.
	
 - *LAxiscmd_(49)*
	After an axis is selected in AxisSelect_(48) this page allows the user to do various controls of that side axis. 
	
 - *RAxisCmd_(50)*
	After an axis is selected in AxisSelect_(48) this page allows the user to do various controls of that side axis. 

 - *resetAxes_(41)*
	Used to reset the axes when they were on an error state.

 - *cardMaint_(30)*
	 Allows user to reverse the last transaction made with card and issue a Z-Report. These 2 actions are done by communicating with the physical payment terminal in use.

 - *chkDCl_(62)*
	 Asks the user if he shall perform a sensor test. This can be done in the **Loading Cycle** in order to detect broken sensors and change them if necessary. Here we will write a routine that when triggered will run a test on all 6 door locks.  

 - *LDChkCl_(63)*
	Displays the errors (if any) found during the sensor test.

 - *sensTestRes_(64)*
	 In case errors were found during sensor the sensor test, the logic asks the user if he shall continue to loading cycle or fix the errors. 
	 
 - *SnsTstCorr_(66)*
	In case errors were found during sensor the sensor test, the logic asks the user if he shall set empty bottles on the row the problems were found. 
	
 - *sensTestRes2_(65)*
	Shown after a sensor test when no error were found. 
	
 - *doors_(11)*
	 Allows the user to open all doors individually by pressing a button. 

 - *gasSensors_(13)*
	Allows the user to see the current status of the gas sensor. 

 - *setSellingMode_(44)*
	This page is used to enable/disable the selling of 5kg cylinders and standard/industrial valve types. 
	
 - *Pricelist_(115)*
	Used to show the actual prices for Norwegian customers
	
 - *Pricelist_(123)*
	Used to show the actual prices for Swedish customers
	
 *- Update_After_Load_(36)*/UPDATE_ROW1_(10)/UPDATE_ROW2_(31) / UPDATE_ROW3_(35)
	Allows the user to set a full row with empty bottles from 1 single press of a button. 
	
**Loading Cycle:** 

 - *Col_1_(3)*
	 Shown to the user responsible for loading the machine with propane bottles. On this page he will see what bottles are required by the system to be loaded or he can manually override the system imposed bottle types. The COL 1 PAGE title represents the actual column that is being loaded. The columns start from 1 and end at 8.

 - *COL_1Sv_(103)*
	 Shown to the user responsible for loading the machine with welding gas bottles. On this page he will see what bottles are required by the system to be loaded or he can manually override the system imposed bottle types. The COL 1 PAGE title represents the actual column that is being loaded. The columns start from 1 and end at 8.

 - *dOpenFailure_(67)*
	Shown during the loading cycle when one or more doors are not opening. This can be due to a mechanical fail or due to the fact that the door is physically locked.  

 - *DriverCtrlPage_(84)*
	Hidden page that allows the user to enter into the maintenance menu or the loading cycle menu. This page is shown when a hidden button is triggered on the paySelection page. 
	
 *- noEmptyPlace_(54)*
	Shown to the driver if he forgot to leave at least one empty space during the loading cycle. 

 - *SvGassLoadTankType_(90)*
	Shown to the driver to allow him to load a specific welding gas bottle. 	

 - *Tank_Cond_(81)*
	During the loading cycle a driver has the possibility to inform the owner in regards of the condition of the bottles. 
	
**Transaction Flow Pages:** 

 - *paySelection_(78)*/ SvGassPaySelection_(91)
	Shown to Norwegian customers to chose the payment method they prefer to trade with when buying/exchanging propane or welding gas

 - *paySelectionSw_(117)*/ SvGassPaySelectionSW_(121)
	Shown to Swedish customers to chose the payment method they prefer to trade with when buying/exchanging propane or welding gas

 - *InsertCard_(28)*
	Asks the customer to insert his card and triggers the next action based on when the card is detected as inserted. 
	
 - *Break_1_(21)*
	 Shown during a transaction when customer has declined to exchange his tank. For example he changed his mind or he didn't like the price.
	 
 - *buy_Break_(25)*
	 Shown during a transaction when customer has declined to buy a new tank. For example he changed his mind regarding the type of cylinder or he didn't like the price.

 - *cardBanned_(68)*
	Shown when we intentionally want to block a customer from buying/exchanging. We do this when we realize that a card number or Vipps phone number have exchanged old bottles too many times.  

 - *Chosen_1_(20)*
	 Shown to present a final overview of customer's chosen propane product and it's price before starting the payment process. 
 - *Chosen_1SvGas_(112)*
	Shown to present a final overview of customer's chosen welding gas product and it's price before starting the payment process.

 - *CompTypeSelect_(53)*
	 Shown to the Norwegian customer to chose his preferred valve type (Some markets have different valve types, others only have one type.)
	 
 - *CompTypeSelectSw_(82)*
	 Shown to the Swedish customer to chose his preferred valve type (Some markets have different valve types, others only have one type.)

 - *deliverTank_(23)*
	 Shown at the end of the purchase/exchange process to inform the customer that he has to wait for a door to open, take the tank and close the door. 

 - dmgTWarn_(70)
	 Shown during the exchange process to inform the customer about the sales condition and personal data acquisition. He can accept or deny these conditions. He can also see what types of bottle(s) are being accepted by the vending machine before accepting/denying the conditions.
Different markets and customers from inside these markets  (Norway/Sweden/Germany/Denmark etc.) are selling different bottle types. 

 - *doorLeftOMsg_(71)*
	 Shown after the buy new/exchange process when previous customer have not closed the door and the next customer comes and places the bottle in that open space without actually starting the exchange process. 
	 A buy new or exchange always ends when the door is closed without anything inside. Not doing so triggers the error message above. 

 - *doorOpenFaultGTB_(46)*
	 Shown when the door is supposed to open to give the bottle but due to mechanical failure or because the customer is not allowing the door to open by holding it with the hands. In this case the machine tries to open the door 3 times and after that it gives up by keeping the door closed and showing this message. 

 - *doorOpenFaultPutIn_(45)*
	 Shown when the door is supposed to open to receive a bottle but due to mechanical failure or because the customer is not following the instructions which asks him to place a bottle the machine tries to open the door until either a bottle is placed either is's being blocked and if it's blocked without no bottle it shows this message. (In our current case we need to modify this a little bit due to the fact that recognition is not made instantly).

 - *Exchange_3_0_(16)*
	Allows customer to chose between exchanging between same type of bottles (YES) or to another type of bottle (NO) or to chose welding gas bottle type. 

 - *Exchange_4_1no_(19)*
Allows customer of Norwegian market to chose what type of bottle they want to exchange to. (In the situation in which they have pressed NO on the Exchange_3_0_(16) page).
*Valve type **cannot** be chosen in the next step.

 - *Exchange_4_1sw_(124)*
Allows customer of Swedish market to chose what type of bottle they want to exchange to. (In the situation in which they have pressed NO on the Exchange_3_0_(16) page).
*Valve type **cannot** be chosen in the next step.

 - *Exchange_4_2no_(42)*
	Same as Exchange_4_1no_(19) but with the sale of 5kg cylinders disabled. 
	
 - *Exchange_4_2sw_(125)*
Same as Exchange_4_1sw_(124) but with the sale of 5kg cylinders disabled. 

 - *Exchange_4_3no_(52)*
	Allows customer of Norwegian market to chose what type of bottle they want to exchange to. (In the situation in which they have pressed NO on the Exchange_3_0_(16) page).
*Valve type **can** be chosen in the next step.

 - *Exchange_4_3sw_(126)*
	Allows customer of Swedish market to chose what type of bottle they want to exchange to. (In the situation in which they have pressed NO on the Exchange_3_0_(16) page).
*Valve type **can** be chosen in the next step.

 - *Exchange_4_4no_(60)*
Same as Exchange_4_2no_(42).

 - *Exchange_4_4sw_(127)*
Same as Exchange_4_2sw_(125).

 - *Exchange4_(18)*
During exchanging process asks the customer to wait until door opens, place his empty propan bottle and close the door. 

 - *Exchange4SvGas_(111)*
During exchanging process asks the customer to wait until door opens, place his empty welding gas bottle and close the door. 

 - *giveTankBack_(47)*
Shown whenever the transaction did not went trough. Either if the customer aborted it, either if the payment did not went trough. 

 - *KvtEmail1_(129)*
	Asks customer if he wants to receive a receipt on e-mail or not

 - *KvtEmail2_(130)*
	Asks customer to write in his e-mail to receive the receipt. 

 - *KvtEmail3_(131)*
	Confirms the sending of receipt on e-mail. 

 - *L/RDoor1/2/3Open_(L:55,56,72 R:57,58,59)*
Asks the customer to close the specific door if found open at the beginning of a purchase or exchange cycle. When a purchase/exchange starts, all door have to be closed or else this message is displayed. 

 - *NoEmptyPosInMag_(27)*
	Shown to customer when he tries to exchange and there is no empty place in the machine for him to leave his empty cylinder. 

 - *NoSvTankPutIn(128)*
	Shown to customer when he tries to exchange a welding gas bottle and the system detects that he have not actually placed a welding gas bottle. 

 - *notAllDoorsClosed_(37)*
	Not in use. It was replaced with the L/RDoor1/2/3Open_(55,56,72)

 - *noTankAvail_(24)*
	 Shown to customer when his desired tank is not available in the vending machine when he tries to buy/exchange. 

 - *PaymentInstructions_(22)*
	Shown during the card payment. It mirrors the messages from the payment terminal screen. 

 - *PTCommError_(69)*
	Shown whenever the payment terminal returned an error regarding an unsuccessful card payment.

 - *Purchase_4_(43)*
	Shown when the sale of 5kg cylinders and industrial valve are disabled. 

 - *Purchase_6_(61)*
	Shown when the sale of 5kg cylinders is disabled but the sale of industrial valve is enabled. 

 - *purchase1_(14)*
	Shown after the card payment is selected in paySelection(x) page. 

 - SV_Sel_Pay_(113)
	Shown after the card payment is selected in buying or exchanging a welding gas bottle.

 - *SvGasBuy1_(85)*
	Bottle types - shown in the buying process of a welding gas bottle. 
	
 - *SvGasBuy2_(86)*
	Sale conditions - shown in the buying process of a welding gas bottle.

 - *SvGasBuy3_(88)*
	Personal information - shown in the buying process of a welding gas bottle for Norwegian customers.

 - *SvGasBuy4_(92)*
	Phone number confirmation - hown in the buying process of a welding gas bottle.

 - *SvGasBuySw_(118)*
	Personal information - shown in the buying process of a welding gas bottle for Swedish customers.
	
 - *purchase2_(15)*
	Allows the customer to chose between purchase of a new tank or the exchange of his old one. 
	
 - *PurchaseAllNo_(51)*
	Shows the buying products for Norwegian market. 
	
 - *PurchaseAllSw_(17)*
	Shows the buying products for Swedish market. 

 - *SteelTypeSelect_(32)*
	Allows the Norwegian customer to chose between the desired valve types during a buying or exchanging cycle. 

 - *SteelTypeSelectSw_(83)*
	Allows the Swedish customer to chose between the desired valve types during a buying or exchanging cycle. 
	

 - *SvGasExch1_(94)*
	Allows an existing customer to exchange his welding gas bottle by using an unique code provided to him when he first bought 

 - *SvGasExch3,4,5_(89,100,101)*
	Based on his code, the flow presents what type of bottle shall be delivered. 
	

 - *SvGassTradeType_(87)*
	Allows the customers to chose what type of welding gas trade they shall do.

 - *SvGasWait1_(95)*
	Wait page for the system to check if the contract code is valid. 
	
 - *SvGasWait2_(98)*
	Wait page for the system to inform the customer that the SMS is being sent. 

 - *TakeBackTank_(26)*
	System is informing the customer that he has to take back his own bottle and close the door. 
	
**Mobile Payment Flow** 
**Vipps:**
 - *mCashPayReqStatus_(80)*
 Shown when mobile payment is initiated from the vending machine by sending a JSON message to server. 

 - *QR_Test_(73)*
	Informs the customer that he has to accept the payment on his phone and press the button after he have done it.

 - *mCashPaystatus_(75)*
	Shown after customer have pressed the above button on the screen to confirm that he has paid with his app. During this screen the logic is checking to see if the customer have really paid. 

 - *RetryReserve_(116)*
	Shown to the customer 

 - *mCashPayTimeout_(76)*
	Shown when the logic have detected no payment. 
	
 - *ServCommErr_(74)*
	Shown when there is a problem communicating with the vipps server.
	
 - *vippsPayError_(77)*
	Shown when there is a problem regarding the payment. 
	
 - *VippsPaystatus(75)*
	Shown during the payment status check
	
 - *VippsPhoneNr_(114)*
	Allows customer to write his own phone number in order to pay with Vipps. 
