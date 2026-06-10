// priority: 1
"use strict";

console.info('Loading server scripts KJS')

ServerEvents.tags('item', event => {
    registerOverallTags(event)
})

ServerEvents.recipes(event => {
    registerRecipeRemovings(event)
    registerIURecipeRemovings(event)
    registerRecipeReplacings(event)
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
    registerWCRecipes(event)
})

LootJS.lootTables(evt => {
    evt.modifyLootTables(LootType.ENTITY).removeItem('pointblank:gunmetal_nugget')
})

registerInteractions()

// LootJS.lootTables(event => {
//     let ids = event.getLootTableIds()
//     console.info(ids)
// })

// RecipeViewerEvents.removeEntries('item', evt => {
//     evt.remove('minecraft:string')
// })

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
        }
    }
})

console.info('Loaded server scripts KJS')

