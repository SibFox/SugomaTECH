"use strict";

const registerBlocks = () => {
    StartupEvents.registry('block', evt => {
        // event.create('quartz_glass')
        //   .transparent(true)
        //   .hardness(0.3)
        //   .resistance(0.3)
        //   .requiresTool(false)
        //   .soundType('glass')
        //   .renderType('cutout')

        evt.create('jar_embryo')
            .parentModel('kubejs:models/block/jar_embryo.json')
            .item(i => {
            i.food(food => {
                let hungerData = calcSaturation(4, 10)
                food.nutrition(hungerData.nutrition)
                    .saturation(hungerData.saturation)
                    .effect('minecraft:nausea', 1200, 0, 1)
                    .effect('minecraft:poison', 100, 0, 0.7)
                    .effect('minecraft:darkness', 300, 0, 1)
                })
                    .maxStackSize(16)
                    .texture('kubejs:textures/item/jar_embryo')
                    .useAnimation('drink')
            })
                .box(5,0,5, 11,8,11)
                .hardness(0.3)
                .defaultTranslucent()
                .glassSoundType()
                .transparent(true)

    })
    console.info('Block registry passed')
}