// priority: 1
"use strict";

console.info('Loading server scripts KJS')

ServerEvents.tags('item', event => {
    registerOverallTags(event)
})

ServerEvents.recipes(event => {
    registerRecipeReplacings(event)
    registerRecipeRemovings(event)
    registerIURecipeRemovings(event)
    registerCommonRecipes(event)
    registerPBRecipes(event)
    registerIURecipes(event)
    registerAERecipes(event)
    registerCCRecipes(event)
    registerCreateRecipes(event)
    registerIARecipes(event)
    registerGRRecipes(event)
    registerCLRecipes(event)
    registerArPhExRecipes(event)
    registerPipeZRecipes(event)
    registerCyberneticsRecipes(event)
    registerMFFSRecipes(event)
    registerFDRecipes(event)
    registerSBRecipes(event)
    registerAgritechRecipes(event)
    registerBakeriesRecipes(event)
})

LootJS.lootTables(evt => {
    // lootArPhEx(evt)
    lootBackpacks(evt)
})

registerInteractions()

// LootJS.lootTables(event => {
//     let ids = event.getLootTableIds()
//     console.info(ids)
// })



RecipeViewerEvents.removeEntries('item', evt => {
    for (let m of inc_metals)
    {
        evt.remove('kubejs:incomplete_' + m)
    }

    evt.remove(item.custom.kloverghett_seed)
    evt.remove(item.custom.kloverghett_crystal)
    evt.remove(item.custom.kloverghett_part)
    evt.remove(item.custom.kloverghett_treated)
})

ItemEvents.foodEaten(event => {
    const {player} = event
    if ([ 'kubejs:plated_brain_arphex', 'kubejs:plated_brain_end', 'kubejs:plated_brain_nether',
        'kubejs:plated_minced_brain_stew', 'kubejs:plated_minced_brain_with_milk',
        'kubejs:plated_heart_arphex', 'kubejs:plated_heart_end', 'kubejs:plated_heart_nether', 
        'kubejs:plated_minced_heart_stew', 'kubejs:plated_liver_end', 'kubejs:plated_liver_nether', 
        'kubejs:plated_minced_liver_stew', 'kubejs:plated_minced_liver_with_apple', 
        'kubejs:plated_lungs_arphex', 'kubejs:plated_lungs_end', 'kubejs:plated_lungs_nether',
        'kubejs:plated_minced_lungs_stew', 'kubejs:plated_minced_lungs_with_potatoes', 
        'kubejs:plated_stomach_end', 'kubejs:plated_stomach_nether', 'kubejs:plated_minced_stomach_stew'
    ].includes(event.item.id)) {
        if (player) {
            event.player.give(Item.of('minecraft:bowl'))
            return
        }
    }
    if (event.item.id == 'kubejs:preserved_meat') {
        if (player) {
            event.player.give(Item.of(item.iu.tin_can))
            return
        }
    }
})

BlockEvents.leftClicked(evt => {
    const {player, block} = evt
    const {x, z, y} = block
    if (!player.isCreative()) {
        if ((x > -315 && x < -200 && z > -15 && z < 70) ||
            (x > -403 && x < -398 && z >  63 && z < 71 && y > -42 && y < -30)){
            evt.cancel()
        }
    }
})

BlockEvents.placed(evt => {
    const {player, block} = evt
    const {x, z, y} = block
    if (!player.isCreative()) {
        if (x > -315 && x < -200 && z > -15 && z < 70 ||
            (x > -403 && x < -398 && z >  63 && z < 71 && y > -42 && y < -30)){
            evt.cancel()
        }
    }
})

// // --- CONFIGURATION ---
// const DISAPPEAR_LIST = [
//     "minecraft:diamond",
//     "minecraft:netherite_sword",
//     "#forge:ingots/gold", // Tags work
// ];

// const $ItemEntity = Java.loadClass("net.minecraft.world.entity.item.ItemEntity");

// /**
//  * Check if item stack is in blacklist
//  * @param {Internal.ItemStack} stack
//  * @returns {boolean}
//  */
// function isBlacklisted(stack) {
//     if (stack.isEmpty()) return false;
//     return Ingredient.of(DISAPPEAR_LIST).test(stack);
// }

// // Prevent "Tossing" (Pressing Q)
// ForgeEvents.onEvent("net.minecraftforge.event.entity.item.ItemTossEvent", (event) => {
//     let itemEntity = event.getEntity();
//     let stack = itemEntity.getItem();
//     if (isBlacklisted(stack)) {
//         event.setCanceled(true);
//     }
// });

// // Disappear on "Join Level" (Fallback for GUI drops or other sources)
// EntityEvents.spawned((evt) => {
//     let entity = evt.entity
//     if (!(entity instanceof $ItemEntity)) return
//     if (evt.level.isClientSide()) return
//     let stack = entity.item

// })
// ForgeEvents.onEvent("net.minecraftforge.event.entity.EntityJoinLevelEvent", (event) => {
//     let entity = event.getEntity();
//     if (!(entity instanceof $ItemEntity)) return;
//     if (event.getLevel().isClientSide()) return;
//     let stack = entity.getItem();
//     if (isBlacklisted(stack)) {
//         entity.discard();
//     }
// });

registerItemObliteration()

console.info('Loaded server scripts KJS')

