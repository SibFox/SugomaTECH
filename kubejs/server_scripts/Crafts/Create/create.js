"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCreateRecipes = (evt) => {

    registerCreateRemovings(evt)
    registerCreateCTRecipes(evt)
    registerCreateIURecipes(evt)
    registerCreateCrushingRecipes(evt)
    registerCreateMechanicalRecipes(evt)
    registerCreateWashingRecipes(evt)

    console.info('Create recipe adding passed')
}