"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCreateCompactingRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('create/compacting', path)
    }

    evt.recipes.create.compacting(item.nugget.bronze, '16x industrialupgrade:iufluidbronze')
    evt.recipes.create.compacting(item.ingot.bronze, '144x industrialupgrade:iufluidbronze')
    evt.recipes.create.compacting(item.ore_block.bronze, '1296x industrialupgrade:iufluidbronze')
}