"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCyberneticsIURecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('createcybernetics', path)
    }

    iuRecipe(evt, getRecipeID('titanium_plating'), IUMachineCraft.ROLLING,
        [ asItem(tag.doubleplate.titanium) ],
        [ asItem(item.cn.titanium_plating) ]
    )
        // "createcybernetics:titanium_block",
        // "createcybernetics:rawtitanium",
        // "createcybernetics:crushedtitanium"
        // "createcybernetics:titaniumingot",
        // "createcybernetics:titaniumnugget",
        // "createcybernetics:titaniumsheet"
}