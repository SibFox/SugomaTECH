"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const lootPointblank = (evt) => {

    evt.modifyLootTables(LootType.ENTITY).removeItem('pointblank:gunmetal_nugget')

    console.info('Pointblank loot table tweaks passed')
}