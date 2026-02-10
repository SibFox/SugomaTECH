"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerRecipeRemovings = (evt) => {

    evt.remove({ output: "sophisticatedbackpacks:backpack" })
    evt.remove({ output: "sophisticatedbackpacks:copper_backpack" })
    evt.remove({ output: "sophisticatedbackpacks:iron_backpack" })
    // evt.remove({ output: "sophisticatedbackpacks:magnet_upgrade" })
    // evt.remove({ id: "sophisticatedbackpacks:magnet_upgrade" })

    evt.remove({ id: "petrolpark:recipe_book_test" })
    evt.remove({ output: "create:crushed_raw_nickel" })
    evt.remove({ output: "create:crushed_raw_lead" })
    evt.remove({ output: "create:crushed_raw_uranium" })
    evt.remove({ output: "create:crushed_raw_platinum" })
    evt.remove({ output: "create:crushed_raw_tin" })
    evt.remove({ output: "create:crushed_raw_osmium" })
    evt.remove({ output: "create:crushed_raw_silver" })

    evt.remove({ output: 'advanced_ae:quantum_leggings' })
    evt.remove({ output: 'advanced_ae:quantum_helmet' })
    evt.remove({ output: 'advanced_ae:quantum_chestplate' })
    evt.remove({ output: 'advanced_ae:quantum_boots' })

    evt.remove({ output: item.ingot.red_alloy })
    evt.remove({ id: 'createcybernetics:titaniumsheet' })

    evt.remove({ mod: 'mffs' })
    evt.remove({ mod: 'createcybernetics', type: 'create:mechanical_crafting' })

    console.info('Recipe removing passed')
}