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

    add(tag.wire.copper, item.iu.wire.bare.copper)
    add(tag.wire.iron, item.iu.wire.bare.iron)
    add(tag.wire.gold, item.iu.wire.bare.gold)

    // Удалить все теги с предмета
    // for (let i of deletion_list) 
    // { 
    //     evt.removeAllTagsFrom(i) 
    // }

    console.info('Tag adding passed')
}