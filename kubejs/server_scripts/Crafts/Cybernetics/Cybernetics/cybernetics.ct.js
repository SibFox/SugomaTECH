"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCyberneticsCTRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('createcybernetics', path)
    }

    evt.shaped(
        Item.of('createcybernetics:engineering_table', 1),
        [
            ' C ',
            'QDO',
            'FSA'
        ],{
            A: item.ae.core.annihilation,
            F: item.ae.core.formation,
            C: item.iu.module.crafting.lvl2,
            Q: item.iu.module.circuit,
            O: item.iu.module.combining.lvl2,
            S: 'industrialupgrade:solderingiron',
            D: item.iu.machine_corpus.tech_adv
        }
    ).id(getRecipeID('engineering_table'))
    
    
    evt.shaped(
        Item.of(item.cn.fiber_optic, 1),
        [
            'WWW',
            'WSW',
            'WWW'
        ],{
            W: item.iu.wire.glass,
            S: item.custom.spool
        }
    ).id(getRecipeID('fiber_optic'))

    evt.shaped(
        Item.of(item.cn.diodes, 1),
        [
            ' E ',
            'TTT',
            ' R '
        ],{
            T: tag.rod.titanium,
            E: tag.ingot.electrum,
            R: item.ingot.red_alloy
        }
    ).id(getRecipeID('diodes'))

    evt.shaped(
        Item.of(item.cn.eye_upgrade_base, 1),
        [
            'EME',
            'PRP',
            'PBP'
        ],{
            E: item.nugget.electrum,
            M: item.iu.microchip.lvl4,
            P: item.plate.titanium,
            R: item.ingot.red_alloy,
            B: item.iu.module.circuit
        }
    ).id(getRecipeID('eye_upgrade_base'))

    evt.shaped(
        Item.of(item.cn.actuator, 1),
        [
            ' S ',
            'PGP',
            'PRP'
        ],{
            S: item.create.shaft,
            P: item.plate.titanium,
            G: tag.gear.titanium,
            R: item.ingot.red_alloy
        }
    ).id(getRecipeID('actuator'))

    evt.shaped(
        Item.of(item.cn.storage, 1),
        [
            'P P',
            'N N',
            'P P'
        ],{
            P: item.plate.titanium,
            N: item.nugget.titanium
        }
    ).id(getRecipeID('storage'))
    
    evt.shaped(
        Item.of('createcybernetics:holoimprint_chip', 1),
        [
            'TTT',
            'PCS',
            ' E '
        ],{
            T: tag.plate.titanium,
            S: item.cn.ssd,
            E: tag.plate.electrum,
            C: 'ae2:cell_component_64k',
            P: item.ae.processor.concurrent
        }
    ).id(getRecipeID('holoimprint_chip'))
    
    

    evt.shaped(
        Item.of('createcybernetics:robosurgeon', 1),
        [
            ' M ',
            'SCU',
            ' E '
        ],{
            C: item.iu.machine_corpus.tech_adv,
            M: item.iu.module.cybernetics,
            E: item.iu.electromotor.lvl1,
            S: item.iu.module.scaner.lvl1,
            U: item.iu.module.upgrade
        }
    ).id(getRecipeID('robosurgeon'))

    evt.shaped(
        Item.of('createcybernetics:surgery_table', 1),
        [
            ' M ',
            'SCU',
            '   '
        ],{
            C: '#minecraft:beds',
            M: item.iu.module.cybernetics,
            S: item.iu.module.scaner.lvl1,
            U: item.iu.module.upgrade
        }
    ).id(getRecipeID('surgery_table'))
    
    evt.shaped(
        Item.of('createcybernetics:charging_block', 1),
        [
            ' M ',
            'SCS',
            'BSB'
        ],{
            C: item.iu.machine_corpus.tech,
            M: item.iu.module.cybernetics,
            S: item.iu.spool.superconducting.lvl1,
            B: tag.ore_block.electrum
        }
    ).id(getRecipeID('charging_block'))
    
    evt.shaped(
        Item.of('createcybernetics:surgery_chamber', 1),
        [
            ' M ',
            'ACB',
            ' U '
        ],{
            C: item.iu.machine_corpus.tech_adv,
            M: item.iu.module.cybernetics,
            U: item.iu.module.upgrade,
            A: item.iu.module.cutting.lvl1,
            B: item.iu.module.extractor.lvl1
        }
    ).id(getRecipeID('surgery_chamber'))
    
    
    // ~~~~~~~ Grafting Table
    evt.custom({
        "type": "createcybernetics:grafting_table",
        "wetware": [
            { "item": item.cn.bodypart.muscle },
            { "item": item.iu.spool.lvl1 },
            { "item": item.redstone },
            { "item": item.redstone }
        ],
        "result": { "id": "createcybernetics:wetware_electrocytemuscle", "count": 1 }
    }).id(getRecipeID('electrocytemuscle'))
}