"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCreateMeltingRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('create/melting', path)
    }

    // В количестве output'а должно быть количество кусочков, поскольку умножается на 16
    const regMeltingRecipe = (evt, input, output) => {
        if (!input.isTag) {
            console.log('Input in Create Melting recipe must be a tag')
            return
        }
        if (!output.isFluid) {
            console.log('Output in Create Melting recipe must be a fluid')
            return
        }

        evt.custom({
            "neoforge:conditions": [
                {
                    "type": "neoforge:not",
                    "value": {
                        "type": "neoforge:tag_empty",
                        "tag": input.item
                    }
                }
            ],
            "type": "createbigcannons:melting",
            "heat_requirement": "heated",
            "ingredients": [
                {
                    "tag": input.item
                }
            ],
            "processing_time": output.count * 20,
            "results": [
                {
                    "amount": output.count * 16,
                    "id": output.item
                }
            ]
        })
    }

    // regMeltingRecipe(evt, asItem(tag.nugget.bronze), asItem(fluid.metal.bronze, 1))
    // regMeltingRecipe(evt, asItem(tag.ingot.bronze), asItem(fluid.metal.bronze, 9))
    // regMeltingRecipe(evt, asItem(tag.ore_block.bronze), asItem(fluid.metal.bronze, 81))

    // regMeltingRecipe(evt, asItem(tag.nugget.steel), asItem(fluid.metal.steel, 1))
    // regMeltingRecipe(evt, asItem(tag.ingot.steel), asItem(fluid.metal.steel, 9))
    // regMeltingRecipe(evt, asItem(tag.ore_block.steel), asItem(fluid.metal.steel, 81))
}