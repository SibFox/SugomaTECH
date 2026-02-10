"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCLRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('cl', path)
    }

    evt.remove({ output: 'chunkloaders:single_chunk_loader' })
    evt.remove({ output: 'chunkloaders:basic_chunk_loader' })
    evt.remove({ output: 'chunkloaders:advanced_chunk_loader' })

    shapedRecipe(evt, getRecipeID('single'),
        [
            [ tag.doubleplate.invar, tag.obsidian, tag.doubleplate.invar ],
            [ tag.obsidian, tag.ender_pearl, tag.obsidian ],
            [ tag.doubleplate.invar, tag.obsidian, tag.doubleplate.invar ]
        ],
    'chunkloaders:single_chunk_loader')

    shapedRecipe(evt, getRecipeID('basic'),
        [
            [ tag.doubleplate.nitenol, tag.doubleplate.obsidian, tag.doubleplate.nitenol ],
            [ tag.doubleplate.obsidian, 'chunkloaders:single_chunk_loader', tag.doubleplate.obsidian ],
            [ tag.doubleplate.nitenol, tag.doubleplate.obsidian, tag.doubleplate.nitenol ]
        ],
    'chunkloaders:basic_chunk_loader')

    shapedRecipe(evt, getRecipeID('advanced'),
        [
            [ tag.doubleplate.electrum, tag.doubleplate.vanadoalumite, tag.doubleplate.electrum ],
            [ tag.doubleplate.vanadoalumite, 'chunkloaders:basic_chunk_loader', tag.doubleplate.vanadoalumite ],
            [ tag.doubleplate.electrum, tag.doubleplate.vanadoalumite, tag.doubleplate.electrum ]
        ],
    'chunkloaders:advanced_chunk_loader')

    console.info('Chunk Loaders recipe adding passed')
}