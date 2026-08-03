//priority: 0
"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerIUCTRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('iu', path)
    }

    evt.remove({ output: 'industrialupgrade:wiring/itemcable23' }) // Кобальтовая труба
    evt.remove({ output: 'industrialupgrade:wiring/itemcable22' }) // Входная труба
    evt.remove({ output: 'industrialupgrade:crafting_elements/crafting_294_element' }) // Катушка

    shapedRecipe(evt, recipeID('iu', 'cobalt_pipe'),
        [
            [ tag.plate.cobalt, tag.plate.cobalt, tag.plate.cobalt ],
            [ null, tag.plate.nichrome, null ],
            [ tag.plate.cobalt, tag.plate.cobalt, tag.plate.cobalt ]
        ],
    'industrialupgrade:wiring/itemcable23', 6)

    shapedRecipe(evt, recipeID('iu', 'cobalt_pipe_input'),
        [
            [ tag.plate.cobalt, tag.plate.cobalt, tag.plate.cobalt ],
            [ tag.lapis, tag.plate.nichrome, tag.lapis ],
            [ tag.plate.cobalt, tag.plate.cobalt, tag.plate.cobalt ]
        ],
    'industrialupgrade:wiring/itemcable22', 6)

    evt.shaped(
        Item.of(item.iu.tin_can, 1),
        [
            'C C',
            ' C '
        ],{
            C: tag.casing.tin
        }
    ).id(getRecipeID('tin_can'))
    
    evt.shapeless(Item.of(item.iu.wire.bare.copper, 1),
        [
            'powergrid:wire'
        ]
    ).id(getRecipeID('wire_bare_copper_pg'))

    evt.shapeless(Item.of(item.iu.wire.bare.iron, 1),
        [
            'powergrid:iron_wire'
        ]
    ).id(getRecipeID('wire_bare_gold_pg'))

    evt.shapeless(Item.of(item.iu.wire.bare.gold, 1),
        [
            'powergrid:golden_wire'
        ]
    ).id(getRecipeID('wire_bare_gold_pg'))

    evt.shapeless(Item.of(item.iu.wire.isolated.copper, 1),
        [
            'powergrid:insulated_copper_wire'
        ]
    ).id(getRecipeID('wire_isolated_copper_pg'))
    


    // Переделка машинок

    evt.shaped(
        Item.of('industrialupgrade:basemachine3/electric_wire_insulator', 1),
        [
            'RRR',
            'SQT',
            ' E '
        ],{
            S: item.iu.module.slot.x2,
            E: item.iu.electromotor.lvl1,
            Q: item.iu.machine_corpus.tech,
            T: item.iu.module.extruder.lvl1,
            R: item.iu.rubber
        }
    ).id(getRecipeID('electric_wire_insulator'))
    
    evt.shaped(
        Item.of('industrialupgrade:basemachine3/crystal_charge', 1),
        [
            'SQF',
            'E G'
        ],{
            S: item.iu.module.slot.x1,
            E: item.iu.electromotor.lvl1,
            Q: item.iu.machine_corpus.tech,
            F: item.iu.module.filler,
            G: item.iu.module.energy
        }
    ).id(getRecipeID('crystal_charge'))
    
    evt.shaped(
        Item.of('industrialupgrade:basemachine3/bio_generator', 1),
        [
            'BTG',
            ' Q ',
            ' E '
        ],{
            E: item.iu.electromotor.lvl1,
            Q: item.iu.machine_corpus.tech,
            B: item.iu.module.bio.lvl1,
            T: item.iu.module.tank.lvl1,
            G: item.iu.module.generator.lvl1
        }
    ).id(getRecipeID('bio_generator'))
    
    evt.shaped(
        Item.of('industrialupgrade:basemachine3/steam_generator', 1),
        [
            'STG',
            ' Q ',
            ' E '
        ],{
            E: item.iu.electromotor.lvl1,
            Q: item.iu.machine_corpus.tech,
            S: item.iu.module.steam,
            T: item.iu.module.tank.lvl1,
            G: item.iu.module.generator.lvl1
        }
    ).id(getRecipeID('steam_generator'))
    
    evt.shaped(
        Item.of('industrialupgrade:basemachine3/fluid_heater', 1),
        [
            'CLC',
            ' Q ',
            'BEB'
        ],{
            Q: item.iu.machine_corpus.tech,
            E: item.iu.electromotor.lvl1,
            L: item.iu.module.liquid.lvl1,
            C: item.iu.heating_cylinder,
            B: item.iu.electum_boiler
        }
    ).id(getRecipeID('fluid_heater'))
    
    evt.shaped(
        Item.of('industrialupgrade:basemachine3/electric_squeezer', 1),
        [
            'TQX',
            ' E '
        ],{
            Q: item.iu.machine_corpus.tech,
            E: item.iu.electromotor.lvl1,
            X: item.iu.module.extractor.lvl1,
            T: item.iu.module.tank.lvl1
        }
    ).id(getRecipeID('electric_squeezer'))
    
    evt.shaped(
        Item.of('industrialupgrade:simplemachine/compressor_iu', 1),
        [
            ' P ',
            'CQS',
            ' E '
        ],{
            Q: item.iu.machine_corpus.tech,
            E: item.iu.electromotor.lvl1,
            S: item.iu.module.slot.x1,
            C: item.iu.cooling_cylinder,
            P: item.iu.module.press.lvl1
        }
    ).id(getRecipeID('compressor'))
    
    evt.shaped(
        Item.of('industrialupgrade:simplemachine/macerator_iu', 1),
        [
            ' P ',
            'CQS',
            ' E '
        ],{
            Q: item.iu.machine_corpus.tech,
            E: item.iu.electromotor.lvl1,
            S: item.iu.module.slot.x1,
            C: item.iu.cooling_cylinder,
            P: item.iu.module.macerator.lvl1
        }
    ).id(getRecipeID('macerator'))
    
    evt.shaped(
        Item.of('industrialupgrade:moremachine2/cutting', 1),
        [
            ' P ',
            'CQS',
            ' E '
        ],{
            Q: item.iu.machine_corpus.tech,
            E: item.iu.electromotor.lvl1,
            S: item.iu.module.slot.x1,
            C: item.iu.cooling_cylinder,
            P: item.iu.module.cutting.lvl1
        }
    ).id(getRecipeID('cutting'))
    
    evt.shaped(
        Item.of('industrialupgrade:simplemachine/extractor_iu', 1),
        [
            ' P ',
            'CQS',
            ' E '
        ],{
            Q: item.iu.machine_corpus.tech,
            E: item.iu.electromotor.lvl1,
            S: item.iu.module.slot.x1,
            C: item.iu.cooling_cylinder,
            P: item.iu.module.extractor.lvl1
        }
    ).id(getRecipeID('extractor'))
    
    evt.shaped(
        Item.of('industrialupgrade:moremachine2/extruder', 1),
        [
            ' P ',
            'CQS',
            ' E '
        ],{
            Q: item.iu.machine_corpus.tech,
            E: item.iu.electromotor.lvl1,
            S: item.iu.module.slot.x1,
            C: item.iu.cooling_cylinder,
            P: item.iu.module.extruder.lvl1
        }
    ).id(getRecipeID('extruder'))
    
    evt.shaped(
        Item.of('industrialupgrade:moremachine2/rolling', 1),
        [
            ' P ',
            'CQS',
            ' E '
        ],{
            Q: item.iu.machine_corpus.tech,
            E: item.iu.electromotor.lvl1,
            S: item.iu.module.slot.x1,
            C: item.iu.cooling_cylinder,
            P: item.iu.module.rolling.lvl1
        }
    ).id(getRecipeID('rolling'))
    
    evt.shaped(
        Item.of('industrialupgrade:basemachine1/handler_ho', 1),
        [
            'P F',
            'CQS',
            ' E '
        ],{
            Q: item.iu.machine_corpus.tech,
            E: item.iu.electromotor.lvl1,
            S: item.iu.module.slot.x4,
            C: item.iu.heating_cylinder,
            P: item.iu.module.mineral.lvl1,
            F: item.iu.module.electrofurnace.lvl1
        }
    ).id(getRecipeID('handler_ho'))
    
    evt.shaped(
        Item.of('industrialupgrade:basemachine3/pump_iu', 1),
        [
            ' P ',
            'LQT',
            ' E '
        ],{
            Q: item.iu.machine_corpus.tech,
            E: item.iu.electromotor.lvl1,
            L: item.iu.module.liquid.lvl1,
            P: item.iu.module.pump.lvl1,
            T: item.iu.module.tank.storage 
        }
    ).id(getRecipeID('pump'))
    
    evt.shaped(
        Item.of('industrialupgrade:basemachine2/electrolyzer_iu', 1),
        [
            ' P ',
            'LQT',
            ' E '
        ],{
            Q: item.iu.machine_corpus.tech,
            E: item.iu.electromotor.lvl1,
            L: item.iu.module.liquid.lvl1,
            P: item.iu.module.electrolyzer,
            T: item.iu.module.tank.storage 
        }
    ).id(getRecipeID('electrolyzer'))
    
    evt.shaped(
        Item.of('industrialupgrade:basemachine3/laser_polisher', 1),
        [
            'LSL',
            'LQL',
            ' E '
        ],{
            Q: item.iu.machine_corpus.tech,
            E: item.iu.electromotor.lvl1,
            S: item.iu.module.slot.x1,
            L: item.iu.laser_component
        }
    ).id(getRecipeID('laser_polisher'))

    evt.shaped(
        Item.of('industrialupgrade:basemachine3/peat_generator', 1),
        [
            'PPP',
            'GQB',
            ' E '
        ],{
            Q: item.iu.machine_corpus.tech_adv,
            E: item.iu.electromotor.with_bearings.lvl1,
            G: item.iu.module.generator.lvl1,
            B: item.iu.module.bio.lvl1,
            P: item.iu.cultivated_peat
        }
    ).id(getRecipeID('peat_generator'))
    
    

    console.info('Industrial Upgrade recipe adding passed')
}