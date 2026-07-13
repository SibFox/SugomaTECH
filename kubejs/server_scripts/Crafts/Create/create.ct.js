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
            item.ingot.red_alloy, item.iu.magnet, tag.ore_block.steel
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



    evt.shaped(
        Item.of('createthrusters:processing_upgrade_smoking_t1', 1),
        [
            ' C ',
            ' U ',
            'AAA'
        ],{
            U: item.iu.upgrade_module.casing,
            C: 'minecraft:smoker',
            A: item.create.andesite_alloy
        }
    ).id(getRecipeID('processing_upgrade_smoking_t1'))

    evt.shaped(
        Item.of('createthrusters:processing_upgrade_smoking_t2', 1),
        [
            'B B',
            'UPU',
            'AAA'
        ],{
            U: 'createthrusters:processing_upgrade_smoking_t1',
            A: tag.ingot.wolframite,
            P: item.iu.microchip.lvl4,
            B: item.iu.tech_box.normal.nano,
        }
    ).id(getRecipeID('processing_upgrade_smoking_t2'))

    evt.shaped(
        Item.of('createthrusters:processing_upgrade_smoking_t3', 1),
        [
            'B B',
            'UPU',
            'AAA'
        ],{
            U: 'createthrusters:processing_upgrade_smoking_t2',
            A: tag.ingot.aluminiumsilicon,
            P: item.iu.microchip.lvl6,
            B: item.iu.tech_box.big.nano,
        }
    ).id(getRecipeID('processing_upgrade_smoking_t3'))

    evt.shaped(
        Item.of('createthrusters:processing_upgrade_smoking_t4', 1),
        [
            'B B',
            'UPU',
            'AAA'
        ],{
            U: 'createthrusters:processing_upgrade_smoking_t3',
            A: tag.ingot.permalloy,
            P: item.iu.microchip.lvl8,
            B: item.iu.tech_box.big.quantum,
        }
    ).id(getRecipeID('processing_upgrade_smoking_t4'))
    
    
    evt.shaped(
        Item.of('createthrusters:processing_upgrade_smelting_t1', 1),
        [
            ' C ',
            ' U ',
            'AAA'
        ],{
            U: item.iu.upgrade_module.casing,
            C: 'minecraft:blast_furnace',
            A: item.create.andesite_alloy
        }
    ).id(getRecipeID('processing_upgrade_smelting_t1'))

    evt.shaped(
        Item.of('createthrusters:processing_upgrade_smelting_t2', 1),
        [
            'B B',
            'UPU',
            'AAA'
        ],{
            U: 'createthrusters:processing_upgrade_smelting_t1',
            A: tag.ingot.galliumarsenic,
            P: item.iu.microchip.lvl4,
            B: item.iu.tech_box.normal.nano,
        }
    ).id(getRecipeID('processing_upgrade_smelting_t2'))

    evt.shaped(
        Item.of('createthrusters:processing_upgrade_smelting_t3', 1),
        [
            'B B',
            'UPU',
            'AAA'
        ],{
            U: 'createthrusters:processing_upgrade_smelting_t2',
            A: tag.ingot.berylliumbronze,
            P: item.iu.microchip.lvl6,
            B: item.iu.tech_box.big.nano,
        }
    ).id(getRecipeID('processing_upgrade_smelting_t3'))

    evt.shaped(
        Item.of('createthrusters:processing_upgrade_smelting_t4', 1),
        [
            'B B',
            'UPU',
            'AAA'
        ],{
            U: 'createthrusters:processing_upgrade_smelting_t3',
            A: tag.ingot.woods,
            P: item.iu.microchip.lvl8,
            B: item.iu.tech_box.big.quantum,
        }
    ).id(getRecipeID('processing_upgrade_smelting_t4'))
    
    
    evt.shaped(
        Item.of('createthrusters:processing_upgrade_haunting_t1', 1),
        [
            ' C ',
            ' U ',
            'AAA'
        ],{
            U: item.iu.upgrade_module.casing,
            C: 'minecraft:soul_lantern',
            A: item.create.andesite_alloy
        }
    ).id(getRecipeID('processing_upgrade_haunting_t1'))

    evt.shaped(
        Item.of('createthrusters:processing_upgrade_haunting_t2', 1),
        [
            'B B',
            'UPU',
            'AAA'
        ],{
            U: 'createthrusters:processing_upgrade_haunting_t1',
            A: tag.ingot.niobium_titanium,
            P: item.iu.microchip.lvl4,
            B: item.iu.tech_box.normal.nano,
        }
    ).id(getRecipeID('processing_upgrade_haunting_t2'))

    evt.shaped(
        Item.of('createthrusters:processing_upgrade_haunting_t3', 1),
        [
            'B B',
            'UPU',
            'AAA'
        ],{
            U: 'createthrusters:processing_upgrade_haunting_t2',
            A: tag.ingot.hafniumcarbide,
            P: item.iu.microchip.lvl6,
            B: item.iu.tech_box.big.nano,
        }
    ).id(getRecipeID('processing_upgrade_haunting_t3'))

    evt.shaped(
        Item.of('createthrusters:processing_upgrade_haunting_t4', 1),
        [
            'B B',
            'UPU',
            'AAA'
        ],{
            U: 'createthrusters:processing_upgrade_haunting_t3',
            A: tag.ingot.stainless_steel,
            P: item.iu.microchip.lvl8,
            B: item.iu.tech_box.big.quantum,
        }
    ).id(getRecipeID('processing_upgrade_haunting_t4'))


    evt.shaped(
        Item.of('createthrusters:propulsion_upgrade_t1', 1),
        [
            'III',
            'SPS',
            ' U '
        ],{
            U: item.iu.upgrade_module.casing,
            P: item.iu.microchip.lvl2,
            I: 'industrialupgrade:crafting_elements/crafting_716_element', //неодимовый электропривод
            S: item.iu.spool.superconducting.lvl1
        }
    ).id(getRecipeID('propulsion_upgrade_t1'))

    evt.shaped(
        Item.of('createthrusters:propulsion_upgrade_t2', 1),
        [
            'III',
            'SPS',
            'UBU'
        ],{
            U: 'createthrusters:propulsion_upgrade_t1',
            P: item.iu.microchip.lvl4,
            I: 'industrialupgrade:crafting_elements/crafting_719_element', //ниобий-титановый электропривод
            B: item.iu.tech_box.big.nano,
            S: item.iu.spool.superconducting.lvl2
        }
    ).id(getRecipeID('propulsion_upgrade_t2'))

    evt.shaped(
        Item.of('createthrusters:propulsion_upgrade_t3', 1),
        [
            'III',
            'SPS',
            'UBU'
        ],{
            U: 'createthrusters:propulsion_upgrade_t2',
            P: item.iu.microchip.lvl6,
            I: 'industrialupgrade:crafting_elements/crafting_712_element', //элеткропривод из карбида гафния
            B: item.iu.tech_box.big.quantum,
            S: item.iu.spool.superconducting.lvl3
        }
    ).id(getRecipeID('propulsion_upgrade_t3'))

    evt.shaped(
        Item.of('createthrusters:propulsion_upgrade_t4', 1),
        [
            'III',
            'SPS',
            'UBU'
        ],{
            U: 'createthrusters:propulsion_upgrade_t3',
            P: item.iu.microchip.lvl8,
            I: 'industrialupgrade:crafting_elements/crafting_718_element', //электропривод из никелового сплава
            B: item.iu.tech_box.big.spectral,
            S: item.iu.spool.superconducting.lvl4
        }
    ).id(getRecipeID('propulsion_upgrade_t4'))
    
    

    evt.shaped(
        Item.of('createthrusters:thruster', 1),
        [
            'LQB',
            'PSG',
            'LFB'
        ],{
            Q: 'industrialupgrade:crafting_elements/crafting_747_element', //панель управления
            S: tag.ore_block.steel,
            P: item.create.mechanical_pump,
            F: 'industrialupgrade:crafting_elements/crafting_758_element', //стабилизаторы полёта
            L: tag.doubleplate.brass,
            G: item.iu.tempered_glass,
            B: 'industrialupgrade:crafting_elements/crafting_702_element' //осмииридиевые ускорители
        }
    ).id(getRecipeID('thrusters/thruster'))

    evt.shaped(
        Item.of('createthrusters:thruster_lense', 1),
        [
            ' R ',
            'AVA',
            ' R '
        ],{
            A: item.amethyst_shard,
            V: item.ae.vibrant_glass,
            R: item.ingot.red_alloy
        }
    ).id(getRecipeID('thrusters/thruster_lense'))
    
    
    evt.shaped(
        Item.of('createpropulsion:thruster', 1),
        [
            'LYY',
            'PSF',
            'LYY'
        ],{
            S: tag.ore_block.steel,
            P: item.create.mechanical_pump,
            L: tag.doubleplate.brass,
            F: item.create.fluid_pipe,
            Y: tag.gear.yttrium
        }
    ).id(getRecipeID('propulsion/thruster'))
    
    evt.shaped(
        Item.of('createpropulsion:ion_thruster', 1),
        [
            'EQF',
            'OSO',
            'MCM'
        ],{
            C: 'create:chute',
            O: tag.doubleplate.obsidian,
            E: item.iu.energy_flow_generator,
            S: tag.ore_block.steel,
            F: 'industrialupgrade:crafting_elements/crafting_768_element', //фотонная камера
            M: 'industrialupgrade:crafting_elements/crafting_692_element', //ванадо-алюминиевые электроприводы
            Q: item.iu.electromotor.with_bearings.lvl2
        }
    ).id(getRecipeID('propulsion/ion_thruster'))
    
    
}