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
            [ item.iu.module.wireless, item.iu.electromotor.lvl2, item.blaze_powder ],
            [ tag.doubleplate.electrum, item.ae.wireless_booster, tag.doubleplate.electrum ],
            [ tag.doubleplate.electrum, item.iu.machine_corpus.tech, tag.doubleplate.electrum ]
        ],
    'wirelesschargers:basic_wireless_player_charger')

    shapedRecipe(evt, getRecipeID('advanced_player'),
        [
            [ null, item.iu.electromotor.lvl3, null ],
            [ tag.doubleplate.electrum, 'wirelesschargers:basic_wireless_player_charger', tag.doubleplate.electrum ],
            [ tag.doubleplate.electrum, item.iu.machine_corpus.tech_adv, tag.doubleplate.electrum ]
        ],
    'wirelesschargers:advanced_wireless_player_charger')
    
    shapedRecipe(evt, getRecipeID('base_block'),
        [
            [ item.iu.module.wireless, item.iu.electromotor.lvl2, item.glowstone ],
            [ tag.doubleplate.electrum, item.ae.wireless_booster, tag.doubleplate.electrum ],
            [ tag.doubleplate.electrum, item.iu.machine_corpus.tech, tag.doubleplate.electrum ]
        ],
    'wirelesschargers:basic_wireless_block_charger')

    shapedRecipe(evt, getRecipeID('advanced_block'),
        [
            [ null, item.iu.electromotor.lvl3, null ],
            [ tag.doubleplate.electrum, 'wirelesschargers:basic_wireless_block_charger', tag.plate.electrum ],
            [ tag.doubleplate.electrum, item.iu.machine_corpus.tech_adv, tag.plate.electrum ]
        ],
    'wirelesschargers:advanced_wireless_block_charger')

    console.info('Wireless Chargers recipe adding passed')
}