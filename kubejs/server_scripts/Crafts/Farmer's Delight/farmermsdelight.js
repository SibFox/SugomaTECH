"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerFDRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('fd', path)
    }

    for (let part of [ 'brain', 'heart', 'liver', 'lungs', 'stomach' ]) {
        evt.recipes.farmersdelight.cutting(
            item.cn.bodypart[part],
            tag.tool.knife,
            [
                '2x kubejs:minced_' + part,
                ChanceResult.of('createcybernetics:ground_offal', 0.25)
            ]
        ).id(getRecipeID('minced_' + part + '/cutting'))

        evt.recipes.farmersdelight.cooking(
            'meals',
            [
                item.cn.bodypart[part], item.custom.hemolymph_drop,
                item.custom.hemolymph_drop, item.custom.hemolymph_drop,
                item.sugar
            ],
            'kubejs:hemolymph_soaked_' + part,
            0.5,
            160
        ).id(getRecipeID('hemolymph_soaked_' + part))
    }

    // evt.recipes.farmersdelight.cutting(
    //     item.cn.bodypart.brain,
    //     tag.tool.knife,
    //     [
    //         '2x kubejs:minced_brain',
    //         ChanceResult.of('createcybernetics:ground_offal', 0.25)
    //     ]
    // ).id(getRecipeID('minced_brain'))
    
    // evt.recipes.farmersdelight.cutting(
    //     item.cn.bodypart.heart,
    //     tag.tool.knife,
    //     [
    //         '2x kubejs:minced_heart',
    //         ChanceResult.of('createcybernetics:ground_offal', 0.25)
    //     ]
    // ).id(getRecipeID('minced_heart'))

    // evt.recipes.farmersdelight.cutting(
    //     item.cn.bodypart.liver,
    //     tag.tool.knife,
    //     [
    //         '2x kubejs:minced_liver',
    //         ChanceResult.of('createcybernetics:ground_offal', 0.25)
    //     ]
    // ).id(getRecipeID('minced_liver'))

    // evt.recipes.farmersdelight.cutting(
    //     item.cn.bodypart.lungs,
    //     tag.tool.knife,
    //     [
    //         '2x kubejs:minced_lungs',
    //         ChanceResult.of('createcybernetics:ground_offal', 0.25)
    //     ]
    // ).id(getRecipeID('minced_lungs'))

    // evt.recipes.farmersdelight.cutting(
    //     item.cn.bodypart.stomach,
    //     tag.tool.knife,
    //     [
    //         '2x kubejs:minced_stomach',
    //         ChanceResult.of('createcybernetics:ground_offal', 0.25)
    //     ]
    // ).id(getRecipeID('minced_stomach'))

    // evt.recipes.farmersdelight.cooking(
    //     'misc',
    //     [ 
    //         item.cn.bodypart.brain, item.custom.hemolymph_drop,
    //         item.custom.hemolymph_drop, item.custom.hemolymph_drop
    //     ],
    //     'kubejs:hemolymph_soaked_brain',
    //     0.5,
    //     160
    // ).id(getRecipeID('hemolymph_soaked_brain'))
    
    // evt.recipes.farmersdelight.cooking(
    //     'misc',
    //     [ 
    //         item.cn.bodypart.heart, item.custom.hemolymph_drop,
    //         item.custom.hemolymph_drop, item.custom.hemolymph_drop
    //     ],
    //     'kubejs:hemolymph_soaked_heart',
    //     0.5,
    //     160
    // ).id(getRecipeID('hemolymph_soaked_heart'))

    // evt.recipes.farmersdelight.cooking(
    //     'misc',
    //     [ 
    //         item.cn.bodypart.liver, item.custom.hemolymph_drop,
    //         item.custom.hemolymph_drop, item.custom.hemolymph_drop
    //     ],
    //     'kubejs:hemolymph_soaked_liver',
    //     0.5,
    //     160
    // ).id(getRecipeID('hemolymph_soaked_liver'))

    // evt.recipes.farmersdelight.cooking(
    //     'misc',
    //     [ 
    //         item.cn.bodypart.lungs, item.custom.hemolymph_drop,
    //         item.custom.hemolymph_drop, item.custom.hemolymph_drop
    //     ],
    //     'kubejs:hemolymph_soaked_lungs',
    //     0.5,
    //     160
    // ).id(getRecipeID('hemolymph_soaked_lungs'))

    // evt.recipes.farmersdelight.cooking(
    //     'misc',
    //     [ 
    //         item.cn.bodypart.stomach, item.custom.hemolymph_drop,
    //         item.custom.hemolymph_drop, item.custom.hemolymph_drop
    //     ],
    //     'kubejs:hemolymph_soaked_stomach',
    //     0.5,
    //     160
    // ).id(getRecipeID('hemolymph_soaked_stomach'))

    for (let food of [ 'kubejs:minced_brain', 'kubejs:minced_lungs', 'kubejs:minced_liver',
         'kubejs:minced_heart' ,'kubejs:minced_stomach' ]) {
            evt.smelting(food.replace(':', ':cooked_'), food).xp(0.35)
            evt.smoking(food.replace(':', ':cooked_'), food).xp(0.35)
            evt.campfireCooking(food.replace(':', ':cooked_'), food, 0.35, 600)
    }

    evt.smelting('kubejs:cooked_lungs', item.cn.bodypart.lungs).xp(0.35)
    evt.smoking('kubejs:cooked_lungs', item.cn.bodypart.lungs).xp(0.35)

    evt.smelting('1x kubejs:cooked_stomach', item.cn.bodypart.stomach).xp(0.35)
    evt.smoking('1x kubejs:cooked_stomach', item.cn.bodypart.stomach).xp(0.35)

    evt.smoking('createcybernetics:cooked_brain', item.cn.bodypart.brain).xp(0.35)
    evt.smoking('createcybernetics:cooked_heart', item.cn.bodypart.heart).xp(0.35)
    evt.smoking('createcybernetics:cooked_liver', item.cn.bodypart.liver).xp(0.35)
    evt.smoking('createcybernetics:roasted_andouille', 'createcybernetics:andouille_sausage').xp(0.35)

    console.info('Farmer\'s Delight recipe adding passed')
}