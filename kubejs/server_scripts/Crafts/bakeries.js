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

    evt.shaped(
        Item.of('bakeries:blender', 1),
        [
            'RII',
            'RWI',
            'RCI'
        ],{
            I: tag.ingot.tungsten,
            R: item.redstone,
            C: 'minecraft:cauldron',
            W: item.create.whisk
        }
    ).id(getRecipeID('blender'))
    
    evt.shaped(
        Item.of('bakeries:oven', 1),
        [
            'ITI',
            'TGT',
            'IHI'
        ],{
            I: tag.ingot.tungsten,
            T: item.create.andesite_alloy,
            G: item.iu.tempered_glass,
            H: item.iu.heating_cylinder
        }
    ).id(getRecipeID('oven'))
    
    // evt.shaped(
    //     Item.of('bakeries:toaster', 1),
    //     [
    //         'TGT',
    //         'IHI'
    //     ],{
    //         I: tag.ingot.tungsten,
    //         T: tag.plate.titanium,
    //         G: item.iu.tempered_glass,
    //         H: item.iu.heating_cylinder
    //     }
    // ).id(getRecipeID('toaster'))
    
    evt.shaped(
        Item.of('bakeries:fermentation_box', 1),
        [
            'ITI',
            'TGT',
            'ICI'
        ],{
            I: tag.ingot.tungsten,
            T: item.create.andesite_alloy,
            G: item.iu.tempered_glass,
            C: item.iu.controller.lvl1,
        }
    ).id(getRecipeID('fermentation_box'))
    
    evt.shaped(
        Item.of('bakeries:moka_pot', 1),
        [
            'I ',
            'IP',
            'D '
        ],{
            I: tag.ingot.tungsten,
            P: tag.rod.tungsten,
            T: item.create.andesite_alloy,
        }
    ).id(getRecipeID('moka_pot'))
    
    

    console.info('Bakeries recipe adding passed')
}