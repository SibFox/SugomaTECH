"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerIARecipes = (evt) => {

    registerIARemovings(evt)
    registerIACTRecipes(evt)
    registerIAMechanicalRecipes(evt)    
    
    console.info('Immersive Aircraft recipe adding passed')
}