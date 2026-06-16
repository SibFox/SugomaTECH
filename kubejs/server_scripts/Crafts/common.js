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

    shapedRecipe(evt, getRecipeID('createcybernetics', 'synth_nerve_cables'),
        [
            [ item.cn.fiber_optic, item.nugget.electrum ],
            [ item.nugget.electrum, item.nugget.electrum ]
        ],
    item.custom.synth_nerve_cables, 1)

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



    console.info('Common recipe adding passed')
}