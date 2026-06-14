"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCreateWashingRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('create/washing', path)
    }

    const regWashingRecipe = (evt, input, outputs) => {
        evt.recipes.create.splashing(outputs, input)
    }

    for (let metal of [ 'iron', 'copper', 'gold', 'mikhail', 'aluminium', 'vanadium', 
        'cobalt', 'tungsten', 'magnesium', 'nickel', 'platinum', 'titanium', 'chromium', 
        'spinel', 'silver', 'zinc', 'manganese', 'iridium', 'germanium', 'lead', 'tin', 
        'osmium', 'tantalum', 'cadmium', 'arsenic', 'barium', 'bismuth', 'gadolinium', 
        'gallium', 'hafnium', 'yttrium', 'molybdenum', 'neodymium', 'niobium', 
        'palladium', 'polonium', 'strontium', 'thallium', 'zirconium'
    ]) {
        regWashingRecipe(evt, 
            'industrialupgrade:crushed/' + metal, 
            [ 'industrialupgrade:purifiedcrushed/' + metal, CreateItem.of(item.iu.dust.stone, 0.75)])
    }

}