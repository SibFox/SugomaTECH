"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCreateIURecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('create', path)
    }

    iuRecipe(evt, getRecipeID('andesite_alloy_iron'), IUMachineCraft.ALLOY_SMELTER.lvl1,
        [
            asItem(item.andesite, 3),
            asItem(tag.ingot.iron)
        ],[
            asItem(item.create.andesite_alloy, 4)
        ],
        { "temperature": 2000 }
    )
    
    iuRecipe(evt, getRecipeID('andesite_alloy_zinc'), IUMachineCraft.ALLOY_SMELTER.lvl1,
        [
            asItem(item.andesite, 3),
            asItem(tag.ingot.zinc)
        ],[
            asItem(item.create.andesite_alloy, 4)
        ],
        { "temperature": 2000 }
    )

    iuRecipe(evt, getRecipeID('electron_tube'), IUMachineCraft.ELECTRONIC_ASSEMBLER,
        [
            asItem(tag.plate.iron),
            asItem(item.iu.capacitor.lvl1),
            asItem(item.iu.diode.lvl1, 2),
            asItem(item.iu.wire.bare.tin, 2),
            asItem(item.create.polished_rose_quarts)
        ],[
            asItem(item.create.electron_tube)
        ]
    )
    
    iuRecipe(evt, getRecipeID('transmitter'), IUMachineCraft.ELECTRONIC_ASSEMBLER,
        [
            asItem(tag.plate.copper, 1),
            asItem(item.ingot.red_alloy, 1),
            asItem(item.redstone, 4),
            asItem(item.create.electron_tube),
            asItem(item.iu.chip.lvl1)
        ],[
            asItem(item.create.transmitter)
        ]
    )

}