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

    shapedRecipe(evt, getRecipeID('inscriber'),
        [
            [ item.iu.module.macerator.lvl2, null, item.iu.module.cutting.lvl2 ],
            [ item.ae.processor.calculation, item.iu.machine_corpus.tech, item.ae.processor.logic ],
            [ item.iu.module.slot.x3, item.iu.electromotor.lvl2, item.iu.module.slot.x1 ]
        ],
    'ae2:inscriber')

    
    
    evt.shaped(
        Item.of(item.ae.extended_machine_frame, 1),
        [
            'ETE',
            'SCS',
            'ETE'
        ],{
            E: item.ingot.entro,
            T: item.ingot.sky_steel,
            S: item.ingot.sky_bronze,
            C: item.iu.machine_corpus.advanced_tech
        }
    ).id(getRecipeID('extended_machine_frame'))

    evt.shaped(
        Item.of(item.ae.extended_machine_frame, 1),
        [
            'ESE',
            'TCT',
            'ESE'
        ],{
            E: item.ingot.entro,
            T: item.ingot.sky_steel,
            S: item.ingot.sky_bronze,
            C: item.iu.machine_corpus.advanced_tech
        }
    ).id(getRecipeID('extended_machine_frame'))
    
    
    
    shapedRecipe(evt, getRecipeID('crystal_assembler'),
        [
            [ null, item.iu.module.assembler, null ],
            [ item.ae.processor.logic, item.ae.extended_machine_frame, item.ae.processor.concurrent ],
            [ item.iu.module.slot.x8, item.iu.electromotor.lvl2, item.iu.module.tank.storage ]
        ],
    'extendedae:crystal_assembler')



    aeReactionRecipe(evt, getRecipeID('quantum_alloy'),
        200000, asItem(fluid.quantum_infusion, 1000),
        [ asItem(item.ingot.woods_alloy, 4), asItem(item.ae.shattered_singularity, 4), asItem(item.ae.singularity, 4) ],
        asItem(item.ingot.quantum_alloy)
    )

    aeAssemblerRecipe(evt, getRecipeID('entro_ingot'),
        asItem(fluid.redstone, 144),
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
        500000, asItem(fluid.redstone, 1440),
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
        200000, asItem(fluid.redstone, 720),
        [
            asItem(item.ae.quantum_singularity, 2),
            asItem(item.ae.ender_dust, 2),
            asItem(item.ae.sky_dust, 2)
        ],
        asItem(item.ae.shattered_singularity, 2)
    )
    
    

}