"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerWCRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('wc', path)
    }

    shapedRecipe(evt, getRecipeID('base_player'),
        [
            [ item.iu.module.wireless, item.iu.electromotor.lvl1, item.blaze_powder ],
            [ tag.ingot.electrum, item.ae.wireless_booster, tag.ingot.electrum ],
            [ tag.ingot.electrum, item.iu.machine_corpus.tech, tag.ingot.electrum ]
        ],
    'wirelesschargers:basic_wireless_player_charger')

    shapedRecipe(evt, getRecipeID('advanced_player'),
        [
            [ null, item.iu.electromotor.lvl2, null ],
            [ tag.plate.electrum, 'wirelesschargers:basic_wireless_player_charger', tag.plate.electrum ],
            [ tag.plate.electrum, item.iu.machine_corpus.advanced_tech, tag.plate.electrum ]
        ],
    'wirelesschargers:advanced_wireless_player_charger')
    
    shapedRecipe(evt, getRecipeID('base_block'),
        [
            [ item.iu.module.wireless, item.iu.electromotor.lvl1, item.glowstone ],
            [ tag.ingot.electrum, item.ae.wireless_booster, tag.ingot.electrum ],
            [ tag.ingot.electrum, item.iu.machine_corpus.tech, tag.ingot.electrum ]
        ],
    'wirelesschargers:basic_wireless_block_charger')

    shapedRecipe(evt, getRecipeID('advanced_block'),
        [
            [ null, item.iu.electromotor.lvl2, null ],
            [ tag.plate.electrum, 'wirelesschargers:basic_wireless_block_charger', tag.plate.electrum ],
            [ tag.plate.electrum, item.iu.machine_corpus.advanced_tech, tag.plate.electrum ]
        ],
    'wirelesschargers:advanced_wireless_block_charger')

    console.info('Wireless Chargers recipe adding passed')
}