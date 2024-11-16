def choose2():
    huskylens.request()
    if huskylens.is_appear(1, HUSKYLENSResultType_t.HUSKYLENS_RESULT_BLOCK):
        basic.show_number(0)
    elif huskylens.is_appear(2, HUSKYLENSResultType_t.HUSKYLENS_RESULT_BLOCK):
        basic.show_number(1)
    elif huskylens.is_appear(3, HUSKYLENSResultType_t.HUSKYLENS_RESULT_BLOCK):
        basic.show_number(2)
    elif huskylens.is_appear(4, HUSKYLENSResultType_t.HUSKYLENS_RESULT_BLOCK):
        basic.show_number(3)
    elif huskylens.is_appear(5, HUSKYLENSResultType_t.HUSKYLENS_RESULT_BLOCK):
        basic.show_number(4)
    elif huskylens.is_appear(6, HUSKYLENSResultType_t.HUSKYLENS_RESULT_BLOCK):
        mbit_小車類.RGB_Car_Program().show_color(neopixel.colors(NeoPixelColors.RED))
    elif huskylens.is_appear(7, HUSKYLENSResultType_t.HUSKYLENS_RESULT_BLOCK):
        mbit_小車類.RGB_Car_Program().show_color(neopixel.colors(NeoPixelColors.GREEN))
    elif huskylens.is_appear(8, HUSKYLENSResultType_t.HUSKYLENS_RESULT_BLOCK):
        mbit_小車類.RGB_Car_Program().show_color(neopixel.colors(NeoPixelColors.BLUE))
    elif huskylens.is_appear(9, HUSKYLENSResultType_t.HUSKYLENS_RESULT_BLOCK):
        mbit_小車類.RGB_Car_Program().show_color(neopixel.colors(NeoPixelColors.WHITE))
    else:
        basic.show_leds("""
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            """)
    basic.pause(500)

def on_ir_button_num1_pressed():
    walk()
makerbit.on_ir_button(IrButton.NUM1,
    IrButtonAction.PRESSED,
    on_ir_button_num1_pressed)

def walk():
    makerbit.connect_ir_receiver(DigitalPin.P8)
    while True:
        if mbit_小車類.Line_Sensor(mbit_小車類.enPos.LEFT_STATE, mbit_小車類.enLineState.WHITE) and mbit_小車類.Line_Sensor(mbit_小車類.enPos.LEFT_STATE, mbit_小車類.enLineState.WHITE):
            mbit_小車類.car_ctrl_speed(mbit_小車類.CarState.CAR_RUN, b)
        if mbit_小車類.Line_Sensor(mbit_小車類.enPos.LEFT_STATE, mbit_小車類.enLineState.WHITE) and mbit_小車類.Line_Sensor(mbit_小車類.enPos.LEFT_STATE, mbit_小車類.enLineState.WHITE):
            mbit_小車類.car_ctrl_speed(mbit_小車類.CarState.CAR_RUN, b)
        if mbit_小車類.Line_Sensor(mbit_小車類.enPos.LEFT_STATE, mbit_小車類.enLineState.WHITE) and mbit_小車類.Line_Sensor(mbit_小車類.enPos.LEFT_STATE, mbit_小車類.enLineState.WHITE):
            mbit_小車類.car_ctrl_speed(mbit_小車類.CarState.CAR_RUN, 70)
        if mbit_小車類.Line_Sensor(mbit_小車類.enPos.LEFT_STATE, mbit_小車類.enLineState.WHITE) and mbit_小車類.Line_Sensor(mbit_小車類.enPos.LEFT_STATE, mbit_小車類.enLineState.WHITE):
            mbit_小車類.car_ctrl_speed(mbit_小車類.CarState.CAR_RUN, 70)

def on_ir_button_num6_pressed():
    pass
makerbit.on_ir_button(IrButton.NUM6,
    IrButtonAction.PRESSED,
    on_ir_button_num6_pressed)

b = 0
huskylens.init_i2c()
makerbit.connect_ir_receiver(DigitalPin.P8)
b = 100

def on_forever():
    pass
basic.forever(on_forever)
