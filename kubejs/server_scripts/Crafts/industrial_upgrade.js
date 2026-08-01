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
            C: tag.casing.tin
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
    
    
    // Переделка процессоров

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


    // Переделка Сплаволитеек
    // Сплаволитейка на 2
    
    iuRecipe(evt, getRecipeID('steel_untreated'), IUMachineCraft.ALLOY_SMELTER.lvl1,
        [
            asItem(tag.ingot.iron, 2),
            asItem(tag.dusts.coal, 3)
        ],[
            asItem(item.ingot.steel_untreated, 3)
        ],
        { 'temperature': 4000 }
    )
    
    iuRecipe(evt, getRecipeID('wolframite'), IUMachineCraft.ALLOY_SMELTER.lvl1,
        [
            asItem(tag.ingot.tungsten, 2),
            asItem(tag.ingot.nickel, 1)
        ],[
            asItem(item.ingot.wolframite, 2)
        ],
        { 'temperature': 3000 }
    )
    
    iuRecipe(evt, getRecipeID('titanium_steel_untreated'), IUMachineCraft.ALLOY_SMELTER.lvl1,
        [
            asItem(tag.ingot.steel, 2),
            asItem(tag.ingot.titanium, 2)
        ],[
            asItem(item.ingot.titanium_steel_untreated, 3)
        ],
        { 'temperature': 3000 }
    )
    
    iuRecipe(evt, getRecipeID('gallium_arsenic'), IUMachineCraft.ALLOY_SMELTER.lvl1,
        [
            asItem(tag.ingot.arsenic, 2),
            asItem(tag.ingot.gallium, 1)
        ],[
            asItem(item.ingot.gallium_arsenic, 3)
        ],
        { 'temperature': 4000 }
    )
    
    iuRecipe(evt, getRecipeID('red_brass'), IUMachineCraft.ALLOY_SMELTER.lvl1,
        [
            asItem(tag.ingot.copper, 1),
            asItem(tag.ingot.zinc, 1)
        ],[
            asItem(item.ingot.brass, 2)
        ],
        { 'temperature': 3000 }
    )
    
    iuRecipe(evt, getRecipeID('nichrome'), IUMachineCraft.ALLOY_SMELTER.lvl1,
        [
            asItem(tag.ingot.nickel, 1),
            asItem(tag.ingot.chromium, 1)
        ],[
            asItem(item.ingot.nichrome, 2)
        ],
        { 'temperature': 4000 }
    )
    
    iuRecipe(evt, getRecipeID('nitenol'), IUMachineCraft.ALLOY_SMELTER.lvl1,
        [
            asItem(tag.ingot.nickel, 1),
            asItem(tag.ingot.titanium, 1)
        ],[
            asItem(item.ingot.nitenol, 2)
        ],
        { 'temperature': 4000 }
    )
    
    iuRecipe(evt, getRecipeID('duralumin'), IUMachineCraft.ALLOY_SMELTER.lvl1,
        [
            asItem(tag.ingot.aluminium, 1),
            asItem(tag.ingot.magnesium, 2)
        ],[
            asItem(item.ingot.duralumin, 3)
        ],
        { 'temperature': 2000 }
    )
    
    iuRecipe(evt, getRecipeID('alumel'), IUMachineCraft.ALLOY_SMELTER.lvl1,
        [
            asItem(tag.ingot.aluminium, 2),
            asItem(tag.ingot.titanium, 1)
        ],[
            asItem(item.ingot.alumel, 2)
        ],
        { 'temperature': 5000 }
    )
    
    iuRecipe(evt, getRecipeID('niobium_titanium'), IUMachineCraft.ALLOY_SMELTER.lvl1,
        [
            asItem(tag.ingot.niobium, 2),
            asItem(tag.ingot.titanium, 1)
        ],[
            asItem(item.ingot.niobium_titanium, 2)
        ],
        { 'temperature': 3000 }
    )
    
    iuRecipe(evt, getRecipeID('cobalt_chrome'), IUMachineCraft.ALLOY_SMELTER.lvl1,
        [
            asItem(tag.ingot.chromium, 1),
            asItem(tag.ingot.cobalt, 1)
        ],[
            asItem(item.ingot.cobalt_chrome, 2)
        ],
        { 'temperature': 2000 }
    )
    
    iuRecipe(evt, getRecipeID('osmiridium'), IUMachineCraft.ALLOY_SMELTER.lvl1,
        [
            asItem(tag.ingot.osmium, 2),
            asItem(tag.ingot.iridium, 1)
        ],[
            asItem(item.ingot.osmiridium, 3)
        ],
        { 'temperature': 3000 }
    )
    
    iuRecipe(evt, getRecipeID('ferromanganese'), IUMachineCraft.ALLOY_SMELTER.lvl1,
        [
            asItem(tag.ingot.iron, 1),
            asItem(tag.ingot.manganese, 1)
        ],[
            asItem(item.ingot.ferromanganese, 2)
        ],
        { 'temperature': 4500 }
    )
    
    // Сплаволитейка на 3
    
    iuRecipe(evt, getRecipeID('muntsa'), IUMachineCraft.ALLOY_SMELTER.lvl2,
        [
            asItem(tag.ingot.lead, 1),
            asItem(tag.ingot.zinc, 1),
            asItem(tag.ingot.copper, 1)
        ],[
            asItem(item.ingot.muntsa, 3)
        ],
        { 'temperature': 4500 }
    )
    
    iuRecipe(evt, getRecipeID('alcled'), IUMachineCraft.ALLOY_SMELTER.lvl2,
        [
            asItem(tag.ingot.manganese, 1),
            asItem(tag.ingot.magnesium, 1),
            asItem(tag.ingot.aluminium, 1)
        ],[
            asItem(item.ingot.alcled, 3)
        ],
        { 'temperature': 4000 }
    )
    
    iuRecipe(evt, getRecipeID('aluminum_bronze'), IUMachineCraft.ALLOY_SMELTER.lvl2,
        [
            asItem(tag.ingot.tin, 1),
            asItem(tag.ingot.copper, 1),
            asItem(tag.ingot.aluminium, 1)
        ],[
            asItem(item.ingot.aluminum_bronze, 3)
        ],
        { 'temperature': 3000 }
    )
    
    iuRecipe(evt, getRecipeID('vanadoalumite'), IUMachineCraft.ALLOY_SMELTER.lvl2,
        [
            asItem(tag.ingot.cobalt, 1),
            asItem(tag.ingot.vanadium, 1),
            asItem(tag.ingot.aluminium, 1)
        ],[
            asItem(item.ingot.vanadoalumite, 3)
        ],
        { 'temperature': 4500 }
    )
    
    iuRecipe(evt, getRecipeID('vitalium'), IUMachineCraft.ALLOY_SMELTER.lvl2,
        [
            asItem(tag.ingot.nickel, 1),
            asItem(tag.ingot.tungsten, 1),
            asItem(tag.ingot.chromium, 1)
        ],[
            asItem(item.ingot.vitalium, 3)
        ],
        { 'temperature': 5000 }
    )
    
    iuRecipe(evt, getRecipeID('aluminium_silicon'), IUMachineCraft.ALLOY_SMELTER.lvl2,
        [
            asItem(item.flint, 1),
            asItem(tag.ingot.magnesium, 1),
            asItem(tag.ingot.aluminium, 1)
        ],[
            asItem(item.ingot.aluminium_silicon, 2)
        ],
        { 'temperature': 3000 }
    )
    
    iuRecipe(evt, getRecipeID('beryllium_bronze'), IUMachineCraft.ALLOY_SMELTER.lvl2,
        [
            asItem(tag.ingot.tin, 1),
            asItem(tag.ingot.copper, 3),
            asItem(item.iu.beryllium, 1)
        ],[
            asItem(item.ingot.beryllium_bronze, 4)
        ],
        { 'temperature': 4000 }
    )
    
    iuRecipe(evt, getRecipeID('zeliber'), IUMachineCraft.ALLOY_SMELTER.lvl2,
        [
            asItem(tag.ingot.zinc, 1),
            asItem(tag.ingot.nickel, 1),
            asItem(tag.ingot.copper, 1)
        ],[
            asItem(item.ingot.zeliber, 3)
        ],
        { 'temperature': 4500 }
    )
    
    iuRecipe(evt, getRecipeID('hafnium_boride'), IUMachineCraft.ALLOY_SMELTER.lvl2,
        [
            asItem(tag.ingot.tantalum, 1),
            asItem(item.iu.bor, 1),
            asItem(tag.ingot.hafnium, 1)
        ],[
            asItem(item.ingot.hafnium_boride, 2)
        ],
        { 'temperature': 5000 }
    )
    
    iuRecipe(evt, getRecipeID('tan_tung_haf'), IUMachineCraft.ALLOY_SMELTER.lvl2,
        [
            asItem(tag.ingot.tungsten, 1),
            asItem(tag.ingot.tantalum, 1),
            asItem(tag.ingot.hafnium, 1)
        ],[
            asItem(item.ingot.tan_tung_haf, 3)
        ],
        { 'temperature': 5000 }
    )
    
    iuRecipe(evt, getRecipeID('hafnium_carbide'), IUMachineCraft.ALLOY_SMELTER.lvl2,
        [
            asItem(tag.ingot.copper, 3),
            asItem(tag.ingot.tantalum, 1),
            asItem(tag.ingot.hafnium, 1)
        ],[
            asItem(item.ingot.hafnium_carbide, 4)
        ],
        { 'temperature': 5000 }
    )
    
    iuRecipe(evt, getRecipeID('molybdenum_steel'), IUMachineCraft.ALLOY_SMELTER.lvl2,
        [
            asItem(tag.ingot.thallium, 1),
            asItem(tag.ingot.steel, 1),
            asItem(tag.ingot.molybdenum, 1)
        ],[
            asItem(item.ingot.molybdenum_steel, 3)
        ],
        { 'temperature': 5000 }
    )
    
    iuRecipe(evt, getRecipeID('yttrium_aluminium_garnet'), IUMachineCraft.ALLOY_SMELTER.lvl2,
        [
            asItem(tag.ingot.aluminium, 1),
            asItem(tag.ingot.yttrium, 1),
            asItem(tag.ingot.neodymium, 1)
        ],[
            asItem(item.ingot.yttrium_aluminium_garnet, 3)
        ],
        { 'temperature': 5000 }
    )
    
    iuRecipe(evt, getRecipeID('titanium_steel'), IUMachineCraft.ALLOY_SMELTER.lvl2,
        [
            asItem(tag.ingot.barium, 1),
            asItem(tag.ingot.titanium, 1),
            asItem(tag.ingot.steel, 2)
        ],[
            asItem(item.ingot.titanium_steel, 3)
        ],
        { 'temperature': 3000 }
    )

    // Сплавка на 4
    
    iuRecipe(evt, getRecipeID('stainless_steel'), IUMachineCraft.ALLOY_SMELTER.lvl3,
        [
            asItem(tag.ingot.iron, 1),
            asItem(tag.ingot.chromium, 1),
            asItem(tag.ingot.nickel, 1),
            asItem(tag.ingot.manganese, 1)
        ],[
            asItem(item.ingot.stainless_steel, 3)
        ],
        { 'temperature': 7000 }
    )
    
    iuRecipe(evt, getRecipeID('inconel'), IUMachineCraft.ALLOY_SMELTER.lvl3,
        [
            asItem(tag.ingot.iron, 1),
            asItem(tag.ingot.chromium, 1),
            asItem(tag.ingot.nickel, 1),
            asItem(tag.ingot.molybdenum, 1)
        ],[
            asItem(item.ingot.inconel, 3)
        ],
        { 'temperature': 7500 }
    )
    
    iuRecipe(evt, getRecipeID('stellite'), IUMachineCraft.ALLOY_SMELTER.lvl3,
        [
            asItem(tag.ingot.iron, 1),
            asItem(tag.ingot.chromium, 1),
            asItem(tag.ingot.cobalt, 1),
            asItem(tag.ingot.tungsten, 1)
        ],[
            asItem(item.ingot.stellite, 3)
        ],
        { 'temperature': 6500 }
    )
    
    iuRecipe(evt, getRecipeID('woods'), IUMachineCraft.ALLOY_SMELTER.lvl3,
        [
            asItem(tag.ingot.tin, 1),
            asItem(tag.ingot.lead, 1),
            asItem(tag.ingot.bismuth, 1),
            asItem(tag.ingot.cadmium, 1)
        ],[
            asItem(item.ingot.woods, 3)
        ],
        { 'temperature': 5000 }
    )
    
    iuRecipe(evt, getRecipeID('steel_2'), IUMachineCraft.ALLOY_SMELTER.lvl3,
        [
            asItem(tag.ingot.iron, 1),
            asItem(tag.dusts.coal, 2),
            asItem(tag.ingot.nickel, 1),
            asItem(tag.ingot.manganese, 1)
        ],[
            asItem(item.ingot.steel, 4)
        ],
        { 'temperature': 5000 }
    )
    
    iuRecipe(evt, getRecipeID('permalloy'), IUMachineCraft.ALLOY_SMELTER.lvl3,
        [
            asItem(tag.ingot.iron, 1),
            asItem(tag.dusts.coal, 2),
            asItem(tag.ingot.nickel, 1),
            asItem(tag.ingot.molybdenum, 1)
        ],[
            asItem(item.ingot.permalloy, 3)
        ],
        { 'temperature': 8000 }
    )

    console.info('Industrial Upgrade recipe adding passed')
}