"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerFDRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('fd', path)
    }

    evt.recipes.farmersdelight.cooking(
        'meals',
        [
            '#c:raw_meats',
            '#c:raw_meats'
        ],
        'kubejs:preserved_meat',
        0.35,
        200,
        item.iu.tin_can
    ).id(getRecipeID('preserved_meat'))
    
    evt.recipes.farmersdelight.cutting(
        'minecraft:bread',
        tag.tool.knife,
        [
            '4x refurbished_furniture:bread_slice',
        ]
    ).id(getRecipeID('bread_slice'))
    
    

    // for (let part of [ 'brain', 'heart', 'liver', 'lungs', 'stomach' ]) {
    //     evt.recipes.farmersdelight.cutting(
    //         item.cn.bodypart[part],
    //         tag.tool.knife,
    //         [
    //             '2x kubejs:minced_' + part,
    //             ChanceResult.of('createcybernetics:ground_offal', 0.25)
    //         ]
    //     ).id(getRecipeID('minced_' + part + '/cutting'))

    //     evt.recipes.farmersdelight.cooking(
    //         'meals',
    //         [
    //             item.cn.bodypart[part], item.custom.hemolymph_drop,
    //             item.custom.hemolymph_drop, item.custom.hemolymph_drop, item.sugar
    //         ],
    //         'kubejs:hemolymph_soaked_' + part,
    //         0.5,
    //         160
    //     ).id(getRecipeID('hemolymph_soaked_' + part + '/cooking'))
    // }

    // for (let food of [ 'kubejs:minced_brain', 'kubejs:minced_lungs', 'kubejs:minced_liver',
    //      'kubejs:minced_heart' ,'kubejs:minced_stomach' ]) {
    //         evt.smelting(food.replace(':', ':cooked_'), food).xp(0.35)
    //         evt.smoking(food.replace(':', ':cooked_'), food).xp(0.35)
    //         evt.campfireCooking(food.replace(':', ':cooked_'), food, 0.35, 600)
    // }

    // evt.smelting('kubejs:cooked_lungs', item.cn.bodypart.lungs).xp(0.35)
    // evt.smoking('kubejs:cooked_lungs', item.cn.bodypart.lungs).xp(0.35)

    // evt.smelting('1x kubejs:cooked_stomach', item.cn.bodypart.stomach).xp(0.35)
    // evt.smoking('1x kubejs:cooked_stomach', item.cn.bodypart.stomach).xp(0.35)

    // evt.smoking('createcybernetics:cooked_brain', item.cn.bodypart.brain).xp(0.35)
    // evt.smoking('createcybernetics:cooked_heart', item.cn.bodypart.heart).xp(0.35)
    // evt.smoking('createcybernetics:cooked_liver', item.cn.bodypart.liver).xp(0.35)
    // evt.smoking('createcybernetics:roasted_andouille', 'createcybernetics:andouille_sausage').xp(0.35)

    console.info('Farmer\'s Delight recipe adding passed')
}