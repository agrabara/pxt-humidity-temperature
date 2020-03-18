basic.showIcon(IconNames.Heart)
I2C_LCD1602.LcdInit(63)
I2C_LCD1602.BacklightOn()
basic.forever(function () {
    I2C_LCD1602.ShowString("Hum:", 0, 0)
    I2C_LCD1602.ShowNumber(Environment.temperature(Environment.DHT11Type.DHT11_humidity, DigitalPin.P2), 6, 0)
    basic.pause(2000)
})
