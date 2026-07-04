"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerArPhExRecipes = (evt) => {

    registerArPhExCTRemovings(evt)
    registerArPhExCTRecipes(evt)
    registerArPhExIURecipes(evt)

    console.info('ArPhEx recipe adding passed')
}