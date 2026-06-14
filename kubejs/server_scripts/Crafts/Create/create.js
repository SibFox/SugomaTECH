"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCreateRecipes = (evt) => {

    registerCreateRemovings(evt)
    registerCreateCTRecipes(evt)
    registerCreateIURecipes(evt)
    registerCreateMechanicalRecipes(evt)
    registerCreateCompactingRecipes(evt)
    registerCreateCrushingRecipes(evt)
    registerCreateWashingRecipes(evt)
    registerCreateMixingRecipes(evt)
    registerCreateMeltingRecipes(evt)

    console.info('Create recipe adding passed')
}