"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerRecipeReplacings = (evt) => {

    evt.replaceInput({ input: 'createcybernetics:titaniumingot' },
        'createcybernetics:titaniumingot',
        tag.ingot.titanium
    )
    evt.replaceOutput({ output: 'createcybernetics:titaniumingot' },
        'createcybernetics:titaniumingot',
        item.ingot.titanium
    )

    evt.replaceInput({ input: 'createcybernetics:titaniumnugget' },
        'createcybernetics:titaniumnugget',
        tag.nugget.titanium
    )
    evt.replaceOutput({ output: 'createcybernetics:titaniumnugget' },
        'createcybernetics:titaniumnugget',
        item.nugget.titanium
    )

    evt.replaceInput({ input: 'createcybernetics:titaniumsheet' },
        'createcybernetics:titaniumsheet',
        tag.plate.titanium
    )
    evt.replaceOutput({ output: 'createcybernetics:titaniumsheet' },
        'createcybernetics:titaniumsheet',
        item.plate.titanium
    )

    evt.replaceInput({ input: 'createcybernetics:titanium_block' },
        'createcybernetics:titanium_block',
        tag.ore_block.titanium
    )


    evt.replaceInput({ input: 'create:iron_sheet' },
        'create:iron_sheet',
        tag.plate.iron
    )
    evt.replaceOutput({ output: 'create:iron_sheet' },
        'create:iron_sheet',
        item.plate.iron
    )

    evt.replaceInput({ input: 'create:copper_sheet' },
        'create:copper_sheet',
        tag.plate.copper
    )
    evt.replaceOutput({ output: 'create:copper_sheet' },
        'create:copper_sheet',
        item.plate.copper
    )

    evt.replaceInput({ input: 'create:golden_sheet' },
        'create:golden_sheet',
        tag.plate.gold
    )
    evt.replaceOutput({ output: 'create:golden_sheet' },
        'create:golden_sheet',
        item.plate.gold
    )

    evt.replaceInput({ input: 'createaddition:electrum_sheet' },
        'createaddition:electrum_sheet',
        tag.plate.electrum
    )
    evt.replaceOutput({ output: 'createaddition:electrum_sheet' },
        'createaddition:electrum_sheet',
        item.plate.electrum
    )
    
    evt.replaceInput({ input: 'createaddition:zinc_sheet' },
        'createaddition:zinc_sheet',
        tag.plate.zinc
    )
    evt.replaceOutput({ output: 'createaddition:zinc_sheet' },
        'createaddition:zinc_sheet',
        item.plate.zinc
    )


    evt.replaceInput({ output: item.ingot.quantum_alloy },
        item.ingot.copper,
        item.ingot.woods_alloy
    )
    
    console.info('Recipe replcaings passed')
}