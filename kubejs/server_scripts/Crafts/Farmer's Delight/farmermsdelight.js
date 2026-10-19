"use strict";

let { $RecipesKubeEvent } = require("@package/dev/latvian/mods/kubejs/recipe");

/**
 * 
 * @param {$RecipesKubeEvent} evt 
 */
const registerFDRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('fd', path)
    }

    const fdCutting = evt.recipes.farmersdelight.cutting
    const fdCooking = evt.recipes.farmersdelight.cooking
    const kcSteamer = evt.recipes.kaleidoscope_cookery.steamer

    fdCooking(
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
    
    fdCutting(
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

    for (let part of [ 'brain', 'heart', 'liver', 'lungs', 'stomach' ]) {
        fdCutting(
            item.cn.bodypart[part],
            tag.tool.knife,
            [
                '2x kubejs:minced_' + part,
                ChanceResult.of('createcybernetics:ground_offal', 0.3)
            ]
        ).id(getRecipeID('minced_' + part + '/cutting'))

        // evt.recipes.farmersdelight.cooking(
        //     'meals',
        //     [
        //         item.cn.bodypart[part], item.custom.hemolymph_drop,
        //         item.custom.hemolymph_drop, item.custom.hemolymph_drop, item.sugar
        //     ],
        //     'kubejs:hemolymph_soaked_' + part,
        //     0.5,
        //     160
        // ).id(getRecipeID('hemolymph_soaked_' + part + '/cooking'))
    }

    fdCutting(
        'createcybernetics:cooked_brain',
        tag.tool.knife,
        [
            '2x kubejs:cooked_minced_brain',
            ChanceResult.of('createcybernetics:ground_offal', 0.1)
        ]
    ).id(getRecipeID('cooked_minced_brain/cutting'))

    fdCutting(
        'createcybernetics:cooked_heart',
        tag.tool.knife,
        [
            '2x kubejs:cooked_minced_heart',
            ChanceResult.of('createcybernetics:ground_offal', 0.1)
        ]
    ).id(getRecipeID('cooked_minced_heart/cutting'))

    fdCutting(
        'createcybernetics:cooked_liver',
        tag.tool.knife,
        [
            '2x kubejs:cooked_minced_liver',
            ChanceResult.of('createcybernetics:ground_offal', 0.1)
        ]
    ).id(getRecipeID('cooked_minced_liver/cutting'))

    fdCutting(
        'kubejs:cooked_lungs',
        tag.tool.knife,
        [
            '2x kubejs:cooked_minced_lungs',
            ChanceResult.of('createcybernetics:ground_offal', 0.1)
        ]
    ).id(getRecipeID('cooked_minced_lungs/cutting'))

    fdCutting(
        'kubejs:cooked_stomach',
        tag.tool.knife,
        [
            '2x kubejs:cooked_minced_stomach',
            ChanceResult.of('createcybernetics:ground_offal', 0.1)
        ]
    ).id(getRecipeID('cooked_minced_stomach/cutting'))

    for (let food of [ 'kubejs:minced_brain', 'kubejs:minced_lungs', 'kubejs:minced_liver',
         'kubejs:minced_heart' ,'kubejs:minced_stomach' ]) {
            evt.smelting(food.replace(':', ':cooked_'), food).xp(0.35)
            evt.smoking(food.replace(':', ':cooked_'), food).xp(0.35)
            evt.campfireCooking(food.replace(':', ':cooked_'), food, 0.35, 600)
    }

    evt.smelting('kubejs:cooked_lungs', item.cn.bodypart.lungs).xp(0.35)
    evt.smoking('kubejs:cooked_lungs', item.cn.bodypart.lungs).xp(0.35)
    evt.campfireCooking('kubejs:cooked_lungs', item.cn.bodypart.lungs, 0.35, 600)

    evt.smelting('kubejs:cooked_stomach', item.cn.bodypart.stomach).xp(0.35)
    evt.smoking('kubejs:cooked_stomach', item.cn.bodypart.stomach).xp(0.35)
    evt.campfireCooking('kubejs:cooked_stomach', item.cn.bodypart.stomach, 0.35, 600)

    evt.smoking('createcybernetics:cooked_brain', item.cn.bodypart.brain).xp(0.35)
    evt.smoking('createcybernetics:cooked_heart', item.cn.bodypart.heart).xp(0.35)
    evt.smoking('createcybernetics:cooked_liver', item.cn.bodypart.liver).xp(0.35)
    evt.smoking('createcybernetics:roasted_andouille', 'createcybernetics:andouille_sausage').xp(0.35)



    fdCutting(
        'kubejs:spider_leg',
        tag.tool.knife,
        [
            'kubejs:spider_leg_meat',
            ChanceResult.of('2x ' + item.custom.chitin_shard, 0.33)
        ]
    )

    fdCutting(
        'kubejs:boiled_silk_gland',
        tag.tool.knife,
        [
            'kubejs:spider_silk',
            Item.of(item.string, 2),
            ChanceResult.of(Item.of(item.string, 4), 0.33)
        ]
    )

    kcSteamer(
        'kubejs:boiled_silk_gland',
        'kubejs:silk_gland'
    )

    kcSteamer(
        'kubejs:boiled_spider_leg_meat',
        'kubejs:spider_leg_meat'
    )

    kcSteamer(
        'kubejs:boiled_spider_eggs',
        'kubejs:spider_eggs'
    )

    evt.shapeless(Item.of(item.string, 8),
        [
            'kubejs:spider_silk',
            item.shears
        ]
    ).id(getRecipeID('string_from_spider_silk'))
    .damageIngredient(item.shears, 1)
    
    



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
            '2x agritechevolved:biomass',
            [
                'minecraft:warped_roots',
                'minecraft:crimson_roots'
            ],
            [
                'minecraft:warped_roots',
                'minecraft:crimson_roots'
            ],
            '4x industrialupgrade:fertilizer'
        ]
    ).id(getRecipeID('letios_compost'))
    
    iuRecipe(evt, getRecipeID('mulch'), IUMachineCraft.CHEMICAL_FACTORY,
        [
            asItem(fluid.brilliant_azure, 250),
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