"use strict";

const registerFoods = (evt) => {

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
    

    evt.create('plated_brain_arphex').food(food => {
        food
            .nutrition(12)
            .saturation(0.5)
            .effect('minecraft:blindness', 200, 0, 0.9) // моментально пропадает по неизвестной причине
            .effect('minecraft:darkness', 300, 0, 0.9)
            .effect('minecraft:poison', 120, 0, 0.5)
            .effect('arphex:enhanced_senses', 3600, 0, 1)
    })
    evt.create('plated_brain_end').food(food => {
        food
            .nutrition(20)
            .saturation(1)
            .effect('minecraft:blindness', 200, 1, 0.8)
            .effect('minecraft:darkness', 300, 1, 0.8)
    })
    evt.create('plated_brain_nether').food(food => {
        food
            .nutrition(20)
            .saturation(0.5)
            .effect('minecraft:blindness', 200, 1, 0.8)
            .effect('minecraft:darkness', 300, 1, 0.8)
    })
    evt.create('plated_minced_brain_stew').food(food => {
        food
            .nutrition(10)
            .saturation(1)
            .effect('minecraft:blindness', 200, 0, 1)
            .effect('minecraft:darkness', 300, 0, 1)
    })
    evt.create('plated_minced_brain_with_milk').food(food => {
        food
            .nutrition(10)
            .saturation(0.5)
            .effect('minecraft:blindness', 200, 0, 1)
            .effect('minecraft:darkness', 300, 0, 1)
    })




    console.info('Food registry passed')
}