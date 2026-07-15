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
    registerAEMachinesRecipes(evt)

    console.info('Applied Energistics recipe adding passed')
}