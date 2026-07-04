"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCCRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('cc', path)
    }

    evt.remove({ output: item.cc.computer.normal })
    evt.remove({ output: item.cc.computer.advanced })

    shapedRecipe(evt, getRecipeID('computer_normal'),
        [
            [ item.iu.wire.isolated.copper, item.iu.microchip.lvl1, item.iu.wire.isolated.copper ],
            [ item.glass_panel, item.cc.casing, item.glass_panel ],
            [ item.iu.wire.isolated.copper, item.iu.autopower_module, item.iu.wire.isolated.copper ]
        ],
    item.cc.computer.normal)

    shapedRecipe(evt, getRecipeID('computer_advanced'),
        [
            [ item.iu.wire.glass, item.iu.microchip.lvl3, item.iu.wire.glass ],
            [ tag.glass_panel, item.cc.casing, tag.glass_panel ],
            [ item.iu.wire.glass, item.iu.autopower_module, item.iu.wire.glass ]
        ],
    item.cc.computer.advanced)

    evt.custom({
    "type": "computercraft:transform_shaped",
    "category": "redstone",
    "function": [{"type": "computercraft:copy_components", "from": {"item": "computercraft:computer_normal"}}],
    "key": {
        "W": {"item": item.iu.wire.glass },
        "M": {"type": "neoforge:components",
        "components": {
            "industrialupgrade:level_microchip": 3
        },
            "items": (item.iu.microchip.lvl3.slice(0, item.iu.microchip.lvl3.indexOf('[')))
        },
        "C": {"item": item.cc.computer.normal },
        "A": {"item": item.iu.autopower_module }
    },
    "pattern": [
        "WMW", 
        " C ", 
        "WAW"
    ],
    "result": {"count": 1, "id": item.cc.computer.advanced }
    }).id(getRecipeID('computer_advanced_upgrade'))

    evt.remove({ output: item.cc.computer.pocket.normal })
    evt.remove({ output: item.cc.computer.pocket.advanced })

    shapedRecipe(evt, getRecipeID('pocket_computer_normal'),
        [
            [ item.iu.wire.isolated.copper, item.iu.microchip.lvl1, item.iu.wire.isolated.copper ],
            [ item.iu.corpus_cover.lvl1, tag.glass_panel, item.iu.corpus_cover.lvl1 ],
            [ item.iu.wire.isolated.copper, item.iu.autopower_module, item.iu.wire.isolated.copper ],
        ],
    item.cc.computer.pocket.normal)

    shapedRecipe(evt, getRecipeID('pocket_computer_advanced'),
        [
            [ item.iu.wire.glass, item.iu.microchip.lvl3, item.iu.wire.glass ],
            [ item.iu.corpus_cover.lvl1, tag.glass_panel, item.iu.corpus_cover.lvl1 ],
            [ item.iu.wire.glass, item.iu.autopower_module, item.iu.wire.glass ],
        ],
    item.cc.computer.pocket.advanced)

    evt.custom({
    "type": "computercraft:transform_shaped",
    "category": "redstone",
    "function": [{"type": "computercraft:copy_components", "from": {"item": item.cc.computer.pocket.normal}}],
    "key": {
        "W": {"item": item.iu.wire.glass },
        "M": {"type": "neoforge:components",
        "components": {
            "industrialupgrade:level_microchip": 3
        },
            "items": (item.iu.microchip.lvl3.slice(0, item.iu.microchip.lvl3.indexOf('[')))
        },
        "C": {"item": item.cc.computer.pocket.normal },
        "A": {"item": item.iu.autopower_module }
    },
    "pattern": [
        "WMW", 
        " C ", 
        "WAW"
    ],
    "result": {"count": 1, "id": item.cc.computer.pocket.advanced }
    }).id(getRecipeID('pocket_computer_advanced_upgrade'))

    evt.remove({ output: item.cc.turtle.normal })
    evt.remove({ output: item.cc.turtle.advanced })

    shapedRecipe(evt, getRecipeID('turtle_normal'),
        [
            [ item.iu.wire.isolated.copper, item.iu.microchip.lvl2, item.iu.wire.isolated.copper ],
            [ item.iu.module.slot.x8, item.cc.casing, item.iu.module.slot.x8 ],
            [ item.iu.wire.isolated.copper, item.iu.battery.lead, item.iu.wire.isolated.copper ]
        ],
    item.cc.turtle.normal)

    shapedRecipe(evt, getRecipeID('turtle_advanced'),
        [
            [ item.iu.wire.glass, item.iu.microchip.lvl4, item.iu.wire.glass ],
            [ item.iu.module.slot.x8, item.cc.casing, item.iu.module.slot.x8 ],
            [ item.iu.wire.glass, item.iu.battery.lead, item.iu.wire.glass ]
        ],
    item.cc.turtle.advanced)

    evt.custom({
    "type": "computercraft:transform_shaped",
    "category": "redstone",
    "function": [{"type": "computercraft:copy_components", "from": {"item": item.cc.turtle.normal}}],
    "key": {
        "W": {"item": item.iu.wire.glass },
        "M": {"type": "neoforge:components",
        "components": {
            "industrialupgrade:level_microchip": 4
        },
            "items": (item.iu.microchip.lvl4.slice(0, item.iu.microchip.lvl4.indexOf('[')))
        },
        "C": {"item": item.cc.turtle.normal },
        "A": {"item": item.iu.battery.lead }
    },
    "pattern": [
        "WMW", 
        " C ", 
        "WAW"
    ],
    "result": {"count": 1, "id": item.cc.turtle.advanced }
    }).id(getRecipeID('turtle_advanced_upgrade'))

    evt.remove({ output: item.cc.monitor.normal })
    evt.remove({ output: item.cc.monitor.advanced })

    shapedRecipe(evt, getRecipeID('monitor_normal'),
        [
            [ item.iu.corpus_cover.lvl1, item.iu.wire.isolated.copper, item.iu.corpus_cover.lvl1 ],
            [ item.iu.wire.isolated.copper, tag.glass_panel, item.iu.wire.isolated.copper ],
            [ item.iu.corpus_cover.lvl1, item.iu.wire.isolated.copper, item.iu.corpus_cover.lvl1 ]
        ],
    item.cc.monitor.normal)

    shapedRecipe(evt, getRecipeID('monitor_advanced'),
        [
            [ item.iu.corpus_cover.lvl1, item.iu.wire.glass, item.iu.corpus_cover.lvl1 ],
            [ item.iu.wire.glass, tag.glass_panel, item.iu.wire.glass ],
            [ item.iu.corpus_cover.lvl1, item.iu.wire.glass, item.iu.corpus_cover.lvl1 ]
        ],
    item.cc.monitor.advanced)

    evt.remove({ output: item.cc.cable })

    shapedRecipe(evt, getRecipeID('cable'),
        [
            [ tag.plate.copper, tag.plate.copper, tag.plate.copper ],
            [ tag.redstone, tag.plate.electrum, tag.redstone ],
            [ tag.plate.copper, tag.plate.copper, tag.plate.copper ]
        ],
    item.cc.cable, 12)

    evt.remove({ id: item.cc.modem.wired })

    shapedRecipe(evt, getRecipeID('wired_modem'),
        [
            [ tag.plate.iron, tag.redstone, tag.plate.iron ],
            [ item.cc.cable, tag.plate.electrum, item.cc.cable ],
            [ tag.plate.iron, tag.redstone, tag.plate.iron ]
        ],
    item.cc.modem.wired)

    evt.remove({ output: item.cc.modem.wireless.normal })
    evt.remove({ output: item.cc.modem.wireless.advanced })

    evt.shaped(
        Item.of(item.cc.modem.wireless.normal, 1),
        [
            ' W ',
            'PBP',
            'PSP'
        ],{
            P: tag.casings.tungsten,
            B: item.ae.wireless_booster,
            W: item.ae.wireless_access_point,
            S: item.iu.module.wireless
        }
    ).id(getRecipeID('wireless_modem_normal'))

    evt.shaped(
        Item.of(item.cc.modem.wireless.advanced, 1),
        [
            ' W ',
            'PBP',
            'PSP'
        ],{
            P: tag.casings.electrum,
            B: 'extendedae:wireless_connect',
            W: item.ae.wireless_access_point,
            S: item.iu.module.wireless
        }
    ).id(getRecipeID('wireless_modem_advanced'))

    evt.remove({ output: item.cc.redstone_relay })

    shapedRecipe(evt, getRecipeID('redstone_relay'),
        [
            [ item.iu.corpus_cover.lvl1, item.ingot.red_alloy, item.iu.corpus_cover.lvl1 ],
            [ item.ingot.red_alloy, item.cc.modem.wired, item.ingot.red_alloy ],
            [ item.iu.corpus_cover.lvl1, item.ingot.red_alloy, item.iu.corpus_cover.lvl1 ]
        ],
    item.cc.redstone_relay)

    evt.remove({ output: item.cc.disk_drive })
    evt.remove({ output: item.cc.speaker })
    evt.remove({ output: item.cc.printer })
    evt.remove({ output: 'advancedperipherals:player_detector' })

    shapedRecipe(evt, getRecipeID('speaker'),
        [
            [ item.iu.wire.isolated.gold, item.ingot.red_alloy, item.iu.wire.isolated.gold ],
            [ item.iu.wire.isolated.gold, 'minecraft:note_block', item.iu.wire.isolated.gold ],
            [ item.iu.autopower_module, item.cc.casing, item.iu.power_slot ]
        ],
    item.cc.speaker)

    shapedRecipe(evt, getRecipeID('printer'),
        [
            [ item.iu.wire.isolated.gold, item.ingot.red_alloy, item.iu.wire.isolated.gold ],
            [ item.iu.wire.isolated.gold, item.iu.module.slot.x1, item.iu.wire.isolated.gold ],
            [ item.iu.autopower_module, item.cc.casing, item.iu.power_slot ]
        ],
    item.cc.printer)

    shapedRecipe(evt, getRecipeID('disk_drive'),
        [
            [ item.iu.wire.isolated.gold, item.ingot.red_alloy, item.iu.wire.isolated.gold ],
            [ item.iu.wire.isolated.gold, item.iu.disk.lvl1, item.iu.wire.isolated.gold ],
            [ item.iu.autopower_module, item.cc.casing, item.iu.power_slot ]
        ],
    item.cc.disk_drive)

    shapedRecipe(evt, getRecipeID('player_detector'),
        [
            [ item.iu.wire.isolated.gold, item.ingot.red_alloy, item.iu.wire.isolated.gold ],
            [ item.iu.wire.isolated.gold, item.iu.module.scaner.lvl1, item.iu.wire.isolated.gold ],
            [ item.iu.autopower_module, item.cc.casing, item.iu.power_slot ]
        ],
    'advancedperipherals:player_detector')

    evt.remove({ output: item.cc.casing })

    shapedRecipe(evt, getRecipeID('peripheral_casing'),
        [
            [ tag.rod.alluminum, tag.plate.titanium, tag.rod.alluminum ],
            [ tag.plate.titanium, item.iu.machine_corpus.tech, tag.plate.titanium ],
            [ tag.rod.electrum, tag.plate.titanium, tag.rod.electrum ]
        ],
    item.cc.casing)

    console.info('Computer Craft recipe adding passed')
}