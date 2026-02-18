"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerAECTRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('ae2', path)
    }

    shapedRecipe(evt, getRecipeID('vibration_chamber'),
        [
            [ item.iu.machine_corpus.tech, tag.ingot.iron, item.iu.machine_corpus.tech ],
            [ tag.ingot.steel, item.iu.base_generator, tag.ingot.steel ],
            [ tag.ingot.steel, item.ae.energy_acceptor, tag.ingot.steel ]
        ],
    'ae2:vibration_chamber')

    shapedRecipe(evt, getRecipeID('certus_quartz_crystal'),
        [
            [ item.iu.dust.quartz, item.iu.charged_quartz, item.iu.dust.quartz ],
            [ item.iu.charged_quartz, item.iu.dust.quartz, item.iu.charged_quartz ],
            [ item.iu.dust.quartz, item.iu.charged_quartz, item.iu.dust.quartz ]
        ],
    item.ae.certus_quartz_crystal, 8)

    evt.shapeless(Item.of(item.ae.fluix_crystal, 2),
        [
            item.iu.charged_quartz, item.iu.charged_redstone, item.ae.charged_certus_quartz_crystal
        ]
    ).id(getRecipeID('fluix_crystal'))

    evt.shapeless(Item.of(item.ae.silicon, 4),
        [
            item.iu.dust.calcium_phosphate, item.iu.dust.silicon
        ]
    ).id(getRecipeID('silicon_x4'))

    evt.shapeless(Item.of(item.ae.silicon, 8),
        [
            item.iu.dust.potassium, '4x ' + item.iu.dust.silicon
        ]
    ).id(getRecipeID('silicon_x8'))

    aeReactionRecipe(evt, getRecipeID('quantum_alloy'),
        200000, asItem(fluid.quantum_infusion, 1000),
        [ asItem(item.ingot.woods_alloy, 4), asItem(item.ae.shattered_singularity, 4), asItem(item.ae.singularity, 4) ],
        asItem(item.ingot.quantum_alloy)
    )

    aeAssemblerRecipe(evt, getRecipeID('entro_ingot'),
        asItem(fluid.redstone, 100),
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

    aeReactionRecipe(evt, getRecipeID('entro_ingot'),
        500000, asItem(fluid.redstone, 1000),
        [
            asItem(item.ae.entro_dust, 32),
            asItem(item.ingot.vanadoalumite, 32),
            asItem(item.ae.sky_dust, 32)
        ],
        asItem(item.ingot.entro, 64)
    )

    aeReactionRecipe(evt, getRecipeID('sky_steel'),
        300000, asItem(fluid.lava, 1000),
        [
            asItem(item.ae.charged_certus_quartz_crystal, 32),
            asItem(item.ingot.titanium_steel, 32),
            asItem(item.ae.sky_dust, 32)
        ],
        asItem(item.ingot.sky_steel, 64)
    )
    
    aeReactionRecipe(evt, getRecipeID('sky_bronze'),
        250000, asItem(fluid.lava, 1000),
        [
            asItem(item.ae.charged_certus_quartz_crystal, 32),
            asItem(item.ingot.bronze, 32),
            asItem(item.ae.sky_dust, 32),
        ],
        asItem(item.ingot.sky_bronze, 64)
    )

}