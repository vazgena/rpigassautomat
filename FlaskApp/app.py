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
  
                     					
if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, threaded=True)
