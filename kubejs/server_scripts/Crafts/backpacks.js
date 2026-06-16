"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerSBRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('sb', path)
    }

    evt.shaped(
        Item.of('sophisticatedbackpacks:backpack', 1),
        [
            'LLL',
            'LFL',
            'LTL'
        ],{
            L: item.custom.hardened_leather,
            F: item.custom.pack_frame,
            T: tag.ingot.titanium_steel
        }
    ).id(getRecipeID('backpack'))

    evt.custom({    // Медь
        "neoforge:conditions": [
            {
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedbackpacks:copper_backpack"
            }
        ],
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "category": "misc",
        "key": {
            "B": {
            "item": "sophisticatedbackpacks:backpack"
            },
            "I": {
            "tag": noHash(tag.plate.bronze)
            }
        },
        "pattern": [
            "III",
            "IBI",
            "III"
        ],
        "result": {
            "count": 1,
            "id": "sophisticatedbackpacks:copper_backpack"
        }
    })

    evt.custom({    // Железный
        "neoforge:conditions": [
            {
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedbackpacks:iron_backpack"
            }
        ],
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "category": "misc",
        "key": {
            "B": {
            "item": "sophisticatedbackpacks:copper_backpack"
            },
            "I": {
            "item": item.ingot.composite // Композит
            }
        },
        "pattern": [
            "III",
            "IBI",
            "III"
        ],
        "result": {
            "count": 1,
            "id": "sophisticatedbackpacks:iron_backpack"
        }
    })

    console.info('Backpack recipes passed')
}