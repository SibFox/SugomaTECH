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
    // evt.replaceInput({ input: tag.plate.iron },
    //     tag.plate.iron,
    //     item.plate.iron
    // )
    evt.replaceOutput({ output: 'create:iron_sheet' },
        'create:iron_sheet',
        item.plate.iron
    )


    evt.replaceInput({ input: 'create:copper_sheet' },
        'create:copper_sheet',
        tag.plate.copper
    )
    // evt.replaceInput({ input: tag.plate.copper },
    //     tag.plate.copper,
    //     item.plate.copper
    // )
    evt.replaceOutput({ output: 'create:copper_sheet' },
        'create:copper_sheet',
        item.plate.copper
    )


    evt.replaceInput({ input: 'create:golden_sheet' },
        'create:golden_sheet',
        tag.plate.gold
    )
    // evt.replaceInput({ input: tag.plate.gold },
    //     tag.plate.gold,
    //     item.plate.gold
    // )
    evt.replaceOutput({ output: 'create:golden_sheet' },
        'create:golden_sheet',
        item.plate.gold
    )


    evt.replaceInput({ input: 'createaddition:electrum_sheet' },
        'createaddition:electrum_sheet',
        tag.plate.electrum
    )
    // evt.replaceInput({ input: tag.plate.electrum },
    //     tag.plate.electrum,
    //     item.plate.electrum
    // )
    evt.replaceOutput({ output: 'createaddition:electrum_sheet' },
        'createaddition:electrum_sheet',
        item.plate.electrum
    )

    evt.replaceInput({ input: 'createaddition:electrum_ingot' },
        'createaddition:electrum_ingot',
        tag.ingot.electrum
    )
    // evt.replaceInput({ input: tag.ingot.electrum },
    //     tag.ingot.electrum,
    //     item.ingot.electrum
    // )
    evt.replaceOutput({ output: 'createaddition:electrum_ingot' },
        'createaddition:electrum_ingot',
        item.ingot.electrum
    )
    
    evt.replaceOutput({ output: 'createaddition:electrum_block' },
        'createaddition:electrum_block',
        item.ore_block.electrum
    )
    // evt.replaceInput({ input: tag.ore_block.electrum },
    //     tag.ore_block.electrum,
    //     item.ore_block.electrum
    // )
    evt.replaceOutput({ output: 'createaddition:electrum_block' },
        'createaddition:electrum_block',
        item.ore_block.electrum
    )

    evt.replaceInput({ input: 'createaddition:electrum_nugget' },
        'createaddition:electrum_nugget',
        tag.nugget.electrum
    )
    // evt.replaceInput({ input: 'createaddition:electrum_nugget' },
    //     tag.nugget.electrum,
    //     item.nugget.electrum
    // )
    evt.replaceOutput({ output: 'createaddition:electrum_nugget' },
        'createaddition:electrum_nugget',
        item.nugget.electrum
    )
    

    evt.replaceInput({ input: 'create:zinc_ingot' },
        'create:zinc_ingot',
        tag.ingot.zinc
    )
    // evt.replaceInput({ input: 'create:zinc_ingot' },
    //     tag.ingot.zinc,
    //     item.ingot.zinc
    // )
    evt.replaceOutput({ output: 'create:zinc_ingot' },
        'create:zinc_ingot',
        item.ingot.zinc
    )

    evt.replaceInput({ input: 'create:zinc_nugget' },
        'create:zinc_nugget',
        tag.nugget.zinc
    )
    // evt.replaceInput({ input: 'create:zinc_nugget' },
    //     tag.nugget.zinc,
    //     item.nugget.zinc
    // )
    evt.replaceOutput({ output: 'create:zinc_nugget' },
        'create:zinc_nugget',
        item.nugget.zinc
    )

    evt.replaceInput({ input: 'createaddition:zinc_sheet' },
        'createaddition:zinc_sheet',
        tag.plate.zinc
    )
    // evt.replaceInput({ input: 'createaddition:zinc_sheet' },
    //     tag.plate.zinc,
    //     item.plate.zinc
    // )
    evt.replaceOutput({ output: 'createaddition:zinc_sheet' },
        'createaddition:zinc_sheet',
        item.plate.zinc
    )

    evt.replaceInput({ input: 'create:sturdy_sheet' },
        'create:sturdy_sheet',
        tag.plate.obsidian
    )
    evt.replaceOutput({ output: 'create:sturdy_sheet' },
        'create:sturdy_sheet',
        item.plate.obsidian
    )
    
    evt.replaceInput({ input: 'createpropulsion:platinum_ingot' },
        'createpropulsion:platinum_ingot',
        tag.ingot.platinum
    )
    evt.replaceOutput({ output: 'createpropulsion:platinum_ingot' },
        'createpropulsion:platinum_ingot',
        item.ingot.platinum
    )

    evt.replaceInput({ input: 'createpropulsion:platinum_block' },
        'createpropulsion:platinum_block',
        tag.ore_block.platinum
    )
    evt.replaceOutput({ output: 'createpropulsion:platinum_block' },
        'createpropulsion:platinum_block',
        item.ore_block.platinum
    )
    
    evt.replaceInput({ input: 'createpropulsion:platinum_sheet' },
        'createpropulsion:platinum_sheet',
        tag.plate.platinum
    )
    evt.replaceOutput({ output: 'createpropulsion:platinum_sheet' },
        'createpropulsion:platinum_sheet',
        item.plate.platinum
    )

    evt.replaceInput({ input: 'createpropulsion:platinum_nugget' },
        'createpropulsion:platinum_nugget',
        tag.nugget.platinum
    )
    evt.replaceOutput({ output: 'createpropulsion:platinum_nugget' },
        'createpropulsion:platinum_nugget',
        item.nugget.platinum
    )

    evt.replaceInput({ input: 'powergrid:zinc_sheet' },
        'powergrid:zinc_sheet',
        tag.plate.zinc
    )
    evt.replaceOutput({ output: 'powergrid:zinc_sheet' },
        'powergrid:zinc_sheet',
        item.plate.zinc
    )
    
    


    evt.replaceInput({ input: 'create:crushed_raw_iron' },
        'create:crushed_raw_iron',
        'industrialupgrade:crushed/iron'
    )
    evt.replaceOutput({ output: 'create:crushed_raw_iron' },
        'create:crushed_raw_iron',
        'industrialupgrade:crushed/iron'
    )

    evt.replaceInput({ input: 'create:crushed_raw_gold' },
        'create:crushed_raw_gold',
        'industrialupgrade:crushed/gold'
    )
    evt.replaceOutput({ output: 'create:crushed_raw_gold' },
        'create:crushed_raw_gold',
        'industrialupgrade:crushed/gold'
    )

    evt.replaceInput({ input: 'create:crushed_raw_copper' },
        'create:crushed_raw_copper',
        'industrialupgrade:crushed/copper'
    )
    evt.replaceOutput({ output: 'create:crushed_raw_copper' },
        'create:crushed_raw_copper',
        'industrialupgrade:crushed/copper'
    )
    
    evt.replaceInput({ input: 'create:crushed_raw_zinc' },
        'create:crushed_raw_zinc',
        'industrialupgrade:crushed/zinc'
    )
    evt.replaceOutput({ output: 'create:crushed_raw_zinc' },
        'create:crushed_raw_zinc',
        'industrialupgrade:crushed/zinc'
    )
    
    evt.replaceInput({ input: 'create:brass_ingot' },
        'create:brass_ingot',
        tag.ingot.brass
    )
    evt.replaceOutput({ output: 'create:brass_ingot' },
        'create:brass_ingot',
        item.ingot.brass
    )
    
    evt.replaceInput({ input: 'create:brass_nugget' },
        'create:brass_nugget',
        tag.nugget.brass
    )
    evt.replaceOutput({ output: 'create:brass_nugget' },
        'create:brass_nugget',
        item.nugget.brass
    )
    
    evt.replaceInput({ input: 'create:brass_sheet' },
        'create:brass_sheet',
        tag.plate.brass
    )
    evt.replaceOutput({ output: 'create:brass_sheet' },
        'create:brass_sheet',
        item.plate.brass
    )
    
    evt.replaceInput({ input: 'create:brass_block' },
        'create:brass_block',
        tag.ore_block.brass
    )
    evt.replaceOutput({ output: 'create:brass_block' },
        'create:brass_block',
        item.ore_block.brass
    )
    
    



    
    evt.replaceInput({ input: 'createcybernetics:component_wiring' },
        'createcybernetics:component_wiring',
        item.iu.spool.lvl1
    )

    evt.replaceInput({ input: 'create:propeller' },
        'create:propeller',
        item.iu.rotor.wind.ready.iron
    )

    evt.replaceInput({ input: 'ae2:quartz_glass' },
        'ae2:quartz_glass',
        item.iu.tempered_glass
    )




    console.info('Recipe replcaings passed')
}