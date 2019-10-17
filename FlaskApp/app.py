from flask import Flask, render_template, Response

app = Flask(__name__)

@app.route('/')
def index():
    """home page"""
    return render_template('index.html')

@app.route('/p2-insert-card')
def p2_insert_card():
    return render_template('p2-insert-card.html')

@app.route('/p3-transaction-type')
def p3_transaction_type():
    return render_template('p3-transaction-type.html')
    
@app.route('/p4-exchange-propane-decision')
def p4_exchange_propane_decision():
    return render_template('p4-exchange-propane-decision.html')    

@app.route('/p5-product-option-5')
def p5_product_option_5():
    return render_template('p5-product-option-5.html') 
    
@app.route('/p6-product-option-4')
def p6_product_option_4():
    return render_template('p6-product-option-4.html') 	
        					
@app.route('/p7-product-option-2')
def p7_product_option_2():
    return render_template('p7-product-option-2.html') 
    
@app.route('/p8-product-option-3')
def p8_product_option_3():
    return render_template('p8-product-option-3.html') 

@app.route('/p9-product-option-1')
def p9_product_option_1():
    return render_template('p9-product-option-1.html')
    
@app.route('/p10-right-door-1-open-warning')
def p10_right_door_1_open_warning():
    return render_template('p10-right-door-1-open-warning.html')      

@app.route('/p11-left-door-1-open-warning')
def p11_left_door_1_open_warning():
    return render_template('p11-left-door-1-open-warning.html') 
        
@app.route('/p12-right-door-2-open-warning')
def p12_right_door_2_open_warning():
    return render_template('p12-right-door-2-open-warning.html') 
    
@app.route('/p13-left-door-2-open-warning')
def p13_left_door_2_open_warning():
    return render_template('p13-left-door-2-open-warning.html') 
    
@app.route('/p14-right-door-3-open-warning')
def p14_right_door_3_open_warning():
    return render_template('p14-right-door-3-open-warning.html') 
    
@app.route('/p15-left-door-3-open-warning')
def p15_left_door_3_open_warning():
    return render_template('p15-left-door-3-open-warning.html')            
            
@app.route('/p16-gas-type')
def p16_gas_type():
    return render_template('p16-gas-type.html') 
    
@app.route('/p17-vipps-pay-error')
def p17_vipps_pay_error():
    return render_template('p17-vipps-pay-error.html') 

@app.route('/p18-payment-status')
def p18_payment_status():
    return render_template('p18-payment-status.html') 

@app.route('/p19-vipps-pay-confirm')
def p19_vipps_pay_confirm():
    return render_template('p19-vipps-pay-confirm.html') 
    
@app.route('/p20-driver-CTRL-page')
def p20_driver_CTRL_page():
    return render_template('p20-driver-CTRL-page.html') 
    
@app.route('/p21-driver-CTRL-page-pinpad')
def p21_driver_CTRL_page_pinpad():
    return render_template('p21-driver-CTRL-page-pinpad.html')     

@app.route('/p22-maintenance')
def p22_maintenance():
    return render_template('p22-maintenance.html') 

@app.route('/p23-inventory-main')
def p23_inventory_main():
    return render_template('p23-inventory-main.html') 

@app.route('/p24-sensor-test')
def p24_sensor_test():
    return render_template('p24-sensor-test.html') 
    
@app.route('/p25-col-1-left')
def p25_col_1_left():
    return render_template('p25-col-1-left.html')  
    
@app.route('/p26-col-2-left')
def p26_col_2_left():
    return render_template('p26-col-2-left.html') 
    
@app.route('/p27-col-3-left')
def p27_col_3_left():
    return render_template('p27-col-3-left.html')
    
@app.route('/p28-col-4-left')
def p28_col_4_left():
    return render_template('p28-col-4-left.html') 
     
@app.route('/p29-col-5-left')
def p29_col_5_left():
    return render_template('p29-col-5-left.html')    
    
@app.route('/p30-col-6-left')
def p30_col_6_left():
    return render_template('p30-col-6-left.html')
    
@app.route('/p31-col-7-left')
def p31_col_7_left():
    return render_template('p31-col-7-left.html') 
    
@app.route('/p32-col-8-left')
def p32_col_8_left():
    return render_template('p32-col-8-left.html') 
    
@app.route('/p33-col-1-right')
def p33_col_1_right():
    return render_template('p33-col-1-right.html') 
    
@app.route('/p34-col-2-right')
def p34_col_2_right():
    return render_template('p34-col-2-right.html') 
    
@app.route('/p35-col-3-right')
def p35_col_3_right():
    return render_template('p35-col-3-right.html') 
    
@app.route('/p36-col-4-right')
def p36_col_4_right():
    return render_template('p36-col-4-right.html') 
    
@app.route('/p37-col-5-right')
def p37_col_5_right():
    return render_template('p37-col-5-right.html') 
    
@app.route('/p38-col-6-right')
def p38_col_6_right():
    return render_template('p38-col-6-right.html') 
    
@app.route('/p39-col-7-right')
def p39_col_7_right():
    return render_template('p39-col-7-right.html') 
    
@app.route('/p40-col-8-right')
def p40_col_8_right():
    return render_template('p40-col-8-right.html') 
    
@app.route('/p41-no-empty-place-customer')
def p41_no_empty_place_customer():
    return render_template('p41-no-empty-place-customer.html') 
    
@app.route('/p42-service-screen')
def p42_service_screen():
    return render_template('p42-service-screen.html') 
    
@app.route('/p43-choose-valve-type')
def p43_choose_valve_type():
    return render_template('p43-choose-valve-type.html') 
    
@app.route('/p45-sales-conditions')
def p45_sales_conditions():
    return render_template('p45-sales-conditions.html') 

@app.route('/p61-write-your-pin')
def p61_write_your_pin():
    return render_template('p61-write-your-pin.html')
    
@app.route('/p62-pin-code-error')
def p62_pin_code_error():
    return render_template('p62-pin-code-error.html')

@app.route('/p63-payment-denied')
def p63_payment_denied():
    return render_template('p63-payment-denied.html')
    
@app.route('/p64-deliver-tank')
def p64_deliver_tank():
    return render_template('p64-deliver-tank.html')
                                                                                
@app.route('/p65-put-the-empty-container')
def p65_put_the_empty_container():
    return render_template('p65-put-the-empty-container.html')
    
@app.route('/p66-door-blocked')
def p66_door_blocked():
    return render_template('p66-door-blocked.html')
    
@app.route('/p67-cylinder-detection')
def p67_cylinder_detection():
    return render_template('p67-cylinder-detection.html')
    
@app.route('/p68-cylinder-not-recognized')
def p68_cylinder_not_recognized():
    return render_template('p68-cylinder-not-recognized.html')  
    
@app.route('/p49-email-receipt')
def p49_email_receipt():
    return render_template('p49-email-receipt.html')  
    
@app.route('/p50-error-contract-code')
def p50_error_contract_code():
    return render_template('p50-error-contract-code.html')  
    
@app.route('/p51-sent-email-confirmation')
def p51_sent_email_confirmation():
    return render_template('p51-sent-email-confirmation.html')               
                                  					
if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, threaded=True)
