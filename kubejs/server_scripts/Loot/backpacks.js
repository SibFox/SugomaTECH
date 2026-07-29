"use strict";

const lootBackpacks = (evt) => {

    evt.modifyLootTables(/.*/).removeItem('sophisticatedbackpacks:diamond_backpack')
    evt.modifyLootTables(/.*/).removeItem('sophisticatedbackpacks:netherite_backpack')

    console.info('Backpacks loot table tweaks passed')
}