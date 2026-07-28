"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerAgritechIURecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('agritechevolved', path)
    }

    iuRecipe(evt, getRecipeID('liq_biomass_4'), IUMachineCraft.DIVIDER.ITEM_FLUID,
        [
            asItem('agritechevolved:crude_biomass')
        ],[
            asItem(fluid.biomass, 30),
            asItem(fluid.oxygen, 5)
        ]
    )

    iuRecipe(evt, getRecipeID('liq_biomass_1'), IUMachineCraft.DIVIDER.ITEM_FLUID,
        [
            asItem('agritechevolved:biomass')
        ],[
            asItem(fluid.biomass, 200),
            asItem(fluid.oxygen, 40)
        ]
    )
    
    iuRecipe(evt, getRecipeID('liq_biomass_2'), IUMachineCraft.DIVIDER.ITEM_FLUID,
        [
            asItem('agritechevolved:compacted_biomass')
        ],[
            asItem(fluid.biomass, 1500),
            asItem(fluid.oxygen, 300)
        ]
    )
    
    iuRecipe(evt, getRecipeID('liq_biomass_3'), IUMachineCraft.DIVIDER.ITEM_FLUID,
        [
            asItem('agritechevolved:compacted_biomass_block')
        ],[
            asItem(fluid.biomass, 10000),
            asItem(fluid.oxygen, 1000)
        ]
    )

    iuRecipe(evt, getRecipeID('mulch'), IUMachineCraft.CHEMICAL_FACTORY,
        [
            asItem(fluid.biomass, 1000),
            asItem('farmersdelight:rich_soil'),
            asItem(item.iu.dust.calcium_phosphate)
        ],[
            asItem('agritechevolved:mulch')
        ]
    )
    
    iuRecipe(evt, getRecipeID('infused_farmland'), IUMachineCraft.CHEMICAL_FACTORY,
        [
            asItem(fluid.plant_mixture, 1000),
            asItem('agritechevolved:mulch'),
            asItem(item.iu.dust.potassium_phosphate)
        ],[
            asItem('agritechevolved:infused_farmland')
        ]
    )
    
}