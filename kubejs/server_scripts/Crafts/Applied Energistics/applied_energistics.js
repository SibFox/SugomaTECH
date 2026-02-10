"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerAERecipes = (evt) => {

    registerAERemovings(evt)
    registerAECTRecipes(evt)
    registerAEIURecipes(evt)
    registerAEMechanicalRecipes(evt)

    console.info('Applied Energistics recipe adding passed')
}