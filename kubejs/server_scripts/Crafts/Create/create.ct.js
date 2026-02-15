"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCreateCTRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('create', path)
    }

    shapedRecipe(evt, getRecipeID('copper_spool'),
        [
            [ null, item.iu.wire.bare.copper, null ],
            [ item.iu.wire.bare.copper, item.create.spool.item, item.iu.wire.bare.copper ],
            [ null, item.iu.wire.bare.copper, null ]
        ],
    item.create.spool.copper)

    shapedRecipe(evt, getRecipeID('gold_spool'),
        [
            [ null, item.iu.wire.bare.gold, null ],
            [ item.iu.wire.bare.gold, item.create.spool.item, item.iu.wire.bare.gold ],
            [ null, item.iu.wire.bare.gold, null ]
        ],
    item.create.spool.gold)

    shapedRecipe(evt, getRecipeID('electrum_spool'),
        [
            [ null, item.iu.wire.isolated.gold, null ],
            [ item.iu.wire.isolated.gold, item.create.spool.item, item.iu.wire.isolated.gold ],
            [ null, item.iu.wire.isolated.gold, null ]
        ],
    item.create.spool.electrum)

    shapedRecipe(evt, getRecipeID('modular_accumulator'),
        [
            [ null, tag.rod.electrum, null ],
            [ item.iu.capacitor.lvl2, item.create.casing.brass, item.iu.capacitor.lvl2 ],
            [ item.iu.battery.lead, item.iu.battery.lead, item.iu.battery.lead ]
        ],
    item.create.modular_accumulator)

    shapedRecipe(evt, getRecipeID('connector/small'),
        [
            [ null, item.create.andesite_alloy, null ],
            [ item.create.andesite_alloy, item.iu.spool.lvl1, item.create.andesite_alloy ],
            [ null, item.create.andesite_alloy, null ]
        ],
    item.create.connector.small)

    shapedRecipe(evt, getRecipeID('connector/large'),
        [
            [ null, item.create.andesite_alloy, null ],
            [ item.create.andesite_alloy, item.iu.spool.superconducting.lvl1, item.create.andesite_alloy ],
            [ null, item.create.andesite_alloy, null ]
        ],
    item.create.connector.large)

    evt.shapeless(Item.of(item.create.connector.small_light, 1),
        [
            item.iu.wire.bare.tin, tag.glass, item.create.connector.small
        ]
    ).id(getRecipeID('connector/small_light'))

    shapedRecipe(evt, getRecipeID('straw'),
        [
            [ item.bamboo, item.bamboo ],
            [ item.bamboo, null ],
            [ item.bamboo, null ]
        ],
    'createaddition:straw')

    shapedRecipe(evt, getRecipeID('spool'),
        [
            [ item.plate.iron ],
            [ item.rod.tungsten ],
            [ item.plate.iron ]
        ],
    item.create.spool.item, 4)
}