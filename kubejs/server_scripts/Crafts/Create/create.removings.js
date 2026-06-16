"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCreateRemovings = (evt) => {

    evt.remove({ output: item.create.andesite_alloy })
    evt.remove({ output: item.create.spool.item })
    evt.remove({ output: item.create.spool.copper })
    evt.remove({ output: item.create.spool.gold })
    evt.remove({ output: item.create.spool.electrum })
    evt.remove({ output: item.create.modular_accumulator })
    evt.remove({ output: item.create.connector.small })
    evt.remove({ output: item.create.connector.small_light })
    evt.remove({ output: item.create.connector.large })
    evt.remove({ output: item.ingot.electrum, type: 'create:mixing' })
    evt.remove({ output: item.create.electron_tube })
    evt.remove({ output: item.create.transmitter })
    evt.remove({ output: 'createaddition:electrum_ingot' })
    evt.remove({ output: 'createaddition:rolling_mill' })
    evt.remove({ output: 'createaddition:electrum_amulet' })
    evt.remove({ output: 'createaddition:alternator' })
    evt.remove({ output: 'createaddition:electric_motor' })
    evt.remove({ output: 'createaddition:tesla_coil' })
    evt.remove({ output: 'create:propeller' })
    evt.remove({ output: 'createaddition:electrum_block' })
    evt.remove({ output: 'create:mechanical_drill' })
    // evt.remove({ id: 'createbigcannons:melting/melt_bronze_ingot' })
    // evt.remove({ id: 'createbigcannons:melting/melt_bronze_nugget' })
    // evt.remove({ id: 'createbigcannons:melting/melt_bronze_block' })
    // evt.remove({ id: 'createbigcannons:melting/melt_steel_ingot' })
    // evt.remove({ id: 'createbigcannons:melting/melt_steel_nugget' })
    // evt.remove({ id: 'createbigcannons:melting/melt_steel_block' })

}