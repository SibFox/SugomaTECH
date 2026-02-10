"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerPBRecipes = (evt) => {

    registerPBRemovings(evt)
    registerPBCTRecipes(evt)
    registerPBIURecipes(evt)
    registerPBPrinterRecipes(evt)

    console.info('Pointblank recipes passed')    
}