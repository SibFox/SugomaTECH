"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCreateMechanicalRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('create/mechanical', path)
    }

    evt.recipes.create.mechanical_crafting('createthrusters:alternator', [
        ' IPI ',
        'ISCSI',
        'ISASI',
        'ISESI',
        ' IFI '
    ], {
        P: item.create.casing.platinum,
        A: item.iu.battery.lithium,
        C: item.iu.capacitor.lvl3,
        E: item.iu.electromotor.lvl2,
        I: tag.plate.titanium_steel,
        F: tag.shaft,
        S: item.iu.spool.lvl2
    }).id(getRecipeID('alternator'))

    evt.recipes.create.mechanical_crafting('createthrusters:industrial_motor', [
        ' IPI ',
        'ISTSI',
        'ISASI',
        'ISESI',
        ' IFI '
    ], {
        P: item.create.casing.platinum,
        A: item.iu.battery.lithium,
        T: item.iu.transistor.lvl2,
        E: item.iu.electromotor.lvl2,
        I: tag.plate.titanium_steel,
        F: tag.shaft,
        S: item.iu.spool.lvl2
    }).id(getRecipeID('industrial_motor'))


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