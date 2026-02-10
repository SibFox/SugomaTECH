"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCyberneticsCTRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('createcybernetics', path)
    }
    
    evt.shaped(
        Item.of(item.cn.titanium_plating, 1),
        [
            'AAA',
            'AAA'
        ],
        {
            A: tag.plate.titanium
        }
    )

    evt.shaped(
        Item.of(item.cn.titanium_plating, 1),
        [
            'BAB',
            'ABA',
            'BAB'
        ],
        {
            A: tag.nugget.titanium,
            B: tag.ingot.titanium
        }
    )

    cnRecipe(evt, asItem('createcybernetics:data_shard_biochip'),
        [
            'ISCSI',
            ' TST ',
            'RTGTR',
            ' TST ',
            '  TT ',
        ],{
            T: asItem(tag.plate.titanium),
            G: asItem(tag.ingot.gold),
            S: asItem('createcybernetics:component_ssd'),
            I: asItem(tag.ingot.titanium),
            C: asItem('createcybernetics:data_shards'),
            R: asItem('minecraft:red_dye'),
        }
    )
    
    console.info('Cybernetics recipe adding passed')
}