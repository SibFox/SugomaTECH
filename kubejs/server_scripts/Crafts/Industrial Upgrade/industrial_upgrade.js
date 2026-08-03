"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerIURecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('iu', path)
    }

    registerIURecipeRemovings(evt)
    registerIUCTRecipes(evt)
    registerIUIURecipes(evt)

    for ( let block of [ 'polonium', 'thallium', 'strontium', 'zirconium' ] ) {
        evt.shapeless(Item.of('industrialupgrade:raw_metals/raw_' + block, 9),
        [
            'industrialupgrade:raw_block/raw_' + block
        ]).id(recipeID('iu', block + '_block_to_raw'))
    }

    evt.shaped(
        Item.of(item.iu.spool.lvl0, 1),
        [
            'WWW',
            'WSW',
            'WWW'
        ],{
            W: item.iu.wire.bare.copper,
            S: item.custom.spool
        }
    ).id(getRecipeID('spool'))

    console.info('Industrial Upgrade recipe adding passed')
}