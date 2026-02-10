"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerMFFSRecipes = (evt) => {

    registerMFFSRemovings(evt)
    registerMFFSCTRecipes(evt)

    console.info('MFFS recipe adding passed')
}