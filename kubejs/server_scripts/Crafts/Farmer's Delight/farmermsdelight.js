"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerFDRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('fd', path)
    }

    evt.recipes.farmersdelight.cutting(
        item.cn.bodypart.brain,
        tag.tool.knife,
        [
            '2x kubejs:minced_brain',
        ]
    ).id(getRecipeID('minced_brain'))
    
    evt.recipes.farmersdelight.cutting(
        item.cn.bodypart.heart,
        tag.tool.knife,
        [
            '2x kubejs:minced_heart',
        ]
    ).id(getRecipeID('minced_heart'))

    evt.recipes.farmersdelight.cutting(
        item.cn.bodypart.liver,
        tag.tool.knife,
        [
            '2x kubejs:minced_liver',
        ]
    ).id(getRecipeID('minced_liver'))

    evt.recipes.farmersdelight.cutting(
        item.cn.bodypart.lungs,
        tag.tool.knife,
        [
            '2x kubejs:minced_lungs',
        ]
    ).id(getRecipeID('minced_lungs'))

    evt.recipes.farmersdelight.cutting(
        item.cn.bodypart.stomach,
        tag.tool.knife,
        [
            '2x kubejs:minced_stomach',
        ]
    ).id(getRecipeID('minced_stomach'))

    evt.recipes.farmersdelight.cooking(
        'misc',
        [ 
            item.cn.bodypart.brain, item.custom.hemolymph_drop,
            item.custom.hemolymph_drop, item.custom.hemolymph_drop
        ],
        'kubejs:hemolymph_soaked_brain',
        0.5,
        160
    ).id(getRecipeID('hemolymph_soaked_brain'))
    
    evt.recipes.farmersdelight.cooking(
        'misc',
        [ 
            item.cn.bodypart.heart, item.custom.hemolymph_drop,
            item.custom.hemolymph_drop, item.custom.hemolymph_drop
        ],
        'kubejs:hemolymph_soaked_heart',
        0.5,
        160
    ).id(getRecipeID('hemolymph_soaked_heart'))

    evt.recipes.farmersdelight.cooking(
        'misc',
        [ 
            item.cn.bodypart.liver, item.custom.hemolymph_drop,
            item.custom.hemolymph_drop, item.custom.hemolymph_drop
        ],
        'kubejs:hemolymph_soaked_liver',
        0.5,
        160
    ).id(getRecipeID('hemolymph_soaked_liver'))

    evt.recipes.farmersdelight.cooking(
        'misc',
        [ 
            item.cn.bodypart.lungs, item.custom.hemolymph_drop,
            item.custom.hemolymph_drop, item.custom.hemolymph_drop
        ],
        'kubejs:hemolymph_soaked_lungs',
        0.5,
        160
    ).id(getRecipeID('hemolymph_soaked_lungs'))

    evt.recipes.farmersdelight.cooking(
        'misc',
        [ 
            item.cn.bodypart.stomach, item.custom.hemolymph_drop,
            item.custom.hemolymph_drop, item.custom.hemolymph_drop
        ],
        'kubejs:hemolymph_soaked_stomach',
        0.5,
        160
    ).id(getRecipeID('hemolymph_soaked_stomach'))
    


    console.info('Farmer\'s Delight recipe adding passed')
}