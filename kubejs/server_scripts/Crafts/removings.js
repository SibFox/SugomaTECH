"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerRecipeRemovings = (evt) => {

    evt.remove({ mod: 'mffs' })
    evt.remove({ mod: 'wirelesschargers' })
    evt.remove({ mod: 'hole_filler_mod' })
    evt.remove({ mod: 'createcybernetics', type: 'create:mechanical_crafting' })
    evt.remove({ type: 'createdieselgenerators:hammering' })
    evt.remove({ type: 'createdieselgenerators:wire_cutting' })
    evt.remove({ type: 'createaddition:rolling' })

    evt.remove({ id: "petrolpark:recipe_book_test" })
    evt.remove({ output: "create:crushed_raw_nickel" })
    evt.remove({ output: "create:crushed_raw_lead" })
    evt.remove({ output: "create:crushed_raw_uranium" })
    evt.remove({ output: "create:crushed_raw_platinum" })
    evt.remove({ output: "create:crushed_raw_tin" })
    evt.remove({ output: "create:crushed_raw_osmium" })
    evt.remove({ output: "create:crushed_raw_silver" })
    evt.remove({ output: "create:crushed_raw_silver" })
    evt.remove({ output: "createcybernetics:crushedtitanium" })
    evt.remove({ id: 'minecraft:netherite_ingot' })

    evt.remove({ output: 'advanced_ae:quantum_leggings' })
    evt.remove({ output: 'advanced_ae:quantum_helmet' })
    evt.remove({ output: 'advanced_ae:quantum_chestplate' })
    evt.remove({ output: 'advanced_ae:quantum_boots' })

    evt.remove({ output: item.ingot.red_alloy })

    evt.remove({ output: 'createaddition:electrum_rod', type: 'createaddition:charging' })
    evt.remove({ output: 'createaddition:electrum_wire', type: 'createaddition:charging' })
    evt.remove({ output: 'createaddition:electrum_nugget', type: 'createaddition:charging' })
    evt.remove({ output: 'createaddition:electrum_ingot', type: 'createaddition:charging' })
    evt.remove({ output: 'createaddition:electrum_sheet', type: 'createaddition:charging' })
    
    evt.remove({ id: 'createcybernetics:wetware_spidereyes' }) // Уменьшает производительность в 8 раз, написать об этом разрабу

    console.info('Recipe removing passed')
}