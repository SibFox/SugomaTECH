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

    evt.custom(
        {
        "type": "kaleidoscope_cookery:chopping_board",
        "cut_count": 4,
        "ingredient": {
            "item": "starcatcher:starcaught_fish"
        },
        "model_id": "kaleidoscope_cookery:cod",
        "result": {
            "count": 2,
            "id": "kaleidoscope_cookery:sashimi"
        }
        }
    )

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



    // ====== КОМОПСТЫ (FD, MND, ATE) ======

    // Органический компост
    evt.shapeless(Item.of('farmersdelight:organic_compost', 8),
        [
            'industrialupgrade:blockresource/peat',
            'agritechevolved:biomass',
            'agritechevolved:biomass',
            'farmersdelight:tree_bark',
            'farmersdelight:tree_bark',
            'industrialupgrade:fertilizer',
            'industrialupgrade:fertilizer',
            'industrialupgrade:fertilizer',
            'industrialupgrade:fertilizer'
        ]
    ).id(getRecipeID('organic_compost'))

    // Летейский компост
    evt.shapeless(Item.of('mynethersdelight:letios_compost', 8),
        [
            [
                'minecraft:soul_sand',
                'minecraft:soul_soil'
            ],
            'agritechevolved:biomass',
            'agritechevolved:biomass',
            [
                'minecraft:warped_roots',
                'minecraft:crimson_roots'
            ],
            [
                'minecraft:warped_roots',
                'minecraft:crimson_roots'
            ],
            'industrialupgrade:fertilizer',
            'industrialupgrade:fertilizer',
            'industrialupgrade:fertilizer',
            'industrialupgrade:fertilizer'
        ]
    ).id(getRecipeID('letios_compost'))
    
    iuRecipe(evt, getRecipeID('mulch'), IUMachineCraft.CHEMICAL_FACTORY,
        [
            asItem(fluid.brilliant_azure, 1000),
            asItem('farmersdelight:rich_soil'),
            asItem('mynethersdelight:resurgent_soil')
        ],[
            asItem('agritechevolved:mulch')
        ]
    )

    aeReactionRecipe(evt, getRecipeID('infused_farmland'),
        10000, asItem(fluid.quantum_infusion, 200),
        [
            asItem('agritechevolved:mulch', 4),
            asItem(item.iu.plutonium_lazuli_crystall)

        ],
        asItem('agritechevolved:infused_farmland', 4)
    )

    console.info('Farmer\'s Delight recipe adding passed')
}