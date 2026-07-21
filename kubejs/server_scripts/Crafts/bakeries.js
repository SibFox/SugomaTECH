"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerBakeriesRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('bakeries', path)
    }

    evt.remove({ id: 'bakeries:blender' })
    evt.remove({ id: 'bakeries:oven' })
    evt.remove({ id: 'bakeries:toaster' })
    evt.remove({ id: 'bakeries:fermentation_box' })
    evt.remove({ id: 'bakeries:moka_pot' })

    // evt.shaped(
    //     Item.of('bakeries:blender', 1),
    //     [
    //         'NII',
    //         'RVI',
    //         'NCI'
    //     ],{
    //         I: item.ingot.iron,
    //         N: item.nugget.iron,
    //         R: item.redstone,
    //         C: 'minecraft:cauldron',
    //         V: 'minecraft:hopper'
    //     }
    // ).id(getRecipeID('blender'))
    
    // evt.shaped(
    //     Item.of('bakeries:oven', 1),
    //     [
    //         'IRI',
    //         'QGQ',
    //         'IRI'
    //     ],{
    //         I: item.ingot.iron,
    //         Q: item.quartz,
    //         R: item.redstone,
    //         G: item.iu.tempered_glass
    //     }
    // ).id(getRecipeID('oven'))
    
    // evt.shaped(
    //     Item.of('bakeries:toaster', 1),
    //     [
    //         'QGQ',
    //         'IRI'
    //     ],{
    //         I: item.ingot.iron,
    //         R: item.redstone,
    //         Q: item.quartz,
    //         G: item.iu.tempered_glass
    //     }
    // ).id(getRecipeID('toaster'))
    
    // evt.shaped(
    //     Item.of('bakeries:fermentation_box', 1),
    //     [
    //         'IRI',
    //         'QGQ',
    //         'IDI'
    //     ],{
    //         I: item.ingot.iron,
    //         R: item.redstone,
    //         Q: item.quartz,
    //         G: item.iu.tempered_glass,
    //         D: 'minecraft:daylight_detector'
    //     }
    // ).id(getRecipeID('fermentation_box'))
    
    // evt.shaped(
    //     Item.of('bakeries:moka_pot', 1),
    //     [
    //         'I',
    //         'IP',
    //         'D'
    //     ],{
    //         I: item.ingot.iron,
    //         P: 'minecraft:stick',
    //         D: item.dye.black
    //     }
    // ).id(getRecipeID('moka_pot'))
    
    

    console.info('Bakeries recipe adding passed')
}