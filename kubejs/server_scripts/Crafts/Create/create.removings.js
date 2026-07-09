"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCreateRemovings = (evt) => {
    // WARN: Удалять исключительно с добавлением not: { type: 'create:sequenced_assembly' }
    // иначе затрагиваются input'ы последовательных крафтов

    evt.remove({ output: item.create.andesite_alloy, not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: item.create.spool.item, not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: item.create.spool.copper, not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: item.create.spool.gold, not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: item.create.spool.electrum, not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: item.create.modular_accumulator, not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: item.create.connector.small, not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: item.create.connector.small_light, not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: item.create.connector.large, not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: item.ingot.electrum, type: 'create:mixing' })
    evt.remove({ output: item.create.electron_tube, not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: item.create.transmitter, not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: item.create.lighter, not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'createaddition:electrum_ingot', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'createaddition:rolling_mill', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'createaddition:electrum_amulet', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'createaddition:alternator', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'createaddition:electric_motor', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'createaddition:tesla_coil', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'create:propeller', not: { type: 'create:sequenced_assembly'} })
    evt.remove({ output: 'createaddition:electrum_block', not: { type: 'create:sequenced_assembly'} })
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


    // evt.remove({ id: 'createbigcannons:melting/melt_bronze_ingot' })
    // evt.remove({ id: 'createbigcannons:melting/melt_bronze_nugget' })
    // evt.remove({ id: 'createbigcannons:melting/melt_bronze_block' })
    // evt.remove({ id: 'createbigcannons:melting/melt_steel_ingot' })
    // evt.remove({ id: 'createbigcannons:melting/melt_steel_nugget' })
    // evt.remove({ id: 'createbigcannons:melting/melt_steel_block' })

}