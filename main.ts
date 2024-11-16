function choose2 () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showNumber(0)
    } else if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showNumber(1)
    } else if (huskylens.isAppear(3, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showNumber(2)
    } else if (huskylens.isAppear(4, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showNumber(3)
    } else if (huskylens.isAppear(5, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showNumber(4)
    } else if (huskylens.isAppear(6, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        mbit_小車類.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (huskylens.isAppear(7, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        mbit_小車類.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (huskylens.isAppear(8, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        mbit_小車類.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (huskylens.isAppear(9, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        mbit_小車類.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.White))
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
}
makerbit.onIrButton(IrButton.NUM1, IrButtonAction.Pressed, function () {
    a = 1
})
function walk () {
    b = 100
    makerbit.connectIrReceiver(DigitalPin.P8)
    while (true) {
        if (mbit_小車類.Line_Sensor(mbit_小車類.enPos.LeftState, mbit_小車類.enLineState.White) && mbit_小車類.Line_Sensor(mbit_小車類.enPos.RightState, mbit_小車類.enLineState.White)) {
            mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Run, b)
        }
        if (mbit_小車類.Line_Sensor(mbit_小車類.enPos.LeftState, mbit_小車類.enLineState.White) && mbit_小車類.Line_Sensor(mbit_小車類.enPos.RightState, mbit_小車類.enLineState.White)) {
            mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Run, b)
        }
        if (mbit_小車類.Line_Sensor(mbit_小車類.enPos.LeftState, mbit_小車類.enLineState.White) && mbit_小車類.Line_Sensor(mbit_小車類.enPos.RightState, mbit_小車類.enLineState.White)) {
            mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Run, 70)
        }
        if (mbit_小車類.Line_Sensor(mbit_小車類.enPos.LeftState, mbit_小車類.enLineState.White) && mbit_小車類.Line_Sensor(mbit_小車類.enPos.RightState, mbit_小車類.enLineState.White)) {
            mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Run, 70)
        }
    }
}
makerbit.onIrButton(IrButton.NUM3, IrButtonAction.Pressed, function () {
    a = 3
})
makerbit.onIrButton(IrButton.NUM2, IrButtonAction.Pressed, function () {
    a = 2
    basic.showNumber(0)
})
makerbit.onIrButton(IrButton.NUM6, IrButtonAction.Pressed, function () {
    a = 6
})
makerbit.onIrButton(IrButton.NUM5, IrButtonAction.Pressed, function () {
    a = 5
})
makerbit.onIrButton(IrButton.NUM4, IrButtonAction.Pressed, function () {
    a = 4
})
let b = 0
let a = 0
huskylens.initI2c()
makerbit.connectIrReceiver(DigitalPin.P8)
a = 0
basic.forever(function () {
    if (a == 1) {
        walk()
    } else if (a == 2) {
        choose2()
    }
})
