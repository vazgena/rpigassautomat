graph TD

11[p4-exchange-propane-decision.html]
11-- Yes SameT BTN --> 12(see flow-chart part1)
11-- No NoSameT BTN -->13[p5-product-option-5.html DYN]
13--ProductX-->14(Available valve types CONF)
14-- Valve types = 1 -->15(check if ProductX+valve type is available in inventory M/F)
14-- Valve types > 1 -->16[p43-choose-valve-type.html DYN]
16-->15
15--True-->29[p65-put-the-empty-container.html]
15--False-->30[p60-no-tank-available.html]
29--Cancel BTN --> 31[p71-exchange-tank-get-back.html]
31--Delay 10 seconds-->32
30-->32(Tank is returned M/F)
32--Door is closed -->1[index.html]
29-->33[Check flow-chart-part3]
