let Starter = false
let Clean = ""
let Dirty = ""
input.onButtonPressed(Button.A, function () {
    Starter = false
})

input.onButtonPressed(Button.B, function () {
    Starter = true
})

basic.forever(function () {
    Clean = "Clean!"
    Dirty = "Dirty!"
    radio.setGroup(1)
    if (input.lightLevel() > 130) {
        radio.sendString(Clean)
    }
    if (input.lightLevel() < 130) {
        radio.sendString(Dirty)
    }
})


// basic.forever(function () {
//     Clean = "Clean!"
//     Dirty = "Dirty!"
//     radio.setGroup(1)
//     if (input.lightLevel() > 130) {
//         radio.sendString(Clean)
//     }
//     if (input.lightLevel() < 130) {
//         radio.sendString(Dirty)
//     }
// })

radio.onReceivedString(function (receivedString) {
    if (receivedString == Clean) {
        basic.showString(Clean)
        basic.showLeds(`
            . # # # .
            # . . . .
            # . . . .
            # . . . .
            . # # # .
            `)
        music.playMelody("- - - - - - C C ", 120)
    }
    if (receivedString == Dirty) {
        basic.showString(Dirty)
        basic.showLeds(`
            # # # . .
            # . . # .
            # . . # .
            # . . # .
            # # # . .
            `)
        music.playMelody("C5 C5 - - - - - - ", 120)
    }
})

input.onButtonPressed(Button.B, function () {
    Starter = true
})

