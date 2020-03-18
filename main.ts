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
basic.showIcon(IconNames.Yes)

basic.forever(function () {
    I2C_LCD1602.ShowString("Hum %:        ", 0, 0)
    I2C_LCD1602.ShowNumber(Environment.temperature(Environment.DHT11Type.DHT11_humidity, DigitalPin.P2), 9, 0)
    basic.pause(1000)
    I2C_LCD1602.ShowString("Temp C:       ", 0, 1)
    I2C_LCD1602.ShowNumber(Environment.temperature(Environment.DHT11Type.DHT11_temperature_C, DigitalPin.P2), 9, 1)
    basic.pause(2000)
})
