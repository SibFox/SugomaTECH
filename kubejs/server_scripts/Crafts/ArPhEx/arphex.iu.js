"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerArPhExIURecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('arphex', path)
    }    

    iuRecipe(evt, getRecipeID('spectral_shard'), IUMachineCraft.ALLOY_SMELTER.lvl2,
        [
            asItem(item.custom.kloverghett_crystal, 12),
            asItem(item.ingot.netherite, 2),
            asItem(item.arphex.abyssal_crystal.full)
        ],[
            asItem(item.arphex.spectral_shard, 2)
        ],
        { 'temperature': 5500 }
    )
    
    iuRecipe(evt, getRecipeID('spectral_ingot'), IUMachineCraft.MOLECULAR_DOUBLE,
        [
            asItem(item.arphex.spectral_shard),
            asItem(tag.ingot.molybdenum_steel, 8)
        ],[
            asItem(item.arphex.spectral_ingot)
        ],
        { 'energy': 10000000 }
    )



    iuRecipe(evt, getRecipeID('infernal_shard'), IUMachineCraft.ALLOY_SMELTER.lvl2,
        [
            asItem(item.custom.kloverghett_part, 4),
            asItem(item.ingot.netherite, 4),
            asItem(item.arphex.fire_opal.full)
        ],[
            asItem(item.arphex.infernal_shard, 2)
        ],
        { 'temperature': 7000 }
    )
    
    iuRecipe(evt, getRecipeID('infernal_ingot'), IUMachineCraft.MOLECULAR_DOUBLE,
        [
            asItem(item.arphex.infernal_shard),
            asItem(item.ingot.composite, 6)
        ],[
            asItem(item.arphex.infernal_ingot)
        ],
        { 'energy': 15000000 }
    )



    iuRecipe(evt, getRecipeID('umbral_shard'), IUMachineCraft.ALLOY_SMELTER.lvl3,
        [
            asItem(item.ingot.netherite, 6),
            asItem(item.custom.kloverghett_part, 8),
            asItem(item.arphex.heavy_chitin),
            asItem(item.arphex.void_geode.full)
        ],[
            asItem(item.arphex.umbral_shard, 2)
        ],
        { 'temperature': 8500 }
    )
    
    iuRecipe(evt, getRecipeID('umbral_ingot'), IUMachineCraft.MOLECULAR_DOUBLE,
        [
            asItem(item.arphex.umbral_shard),
            asItem(tag.ingot.stellite, 4)
        ],[
            asItem(item.arphex.umbral_ingot)
        ],
        { 'energy': 20000000 }
    )
    
    

    iuRecipe(evt, getRecipeID('spacetime_shard'), IUMachineCraft.ALLOY_SMELTER.lvl4,
        [
            asItem(item.ingot.netherite, 8),
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
    
    
    iuRecipe(evt, getRecipeID('scorch_charge'), IUMachineCraft.CHEMICAL_FACTORY,
        [
            asItem(fluid.lava, 250),
            asItem(item.arphex.burning_glands, 8),
            asItem('minecraft:magma_cream')
        ],[
            asItem(item.arphex.scorch_charge)
        ]
    )
    
    

}