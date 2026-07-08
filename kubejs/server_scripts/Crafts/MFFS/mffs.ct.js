"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerMFFSCTRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('mffs', path)
    }

    shapedRecipe(evt, getRecipeID('focus_matrix'),
        [
            [ tag.plate.molybdenumsteel, item.iu.wire.glass, tag.plate.molybdenumsteel ],
            [ item.iu.graphene_wire, item.iu.microchip.lvl6, item.iu.graphene_wire ],
            [ tag.plate.molybdenumsteel, item.iu.wire.glass, tag.plate.molybdenumsteel ]
        ],
    item.mffs.focus_matrix, 4)

    shapedRecipe(evt, getRecipeID('projector'),
        [
            [ null, item.iu.battery.energy_crystal.lvl2, null ],
            [ item.iu.module.synthesis.photon, item.mffs.focus_matrix, item.iu.module.slot.x8 ],
            [ item.iu.module.combining.lvl2, item.iu.machine_corpus.tech_adv, item.iu.module.tank.lvl4 ]
        ],
    'mffs:projector')

    shapedRecipe(evt, getRecipeID('coercion_deriver'),
        [
            [ null, item.iu.module.generator.lvl2, null ],
            [ null, item.mffs.focus_matrix, null ],
            [ item.iu.module.tank.lvl4, item.iu.machine_corpus.tech_adv, item.iu.module.slot.x1 ]
        ],
    'mffs:coercion_deriver')

    shapedRecipe(evt, getRecipeID('fortron_capacitor'),
        [
            [ tag.doubleplate.molybdenumsteel, item.iu.module.tank.storage, tag.doubleplate.molybdenumsteel ],
            [ tag.plate.berylliumbronze, item.mffs.focus_matrix, tag.plate.berylliumbronze ],
            [ tag.doubleplate.molybdenumsteel, item.iu.module.tank.storage, tag.doubleplate.molybdenumsteel ]
        ],
    'mffs:fortron_capacitor')

    shapedRecipe(evt, getRecipeID('biometric_identifier'),
        [
            [ null, item.iu.module.scaner.lvl2, null ],
            [ item.iu.module.slot.x3, item.mffs.focus_matrix, item.iu.module.tank.lvl1 ],
            [ null, item.iu.machine_corpus.tech_adv, null ]
        ],
    'mffs:biometric_identifier')

    shapedRecipe(evt, getRecipeID('interdiction_matrix'),
        [
            [ item.iu.module.scaner.lvl2, 'mffs:shock_module', item.iu.module.preservation ],
            [ null, item.mffs.focus_matrix, null ],
            [ item.iu.module.slot.x8, item.iu.machine_corpus.tech_adv, item.iu.module.slot.x8 ]
        ],
    'mffs:interdiction_matrix')

    shapedRecipe(evt, getRecipeID('battery'),
        [
            [ item.iu.battery.lead ],
            [ item.ingot.red_alloy ]
        ],
    'mffs:battery')

    shapedRecipe(evt, getRecipeID('cube_mode'),
        [
            [ item.ingot.composite, item.ingot.composite, item.ingot.composite ],
            [ item.ingot.composite, item.mffs.focus_matrix, item.ingot.composite ],
            [ item.ingot.composite, item.ingot.composite, item.ingot.composite ]
        ],
    'mffs:cube_mode')

    shapedRecipe(evt, getRecipeID('sphere_mode'),
        [
            [ null, item.ingot.composite, null ],
            [ item.ingot.composite, item.mffs.focus_matrix, item.ingot.composite ],
            [ null, item.ingot.composite, null ]
        ],
    'mffs:sphere_mode')

    shapedRecipe(evt, getRecipeID('tube_mode'),
        [
            [ item.ingot.composite, item.ingot.composite, item.ingot.composite ],
            [ null, item.mffs.focus_matrix, null ],
            [ item.ingot.composite, item.ingot.composite, item.ingot.composite ]
        ],
    'mffs:tube_mode')

    evt.shaped(
        Item.of('mffs:cylinder_mode', 1),
        [
            'C C',
            'CDC',
            'C C'
        ],{
            C: item.iu.composite,
            D: item.mffs.focus_matrix
        }
    ).id(getRecipeID('cylinder_mode'))
    
    shapedRecipe(evt, getRecipeID('pyramid_mode'),
        [
            [ item.ingot.composite, null, null ],
            [ item.ingot.composite, item.mffs.focus_matrix, null ],
            [ item.ingot.composite, item.ingot.composite, item.ingot.composite ]
        ],
    'mffs:pyramid_mode')

    shapedRecipe(evt, getRecipeID('scale_module'),
        [
            [ item.iu.module.upgrade ],
            [ item.mffs.focus_matrix ],
            [ item.iu.upgrade_casing ]
        ],
    'mffs:scale_module', 8)

    evt.shapeless(Item.of('mffs:rotation_module', 3),
        [
            '2x mffs:scale_module', item.iu.graphene_wire
        ]
    ).id(getRecipeID('rotation_module'))

    shapedRecipe(evt, getRecipeID('translation_module'),
        [
            [ item.iu.module.upgrade ],
            [ 'mffs:scale_module' ],
            [ item.iu.module.downgrade ]
        ],
    'mffs:translation_module', 4)

    shapedRecipe(evt, getRecipeID('speed_module'),
        [
            [ null, item.iu.module.speed, null ],
            [ null, item.mffs.focus_matrix, null ],
            [ item.ingot.red_alloy, item.iu.upgrade_casing, item.ingot.red_alloy ]
        ],
    'mffs:speed_module', 2)

    shapedRecipe(evt, getRecipeID('capacity_module'),
        [
            [ item.iu.module.energy.lvl2 ],
            [ item.mffs.focus_matrix ],
            [ item.iu.upgrade_casing ]
        ],
    'mffs:capacity_module', 4)

    shapedRecipe(evt, getRecipeID('camouflage_module'),
        [
            [ tag.wool, tag.wool, tag.wool ],
            [ tag.wool, item.mffs.focus_matrix, tag.wool ],
            [ tag.wool, item.iu.upgrade_casing, tag.wool ]
        ],
    'mffs:camouflage_module')
}