"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerIAMechanicalRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('ia/mechanical', path)
    }

    evt.recipes.create.mechanical_crafting('immersive_aircraft:airship', [
        ' AAAAA ',
        'AAA AAA',
        'SSR RSS',
        'PRPBPRP',
        'HHHHHET',
        'HHHHHHH',
    ], {
        H: item.ia.hull,
        E: item.ia.engine,
        S: item.ia.sail,
        P: tag.plank,
        R: tag.rope,
        B: 'aeronautics:adjustable_burner',
        A: '#aeronautics:envelope',
        T: 'aeronautics:andesite_propeller'
    }).id(getRecipeID('airship'))

    evt.recipes.create.mechanical_crafting('immersive_aircraft:biplane', [
        '    T    ',
        'HHHHEHHHH',
        'HPPPCPPPH',
        '   HQH   ',
        '   HHH   ',
        '   HHH   ',
        '  HHHHH  '
    ], {
        H: item.ia.hull,
        E: item.ia.engine,
        P: tag.plate.alumel,
        T: 'aeronautics:andesite_propeller',
        Q: '#create:seats',
        C: 'create:linked_controller'
    }).id(getRecipeID('biplane'))

    evt.recipes.create.mechanical_crafting('immersive_aircraft:bamboo_hopper', [
        '  T G T  ',
        'HHHHCHHHH',
        'HBBBQBBBH',
        ' B HEH B ',
        ' B  T  B ',
        ' B     B ',
        ' B     B ',
        'HBHHHHHBH',
    ], {
        G: item.iu.tempered_glass,
        H: item.ia.hull,
        E: item.ia.engine,
        T: 'aeronautics:andesite_propeller',
        Q: '#create:seats',
        B: item.log.minecraft.standart.bamboo,
        C: 'create:linked_controller'
    }).id(getRecipeID('bamboo_hopper'))

    evt.recipes.create.mechanical_crafting('immersive_machinery:tunnel_digger', [
        '   BBBTD ',
        'Q CBEEBTD',
        'BBBBBBTD ',
        'OIIIIO   ',
    ], {
        E: item.ia.engine,
        Q: '#create:seats',
        B: tag.ore_block.titanium,
        O: 'tracks:small_track_drive_wheel',
        I: 'tracks:small_suspension_track',
        D: item.ia.iron_drill,
        C: 'create:linked_controller',
        T: tag.gear.titanium
    }).id(getRecipeID('tunnel_digger'))

    evt.recipes.create.mechanical_crafting('immersive_machinery:copperfin', [
        'BBBBBGGGB',
        'BBBB    G',
        'TEOB    G',
        'BBBBQ  CG',
        'BBBBBGGGB',
    ], {
        E: item.ia.engine,
        Q: '#create:seats',
        B: tag.ore_block.copper,
        O: item.conduit,
        G: item.iu.tempered_glass,
        C: 'create:linked_controller',
        T: 'aeronautics:andesite_propeller'
    }).id(getRecipeID('copperfin'))

}