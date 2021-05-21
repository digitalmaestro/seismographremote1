input.onButtonPressed(Button.A, function () {
    if (selection == text_list.length) {
        selection = 0
        basic.showString("" + (text_list[selection]))
        message = text_list[selection]
        selection += 1
    } else {
        basic.showString("" + (text_list[selection]))
        message = text_list[selection]
        selection += 1
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("" + (message))
    if (message == "C") {
        radio.sendString("calibrate")
    }
    if (message == "Q") {
        radio.sendString("quake")
    }
    if (message == "D") {
        radio.sendString("download")
    }
})
let message = ""
let selection = 0
let text_list: string[] = []
radio.setGroup(1)
text_list = ["C", "S", "D"]
selection = 0
basic.forever(function () {
	
})
