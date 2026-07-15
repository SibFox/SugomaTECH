"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCreateMixingRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('create/mixing', path)
    }

    evt.recipes.create.mixing(Item.of(item.create.andesite_alloy, 4), 
        [
            item.andesite,
            item.andesite,
            item.andesite,
            Ingredient.of(tag.ingot.iron)
        ]
    ).heated().id(getRecipeID('andesite_alloy_iron'))

    evt.recipes.create.mixing(Item.of(item.create.andesite_alloy, 4), 
        [
            item.andesite,
            item.andesite,
            item.andesite,
            Ingredient.of(tag.ingot.zinc)
        ]
    ).heated().id(getRecipeID('andesite_alloy_zinc'))

    evt.recipes.create.mixing(Item.of(item.ingot.electrum, 2), 
        [
            Ingredient.of(tag.ingot.silver),
            Ingredient.of(tag.ingot.gold),
        ]
    ).heated().id(getRecipeID('electrum'))

    evt.recipes.create.mixing(Item.of(item.ingot.brass, 1), 
        [
            Ingredient.of(tag.ingot.copper),
            Ingredient.of(tag.ingot.zinc),
        ]
    ).heated().id(getRecipeID('brass'))

    
}