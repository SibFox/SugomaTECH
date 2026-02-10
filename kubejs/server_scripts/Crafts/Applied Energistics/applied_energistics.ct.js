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
            [ tag.ingot.iron, tag.ingot.iron, tag.ingot.iron ],
            [ tag.ingot.iron, item.iu.base_generator, tag.ingot.iron ],
            [ tag.ingot.iron, item.ae.energy_acceptor, tag.ingot.iron ]
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

    // const processorRecipe = (id, printed, processor, output) => {
    //     shapedRecipe(evt, getRecipeID(id),
    //     [
    //         [ null, item.ae.printed_silicon, null ],
    //         [ printed, processor, printed ],
    //         [ null, item.ae.printed_silicon, null ]
    //     ], output, 6)
    // }

    // processorRecipe('calculation_processor', item.ae.processor.printed.calculation,
    //     item.iu.processor.lvl1, item.ae.processor.calculation)

    // processorRecipe('logic_processor', item.ae.processor.printed.logic,
    //     item.iu.processor.lvl1, item.ae.processor.logic)        

    // processorRecipe('engineering_processor', item.ae.processor.printed.engineering,
    //     item.iu.processor.lvl2, item.ae.processor.engineering)

    // processorRecipe('concurrent_processor', item.ae.processor.printed.concurrent,
    //     item.iu.processor.lvl2, item.ae.processor.concurrent)

    // processorRecipe('energy_processor', item.ae.processor.printed.energy,
    //     item.iu.processor.lvl2, item.ae.processor.energy)

    // processorRecipe('quantum_processor', item.ae.processor.printed.quantum,
    //     item.iu.processor.lvl7, item.ae.processor.quantum)

    // processorRecipe('accumulation_processor', item.ae.processor.printed.accumulation,
    //     item.iu.processor.lvl4, item.ae.processor.accumulation)

}