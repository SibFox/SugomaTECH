"use strict";

const registerOverallTags = (evt) => {
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
    add(tag.shaft, 'createcasing:glass_shaft')
    add(tag.shaft, 'copycats:copycat_shaft')
    add(tag.shaft, 'createcasing:brass_shaft')

    
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
    add('c:storage_blocks/brass', item.ore_block.brass)

    // Удалить все теги с предмета
    for (let i of [
        'create:iron_sheet', 'create:copper_sheet', 
        'create:golden_sheet','create:zinc_ingot', 
        'createaddition:zinc_sheet', 'createaddition:electrum_ingot',
        'createaddition:electrum_nugget', 'createaddition:electrum_sheet',
        'createcybernetics:titanium_block', 'createcybernetics:titaniumingot', 
        'createcybernetics:titaniumnugget', 'createcybernetics:titaniumsheet', 
        'mffs:steel_ingot', 'createaddition:electrum_block', 
        'create:zinc_nugget', 'create:sturdy_sheet',
        'createbigcannons:bronze_block', 'createbigcannons:bronze_ingot', 
        'createcybernetics:crushedtitanium', 'createpropulsion:platinum_ingot', 
        'createpropulsion:platinum_block', 'createpropulsion:platinum_sheet',
        'createpropulsion:platinum_nugget', 'createpropulsion:raw_platinum_block',
        'createpropulsion:raw_platinum', 'create:raw_zinc_block',
        'create:zinc_ore', 'create:deepslate_zinc_ore',
        'create:crushed_raw_zinc', 'create:crushed_raw_iron',
        'create:crushed_raw_gold', 'create:crushed_raw_copper',
        'createpropulsion:platinum_ore', 'createpropulsion:deepslate_platinum_ore',
        'createcybernetics:deepslate_titaniumore_block', 'createcybernetics:titaniumore_block',
        'create:zinc_block', 'powergrid:zinc_sheet', 'create:raw_zinc', 'create:brass_ingot',
        'create:brass_nugget', 'create:brass_sheet', 'create:brass_block'

    ]) { evt.removeAllTagsFrom(i) }

    console.info('Tag adding passed')
}