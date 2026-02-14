"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerRecipeReplacings = (evt) => {

    evt.replaceInput({ input: 'createcybernetics:titaniumingot' },
        'createcybernetics:titaniumingot',
        item.ingot.titanium
    )
    evt.replaceOutput({ output: 'createcybernetics:titaniumingot' },
        'createcybernetics:titaniumingot',
        item.ingot.titanium
    )

    evt.replaceInput({ input: 'createcybernetics:titaniumnugget' },
        'createcybernetics:titaniumnugget',
        item.nugget.titanium
    )
    evt.replaceOutput({ output: 'createcybernetics:titaniumnugget' },
        'createcybernetics:titaniumnugget',
        item.nugget.titanium
    )

    evt.replaceInput({ input: 'createcybernetics:titaniumsheet' },
        'createcybernetics:titaniumsheet',
        item.plate.titanium
    )
    evt.replaceOutput({ output: 'createcybernetics:titaniumsheet' },
        'createcybernetics:titaniumsheet',
        item.plate.titanium
    )

    evt.replaceInput({ input: 'createcybernetics:titanium_block' },
        'createcybernetics:titanium_block',
        item.ore_block.titanium
    )


    evt.replaceInput({ input: 'create:iron_sheet' },
        'create:iron_sheet',
        item.plate.iron
    )
    evt.replaceOutput({ output: 'create:iron_sheet' },
        'create:iron_sheet',
        item.plate.iron
    )

    evt.replaceInput({ input: 'create:copper_sheet' },
        'create:copper_sheet',
        item.plate.copper
    )
    evt.replaceOutput({ output: 'create:copper_sheet' },
        'create:copper_sheet',
        item.plate.copper
    )

    evt.replaceInput({ input: 'create:golden_sheet' },
        'create:golden_sheet',
        item.plate.gold
    )
    evt.replaceOutput({ output: 'create:golden_sheet' },
        'create:golden_sheet',
        item.plate.gold
    )

    evt.replaceInput({ input: 'createaddition:electrum_sheet' },
        'createaddition:electrum_sheet',
        item.plate.electrum
    )
    evt.replaceOutput({ output: 'createaddition:electrum_sheet' },
        'createaddition:electrum_sheet',
        item.plate.electrum
    )

    evt.replaceInput({ input: 'createaddition:electrum_ingot' },
        'createaddition:electrum_ingot',
        item.ingot.electrum
    )
    evt.replaceOutput({ output: 'createaddition:electrum_ingot' },
        'createaddition:electrum_ingot',
        item.ingot.electrum
    )

    evt.replaceInput({ input: 'createaddition:electrum_nugget' },
        'createaddition:electrum_nugget',
        item.nugget.electrum
    )
    evt.replaceOutput({ output: 'createaddition:electrum_nugget' },
        'createaddition:electrum_nugget',
        item.nugget.electrum
    )
    
    evt.replaceInput({ input: 'createaddition:zinc_sheet' },
        'createaddition:zinc_sheet',
        item.plate.zinc
    )
    evt.replaceOutput({ output: 'createaddition:zinc_sheet' },
        'createaddition:zinc_sheet',
        item.plate.zinc
    )
    
    evt.replaceInput({ input: 'createcybernetics:component_wiring' },
        'createcybernetics:component_wiring',
        item.iu.spool.lvl1
    )

    evt.replaceInput({ input: 'create:propeller' },
        'create:propeller',
        item.iu.rotor.wind.ready.iron
    )

    console.info('Recipe replcaings passed')
}