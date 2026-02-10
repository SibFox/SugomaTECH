// priority: 1
"use strict";

console.info('Loading server scripts KJS')

ServerEvents.tags('item', event => {
    registerOverallTags(event)
})

ServerEvents.recipes(event => {
    registerRecipeRemovings(event)
    registerRecipeReplacings(event)
    registerCommonRecipes(event)
    registerSBRecipes(event)
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
})

LootJS.lootTables(event => {
    lootPointblank(event)
})

// RecipeViewerEvents.removeEntries('item', evt => {
//     evt.remove('minecraft:string')
// })

console.info('Loaded server scripts KJS')

