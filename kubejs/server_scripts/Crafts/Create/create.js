"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCreateRecipes = (evt) => {

    registerCreateRemovings(evt)
    registerCreateCTRecipes(evt)
    registerCreateMechanicalRecipes(evt)

    console.info('Create recipe adding passed')
}