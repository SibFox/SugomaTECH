"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerGRRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('gr', path)
    }

    evt.remove({ output: item.gr.overclocker })

    shapedRecipe(evt, getRecipeID('overclocker'),
        [
            [ null, item.gr.cell, null ],
            [ item.gr.cell, item.iu.upgrade.overclocker, item.gr.cell ],
            [ null, item.gr.cell, null ]
        ],
    item.gr.overclocker)

    evt.remove({ output: item.gr.cell_analyzer })
    evt.remove({ output: item.gr.blood_purifier })
    evt.remove({ output: item.gr.dna_extractor })
    evt.remove({ output: item.gr.dna_decryptor })
    evt.remove({ output: item.gr.plasmid_infuser })
    evt.remove({ output: item.gr.plasmid_injector })
    evt.remove({ output: item.gr.coal_generator })
    evt.remove({ output: item.gr.incubator })
    evt.remove({ output: item.gr.advanced_incubator })

    shapedRecipe(evt, getRecipeID('cell_analyzer'),
        [
            [ item.iu.module.analyzer, null, item.iu.cooling_cylinder ],
            [ item.iu.module.slot.x1, item.iu.machine_corpus.tech, item.iu.module.slot.x1 ],
            [ null, item.iu.electromotor.with_bearings.lvl1, null ]
        ],
    item.gr.cell_analyzer)

    shapedRecipe(evt, getRecipeID('blood_purifier'),
        [
            [ item.iu.module.liquid.lvl1, null, item.iu.cooling_cylinder ],
            [ item.iu.module.tank.lvl1, item.iu.machine_corpus.tech, item.iu.module.slot.x1 ],
            [ null, item.iu.electromotor.with_bearings.lvl1, null ]
        ],
    item.gr.blood_purifier)

    shapedRecipe(evt, getRecipeID('dna_extractor'),
        [
            [ item.iu.module.transformation, item.iu.cooling_cylinder, item.iu.module.extractor.lvl2 ],
            [ item.iu.module.slot.x1, item.iu.machine_corpus.tech, item.iu.module.slot.x1 ],
            [ null, item.iu.electromotor.with_bearings.lvl1, null ]
        ],
    item.gr.dna_extractor)

    shapedRecipe(evt, getRecipeID('dna_decryptor'),
        [
            [ item.iu.module.analyzer, item.iu.cooling_cylinder, item.iu.module.circuit ],
            [ item.iu.module.slot.x1, item.iu.machine_corpus.tech, item.iu.module.slot.x1 ],
            [ null, item.iu.electromotor.with_bearings.lvl1, null ]
        ],
    item.gr.dna_decryptor)

    shapedRecipe(evt, getRecipeID('plasmid_infuser'),
        [
            [ item.iu.module.combining.lvl2, null, item.iu.cooling_cylinder ],
            [ item.iu.module.slot.x1, item.iu.machine_corpus.tech, item.iu.module.slot.x1 ],
            [ null, item.iu.electromotor.with_bearings.lvl1, null ]
        ],
    item.gr.plasmid_infuser)

    shapedRecipe(evt, getRecipeID('plasmid_injector'),
        [
            [ item.iu.module.combining.lvl2, item.iu.cooling_cylinder, item.iu.module.circuit ],
            [ item.iu.module.slot.x1, item.iu.machine_corpus.tech, item.iu.module.tank.lvl1 ],
            [ null, item.iu.electromotor.with_bearings.lvl1, null ]
        ],
    item.gr.plasmid_injector)

    shapedRecipe(evt, getRecipeID('advanced_incubator'),
        [
            [ item.iu.module.combining.lvl2, item.iu.module.heat.lvl2, item.iu.module.brewing ],
            [ item.iu.module.slot.x4, item.iu.machine_corpus.tech, item.iu.module.slot.x2 ],
            [ null, item.iu.electromotor.with_bearings.lvl1, null ]
        ],
    item.gr.advanced_incubator)

    evt.shapeless(Item.of(item.gr.coal_generator, 1),
        [
            item.iu.module.generator.lvl1, item.iu.machine_corpus.tech, item.furnace
        ]
    ).id(getRecipeID('coal_generator'))

    console.info('Genetics Resequenced recipe adding passed')
}