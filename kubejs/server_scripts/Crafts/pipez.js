"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerPipeZRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('pipez', path)
    }

    evt.remove({ output: 'pipez:item_pipe' })
    evt.remove({ output: 'pipez:fluid_pipe' })
    evt.remove({ output: 'pipez:energy_pipe' })
    evt.remove({ output: 'pipez:universal_pipe' })

    iuRecipe(evt, getRecipeID('item_pipe'), IUMachineCraft.WELDING,
        [
            asItem(item.iu.tube_scheme),
            asItem(tag.doubleplate.alumel)
        ],[
            asItem('pipez:item_pipe', 4)
        ],
        { 'temperature': 2000 }
    )
    
    iuRecipe(evt, getRecipeID('fluid_pipe'), IUMachineCraft.WELDING,
        [
            asItem(item.iu.tube_scheme),
            asItem(tag.doubleplate.niobium_titanium)
        ],[
            asItem('pipez:fluid_pipe', 4)
        ],
        { 'temperature': 2000 }
    )

    iuRecipe(evt, getRecipeID('universal_pipe'), IUMachineCraft.WELDING,
        [
            asItem('pipez:item_pipe'),
            asItem('pipez:fluid_pipe')
        ],[
            asItem('pipez:universal_pipe')
        ],
        { 'temperature': 3000 }
    )

    evt.remove({ output: 'pipez:basic_upgrade' })
    evt.remove({ output: 'pipez:improved_upgrade' })
    evt.remove({ output: 'pipez:advanced_upgrade' })
    evt.remove({ output: 'pipez:ultimate_upgrade' })
    
    evt.shaped(
        Item.of('pipez:basic_upgrade', 1),
        [
            'ACA',
            'BUB',
            'APA'
        ],{
            U: item.iu.upgrade.casing,
            A: tag.ingot.duralumin,
            B: item.ingot.red_alloy,
            C: item.iu.controller.lvl1,
            P: item.iu.microchip.lvl4
        }
    ).id(getRecipeID('basic_upgrade'))
    
    evt.shaped(
        Item.of('pipez:improved_upgrade', 1),
        [
            'ACA',
            'BUB',
            'APA'
        ],{
            U: 'pipez:basic_upgrade',
            A: tag.ingot.berylliumbronze,
            B: item.iu.exotic_material,
            C: item.iu.controller.lvl2,
            P: item.iu.microchip.lvl5
        }
    ).id(getRecipeID('improved_upgrade'))
    
    evt.shaped(
        Item.of('pipez:advanced_upgrade', 1),
        [
            'ACA',
            'BUB',
            'APA'
        ],{
            U: 'pipez:improved_upgrade',
            A: tag.ingot.hafniumboride,
            B: item.iu.graphite_plate,
            C: item.iu.controller.lvl3,
            P: item.iu.microchip.lvl6
        }
    ).id(getRecipeID('advanced_upgrade'))
    
    evt.shaped(
        Item.of('pipez:ultimate_upgrade', 1),
        [
            'ACA',
            'BUB',
            'APA'
        ],{
            U: 'pipez:advanced_upgrade',
            A: tag.ingot.inconel,
            B: item.ingot.netherite,
            C: item.iu.controller.lvl4,
            P: item.iu.microchip.lvl8
        }
    ).id(getRecipeID('ultimate_upgrade'))
    
    

    // shapedRecipe(evt, getRecipeID('item_pipe'),
    //     [
    //         [ tag.plate.alumel, tag.plate.alumel, tag.plate.alumel ],
    //         [ item.ingot.red_alloy, item.iu.tube_scheme, item.ingot.red_alloy ],
    //         [ tag.plate.alumel, tag.plate.alumel, tag.plate.alumel ]
    //     ],
    // 'pipez:item_pipe', 6)

    // shapedRecipe(evt, getRecipeID('fluid_pipe'),
    //     [
    //         [ tag.plate.niobium_titanium, tag.plate.niobium_titanium, tag.plate.niobium_titanium ],
    //         [ item.ingot.red_alloy, item.iu.tube_scheme, item.ingot.red_alloy ],
    //         [ tag.plate.niobium_titanium, tag.plate.niobium_titanium, tag.plate.niobium_titanium ]
    //     ],
    // 'pipez:fluid_pipe', 6)

    

    // shapedRecipe(evt, getRecipeID('universal_pipe'),
    //     [
    //         [ 'pipez:item_pipe', 'pipez:item_pipe', 'pipez:item_pipe' ],
    //         [ item.ingot.red_alloy, item.iu.tube_scheme, item.ingot.red_alloy ],
    //         [ 'pipez:fluid_pipe', 'pipez:fluid_pipe', 'pipez:fluid_pipe' ]
    //     ],
    // 'pipez:universal_pipe', 6)
    
    console.info('PipeZ recipe adding passed')
}