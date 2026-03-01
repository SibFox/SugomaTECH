"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCreateMechanicalRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('create/mechanical', path)
    }

    evt.recipes.create.mechanical_crafting('createaddition:alternator', [
        '  A  ',
        ' ISI ',
        'ISRSI',
        ' ICI '
    ], {
        A: item.create.andesite_alloy,
        C: item.iu.transistor.lvl2,
        I: tag.plate.titanium_steel,
        R: tag.shaft,
        S: item.iu.spool.lvl2
    }).id(getRecipeID('alternator'))
    

    evt.recipes.create.mechanical_crafting('createaddition:electric_motor', [
        '  A  ',
        ' BSB ',
        'BSRSB',
        ' BCB '
    ], {
        A: item.create.andesite_alloy,
        B: tag.plate.alumel,
        C: item.iu.transistor.lvl2,
        R: tag.shaft,
        S: item.iu.spool.lvl2
    }).id(getRecipeID('electric_motor'))

    evt.recipes.create.mechanical_crafting('createaddition:tesla_coil', [
        'SSS',
        'CAC',
        'PBP',
        'PEP'
    ], {
        A: item.create.andesite_alloy,
        B: item.iu.machine_corpus.tech,
        C: item.iu.transistor.lvl2,
        E: item.create.electron_tube,
        P: tag.plate.alumel,
        S: item.iu.spool.superconducting.lvl1
    }).id(getRecipeID('tesla_coil'))
}