basic.forever(function () {
    servos.P1.setAngle(0)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        `)
    if (input.buttonIsPressed(Button.A)) {
        servos.P1.setAngle(45)
        basic.showLeds(`
            . . . . .
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            `)
        music.play(music.createSoundExpression(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        basic.pause(5000)
    }
})
