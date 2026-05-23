"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCyberneticsCTRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('createcybernetics', path)
    }

    shapedRecipe(evt, getRecipeID('engineering_table'),
        [
            [ null, item.iu.module.crafting.lvl2, null ],
            [ item.iu.module.circuit, item.iu.machine_corpus.advanced_tech, item.iu.module.combining.lvl2 ],
            [ item.ae.core.formation, 'industrialupgrade:solderingiron', item.ae.core.annihilation ]
        ],
    'createcybernetics:engineering_table')

    evt.shaped(
        Item.of(item.cn.fiber_optic, 1),
        [
            'WWW',
            'WSW',
            'WWW'
        ],{
            W: item.iu.wire.glass,
            S: item.create.spool.item
        }
    ).id(getRecipeID('fiber_optic'))

    evt.shaped(
        Item.of(item.cn.diodes, 1),
        [
            'TCT',
            'PPP',
            'ERE'
        ],{
            T: item.iu.transistor.lvl2,
            C: item.iu.capacitor.lvl3,
            P: item.plate.titanium,
            E: item.nugget.electrum,
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
    
    
    
}