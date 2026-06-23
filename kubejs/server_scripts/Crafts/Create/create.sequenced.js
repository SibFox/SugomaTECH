"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCreateSequencedRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('ct/sequenced', path)
    }
    
    // Minecraft
    for (let metal of [
        [ 'iron',   10 ],
        [ 'copper', 7, ],
        [ 'gold',   7, ]
    ]){
        let fin_name = 'industrialupgrade:itemplates/' + metal[0] + '_plate'
        let mtl_name = metal[0] + '_ingot'
        let transition = 'kubejs:incomplete_' + metal[0]

        evt.remove({ output: fin_name, type: 'create:pressing' })

        evt.recipes.create.sequenced_assembly(
            [
                CreateItem.of(fin_name, 1.0)
            ],
            'minecraft:' + mtl_name,
            [
                evt.recipes.create.pressing(transition, transition)
            ]
        )
        .transitionalItem(transition)
        .loops(metal[1])        
    }

    for (let metal of [
        // Предмет,      кол-во ударов, _plate в конце, подпапка
        [ 'bronze',             10, true,  'itemingots/' ],
        [ 'lead',               10, true,  'itemingots/' ],
        [ 'tin',                7,  true,  'itemingots/' ],
        [ 'steel',              12, true,  'itemingots/' ],
        [ 'electrum',           9,  true,  'itemingots/' ],
        [ 'duralumin',          10, false, 'alloyingot/' ],
        [ 'ferromanganese',     10, false, 'alloyingot/' ],
        [ 'gadolinium',         9,  false, 'itemingots/' ],
        [ 'gallium',            9,  false, 'itemingots/' ],
        [ 'gallium_arsenic',    10, false, 'alloyingot/' ],
        [ 'germanium',          10, true,  'itemingots/' ],
        [ 'hafnium',            10, false, 'itemingots/' ],
        [ 'invar',              9,  true,  'itemingots/' ],
        [ 'iridium',            10, true,  'itemingots/' ],
        [ 'magnesium',          10, true,  'itemingots/' ],
        [ 'manganese',          9,  true,  'itemingots/' ],
        [ 'meteoric_iron',      12, false, 'itemingots/' ],
        [ 'mikhail',            9,  true,  'itemingots/' ],
        [ 'molybdenum',         10, false, 'itemingots/' ],
        [ 'molybdenum_steel',   13, false, 'alloyingot/' ],
        [ 'muntsa',             9,  false, 'alloyingot/' ],
        [ 'mithril',            12, false, 'itemingots/' ],
        [ 'neodymium',          10, false, 'itemingots/' ],
        [ 'nichrome',           9,  false, 'alloyingot/' ],
        [ 'nickel',             8,  true,  'itemingots/' ],
        [ 'niobium',            10, false, 'itemingots/' ],
        [ 'niobium_titanium',   12, false, 'alloyingot/' ],
        [ 'nitenol',            10, false, 'alloyingot/' ],
        [ 'orichalcum',         12, false, 'itemingots/' ],
        [ 'osmiridium',         10, false, 'alloyingot/' ],
        [ 'osmium',             10, false, 'itemingots/' ],
        [ 'palladium',          10, false,  'itemingots/' ],
        [ 'platinum',           10, true,  'itemingots/' ],
        [ 'polonium',           9,  false, 'itemingots/' ],
        [ 'red_brass',          9,  false, 'alloyingot/' ],
        [ 'silver',             8,  true,  'itemingots/' ],
        [ 'spinel',             10, true,  'itemingots/' ],
        [ 'strontium',          10, false, 'itemingots/' ],
        [ 'tantalum',           10, false, 'itemingots/' ],
        [ 'thallium',           9,  false, 'itemingots/' ],
        [ 'titanium',           11, true,  'itemingots/' ],
        [ 'vanadoalumite',      10, false, 'alloyingot/' ],
        [ 'vanadium',           10, true,  'itemingots/' ],
        [ 'tungsten',           11, true,  'itemingots/' ],
        [ 'yttrium',            10, false, 'itemingots/' ],
        [ 'zeliber',            10, false, 'alloyingot/' ],
        [ 'zinc',               9,  true,  'itemingots/' ],
        [ 'zirconium',          10, false, 'itemingots/' ],
        // Дальше текстур пластин нет
        [ 'aluminium',          8,  true,  'itemingots/' ],
        [ 'cobalt',             10, true,  'itemingots/' ],
        [ 'chromium',           9,  true,  'itemingots/' ],
        [ 'cadmium',            10, false, 'itemingots/' ],
        [ 'arsenic',            8,  false, 'itemingots/' ],
        [ 'barium',             9,  false, 'itemingots/' ],
        [ 'bismuth',            10, false, 'itemingots/' ],
        // [ '',          , true, 'itemingots/' ],
        // [ '',          , true, 'itemingots/' ],
        // [ '',          , true, 'itemingots/' ],
        // [ '',          , true, 'itemingots/' ],
        // [ '',          , true, 'itemingots/' ],
    ]){
        let fin_name = 'industrialupgrade:'
        if (metal[3] == 'itemingots/')
            fin_name += 'itemplates/' + metal[0]
        else
            fin_name += 'alloyplate/'+ metal[0]

        let mtl_name = metal[3] + metal[0]
        let transition = 'kubejs:incomplete_' + metal[0]
        if (metal[2]) {
            fin_name += '_plate'
            mtl_name += '_ingot'
        }

        evt.remove({ output: fin_name, type: 'create:pressing' })

        evt.recipes.create.sequenced_assembly(
            [
                CreateItem.of(fin_name, 1.0)
            ],
            'industrialupgrade:' + mtl_name,
            [
                evt.recipes.create.pressing(transition, transition)
            ]
        )
        .transitionalItem(transition)
        .loops(metal[1])        
    }

}