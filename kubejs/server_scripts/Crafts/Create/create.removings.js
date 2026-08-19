"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCreateRemovings = (evt) => {
    // WARN: Удалять исключительно с добавлением not: { type: 'create:sequenced_assembly' }
    // иначе затрагиваются input'ы последовательных крафтов

    evt.remove({ output: [
        item.create.andesite_alloy, item.create.electron_tube,
        item.create.transmitter, item.create.belt,
        'create:propeller', 'create:mechanical_drill',
        'create:brass_ingot', 'create:brass_sheet',
        'create:brass_nugget', 'simulated:gyroscopic_mechanism',
        'powergrid:wire', 'powergrid:iron_wire', 'powergrid:golden_wire',
        'powergrid:insulated_copper_wire', 'powergrid:resistive_coil',
        'powergrid:copper_coil', 'create:fluid_pipe',
        'powergrid:diode', 'offroad:small_tire', 'offroad:tire',
        'offroad:large_tire', 'offroad:monstrous_tire',
        'simulated:redstone_magnet', 'createpropulsion:stirling_engine',
        'powergrid:resistor', 'createthrusters:thruster',
        'createpropulsion:thruster', 'createpropulsion:ion_thruster',
        'createthrusters:thruster_lense', 'createthrusters:alternator',
        'createthrusters:industrial_motor', 'aeronautics:smart_propeller',
        'aeronautics:andesite_propeller', 'petrolsparts:pneumatic_tube',
        'create:mechanical_press'
    ],
    not: { type: 'create:sequenced_assembly'} })


    // evt.remove({ id: 'createbigcannons:melting/melt_bronze_ingot' })
    // evt.remove({ id: 'createbigcannons:melting/melt_bronze_nugget' })
    // evt.remove({ id: 'createbigcannons:melting/melt_bronze_block' })
    // evt.remove({ id: 'createbigcannons:melting/melt_steel_ingot' })
    // evt.remove({ id: 'createbigcannons:melting/melt_steel_nugget' })
    // evt.remove({ id: 'createbigcannons:melting/melt_steel_block' })


    evt.remove({ output: 'create_aeronautics_toolgun:magnetic_gun' })
    evt.remove({ output: 'create_aeronautics_toolgun:survival_structure_tool' })


    evt.remove({ output: 'createthrusters:processing_upgrade_smoking_t1' })
    evt.remove({ output: 'createthrusters:processing_upgrade_smoking_t2' })
    evt.remove({ output: 'createthrusters:processing_upgrade_smoking_t3' })
    evt.remove({ output: 'createthrusters:processing_upgrade_smoking_t4' })
    evt.remove({ output: 'createthrusters:processing_upgrade_smelting_t1' })
    evt.remove({ output: 'createthrusters:processing_upgrade_smelting_t2' })
    evt.remove({ output: 'createthrusters:processing_upgrade_smelting_t3' })
    evt.remove({ output: 'createthrusters:processing_upgrade_smelting_t4' })
    evt.remove({ output: 'createthrusters:processing_upgrade_haunting_t1' })
    evt.remove({ output: 'createthrusters:processing_upgrade_haunting_t2' })
    evt.remove({ output: 'createthrusters:processing_upgrade_haunting_t3' })
    evt.remove({ output: 'createthrusters:processing_upgrade_haunting_t4' })
    evt.remove({ output: 'createthrusters:propulsion_upgrade_t1' })
    evt.remove({ output: 'createthrusters:propulsion_upgrade_t2' })
    evt.remove({ output: 'createthrusters:propulsion_upgrade_t3' })
    evt.remove({ output: 'createthrusters:propulsion_upgrade_t4' })
}