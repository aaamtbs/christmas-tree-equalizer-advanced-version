let micVal = 0
let tree = ChristmasTree.create()
tree.changeMode(LEDMode.Free)
basic.forever(function () {
    micVal = input.soundLevel() / 255 * 19
    for (let index = 0; index <= 19; index++) {
        if (micVal > index) {
            tree.setLevelColor(index, neopixel.colors(NeoPixelColors.Green))
        } else {
            tree.setLevelColor(index, neopixel.colors(NeoPixelColors.Red))
        }
    }
    tree.update()
})
