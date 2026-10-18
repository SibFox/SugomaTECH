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
    lootArPhEx(evt)
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
    if (player)
    {
        if ([ 'kubejs:plated_brain_arphex', 'kubejs:plated_brain_end', 'kubejs:plated_brain_nether',
            'kubejs:plated_minced_brain_stew', 'kubejs:plated_minced_brain_with_milk',
            'kubejs:plated_heart_arphex', 'kubejs:plated_heart_end', 'kubejs:plated_heart_nether', 
            'kubejs:plated_minced_heart_stew', 'kubejs:plated_liver_end', 'kubejs:plated_liver_nether', 
            'kubejs:plated_minced_liver_stew', 'kubejs:plated_minced_liver_with_apple', 
            'kubejs:plated_lungs_arphex', 'kubejs:plated_lungs_end', 'kubejs:plated_lungs_nether',
            'kubejs:plated_minced_lungs_stew', 'kubejs:plated_minced_lungs_with_potatoes', 
            'kubejs:plated_stomach_end', 'kubejs:plated_stomach_nether', 'kubejs:plated_minced_stomach_stew'
        ].includes(event.item.id)) {
            event.player.give(Item.of('minecraft:bowl'))
            return
        }
    
        if (event.item.id == 'kubejs:preserved_meat') {
            event.player.give(Item.of(item.iu.tin_can))
            return
        }
    
        if (['kubejs:jar_orphan_paste', 'kubejs:jar_embryo'].includes(event.item.id))
        {
            event.player.give(Item.of(item.custom.jar))
            return
        }
    }
})

checkPrivateTerritories()

EntityEvents.death("player", evt => {
    const { source, entity, player, server } = evt
    const killer = source.actual
    console.log(player.username, killer.username)
    if (killer)
        if (player.username == 'jkinaru' && killer.username == 'arphex:spider_moth')
            if (Math.random > 0.6)
                player.drop(Item.of('kubejs:embryo').stack, false, false)
})

EntityEvents.death("arphex:spider_moth", evt => {
    const { entity, server } = evt
    let pData = server.persistentData
    if (!pData.getBoolean('moth_killed'))
    {
        pData.putBoolean('moth_killed', true)
        server.tell('Паучья Моль была убита.')
        // server.runCommandSilent()
    }
})

registerItemObliteration()

console.info('Loaded server scripts KJS')

