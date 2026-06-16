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
        { 'temerature': 2000 }
    )
    
    iuRecipe(evt, getRecipeID('fluid_pipe'), IUMachineCraft.WELDING,
        [
            asItem(item.iu.tube_scheme),
            asItem(tag.doubleplate.niobium_titanium)
        ],[
            asItem('pipez:fluid_pipe', 4)
        ],
        { 'temerature': 2000 }
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