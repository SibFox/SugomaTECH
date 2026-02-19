"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCommonRecipes = (evt) => {

    shapedRecipe(evt, recipeID('minecraft', 'saddle'),
        [
            [ null, item.leather, null],
            [ tag.leather, tag.ingot.iron, item.leather ]
        ],
        'minecraft:saddle'
    )

    iuRecipe(evt, recipeID('red_alloy'), IUMachineCraft.ALLOY_SMELTER.lvl1,
        [
            asItem(tag.ingot.electrum),
            asItem(item.iu.compressed_redstone)
        ],[
            asItem(item.ingot.red_alloy)
        ],
        { 'temperature': 2000 }
    )

    shapedRecipe(evt, recipeID('createcybernetics', 'synth_nerve_cables'),
        [
            [ item.cn.fiber_optic, item.nugget.electrum ],
            [ item.nugget.electrum, item.nugget.electrum ]
        ],
    item.custom.synth_nerve_cables, 1)

    evt.shapeless(Item.of(item.arphex.raw_hemolymph, 1),
        [
            '9x ' + item.custom.hemolymph_drop
        ]
    ).id(recipeID('arphex', 'raw_hemolyph'))    
    

    iuRecipe(evt, recipeID('createcybernetics', 'organic_polymer'), IUMachineCraft.PLASTIC_PLATE,
        [
            asItem(fluid.polypropylene, 100),
            asItem(item.arphex.raw_hemolymph)
        ],[
            asItem(item.custom.organic_polymer)
        ]
    )

    iuRecipe(evt, recipeID('createcybernetics', 'conducting_organic_polymer'), IUMachineCraft.SOLID_ELECTROLYZER,
        [
            asItem(item.custom.organic_polymer)
        ],[
            asItem(item.custom.conducting_organic_polymer),
            asItem(fluid.water, 50)
        ]
    )

    cElectrifyRecipe(evt, recipeID('electrum_nugget'),
        4000,
        asItem(tag.nugget.gold),
        asItem(item.nugget.electrum)
    )

    cElectrifyRecipe(evt, recipeID('electrum_ingot'),
        36000,
        asItem(tag.ingot.gold),
        asItem(item.ingot.electrum)
    )
    
    cElectrifyRecipe(evt, recipeID('electrum_plate'),
        36000,
        asItem(tag.plate.gold),
        asItem(item.plate.electrum)
    )
    
    cElectrifyRecipe(evt, recipeID('electrum_block'),
        324000,
        asItem(tag.ore_block.gold),
        asItem(item.ore_block.electrum)
    )
    
    cElectrifyRecipe(evt, recipeID('conducting_organic_polymer'),
        6000,
        asItem(item.custom.organic_polymer),
        asItem(item.custom.conducting_organic_polymer)
    )
    
    
    
    

    console.info('Common recipe adding passed')
}