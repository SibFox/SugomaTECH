"use strict";

const { $LootTableEventJS } = require("@package/com/almostreliable/lootjs/kube");

/**
 * 
 * @param {$LootTableEventJS} evt 
 */
const lootArPhEx = (evt) => {

    // evt.modifyLootTables(LootType.ENTITY).removeItem('pointblank:gunmetal_nugget')
    // let table = evt.getEntityTable("arphex:spider_obstructer")
    // table.print()
    // table
    //     .firstPool()
    //     .addEntry(LootEntry.of("minecraft:apple").withWeight(30).setCount([2, 5]))
    // table.print()
    // table
    //     .firstPool()
    //     .addEntry(LootEntry.of("minecraft:apple").withWeight(30).setCount([2, 5]))
    // table.print()
    
    // evt.create('arphex:entities/spider_moth_larvae')
    //     .createPool(p => {
    //         p.addEntry(LootEntry.of('minecraft:apple').setCount([2,5]))
    //         p.addEntry(LootEntry.empty().withWeight(7))
    //     })

    console.info('ArPhEx loot table tweaks passed')
}