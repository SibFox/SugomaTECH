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

    iuRecipe(evt, getRecipeID('titanium_mesh'), IUMachineCraft.CUTTER,
        [
            asItem(tag.doubleplate.titanium)
        ],[
            asItem(item.cn.titanium_mesh)
        ]
    )

    iuRecipe(evt, getRecipeID('synthnerves'), IUMachineCraft.CHEMICAL_FACTORY,
        [
            asItem(fluid.glucose, 100),
            asItem(item.custom.synth_nerve_cables),
            asItem(item.custom.conducting_organic_polymer)
        ],[
            asItem(item.cn.synthnerves)
        ]
    )
}