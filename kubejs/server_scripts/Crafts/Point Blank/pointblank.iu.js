"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerPBIURecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('pb', path)
    }

    iuRecipe(evt, getRecipeID('gunmetal_mesh'), IUMachineCraft.WELDING,
    [ 
        asItem(tag.plate.titanium_steel),
        asItem(item.ingot.composite)
    ],
    [ asItem(item.pb.gunmetal_mesh, 4) ],
    { "temperature": 2000 })

}