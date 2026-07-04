"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerAEMachinesRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('ae', path)
    }

    // ~~~~~~~ Кристальный сборщик ~~~~~~~
    
    aeAssemblerRecipe(evt, getRecipeID('entro_ingot'),
    asItem(fluid.redstone, 25),
    [
        asItem(item.ae.entro_dust, 4),
        asItem(item.ingot.vanadoalumite, 4),
        asItem(item.plate.lapis, 4)
    ],
    asItem(item.ingot.entro, 8)
    )

    aeAssemblerRecipe(evt, getRecipeID('sky_steel'),
    asItem(fluid.lava, 100),
    [
        asItem(item.ae.charged_certus_quartz_crystal, 4),
        asItem(item.ingot.titanium_steel, 4),
        asItem(item.ae.sky_dust, 4)
    ],
    asItem(item.ingot.sky_steel, 8)
    )

    aeAssemblerRecipe(evt, getRecipeID('sky_bronze'),
    asItem(fluid.lava, 100),
    [
        asItem(item.ae.certus_quartz_crystal, 4),
        asItem(item.ingot.bronze, 4),
        asItem(item.ae.sky_dust, 4)
    ],
    asItem(item.ingot.sky_bronze, 8)
    )

    // ~~~~~~~ Реакционная камера ~~~~~~~
    
    aeReactionRecipe(evt, getRecipeID('quantum_alloy'),
        200000, asItem(fluid.quantum_infusion, 1000),
        [ asItem(item.ingot.woods_alloy, 4), asItem(item.ae.shattered_singularity, 4), asItem(item.ae.singularity, 4) ],
        asItem(item.ingot.quantum_alloy)
    )

    aeReactionRecipe(evt, getRecipeID('entro_ingot'),
        500000, asItem(fluid.redstone, 250),
        [
            asItem(item.ae.entro_dust, 24),
            asItem(item.ingot.vanadoalumite, 24),
            asItem(item.ae.sky_dust, 24)
        ],
        asItem(item.ingot.entro, 64)
    )

    aeReactionRecipe(evt, getRecipeID('sky_steel'),
        300000, asItem(fluid.lava, 1000),
        [
            asItem(item.ae.charged_certus_quartz_crystal, 24),
            asItem(item.ingot.titanium_steel, 24),
            asItem(item.ae.sky_dust, 24)
        ],
        asItem(item.ingot.sky_steel, 64)
    )
    
    aeReactionRecipe(evt, getRecipeID('sky_bronze'),
        250000, asItem(fluid.lava, 1000),
        [
            asItem(item.ae.charged_certus_quartz_crystal, 24),
            asItem(item.ingot.bronze, 24),
            asItem(item.ae.sky_dust, 24),
        ],
        asItem(item.ingot.sky_bronze, 64)
    )
    
    aeReactionRecipe(evt, getRecipeID('shattered_singularity'),
        200000, asItem(fluid.redstone, 250),
        [
            asItem(item.ae.quantum_singularity, 2),
            asItem(item.ae.ender_dust, 2),
            asItem(item.ae.sky_dust, 2)
        ],
        asItem(item.ae.shattered_singularity, 2)
    )

    aeReactionRecipe(evt, getRecipeID('quantum_singularity_1'),
        50000, asItem(fluid.redstone, 100),
        [
            asItem(item.ae.singularity, 4),
            asItem(item.ae.ender_dust, 4)
        ],
        asItem(item.ae.quantum_singularity, 1)
    )

    aeReactionRecipe(evt, getRecipeID('quantum_singularity_2'),
        50000, asItem(fluid.redstone, 100),
        [
            asItem(item.ae.singularity, 4),
            asItem(item.enderpearl, 4)
        ],
        asItem(item.ae.quantum_singularity, 1)
    )
    
    
}