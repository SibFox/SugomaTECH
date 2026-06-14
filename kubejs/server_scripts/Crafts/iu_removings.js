"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerIURecipeRemovings = (evt) => {

    evt.custom({
    "type": "industrialupgrade:universal_recipe_delete",
    "recipe_type": IUMachineCraft.ALLOY_SMELTER.lvl1,
    "isFluidRecipe": false,       // optional; defaults to false
    "isRemoveAll": false,       // optional; defaults to false
    "output": [
        // array of output components: item or fluid
        // 'industrialupgrade:alloyingot/red_brass',
        // 'industrialupgrade:wolframite'
    ]})

    console.info('IU recipe removing passed')
}