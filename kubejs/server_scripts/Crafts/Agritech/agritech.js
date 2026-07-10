"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerAgritechRecipes = (evt) => {

    registerAgritechRemovings(evt)
    registerAgritechCTRecipes(evt)
    registerAgritechIURecipes(evt)

    console.info('Agritech: Evolved recipe adding passed')
}