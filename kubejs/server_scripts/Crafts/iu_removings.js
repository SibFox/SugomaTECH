"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerIURecipeRemovings = (evt) => {

    function getRecipeID(path) {
        return recipeID('iu_change', path)
    }

    /**
     * 
     * @param {Internal.RecipesEventJS} evt 
     * @param {string} type 
     * @param {Array<string>} items 
     */
    function removeIUCraft(evt, type, items)
    {
        let dict = {
            "type": "industrialupgrade:universal_recipe_delete",
            "recipe_type": type,
            "isFluidRecipe": false,
            "isRemoveAll": true,
            "output": []
        }

        for (let item of items) {
            let out = {
                "type": "item",
                "id": item.item
            }
            if (item.isTag) {
                console.error('Wrong output item in IU remove\nitem ID: ' + item.item)
                return
            }
            if (item.isFluid) {
                out.type = "fluid"
                recipe.isFluidRecipe = true
            }

            dict.output.push(out)
        }

        evt.custom(dict)
    }

    removeIUCraft(evt, IUMachineCraft.ELECTRONIC_ASSEMBLER, [asItem(item.iu.processor.lvl3)])
    removeIUCraft(evt, IUMachineCraft.ELECTRONIC_ASSEMBLER, [asItem(item.iu.processor.lvl4)])
    removeIUCraft(evt, IUMachineCraft.ELECTRONIC_ASSEMBLER, [asItem(item.iu.processor.lvl5)])
    removeIUCraft(evt, IUMachineCraft.ELECTRONIC_ASSEMBLER, [asItem(item.iu.processor.lvl6)])
    removeIUCraft(evt, IUMachineCraft.ELECTRONIC_ASSEMBLER, [asItem(item.iu.processor.lvl7)])
    removeIUCraft(evt, IUMachineCraft.ELECTRONIC_ASSEMBLER, [asItem(item.iu.processor.lvl8)])
    removeIUCraft(evt, IUMachineCraft.ELECTRONIC_ASSEMBLER, [asItem(item.iu.processor.lvl9)])
    removeIUCraft(evt, IUMachineCraft.ELECTRONIC_ASSEMBLER, [asItem(item.iu.processor.lvl10)])
    
    

    console.info('IU recipe removing passed')
}