"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCreateRemovings = (evt) => {
    // WARN: Удалять исключительно с добавлением not: { type: 'create:sequenced_assembly' }
    // иначе затрагиваются input'ы последовательных крафтов

    evt.remove({ output: item.create.andesite_alloy, not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: item.create.electron_tube, not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: item.create.transmitter, not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: item.create.belt, not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'create:propeller', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'create:mechanical_drill', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'create:brass_ingot', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'create:brass_sheet', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'create:brass_nugget', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'simulated:gyroscopic_mechanism'})
    evt.remove({ output: 'powergrid:wire', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'powergrid:iron_wire', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'powergrid:golden_wire', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'powergrid:insulated_copper_wire', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'powergrid:resistive_coil', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'powergrid:copper_coil', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'create:fluid_pipe', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'powergrid:diode', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'offroad:small_tire', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'offroad:tire', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'offroad:large_tire', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'offroad:monstrous_tire', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'simulated:redstone_magnet', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'createpropulsion:stirling_engine', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'powergrid:resistor', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'createthrusters:thruster', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'createpropulsion:thruster', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'createpropulsion:ion_thruster', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'createthrusters:thruster_lense', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'createthrusters:alternator', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'createthrusters:industrial_motor', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'aeronautics:smart_propeller', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'aeronautics:andesite_propeller', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'petrolsparts:pneumatic_tube', not: { type: 'create:sequenced_assembly'} })


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