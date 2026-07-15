"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCreateIURecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('create', path)
    }

    iuRecipe(evt, getRecipeID('andesite_alloy_iron'), IUMachineCraft.ALLOY_SMELTER.lvl1,
        [
            asItem(item.andesite),
            asItem(tag.ingot.iron)
        ],[
            asItem(item.create.andesite_alloy, 4)
        ],
        { "temperature": 2000 }
    )
    
    iuRecipe(evt, getRecipeID('andesite_alloy_zinc'), IUMachineCraft.ALLOY_SMELTER.lvl1,
        [
            asItem(item.andesite),
            asItem(tag.ingot.zinc)
        ],[
            asItem(item.create.andesite_alloy, 4)
        ],
        { "temperature": 2000 }
    )

}