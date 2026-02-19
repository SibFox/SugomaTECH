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

    console.info('Create recipe adding passed')
}