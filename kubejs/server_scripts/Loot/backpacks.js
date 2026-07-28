"use strict";

const lootBackpacks = (evt) => {

    evt.modifyLootTables(/.*/).removeItem('sophisticatedbackpacks:backpack')
    evt.modifyLootTables(/.*/).removeItem('sophisticatedbackpacks:copper_backpack')
    evt.modifyLootTables(/.*/).removeItem('sophisticatedbackpacks:iron_backpack')
    evt.modifyLootTables(/.*/).removeItem('sophisticatedbackpacks:gold_backpack')
    evt.modifyLootTables(/.*/).removeItem('sophisticatedbackpacks:diamond_backpack')
    evt.modifyLootTables(/.*/).removeItem('sophisticatedbackpacks:netherite_backpack')

    console.info('Backpacks loot table tweaks passed')
}