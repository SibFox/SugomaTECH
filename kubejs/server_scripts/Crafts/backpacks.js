"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerSBRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('sb', path)
    }

    evt.remove({ id: 'sophisticatedbackpacks:backpack' })
    evt.remove({ output: 'sophisticatedbackpacks:copper_backpack' })
    evt.remove({ output: 'sophisticatedbackpacks:iron_backpack' })
    evt.remove({ output: 'sophisticatedbackpacks:gold_backpack' })
    evt.remove({ output: 'sophisticatedbackpacks:diamond_backpack' })
    evt.remove({ output: 'sophisticatedbackpacks:netherite_backpack' })

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
                "item": "sophisticatedbackpacks:backpack"
            },
            "I": {
                "item": item.ingot.composite
            },
            "P": {
                "item": item.custom.pack_frame
            }
        },
        "pattern": [
            "III",
            "IBI",
            "IPI"
        ],
        "result": {
            "count": 1,
            "id": "sophisticatedbackpacks:iron_backpack"
        }
    })

    evt.custom({    // Золотой
        "neoforge:conditions": [
            {
                "type": "sophisticatedcore:item_enabled",
                "itemRegistryName": "sophisticatedbackpacks:gold_backpack"
            }
        ],
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "category": "misc",
        "key": {
            "B": {
                "item": "sophisticatedbackpacks:iron_backpack"
            },
            "I": {
                "tag": noHash(tag.doubleplate.muntsa)
            },
            "P": {
                "item": item.custom.pack_frame
            },
            "A": {
                "item": item.iu.tech_box.normal.nano
            }
        },
        "pattern": [
            "III",
            "IBI",
            "APA"
        ],
        "result": {
            "count": 1,
            "id": "sophisticatedbackpacks:gold_backpack"
        }
    })

    evt.custom({    // Алмазный
        "neoforge:conditions": [
            {
                "type": "sophisticatedcore:item_enabled",
                "itemRegistryName": "sophisticatedbackpacks:diamond_backpack"
            }
        ],
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "category": "misc",
        "key": {
            "B": {
                "item": "sophisticatedbackpacks:gold_backpack"
            },
            "I": {
                "tag": noHash(tag.doubleplate.vitalium)
            },
            "E": {
                "item": item.ingot.entro
            },
            "P": {
                "item": item.custom.pack_frame
            },
            "A": {
                "item": item.iu.tech_box.normal.quantum
            }
        },
        "pattern": [
            "EIE",
            "IBI",
            "APA"
        ],
        "result": {
            "count": 1,
            "id": "sophisticatedbackpacks:diamond_backpack"
        }
    })

    evt.custom({    // Незеритовый
        "neoforge:conditions": [
            {
                "type": "sophisticatedcore:item_enabled",
                "itemRegistryName": "sophisticatedbackpacks:netherite_backpack"
            }
        ],
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "category": "misc",
        "key": {
            "B": {
                "item": "sophisticatedbackpacks:diamond_backpack"
            },
            "I": {
                "tag": noHash(tag.doubleplate.stellite)
            },
            "E": {
                "item": item.ingot.netherite
            },
            "P": {
                "item": item.custom.pack_frame
            },
            "A": {
                "item": item.iu.tech_box.normal.spectral
            }
        },
        "pattern": [
            "EIE",
            "IBI",
            "APA"
        ],
        "result": {
            "count": 1,
            "id": "sophisticatedbackpacks:netherite_backpack"
        }
    })

    console.info('Backpack recipes passed')
}