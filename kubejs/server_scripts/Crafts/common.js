"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCommonRecipes = (evt) => {

    function getRecipeID(a, b) {
        let c = a
        if (b != null) c += '/' + b
        return recipeID(c)
    }

    shapedRecipe(evt, getRecipeID('minecraft', 'saddle'),
        [
            [ null, item.leather, null],
            [ tag.leather, tag.ingot.iron, item.leather ]
        ],
        'minecraft:saddle'
    )

    iuRecipe(evt, getRecipeID('red_alloy'), IUMachineCraft.ALLOY_SMELTER.lvl1,
        [
            asItem(tag.ingot.electrum),
            asItem(item.iu.compressed_redstone)
        ],[
            asItem(item.ingot.red_alloy)
        ],
        { 'temperature': 2000 }
    )

    iuRecipe(evt, getRecipeID('liquid_redstone_1'), IUMachineCraft.DIVIDER.ITEM_FLUID,
        [
            asItem(item.redstone),
            asItem(fluid.oxygen, 1)
        ],[
            asItem(fluid.redstone, 10),
            asItem(fluid.oxygen, 5)
        ]
    )

    iuRecipe(evt, getRecipeID('liquid_redstone_2'), IUMachineCraft.DIVIDER.ITEM_FLUID,
        [
            asItem(item.redstone_block),
            asItem(fluid.oxygen, 1)
        ],[
            asItem(fluid.redstone, 90),
            asItem(fluid.oxygen, 45)
        ]
    )

    shapedRecipe(evt, getRecipeID('createcybernetics', 'synth_nerve_cables'),
        [
            [ item.cn.fiber_optic, item.nugget.electrum ],
            [ item.nugget.electrum, item.nugget.electrum ]
        ],
    item.custom.synth_nerve_cables, 3)

    evt.shapeless(Item.of(item.arphex.raw_hemolymph, 1),
        [
            '9x ' + item.custom.hemolymph_drop
        ]
    ).id(getRecipeID('arphex', 'raw_hemolyph'))    
    

    iuRecipe(evt, getRecipeID('createcybernetics', 'organic_polymer'), IUMachineCraft.PLASTIC_PLATE,
        [
            asItem(fluid.polypropylene, 100),
            asItem(item.arphex.raw_hemolymph)
        ],[
            asItem(item.custom.organic_polymer)
        ]
    )

    iuRecipe(evt, getRecipeID('createcybernetics', 'conducting_organic_polymer'), IUMachineCraft.SOLID_ELECTROLYZER,
        [
            asItem(item.custom.organic_polymer)
        ],[
            asItem(item.custom.conducting_organic_polymer),
            asItem(fluid.water, 50)
        ]
    )

    cElectrifyRecipe(evt, getRecipeID('electrum_nugget'),
        4000,
        asItem(tag.nugget.gold),
        asItem(item.nugget.electrum)
    )

    cElectrifyRecipe(evt, getRecipeID('electrum_ingot'),
        36000,
        asItem(tag.ingot.gold),
        asItem(item.ingot.electrum)
    )
    
    cElectrifyRecipe(evt, getRecipeID('electrum_plate'),
        36000,
        asItem(tag.plate.gold),
        asItem(item.plate.electrum)
    )
    
    cElectrifyRecipe(evt, getRecipeID('electrum_block'),
        324000,
        asItem(tag.ore_block.gold),
        asItem(item.ore_block.electrum)
    )
    
    cElectrifyRecipe(evt, getRecipeID('conducting_organic_polymer'),
        6000,
        asItem(item.custom.organic_polymer),
        asItem(item.custom.conducting_organic_polymer)
    )
    
    evt.shaped(
        Item.of(item.custom.pack_frame, 1),
        [
            'RRR',
            'R R',
            'RRR'
        ],{
            R: tag.rod.tungsten
        }
    ).id(getRecipeID('pack_frame'))
    
    evt.shapeless(Item.of(item.custom.hardened_leather, 1),
        [
            item.leather, item.string, 'kaleidoscope_cookery:oil'
        ]
    ).id(getRecipeID('hardened_leather'))    

    evt.shaped(
        Item.of(item.iu.module.cybernetics, 1),
        [
            ' D ',
            'NON',
            'PGP'
        ],{
            D: item.cn.diodes,
            O: item.iu.module.template.lvl1,
            P: tag.plate.titanium,
            G: tag.gear.titanium,
            N: item.iu.tech_box.normal.nano
        }
    ).id(getRecipeID('module_cybernetics'))
    
    evt.shaped(
        Item.of('hole_filler_mod:throwable_hole_filler_balanced', 1),
        [
            'PMO',
            'PGO',
            'PCO'
        ],{
            M: item.iu.module.macerator.lvl1,
            C: item.iu.molecular_core,
            G: 'industrialupgrade:basemachine2/lava_gen',
            P: tag.casings.palladium,
            O: tag.casings.polonium
        }
    ).id(getRecipeID('hole_filler'))
    
    iuRecipe(evt, getRecipeID('netherite'), IUMachineCraft.ALLOY_SMELTER.lvl2,
        [
            asItem(item.ingot.netherite_scrap, 4),
            asItem(item.ingot.gold, 4),
            asItem(tag.ingot.molybdenum_steel, 4)
        ],[
            asItem(item.ingot.netherite)
        ]
    )
    
    

    // До добавления биг кэнонс
    // evt.shapeless(Item.of(item.ingot.bronze, 1),
    //     [
    //         Ingredient.of(tag.nugget.bronze, 9)
    //     ]
    // ).id(getRecipeID('bronze_ingot_ct'))
    
    // До добавления биг кэнонс
    // evt.shapeless(Item.of(item.ingot.steel, 1),
    //     [
    //         Ingredient.of(tag.nugget.steel, 9)
    //     ]
    // ).id(getRecipeID('steel_ingot_ct'))
    
    // До добавления биг кэнонс
    // evt.shapeless(Item.of(item.nugget.steel, 9),
    //     [
    //         tag.ingot.steel
    //     ]
    // ).id(getRecipeID('steel_nugget_ct'))

    // Кловергетт

    iuRecipe(evt, getRecipeID('kloverghett_crystal'), IUMachineCraft.SILICON_CHAMBER,
        [
            asItem(item.custom.kloverghett_seed, 3),
            asItem(item.echo_shard)
        ],[
            asItem(item.custom.kloverghett_crystal)
        ]
    )

    aeReactionRecipe(evt, getRecipeID('kloverghett_part'),
        100000, asItem(fluid.cryogen, 500),
        [
            asItem(item.custom.kloverghett_crystal, 4),
            asItem(item.ae.charged_certus_quartz_crystal, 32),
            asItem(item.ae.fluix_crystal, 24),
            asItem(item.ae.entro_crystal, 24),
            asItem(item.iu.dust.energy, 16)
        ],
        asItem(item.custom.kloverghett_part, 1)
    )
    
    iuRecipe(evt, getRecipeID('kloverghett_treated'), IUMachineCraft.CYCLOTRON,
        [
            asItem(item.custom.kloverghett_part, 3)
        ],[
            asItem(item.custom.kloverghett_treated)
        ],
        { 
            'chance': 60,
            'cryogen': 70,
            'positrons': 43
        }
    )
    
    iuRecipe(evt, getRecipeID('kloverghett_seed'), IUMachineCraft.FLUID_INTEGRATOR,
        [
            asItem(fluid.fluid_matter, 75),
            asItem(item.custom.kloverghett_crystal)
        ],[
            asItem(item.custom.kloverghett_seed, 5),
            asItem(fluid.nitrooxide, 125)
        ]
    )
    
    
    
    
    

    console.info('Common recipe adding passed')
}