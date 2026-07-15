"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCreateCrushingRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('create/crushing', path)
    }

    const regCrushingRecipe = (evt, input, outputs) => {
        evt.recipes.create.crushing(outputs, input)
    }

    // industrialupgrade:raw_metals/raw_mikhail
    // industrialupgrade:crushed/mikhail

    for (let metal of [ 'mikhail', 'aluminium', 'vanadium', 'cobalt', 'tungsten', 'magnesium', 
        'nickel', 'platinum', 'titanium', 'chromium', 'spinel', 'silver', 'zinc', 'manganese', 
        'iridium', 'germanium', 'lead', 'tin', 'osmium', 'tantalum', 'cadmium', 'arsenic', 
        'barium', 'bismuth', 'gadolinium', 'gallium', 'hafnium', 'yttrium', 'molybdenum', 
        'neodymium', 'niobium', 'palladium', 'polonium', 'strontium', 'thallium', 'zirconium'
    ]) {
        regCrushingRecipe(evt, 
            'industrialupgrade:raw_metals/raw_' + metal, 
            [ 'industrialupgrade:crushed/' + metal, CreateItem.of('create:experience_nugget', 0.75)])
        regCrushingRecipe(evt, 
            'industrialupgrade:raw_block/raw_' + metal, 
            [ '9x industrialupgrade:crushed/' + metal, CreateItem.of('9x create:experience_nugget', 0.75)])
    }

}