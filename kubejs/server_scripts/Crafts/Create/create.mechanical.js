"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCreateMechanicalRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('create/mechanical', path)
    }

    evt.recipes.create.mechanical_crafting('createaddition:alternator', [
        '  A  ',
        ' ISI ',
        'ISRSI',
        ' ICI '
    ], {
        A: item.create.andesite_alloy,
        C: item.iu.transistor.lvl2,
        I: tag.plate.titanium_steel,
        R: tag.shaft,
        S: item.iu.spool.lvl2
    }).id(getRecipeID('alternator'))
    

    evt.recipes.create.mechanical_crafting('createaddition:electric_motor', [
        '  A  ',
        ' BSB ',
        'BSRSB',
        ' BCB '
    ], {
        A: item.create.andesite_alloy,
        B: tag.plate.alumel,
        C: item.iu.transistor.lvl2,
        R: tag.shaft,
        S: item.iu.spool.lvl2
    }).id(getRecipeID('electric_motor'))

    evt.recipes.create.mechanical_crafting('createaddition:tesla_coil', [
        'SSS',
        'CAC',
        'PBP',
        'PEP'
    ], {
        A: item.create.andesite_alloy,
        B: item.iu.machine_corpus.tech,
        C: item.iu.transistor.lvl2,
        E: item.create.electron_tube,
        P: tag.plate.alumel,
        S: item.iu.spool.superconducting.lvl1
    }).id(getRecipeID('tesla_coil'))

    cnRecipe(evt, asItem(item.create.integrated_circuit),
        [
            '     ',
            '  L  ',
            'DRQRD',
            ' EEE ',
            '     '
        ],{
            Q: item.create.electron_tube,
            E: tag.nugget.electrum,
            L: item.plate.lapis,
            R: item.ingot.red_alloy,
            D: item.iu.diode.lvl1
        },
        true
    )
    
    evt.shapeless(Item.of('powergrid:diode', 1),
        [
            item.iu.diode.lvl1
        ]
    ).id(getRecipeID('diode_iu_pg'))
    
    evt.shapeless(Item.of(item.iu.diode.lvl1, 1),
        [
            'powergrid:diode'
        ]
    ).id(getRecipeID('diode_pg_iu'))
}