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

    for (let metal of [ 'mikhail', 'aluminium', 'vanadium', 
        'cobalt', 'tungsten', 'magnesium', 'nickel', 'platinum', 'titanium', 'chromium', 
        'spinel', 'silver', 'manganese', 'iridium', 'germanium', 'lead', 'tin', 
        'osmium', 'tantalum', 'cadmium', 'arsenic', 'barium', 'bismuth', 'gadolinium', 
        'gallium', 'hafnium', 'yttrium', 'molybdenum', 'neodymium', 'niobium', 
        'palladium', 'polonium', 'strontium', 'thallium', 'zirconium'
    ]) {
        regWashingRecipe(evt, 
            'industrialupgrade:crushed/' + metal, 
            [ 'industrialupgrade:purifiedcrushed/' + metal, CreateItem.of(item.iu.dust.stone, 0.66)])
    }

    regWashingRecipe(evt, 'industrialupgrade:crushed/copper', 
        [
            'industrialupgrade:purifiedcrushed/copper',
            CreateItem.of(item.iu.dust.stone, 0.66),
            CreateItem.of(item.clay_ball, 0.25)
        ]
    )

    regWashingRecipe(evt, 'industrialupgrade:crushed/iron', 
        [
            'industrialupgrade:purifiedcrushed/iron',
            CreateItem.of(item.iu.dust.stone, 0.66),
            CreateItem.of(item.redstone, 0.25)
        ]
    )

    regWashingRecipe(evt, 'industrialupgrade:crushed/gold', 
        [
            'industrialupgrade:purifiedcrushed/gold',
            CreateItem.of(item.iu.dust.stone, 0.66),
            CreateItem.of(item.quartz, 0.25)
        ]
    )

    regWashingRecipe(evt, 'industrialupgrade:crushed/zinc', 
        [
            'industrialupgrade:purifiedcrushed/zinc',
            CreateItem.of(item.iu.dust.stone, 0.66),
            CreateItem.of(item.gunpowder, 0.25)
        ]
    )
}