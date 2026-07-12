"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCreateCTRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('create', path)
    }

    shapedRecipe(evt, getRecipeID('copper_spool'),
        [
            [ null, item.iu.wire.bare.copper, null ],
            [ item.iu.wire.bare.copper, item.create.spool.item, item.iu.wire.bare.copper ],
            [ null, item.iu.wire.bare.copper, null ]
        ],
    item.create.spool.copper)

    shapedRecipe(evt, getRecipeID('gold_spool'),
        [
            [ null, item.iu.wire.bare.gold, null ],
            [ item.iu.wire.bare.gold, item.create.spool.item, item.iu.wire.bare.gold ],
            [ null, item.iu.wire.bare.gold, null ]
        ],
    item.create.spool.gold)

    shapedRecipe(evt, getRecipeID('electrum_spool'),
        [
            [ null, item.iu.wire.isolated.gold, null ],
            [ item.iu.wire.isolated.gold, item.create.spool.item, item.iu.wire.isolated.gold ],
            [ null, item.iu.wire.isolated.gold, null ]
        ],
    item.create.spool.electrum)

    shapedRecipe(evt, getRecipeID('modular_accumulator'),
        [
            [ null, tag.rod.electrum, null ],
            [ item.iu.capacitor.lvl2, item.create.casing.brass, item.iu.capacitor.lvl2 ],
            [ item.iu.battery.lead, item.iu.battery.lead, item.iu.battery.lead ]
        ],
    item.create.modular_accumulator)

    shapedRecipe(evt, getRecipeID('connector/small'),
        [
            [ null, item.create.andesite_alloy, null ],
            [ item.create.andesite_alloy, item.iu.spool.lvl1, item.create.andesite_alloy ],
            [ null, item.create.andesite_alloy, null ]
        ],
    item.create.connector.small)

    shapedRecipe(evt, getRecipeID('connector/large'),
        [
            [ null, item.create.andesite_alloy, null ],
            [ item.create.andesite_alloy, item.iu.spool.superconducting.lvl1, item.create.andesite_alloy ],
            [ null, item.create.andesite_alloy, null ]
        ],
    item.create.connector.large)

    evt.shapeless(Item.of(item.create.connector.small_light, 1),
        [
            item.iu.wire.bare.tin, tag.glass, item.create.connector.small
        ]
    ).id(getRecipeID('connector/small_light'))

    // shapedRecipe(evt, getRecipeID('straw'),
    //     [
    //         [ item.bamboo, item.bamboo ],
    //         [ item.bamboo, null ],
    //         [ item.bamboo, null ]
    //     ],
    // 'createaddition:straw')

    shapedRecipe(evt, getRecipeID('spool'),
        [
            [ item.plate.iron ],
            [ item.rod.tungsten ],
            [ item.plate.iron ]
        ],
    item.create.spool.item, 4)

    shapedRecipe(evt, getRecipeID('mechanical_drill'),
        [
            [ item.ia.iron_drill ],
            [ tag.gear.titanium ],
            [ item.create.casing.andesite ]
        ],
    'create:mechanical_drill')
    
    evt.shaped(
        Item.of(item.create.lighter, 1),
        [
            ' P ',
            'PTP',
            'PAP'
        ],{
            P: tag.plate.brass,
            A: item.create.andesite_alloy,
            T: item.cn.storage
        }
    ).id(getRecipeID('lighter'))

    evt.shapeless(Item.of('powergrid:wire', 1),
        [
            item.iu.wire.bare.copper            
        ]
    ).id(getRecipeID('wire_bare_copper'))

    evt.shapeless(Item.of('powergrid:iron_wire', 1),
        [
            item.iu.wire.bare.iron
        ]
    ).id(getRecipeID('wire_bare_iron'))

    evt.shapeless(Item.of('powergrid:golden_wire', 1),
        [
            item.iu.wire.bare.gold
        ]
    ).id(getRecipeID('wire_bare_gold'))

    evt.shapeless(Item.of('powergrid:insulated_copper_wire', 1),
        [
            item.iu.wire.isolated.copper
        ]
    ).id(getRecipeID('wire_isolated_copper'))

    evt.shaped(
        Item.of('powergrid:copper_coil', 1),
        [
            'W W',
            'WSW',
            'W W'
        ],{
            W: tag.wire.copper,
            S: item.create.spool.item
        }
    ).id(getRecipeID('copper_coil'))
    
    evt.shaped(
        Item.of('powergrid:resistive_coil', 1),
        [
            'W W',
            'WSW',
            'W W'
        ],{
            W: tag.wire.iron,
            S: item.create.spool.item
        }
    ).id(getRecipeID('resistive_coil'))

    evt.shaped(
        Item.of('create:fluid_pipe', 6),
        [
            'PPP',
            ' F ',
            'PPP'
        ],{
            P: tag.plate.copper,
            F: tag.plate.bronze
        }
    ).id(getRecipeID('fluid_pipe'))
    
    evt.shapeless(Item.of('offroad:small_tire', 1),
        [
            tag.shaft, item.iu.rubber
        ]
    ).id(getRecipeID('small_tire'))
    
    evt.shaped(
        Item.of('offroad:tire', 1),
        [
            ' R ',
            'RSR',
            ' R '
        ],{
            R: item.iu.rubber,
            S: tag.shaft
        }
    ).id(getRecipeID('tire'))
    
    evt.shaped(
        Item.of('offroad:large_tire', 1),
        [
            ' R ',
            'RSR',
            ' R '
        ],{
            R: item.iu.synthetic_rubber,
            S: tag.shaft
        }
    ).id(getRecipeID('large_tire'))
    
    evt.shaped(
        Item.of('offroad:monstrous_tire', 1),
        [
            'LRL',
            'RSR',
            'LRL'
        ],{
            R: item.iu.synthetic_rubber,
            L: item.create.belt,
            S: tag.shaft
        }
    ).id(getRecipeID('monstrous_tire'))

    evt.shaped(
        Item.of(item.create.belt, 1),
        [
            'RRR',
            'RRR'
        ],{
            R: item.iu.rubber
        }
    ).id(getRecipeID('belt'))
    
    
    evt.shaped(
        Item.of('petrolsparts:pneumatic_tube', 4),
        [
            'RMR',
            'RLR',
            'TST'
        ],{
            T: tag.plate.tungsten,
            S: tag.cogwheel,
            L: item.iu.rotor.wind.ready.iron,
            M: item.create.precision_mechanism,
            R: item.iu.synthetic_rubber
        }
    ).id(getRecipeID('pneumatic_tube'))
    
    evt.shapeless(Item.of('simulated:redstone_magnet', 1),
        [
            item.ingot.red_alloy, item.iu.magnet, item.create.casing.industrial_iron
        ]
    ).id(getRecipeID('redstone_magnet'))
    
    evt.shaped(
        Item.of('createpropulsion:stirling_engine', 1),
        [
            'GSG',
            'AEA',
            'MMM'
        ],{
            S: tag.shaft,
            E: item.create.engine_assembly,
            A: item.create.andesite_alloy,
            G: tag.doubleplate.niobium_titanium,
            M: tag.doubleplate.bronze
        }
    ).id(getRecipeID('stirling_engine'))
    
    evt.shapeless(Item.of('powergrid:resistor', 1),
        [
            item.iu.resistor.copper
        ]
    ).id(getRecipeID('resistor_iu_pg'))
    
    evt.shapeless(Item.of(item.iu.resistor.copper, 1),
        [
            'powergrid:resistor'
        ]
    ).id(getRecipeID('resistor_pg_iu'))
}