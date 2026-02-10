"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerArPhExRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('arphex', path)
    }

    evt.shapeless(Item.of(item.arphex.entropy_matrix.shard, 1),
        [
            item.arphex.time_prism.full, item.ingot.netherite,
            item.ingot.netherite, item.arphex.time_prism.full
        ]
    ).id(getRecipeID('entropy_matrix_shard'))

    console.info('ArPhEx recipe adding passed')
}