//priority: 0
"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerIURecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('iu', path)
    }

    evt.remove({ output: 'industrialupgrade:wiring/itemcable23' }) // Кобальтовая труба
    evt.remove({ output: 'industrialupgrade:wiring/itemcable22' }) // Входная труба
    evt.remove({ output: 'industrialupgrade:crafting_elements/crafting_294_element' }) // Катушка

    shapedRecipe(evt, recipeID('iu', 'cobalt_pipe'),
        [
            [ tag.plate.cobalt, tag.plate.cobalt, tag.plate.cobalt ],
            [ null, tag.plate.nichrome, null ],
            [ tag.plate.cobalt, tag.plate.cobalt, tag.plate.cobalt ]
        ],
    'industrialupgrade:wiring/itemcable23', 6)

    shapedRecipe(evt, recipeID('iu', 'cobalt_pipe_input'),
        [
            [ tag.plate.cobalt, tag.plate.cobalt, tag.plate.cobalt ],
            [ tag.lapis, tag.plate.nichrome, tag.lapis ],
            [ tag.plate.cobalt, tag.plate.cobalt, tag.plate.cobalt ]
        ],
    'industrialupgrade:wiring/itemcable22', 6)

    evt.shaped(
        Item.of(item.iu.tin_can, 1),
        [
            'C C',
            ' C '
        ],{
            C: tag.casings.tin
        }
    ).id(getRecipeID('tin_can'))
    
    

    // evt.remove({ output: 'industrialupgrade:wiring/itemcable26' }) // Кобальт-хромовая труба
    // evt.remove({ output: 'industrialupgrade:wiring/itemcable25' }) // Входная труба
    // evt.remove({ output: 'industrialupgrade:wiring/itemcable24' }) // Выходная труба

    // shapedRecipe(evt, recipeID('iu', 'cobaltchrome_pipe'),
    //     [
    //         [ tag.plate.cobaltchrome, tag.plate.cobaltchrome, tag.plate.cobaltchrome ],
    //         [ null, tag.plate.nichrome, null ],
    //         [ tag.plate.cobaltchrome, tag.plate.cobaltchrome, tag.plate.cobaltchrome ]
    //     ],
    // 'industrialupgrade:wiring/itemcable26', 6)

    // shapedRecipe(evt, recipeID('iu', 'cobaltchrome_pipe_input'),
    //     [
    //         [ tag.plate.cobaltchrome, tag.plate.cobaltchrome, tag.plate.cobaltchrome ],
    //         [ tag.lapis, tag.plate.nichrome, tag.lapis ],
    //         [ tag.plate.cobaltchrome, tag.plate.cobaltchrome, tag.plate.cobaltchrome ]
    //     ],
    // 'industrialupgrade:wiring/itemcable25', 6)

    // shapedRecipe(evt, recipeID('iu', 'cobaltchrome_pipe_output'),
    //     [
    //         [ tag.plate.cobaltchrome, tag.plate.cobaltchrome, tag.plate.cobaltchrome ],
    //         [ tag.redstone, tag.plate.nichrome, tag.redstone ],
    //         [ tag.plate.cobaltchrome, tag.plate.cobaltchrome, tag.plate.cobaltchrome ]
    //     ],
    // 'industrialupgrade:wiring/itemcable24', 6)

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

    // evt.shapeless(Item.of(item.iu.wire.bare.copper, 1),
    //     [
    //         'createaddition:copper_wire'
    //     ]
    // ).id(getRecipeID('wire_bare_copper_csa'))

    // evt.shapeless(Item.of(item.iu.wire.bare.gold, 1),
    //     [
    //         'createaddition:gold_wire'
    //     ]
    // ).id(getRecipeID('wire_bare_gold_csa'))
    
    // evt.shapeless(Item.of(item.iu.wire.isolated.gold, 1),
    // [
    //     'createaddition:electrum_wire'
    // ]
    // ).id(getRecipeID('wire_isolated_gold_csa'))

    evt.shapeless(Item.of(item.iu.wire.bare.copper, 1),
        [
            'powergrid:wire'
        ]
    ).id(getRecipeID('wire_bare_copper_pg'))

    evt.shapeless(Item.of(item.iu.wire.bare.iron, 1),
        [
            'powergrid:iron_wire'
        ]
    ).id(getRecipeID('wire_bare_gold_pg'))

    evt.shapeless(Item.of(item.iu.wire.bare.gold, 1),
        [
            'powergrid:golden_wire'
        ]
    ).id(getRecipeID('wire_bare_gold_pg'))

    evt.shapeless(Item.of(item.iu.wire.isolated.copper, 1),
        [
            'powergrid:insulated_copper_wire'
        ]
    ).id(getRecipeID('wire_isolated_copper_pg'))
    
    

    iuRecipe(evt, getRecipeID('processor_3'), IUMachineCraft.ELECTRONIC_ASSEMBLER,
        [
            asItem(item.iu.chip.lvl2),
            asItem(item.iu.inductor.lvl2),
            asItem(item.iu.polished_silicon_disk),
            asItem(item.iu.diode.lvl1, 2),
            asItem(item.iu.cooling_system.lvl1)
        ],[
            asItem(item.iu.processor.lvl3)
        ]
    )

    iuRecipe(evt, getRecipeID('processor_4'), IUMachineCraft.ELECTRONIC_ASSEMBLER,
        [
            asItem(item.iu.chip.lvl2, 2),
            asItem(item.iu.inductor.lvl2),
            asItem(item.iu.polished_silicon_disk),
            asItem(item.iu.diode.lvl2, 2),
            asItem(item.iu.cooling_system.lvl1)
        ],[
            asItem(item.iu.processor.lvl4)
        ]
    )

    iuRecipe(evt, getRecipeID('processor_5'), IUMachineCraft.ELECTRONIC_ASSEMBLER,
        [
            asItem(item.iu.chip.lvl3),
            asItem(item.iu.inductor.lvl3),
            asItem(item.iu.processor.lvl1),
            asItem(item.iu.diode.lvl2, 2),
            asItem(item.iu.cooling_system.lvl2)
        ],[
            asItem(item.iu.processor.lvl5)
        ]
    )

    iuRecipe(evt, getRecipeID('processor_6'), IUMachineCraft.ELECTRONIC_ASSEMBLER,
        [
            asItem(item.iu.chip.lvl3, 2),
            asItem(item.iu.inductor.lvl3),
            asItem(item.iu.processor.lvl2),
            asItem(item.iu.diode.lvl2, 2),
            asItem(item.iu.cooling_system.lvl2)
        ],[
            asItem(item.iu.processor.lvl6)
        ]
    )

    iuRecipe(evt, getRecipeID('processor_7'), IUMachineCraft.ELECTRONIC_ASSEMBLER,
        [
            asItem(item.iu.chip.lvl4),
            asItem(item.iu.inductor.lvl3),
            asItem(item.iu.processor.lvl3),
            asItem(item.iu.diode.lvl3, 2),
            asItem(item.iu.cooling_system.lvl3)
        ],[
            asItem(item.iu.processor.lvl7)
        ]
    )

    iuRecipe(evt, getRecipeID('processor_8'), IUMachineCraft.ELECTRONIC_ASSEMBLER,
        [
            asItem(item.iu.chip.lvl4, 2),
            asItem(item.iu.inductor.lvl3),
            asItem(item.iu.processor.lvl4),
            asItem(item.iu.diode.lvl3, 2),
            asItem(item.iu.cooling_system.lvl3)
        ],[
            asItem(item.iu.processor.lvl8)
        ]
    )

    iuRecipe(evt, getRecipeID('processor_9'), IUMachineCraft.ELECTRONIC_ASSEMBLER,
        [
            asItem(item.iu.chip.lvl5, 2),
            asItem(item.iu.inductor.lvl4),
            asItem(item.iu.processor.lvl5),
            asItem(item.iu.diode.lvl3, 2),
            asItem(item.iu.cooling_system.lvl4)
        ],[
            asItem(item.iu.processor.lvl9)
        ]
    )

    iuRecipe(evt, getRecipeID('processor_10'), IUMachineCraft.ELECTRONIC_ASSEMBLER,
        [
            asItem(item.iu.chip.lvl6, 3),
            asItem(item.iu.inductor.lvl4),
            asItem(item.iu.processor.lvl6),
            asItem(item.iu.diode.lvl3, 2),
            asItem(item.iu.cooling_system.lvl4)
        ],[
            asItem(item.iu.processor.lvl10)
        ]
    )



    console.info('Industrial Upgrade recipe adding passed')
}