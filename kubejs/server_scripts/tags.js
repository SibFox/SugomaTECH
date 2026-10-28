// priority: 10

"use strict";

const registerOverallTags = () => {

    ServerEvents.tags('item', evt => {

        function add(tag, item) {
            evt.add(noHash(tag), item)
        }
    
        function remove(tag, item) {
            evt.remove(noHash(tag), item)
        }
    
        for (const [key, val] of Object.entries(item.log.minecraft.stripped))
        {
            add(tag.shaft, 'createcasing:' + key + '_shaft')
            add(tag.cogwheel, 'createcasing:' + key + '_cogwheel')
            add(tag.large_cogwheel, 'createcasing:' + key + '_large_cogwheel')
        }
    
        Color.DYE.forEach(color => {
            add(tag.cogwheel, 'dndecor:' + color + '_cogwheel')
            add(tag.large_cogwheel, 'dndecor:' + color + '_large_cogwheel')
        });
    
        add(tag.shaft, 'create:shaft')
        add(tag.shaft, 'copycats:copycat_shaft')
    
        
        for (const [key, val] of Object.entries(item.create.cogwheel.small)) {
            add(tag.cogwheel, val)
        }
    
        for (const [key, val] of Object.entries(item.create.cogwheel.large)) {
            add(tag.large_cogwheel, val)
        }
    
        // for (const [key, val] of Object.entries(item.log.cluttered.stripped.normal)) {
        //     evt.add('c:stripped_logs', val)
        // }
    
        // for (const [key, val] of Object.entries(item.log.cluttered.stripped.flowering)) {
        //     evt.add('c:stripped_logs', val)
        // }
    
        add(tag.ingot.wolframite, item.ingot.wolframite)
        add(tag.ingot.titanium_steel, item.ingot.titanium_steel)
        add(tag.ingot.carbon_tungsteen, item.ingot.carbon_tungsteen)
        add(tag.plate.titanium_steel, item.plate.titanium_steel)
    
        add('minecraft:mineable/axe', 'immersive_furniture:furniture')
        add('minecraft:mineable/axe', 'immersive_furniture:artisans_workstation')
    
        add('c:ingots/brass', item.ingot.brass)
        add('c:nuggets/brass', item.nugget.brass)
        add('c:plates/brass', item.plate.brass)
        add('c:doubleplate/brass', item.doubleplate.brass)
        add('c:storage_blocks/brass', item.ore_block.brass)
    
        add(tag.wire.copper, item.iu.wire.bare.copper)
        add(tag.wire.iron, item.iu.wire.bare.iron)
        add(tag.wire.gold, item.iu.wire.bare.gold)
    
        for(let food of ['kubejs:preserved_meat', 'minecraft:golden_apple', 'minecraft:golden_carrot', 'minecraft:enchanted_golden_apple'])
        {
            add('kubejs:dont_get_rad', food)
        }
        
        add('kubejs:dont_get_rad', '#c:potions')
        add('kubejs:dont_get_rad', '#kaleidoscope_tavern:cocktail_ingredient')

        
        add('quad:immune/all', '#nether_portal_remastered:obsidian_rune')
        add('quad:immune/cactus', '#nether_portal_remastered:obsidian_rune')
        add('quad:immune/explosion', '#nether_portal_remastered:obsidian_rune')
        add('quad:immune/fire', '#nether_portal_remastered:obsidian_rune')
        add('quad:immune/lightning', '#nether_portal_remastered:obsidian_rune')

        add('c:silicon', item.iu.polished_silicon_crystal)
        // Удалить все теги с предмета
        // for (let i of deletion_list)
        // { 
        //     evt.removeAllTagsFrom(i) 
        // }
    })

    ServerEvents.tags('block', evt => {
        evt.add('quad:nether_portal/built', '#nether_portal_remastered:obsidian_rune')
        evt.add('quad:nether_portal/formed', '#nether_portal_remastered:obsidian_rune')
    })


    console.info('Tag adding passed')
}
