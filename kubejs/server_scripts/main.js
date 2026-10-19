// priority: 0
"use strict";

console.info('Loading server scripts KJS')

registerOverallTags()

ServerEvents.recipes(event => {
    registerRecipeReplacings(event)
    registerRecipeRemovings(event)
    registerCommonRecipes(event)
    registerPBRecipes(event)
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

registerIURecipes()

LootJS.lootTables(evt => {
    lootArPhEx(evt)
    lootBackpacks(evt)
})

registerInteractions()



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
    
        if (['kubejs:jar_orphan_paste', 'kubejs:jar_fettus'].includes(event.item.id))
        {
            event.player.give(Item.of(item.custom.jar))
            return
        }
    }
})

checkPrivateTerritories()

PlayerEvents.tick(evt => {
    if (evt.server.tickCount % 40) {
        let  { player } = evt
        player.inventory.allItems.forEach(item => {
            if (item.hasTag('kubejs:dont_get_rad')){
                item.components.set('industrialupgrade:food_radiation_dose', 0)
            }
        })
    }
})

EntityEvents.death("player", evt => {
    const { source, entity, player, server } = evt
    const killer = source.actual
    console.log(player.username, killer.username)
    if (killer)
        if (player.username == 'jkinaru' && killer.username == 'arphex:spider_moth')
            if (Math.random > 0.6)
                player.drop(Item.of('kubejs:fettus').stack, false, false)
})

EntityEvents.death("arphex:spider_moth", evt => {
    const { server, entity, source } = evt
    let pData = server.persistentData
    const killer = source.actual
    if (killer)
    {
        if (!pData.getBoolean('moth_killed'))
        {
            console.log(killer.getName(), entity.getName())
            pData.putBoolean('moth_killed', true)
            pData.putString('moth_killed_by', killer.getStringUuid())
            server.runCommandSilent('title @a times 10t 4s 7s')
            server.runCommandSilent('title @a subtitle \
                [{"text":"","color":"white","bold":false},\
                {"text":"Паучья Моль ","color":"dark_purple","bold":true},\
                {"text":"была впервые повержена игроком ","color":"white","bold":false},\
                {"text":"'+killer.getName().getString()+'","bold":true},{"text":"!"}]')
            server.runCommandSilent('title @a title {"text":"Ужас повержен","color":"dark_red","bold":true}')
            server.runCommandSilent('execute as @a at @s run playsound minecraft:entity.wither.death master @s \
                '+ entity.getX() +' '+ entity.getY() +' '+ entity.getZ() +' 1000 0.7')
        }
    }
})

registerItemObliteration()

console.info('Loaded server scripts KJS')