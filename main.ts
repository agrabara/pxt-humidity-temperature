basic.showIcon(IconNames.Heart)


I2C_LCD1602.LcdInit(63)
I2C_LCD1602.BacklightOff()
I2C_LCD1602.ShowString("Hello!", 0, 0)
I2C_LCD1602.BacklightOn()
basic.pause(500)
I2C_LCD1602.ShowString("Humidity &", 0, 0)
I2C_LCD1602.ShowString("Temperature", 0, 1)
basic.pause(2000)
I2C_LCD1602.clear()
dht11.set_pin(DigitalPin.P2)
basic.showIcon(IconNames.Yes)

basic.forever(function () {
    I2C_LCD1602.ShowString("Hum %:        ", 0, 0)
    I2C_LCD1602.ShowNumber(dht11.humidity(), 9, 0)
    basic.pause(500)
    I2C_LCD1602.ShowString("Temp C:       ", 0, 1)
    I2C_LCD1602.ShowNumber(dht11.temperature(), 9, 1)
    basic.pause(2000)
})
