"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCyberneticsRecipes = (evt) => {

    registerCyberneticsRemovings(evt)
    registerCyberneticsCTRecipes(evt)
    registerCyberneticsIURecipes(evt)
    
    console.info('Cybernetics recipe adding passed')
}