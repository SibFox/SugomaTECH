"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerAgritechCTRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('agritechevolved', path)
    }

    evt.shaped(
        Item.of('agritechevolved:advanced_planter', 1),
        [
            ' P ',
            'BQE',
            ' С '
        ],{
            Q: tag.agritech_basic_planters,
            P: item.iu.microchip.lvl1,
            B: item.iu.module.bio.lvl1,
            E: item.iu.module.energy,
            С: item.iu.machine_corpus.bio
        }
    ).id(getRecipeID('advanced_planter'))
    
    evt.shaped(
        Item.of('agritechevolved:cloche_dome', 2),
        [
            'SSS',
            'SGS',
            'SGS'
        ],{
            S: tag.plate.steel,
            G: item.iu.tempered_glass
        }
    ).id(getRecipeID('cloche_dome'))

    evt.shaped(
        Item.of('agritechevolved:composter', 1),
        [
            ' S ',
            'BQE',
            ' O '
        ],{
            Q: item.iu.machine_corpus.bio,
            E: item.iu.module.energy,
            B: item.iu.module.bio.lvl1,
            S: item.iu.microchip.lvl3,
            O: item.iu.module.slot.x8
        }
    ).id(getRecipeID('composter'))
    
    



    
    
    evt.shaped(
        Item.of('agritechevolved:ym_mk1', 2),
        [
            ' U ',
            'WPW',
            'CCC',
        ],{
            U: item.iu.upgrade.casing,
            C: 'industrialupgrade:crops/crop',
            W: item.iu.wire.isolated.copper,
            P: item.iu.microchip.lvl2
        }
    ).id(getRecipeID('ym_mk1'))
    
    evt.shaped(
        Item.of('agritechevolved:ym_mk2', 2),
        [
            'UBU',
            'WPW',
            'CCC'
        ],{
            U: 'agritechevolved:ym_mk1',
            C: 'industrialupgrade:fertilizer',
            W: item.iu.wire.glass,
            P: item.iu.microchip.lvl4,
            B: item.iu.tech_box.normal.nano
        }
    ).id(getRecipeID('ym_mk2'))
    
    evt.shaped(
        Item.of('agritechevolved:ym_mk3', 2),
        [
            'UBU',
            'WPW',
            'CCC'
        ],{
            U: 'agritechevolved:ym_mk2',
            C: 'industrialupgrade:fertilizer',
            W: item.iu.graphene_plate,
            P: item.iu.microchip.lvl6,
            B: item.iu.tech_box.normal.nano
        }
    ).id(getRecipeID('ym_mk3'))

    evt.shaped(
        Item.of('agritechevolved:sm_mk1', 2),
        [
            'CCC',
            'WPW',
            ' U '
        ],{
            U: item.iu.upgrade.casing,
            C: 'industrialupgrade:crops/crop',
            W: item.iu.wire.isolated.copper,
            P: item.iu.microchip.lvl2
        }
    ).id(getRecipeID('sm_mk1'))
    
    evt.shaped(
        Item.of('agritechevolved:sm_mk2', 2),
        [
            'CCC',
            'WPW',
            'UBU'
        ],{
            U: 'agritechevolved:sm_mk1',
            C: 'industrialupgrade:fertilizer',
            W: item.iu.wire.glass,
            P: item.iu.microchip.lvl6,
            B: item.iu.tech_box.big.nano
        }
    ).id(getRecipeID('sm_mk2'))
    
    evt.shaped(
        Item.of('agritechevolved:sm_mk3', 2),
        [
            'CCC',
            'WPW',
            'UBU'
        ],{
            U: 'agritechevolved:sm_mk2',
            C: 'industrialupgrade:fertilizer',
            W: 'industrialupgrade:wiring/glass1',
            P: item.iu.microchip.lvl8,
            B: item.iu.tech_box.big.quantum
        }
    ).id(getRecipeID('sm_mk3'))

}