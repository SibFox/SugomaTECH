"use strict";

function calcSaturation(nutrition, saturation) {
    return { nutrition: nutrition, 
        saturation: saturation / nutrition / 2
    }
}

let registerFoods = (evt) => {

    evt.create('cooked_lungs').food(food => {
        food
            .nutrition(5)
            .saturation(0.2)
    })
    evt.create('cooked_stomach').food(food => {
        food
            .nutrition(8)
            .saturation(0.35)
    })
    
    evt.create('minced_brain').food(food => {
        food
            .nutrition(1)
    })
    evt.create('cooked_minced_brain').food(food => {
        food
            .nutrition(2)
            .saturation(0.4)
    })
    evt.create('minced_heart').food(food => {
        food
            .nutrition(1)
    })
    evt.create('cooked_minced_heart').food(food => {
        food
            .nutrition(4)
            .saturation(0.3)
    })
    evt.create('minced_liver').food(food => {
        food
            .nutrition(1)
    })
    evt.create('cooked_minced_liver').food(food => {
        food
            .nutrition(4)
            .saturation(0.3)
    })
    evt.create('minced_lungs').food(food => {
        food
            .nutrition(1)
    })
    evt.create('cooked_minced_lungs').food(food => {
        food
            .nutrition(2)
            .saturation(0.4)
    })
    evt.create('minced_stomach').food(food => {
        food
            .nutrition(1)
    })
    evt.create('cooked_minced_stomach').food(food => {
        food
            .nutrition(4)
            .saturation(0.28)
    })
    evt.create('hemolymph_soaked_brain').food(food => {
        food
            .nutrition(1)
            .effect('minecraft:poison', 100, 0, 1)
            .effect('minecraft:hunger', 200, 0, 0.7)
    })
    evt.create('hemolymph_soaked_heart').food(food => {
        food
            .nutrition(1)
            .effect('minecraft:poison', 100, 0, 1)
            .effect('minecraft:hunger', 200, 0, 0.7)
    })
    evt.create('hemolymph_soaked_liver').food(food => {
        food
            .nutrition(1)
            .effect('minecraft:poison', 100, 0, 1)
            .effect('minecraft:hunger', 200, 0, 0.7)
    })
    evt.create('hemolymph_soaked_lungs').food(food => {
        food
            .nutrition(1)
            .effect('minecraft:poison', 100, 0, 1)
            .effect('minecraft:hunger', 200, 0, 0.7)
    })
    evt.create('hemolymph_soaked_stomach').food(food => {
        food
            .nutrition(1)
            .effect('minecraft:poison', 100, 0, 1)
            .effect('minecraft:hunger', 200, 0, 0.7)
    })
    
    evt.create('embryo_paste_jar').food(food => {
        let hungerData = calcSaturation(4, 8)
        food.nutrition(hungerData.nutrition)
            .saturation(hungerData.saturation)
            .effect('minecraft:darkness', 300, 0, 1)
            .effect('minecraft:poison', 120, 3, 1)
            .effect('minecraft:hunger', 420, 2, 1)
    }).maxStackSize(64)
    .tooltip(Text.translate('item.kubejs.embryo_paste_jar.desc').gray())
    

    evt.create('plated_brain_arphex').food(food => {
        let hungerData = calcSaturation(12, 16)
        food
            .nutrition(hungerData.nutrition)
            .saturation(hungerData.saturation)
            .effect('minecraft:blindness', 200, 0, 0.9) // моментально пропадает по неизвестной причине
            .effect('minecraft:darkness', 300, 0, 0.9)
            .effect('minecraft:poison', 120, 0, 0.5)
            .effect('arphex:enhanced_senses', 3600, 0, 1)
    }).maxStackSize(16)
    .tooltip(Text.translate('item.kubejs.plated_brain_arphex.desc').gray())
    evt.create('plated_brain_end').food(food => {
        let hungerData = calcSaturation(9, 12)
        food
            .nutrition(hungerData.nutrition)
            .saturation(hungerData.saturation)
            .effect('minecraft:blindness', 200, 1, 0.8)
            .effect('minecraft:darkness', 300, 1, 0.8)
    }).maxStackSize(16)
    .tooltip(Text.translate('item.kubejs.plated_brain_end.desc').gray())
    evt.create('plated_brain_nether').food(food => {
        let hungerData = calcSaturation(12, 10)
        food
            .nutrition(hungerData.nutrition)
            .saturation(hungerData.saturation)
            .effect('minecraft:blindness', 200, 1, 0.8)
            .effect('minecraft:darkness', 300, 1, 0.8)
            .effect('mynethersdelight:a_pungent', 900, 0, 1)
    }).maxStackSize(16)
    .tooltip(Text.translate('item.kubejs.plated_brain_nether.desc').gray())
    evt.create('plated_minced_brain_stew').food(food => {
        let hungerData = calcSaturation(11, 14)
        food
            .nutrition(hungerData.nutrition)
            .saturation(hungerData.saturation)
            .effect('minecraft:blindness', 200, 0, 1)
            .effect('minecraft:darkness', 300, 0, 1)
    }).maxStackSize(16)
    .tooltip(Text.translate('item.kubejs.plated_minced_brain_stew.desc').gray())
    evt.create('plated_minced_brain_with_milk').food(food => {
        let hungerData = calcSaturation(9, 12)
        food
            .nutrition(hungerData.nutrition)
            .saturation(hungerData.saturation)
            .effect('minecraft:blindness', 200, 0, 1)
            .effect('minecraft:darkness', 300, 0, 1)
    }).maxStackSize(16)
    .tooltip(Text.translate('item.kubejs.plated_minced_brain_with_milk.desc').gray())

    evt.create('plated_heart_arphex').food(food => {
        let hungerData = calcSaturation(7, 5)
        food
            .nutrition(hungerData.nutrition)
            .saturation(hungerData.saturation)
            .effect('minecraft:hunger', 160, 0, 0.4)
            .effect('minecraft:poison', 60, 0, 0.1)
    }).maxStackSize(16)
    .tooltip(Text.translate('item.kubejs.plated_heart_arphex.desc').gray())
    evt.create('plated_heart_end').food(food => {
        let hungerData = calcSaturation(6, 8)
        food
            .nutrition(hungerData.nutrition)
            .saturation(hungerData.saturation)
    }).maxStackSize(16)
    .tooltip(Text.translate('item.kubejs.plated_heart_end.desc').gray())
    evt.create('plated_heart_nether').food(food => {
        let hungerData = calcSaturation(10, 14)
        food
            .nutrition(hungerData.nutrition)
            .saturation(hungerData.saturation)
            .effect('mynethersdelight:b_pungent', 900, 0, 1)
    }).maxStackSize(16)
    .tooltip(Text.translate('item.kubejs.plated_heart_nether.desc').gray())
    evt.create('plated_minced_heart_stew').food(food => {
        let hungerData = calcSaturation(16, 22)
        food
            .nutrition(hungerData.nutrition)
            .saturation(hungerData.saturation)
            .effect('farmersdelight:comfort', 3600, 0, 1)
    }).maxStackSize(16)
    .tooltip(Text.translate('item.kubejs.plated_minced_heart_stew.desc').gray())

    evt.create('plated_liver_end').food(food => {
        let hungerData = calcSaturation(9, 6)
        food
            .nutrition(hungerData.nutrition)
            .saturation(hungerData.saturation)
            .effect('minecraft:hunger', 300, 0, 0.6)
            .effect('minecraft:poison', 120, 0, 0.3)
    }).maxStackSize(16)
    .tooltip(Text.translate('item.kubejs.plated_liver_end.desc').gray())
    evt.create('plated_liver_nether').food(food => {
        let hungerData = calcSaturation(14, 17.5)
        food
            .nutrition(hungerData.nutrition)
            .saturation(hungerData.saturation)
            .effect('mynethersdelight:b_pungent', 900, 0, 1)
    }).maxStackSize(16)
    .tooltip(Text.translate('item.kubejs.plated_liver_nether.desc').gray())
    evt.create('plated_minced_liver_stew').food(food => {
        let hungerData = calcSaturation(15, 18)
        food
            .nutrition(hungerData.nutrition)
            .saturation(hungerData.saturation)
            .effect('farmersdelight:nourishment', 3600, 0, 1)
    }).maxStackSize(16)
    .tooltip(Text.translate('item.kubejs.plated_minced_liver_stew.desc').gray())
    evt.create('plated_minced_liver_with_apple').food(food => {
        let hungerData = calcSaturation(16, 20)
        food
            .nutrition(hungerData.nutrition)
            .saturation(hungerData.saturation)
            .effect('farmersdelight:nourishment', 3600, 0, 1)
    }).maxStackSize(16)
    .tooltip(Text.translate('item.kubejs.plated_minced_liver_with_apple.desc').gray())

    evt.create('plated_lungs_arphex').food(food => {
        let hungerData = calcSaturation(6, 4)
        food
            .nutrition(hungerData.nutrition)
            .saturation(hungerData.saturation)
            .effect('arphex:webbed', 500, 0, 1)
            .effect('minecraft:hunger', 600, 0, 1)
            .effect('minecraft:poison', 300, 0, 1)
            .effect('minecraft:levitation', 60, 0, 1)
    }).maxStackSize(16)
    .tooltip(Text.translate('item.kubejs.plated_lungs_arphex.desc').gray())
    evt.create('plated_lungs_end').food(food => {
        let hungerData = calcSaturation(11, 14)
        food
            .nutrition(hungerData.nutrition)
            .saturation(hungerData.saturation)
            .effect('minecraft:levitation', 100, 0, 1)
            .effect('minecraft:slow_falling', 200, 0, 1)
    }).maxStackSize(16)
    .tooltip(Text.translate('item.kubejs.plated_lungs_end.desc').gray())
    evt.create('plated_lungs_nether').food(food => {
        let hungerData = calcSaturation(15, 10)
        food
            .nutrition(hungerData.nutrition)
            .saturation(hungerData.saturation)
            // .effect('twm:vicio', 600, 0, 0.8)
            .effect('mynethersdelight:b_pungent', 900, 0, 1)
    }).maxStackSize(16)
    .tooltip(Text.translate('item.kubejs.plated_lungs_nether.desc').gray())
    evt.create('plated_minced_lungs_stew').food(food => {
        let hungerData = calcSaturation(11, 15)
        food.nutrition(hungerData.nutrition)
            .saturation(hungerData.saturation)
            .effect('farmersdelight:nourishment', 2400, 0, 1)
    }).maxStackSize(16)
    .tooltip(Text.translate('item.kubejs.plated_minced_lungs_stew.desc').gray())
    evt.create('plated_minced_lungs_with_potatoes').food(food => {
        let hungerData = calcSaturation(14, 17)
        food.nutrition(hungerData.nutrition)
            .saturation(hungerData.saturation)
            .effect('farmersdelight:nourishment', 3600, 0, 1)
    }).maxStackSize(16)
    .tooltip(Text.translate('item.kubejs.plated_minced_lungs_with_potatoes.desc').gray())
    
    evt.create('plated_stomach_end').food(food => {
        let hungerData = calcSaturation(6, 4)
        food.nutrition(hungerData.nutrition)
            .saturation(hungerData.saturation)
            .effect('minecraft:nausea', 340, 0, 0.8)
            .effect('minecraft:poison', 100, 0, 0.6)
    }).maxStackSize(16)
    .tooltip(Text.translate('item.kubejs.plated_stomach_end.desc').gray())
    evt.create('plated_stomach_nether').food(food => {
        let hungerData = calcSaturation(13, 16)
        food.nutrition(hungerData.nutrition)
            .saturation(hungerData.saturation)
            .effect('mynethersdelight:b_pungent', 900, 2, 1)
            .effect('farmersdelight:comfort', 1200, 0, 1)
    }).maxStackSize(16)
    .tooltip(Text.translate('item.kubejs.plated_stomach_nether.desc').gray())
    evt.create('plated_minced_stomach_stew').food(food => {
        let hungerData = calcSaturation(16, 20)
        food.nutrition(hungerData.nutrition)
            .saturation(hungerData.saturation)
            .effect('farmersdelight:comfort', 3600, 0, 1)
    }).maxStackSize(16)
    .tooltip(Text.translate('item.kubejs.plated_minced_stomach_stew.desc').gray())
    
    

    console.info('Food registry passed')
}