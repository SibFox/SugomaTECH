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
    

    console.info('Food registry passed')
}