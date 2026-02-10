//priority: 0
"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerIURecipes = (evt) => {

    evt.remove({ output: 'industrialupgrade:wiring/itemcable23' }) // Кобальтовая труба
    evt.remove({ output: 'industrialupgrade:wiring/itemcable22' }) // Входная труба

    shapedRecipe(evt, recipeID('iu', 'cobalt_pipe'),
        [
            [ tag.plate.cobalt, tag.plate.cobalt, tag.plate.cobalt ],
            [ null, tag.plate.nichrome, null ],
            [ tag.plate.cobalt, tag.plate.cobalt, tag.plate.cobalt ]
        ],
    'industrialupgrade:wiring/itemcable23', 6)

    shapedRecipe(evt, recipeID('iu', 'cobalt_pipe_entering'),
        [
            [ tag.plate.cobalt, tag.plate.cobalt, tag.plate.cobalt ],
            [ tag.lapis, tag.plate.nichrome, tag.lapis ],
            [ tag.plate.cobalt, tag.plate.cobalt, tag.plate.cobalt ]
        ],
    'industrialupgrade:wiring/itemcable22', 6)

    evt.remove({ output: 'industrialupgrade:wiring/itemcable26' }) // Кобальт-хромовая труба
    evt.remove({ output: 'industrialupgrade:wiring/itemcable25' }) // Входная труба

    shapedRecipe(evt, recipeID('iu', 'cobaltchrome_pipe'),
        [
            [ tag.plate.cobaltchrome, tag.plate.cobaltchrome, tag.plate.cobaltchrome ],
            [ null, tag.plate.nichrome, null ],
            [ tag.plate.cobaltchrome, tag.plate.cobaltchrome, tag.plate.cobaltchrome ]
        ],
    'industrialupgrade:wiring/itemcable26', 6)

    shapedRecipe(evt, recipeID('iu', 'cobaltchrome_pipe__entering'),
        [
            [ tag.plate.cobaltchrome, tag.plate.cobaltchrome, tag.plate.cobaltchrome ],
            [ tag.lapis, tag.plate.nichrome, tag.lapis ],
            [ tag.plate.cobaltchrome, tag.plate.cobaltchrome, tag.plate.cobaltchrome ]
        ],
    'industrialupgrade:wiring/itemcable25', 6)

    // shapedRecipe(evt, recipeID('iu', 'casing2'),
    //     [
    //         [ item.iu.corpus_cover.lvl1, tag.plate.electrum ],
    //         [ item.iu.plastic, item.iu.plastic ]
    //     ],
    // item.iu.corpus_cover.lvl2, 1)

    for ( let block of [ 'polonium', 'thallium', 'strontium', 'zirconium' ] ) {
        evt.shapeless(Item.of('industrialupgrade:raw_metals/raw_' + block, 9),
        [
            'industrialupgrade:raw_block/raw_' + block
        ]).id(recipeID('iu', block + '_block_to_raw'))
    }

    console.info('Industrial Upgrade recipe adding passed')
}