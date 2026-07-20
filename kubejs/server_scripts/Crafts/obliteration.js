// priority: 10
"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerItemObliteration = () => {

    const obliterateItems = [
        'create:iron_sheet', 'create:copper_sheet', 
        'create:golden_sheet','create:zinc_ingot', 
        
        'createcybernetics:titanium_block', 'createcybernetics:titaniumingot', 
        'createcybernetics:titaniumnugget', 'createcybernetics:titaniumsheet', 
        'mffs:steel_ingot', 'create:zinc_nugget', 'create:sturdy_sheet',
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
        'create:brass_nugget', 'create:brass_sheet', 'create:brass_block',
        'megacells:sky_osmium_block', 'extendedae:infinity_cobblestone_cell',
        'extendedae:infinity_water_cell', 'agritechevolved:biomass_burner',
        'agritechevolved:capacitor_tier1', 'agritechevolved:capacitor_tier2', 
        'agritechevolved:capacitor_tier3', 'geneticsresequenced:coal_generator',
        'kaleidoscope_cookery:fruit_basket', 'megacells:sky_osmium_ingot',
    ]

    const toStone = [
        'create:zinc_ore', 'createpropulsion:platinum_ore',
        'createcybernetics:titaniumore_block',
    ]
    
    const toDeepslate = [
        'create:deepslate_zinc_ore', 'createpropulsion:deepslate_platinum_ore',
        'createcybernetics:deepslate_titaniumore_block'
    ]

    // Check if itemID exists within obliterateItems
    function ObliterateCheck(itemID) {
        let check = false
        for (let i = 0; i < obliterateItems.length; i++) {
            let id = obliterateItems[i]
            let reg = new RegExp(id)
            if (typeof id == "string") { reg = new RegExp(`^${id}$`) }
            if (reg.test(itemID)) {
                check = true
                break
            }
        }
        return check
    }

    // Remove recipes
    ServerEvents.recipes(event => {
        event.remove({ input: obliterateItems })
        event.remove({ output: obliterateItems })
    })

    // Remove tags
    ServerEvents.tags('item', event => {
        event.removeAllTagsFrom(obliterateItems)
    })

    // Append disabled tooltip
    ItemEvents.modifyTooltips(event => {
        event.add(obliterateItems, Text.red('Disabled'))
    })

    // Remove from recipe viewer
    RecipeViewerEvents.removeEntriesCompletely('item', event => {
        event.remove(obliterateItems)
    })

    // Remove from loot pools
    LootJS.lootTables(event => {
        event.modifyLootTables(/.*/).removeItem(obliterateItems)
    })

    // Destroy on interaction
    BlockEvents.leftClicked(event => {
        let { block } = event
        if (ObliterateCheck(block.id)) {
            if (toStone.includes(block.id)) { block.set('minecraft:stone') }
            else if (toDeepslate.includes(block.id)) { block.set('minecraft:deepslate') }
            else { block.set('minecraft:air') }
            event.cancel()
        }
    })

    // Destroy on interaction
    BlockEvents.rightClicked(event => {
        let { block } = event
        if (ObliterateCheck(block.id)) {
            if (toStone.includes(block.id)) { block.set('minecraft:stone') }
            else if (toDeepslate.includes(block.id)) { block.set('minecraft:deepslate') }
            else { block.set('minecraft:air') }
            event.cancel()
        }
    })

    // Destroy on block placement
    BlockEvents.placed(event => {
        let { block } = event
        if (ObliterateCheck(block.id)) {
            block.set('minecraft:air')
        }
    })

    // Destroy on pickup
    ItemEvents.canPickUp(event => {
        let { item, itemEntity } = event
        if(itemEntity.hasPickUpDelay()) return
        if (ObliterateCheck(item.id)) { item.setCount(0) }
    })

    // Destroy on drop
    ItemEvents.dropped(event => {
        let { item } = event
        if (ObliterateCheck(item.id)) { item.setCount(0) }
    })

    // Destroy on inventory changed
    PlayerEvents.inventoryChanged(event => {
        let { item, player } = event
        if (ObliterateCheck(item.id)) {
            player.inventory.clear(item);
        }
    })

    console.info('Item obliteration passed')
}