let z = 0
let y = 0
let x = 0
led.enable(false)
basic.forever(function () {
    x = pins.analogReadPin(AnalogPin.P0)
    y = pins.analogReadPin(AnalogPin.P1)
    z = pins.digitalReadPin(DigitalPin.P2)
    serial.writeValue("x", x)
    serial.writeValue("y", y)
    serial.writeValue("z", z)
    basic.pause(100)
})
