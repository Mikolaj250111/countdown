input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 30; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.showNumber(30 - index)
    }
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.showString("go")
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= 90; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.showNumber(90 - index)
    }
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.showString("go")
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 60; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.showNumber(60 - index)
    }
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.showString("go")
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index <= 120; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.showNumber(120 - index)
    }
})
basic.forever(function () {
	
})
