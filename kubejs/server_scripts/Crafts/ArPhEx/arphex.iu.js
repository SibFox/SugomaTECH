"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerArPhExIURecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('arphex', path)
    }

    iuRecipe(evt, getRecipeID('infernal_shard'), IUMachineCraft.ALLOY_SMELTER.lvl3,
        [
            asItem(item.ingot.netherite, 3),
            asItem(item.custom.kloverghett_part, 4),
            asItem(item.arphex.fire_opal.full),
            asItem(item.arphex.abyssal_crystal.full)
        ],[
            asItem(item.arphex.infernal_shard, 2)
        ],
        { 'temperature': 6000 }
    )
    
    iuRecipe(evt, getRecipeID('infernal_ingot'), IUMachineCraft.MOLECULAR_DOUBLE,
        [
            asItem(item.arphex.infernal_shard),
            asItem(tag.ingot.molybdenum_steel, 6)
        ],[
            asItem(item.arphex.infernal_ingot)
        ],
        { 'energy': 10000000 }
    )
    
    

    iuRecipe(evt, getRecipeID('spacetime_shard'), IUMachineCraft.ALLOY_SMELTER.lvl4,
        [
            asItem(item.ingot.netherite, 6),
            asItem(item.custom.kloverghett_treated, 6),
            asItem(item.arphex.heavy_chitin),
            asItem(item.arphex.time_prism.full),
            asItem(item.arphex.entropy_matrix.full)
        ],[
            asItem(item.arphex.spacetime_shard, 2)
        ],
        { 'temperature': 10000 }
    )
    
    iuRecipe(evt, getRecipeID('spacetime_ingot'), IUMachineCraft.MOLECULAR_DOUBLE,
        [
            asItem(item.arphex.spacetime_shard),
            asItem(item.ingot.superalloy_rene, 3)
        ],[
            asItem(item.arphex.spacetime_ingot)
        ],
        { 'energy': 30000000 }
    )
    
    


}