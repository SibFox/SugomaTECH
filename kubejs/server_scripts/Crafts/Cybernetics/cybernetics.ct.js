"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCyberneticsCTRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('createcybernetics', path)
    }

    shapedRecipe(evt, getRecipeID('engineering_table'),
        [
            [ null, item.iu.module.crafting.lvl2, null ],
            [ item.iu.module.circuit, item.iu.machine_corpus.advanced_tech, item.iu.module.combining.lvl2 ],
            [ item.ae.core.formation, 'industrialupgrade:solderingiron', item.ae.core.annihilation ]
        ],
    'createcybernetics:engineering_table')

    cnRecipe(evt, asItem('createcybernetics:data_shard_biochip'),
        [
            'ISCSI',
            ' TST ',
            'RTGTR',
            ' TST ',
            '  TT ',
        ],{
            T: tag.plate.titanium,
            G: tag.ingot.gold,
            S: 'createcybernetics:component_ssd',
            I: tag.ingot.titanium,
            C: tag.cybernetics_data_shards,
            R: 'minecraft:red_dye',
        }
    )
    
    console.info('Cybernetics recipe adding passed')
}