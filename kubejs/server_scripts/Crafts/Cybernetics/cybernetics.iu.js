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
        // "createcybernetics:smooth_titanium",
        // "createcybernetics:smooth_titanium_stairs",
        // "createcybernetics:smooth_titanium_slab",
        // "createcybernetics:titanium_grate",
        // "createcybernetics:titanium_clad_copper",
        // "createcybernetics:titanium_clad_copper_stairs",
        // "createcybernetics:titanium_clad_copper_slab",
        // "createcybernetics:etched_titanium_copper",
        // "createcybernetics:etched_titanium_copper_stairs",
        // "createcybernetics:etched_titanium_copper_slab",
        // "createcybernetics:titaniumore_block",
        // "createcybernetics:deepslate_titaniumore_block",
        // "createcybernetics:raw_titanium_block",
        // "createcybernetics:rawtitanium",
        // "createcybernetics:crushedtitanium"
        // "createcybernetics:titaniumingot",
        // "createcybernetics:titaniumnugget",
        // "createcybernetics:titaniumsheet"
}