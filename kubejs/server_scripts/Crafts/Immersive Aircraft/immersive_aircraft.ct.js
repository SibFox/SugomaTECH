"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerIACTRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('ia', path)
    }

    evt.shaped(
        Item.of(item.ia.propeller, 1),
        [
            'P P',
            ' C ',
            'P P'
        ],{
            P: item.iu.rotor.wind.model.iron,
            C: item.iu.rotor.wind.core.iron
        }
    ).id(getRecipeID('propeller'))
    
    shapedRecipe(evt, getRecipeID('enhanced_propeller'),
        [
            [ null, item.iu.rotor.wind.model.steel, null ],
            [ item.iu.rotor.wind.model.steel, item.ia.propeller, item.iu.rotor.wind.model.steel ],
            [ null, item.iu.rotor.wind.model.steel, null ]
        ],
    item.ia.enhanced_propeller)
    
    shapedRecipe(evt, getRecipeID('boiler'),
        [
            [ tag.plate.bronze, tag.doubleplate.bronze, tag.plate.bronze ],
            [ tag.plate.bronze, null, tag.plate.bronze ],
            [ tag.doubleplate.bronze, item.iu.heating_cylinder, tag.doubleplate.bronze ]
        ],
    item.ia.boiler)

    shapedRecipe(evt, getRecipeID('steel_boiler'),
        [
            [ tag.plate.steel, tag.ingot.titanium_steel, tag.plate.steel ],
            [ tag.plate.steel, item.ia.boiler, tag.plate.steel ],
            [ null, tag.ingot.titanium_steel, null ]
        ],
    item.ia.steel_boiler)
    
    shapedRecipe(evt, getRecipeID('industrial_gears'),
        [
            [ tag.plate.titanium_steel, tag.gear.invar, tag.plate.titanium_steel ],
            [ tag.gear.alumel, item.iu.module.template.lvl1, tag.gear.alumel ],
            [ tag.plate.titanium_steel, tag.gear.invar, tag.plate.titanium_steel ]
        ],
    item.ia.industrial_gears)
    
    shapedRecipe(evt, getRecipeID('sturdy_pipes'),
        [
            [ tag.plate.bronze, tag.plate.bronze, tag.plate.bronze ],
            [ tag.plate.aluminumbronze, item.iu.tube_scheme, tag.plate.aluminumbronze ],
            [ tag.plate.bronze, tag.plate.bronze, tag.plate.bronze ]
        ],
    item.ia.sturdy_pipes)

    shapedRecipe(evt, getRecipeID('improved_landing_gear'),
        [
            [ null, tag.plate.steel, tag.plate.steel ],
            [ item.iu.rubber, item.iu.rubber, tag.plate.steel ],
            [ tag.gear.invar, item.iu.rubber , null]
        ],
    item.ia.improved_landing_gear)

    shapedRecipe(evt, getRecipeID('engine'),
        [
            [ item.piston, tag.plate.titanium_steel, tag.plate.titanium_steel ],
            [ item.iu.module.heat.lvl1, item.ia.boiler, tag.plate.alumel ],
            [ item.ia.redstone_mechanism, tag.gear.alumel, tag.plate.alumel ]
        ],
    item.ia.engine)

    shapedRecipe(evt, getRecipeID('nether_engine'),
        [
            [ tag.plate.alumel, item.ingot.netherite, tag.plate.alumel ],
            [ item.blaze_rod, item.ia.engine, item.blaze_rod ],
            [ tag.plate.alumel, item.iu.module.heat.lvl2, tag.plate.alumel ]
        ],
    item.ia.nether_engine)

    shapedRecipe(evt, getRecipeID('eco_engine'),
        [
            [ tag.plate.duralumin, null, tag.plate.duralumin ],
            [ tag.slime_ball, item.ia.engine, tag.slime_ball ],
            [ tag.plate.duralumin, item.iu.module.bio.lvl2, tag.plate.duralumin ]
        ],
    item.ia.eco_engine)

    evt.shaped(
        Item.of(item.ia.iron_drill, 1),
        [
            ' P ',
            'PDP',
            'PBP'
        ],{
            P: tag.plate.iron,
            B: tag.ore_block.iron,
            D: item.iu.drilling_bit.iron
        }
    ).id(getRecipeID('iron_drill'))
    
    evt.shaped(
        Item.of(item.ia.redstone_mechanism, 1),
        [
            'CIA',
            'FPB',
            '   '
        ],{
            C: item.comparator,
            I: item.iu.compressed_redstone,
            F: item.redstone_torch,
            P: item.repeater,
            A: tag.gear.brass,
            B: item.create.electron_tube
        }
    ).id(getRecipeID('redstone_mechanism'))
    
    evt.shaped(
        Item.of(item.ia.hull, 3),
        [
            'AAA',
            'TTT',
            'AAA'
        ],{
            A: tag.casing.alumel,
            T: tag.log
        }
    ).id(getRecipeID('hull'))
    
    evt.shaped(
        Item.of(item.ia.sail, 3),
        [
            'WAS',
            'WAS',
            'WAS'
        ],{
            A: item.create.andesite_alloy,
            W: tag.wool,
            S: item.string
        }
    ).id(getRecipeID('sail'))
    
    evt.shaped(
        Item.of(item.ia.rotary_cannon, 1),
        [
            ' B ',
            'WRW',
            'PGP'
        ],{
            B: 'createbigcannons:steel_autocannon_barrel',
            W: item.pb.guninternals,
            R: 'createbigcannons:steel_autocannon_recoil_spring',
            G: tag.gear.titanium,
            P: tag.plate.steel
        }
    ).id(getRecipeID('rotary_cannon'))
    
    evt.shaped(
        Item.of(item.ia.heavy_crossbow, 1),
        [
            'RCR',
            ' H ',
            'PGP'
        ],{
            C: 'minecraft:crossbow',
            G: tag.gear.titanium,
            P: tag.plate.steel,
            H: 'minecraft:tripwire_hook',
            R: tag.rod.tungsten
        }
    ).id(getRecipeID('heavy_crossbow'))
    
    evt.shaped(
        Item.of(item.ia.bomb_bay, 1),
        [
            'SMS',
            'S S'
        ],{
            S: tag.ingot.steel,
            M: item.ia.industrial_gears
        }
    ).id(getRecipeID('bomb_bay'))
    
    evt.shaped(
        Item.of(item.ia.gyroscope, 1),
        [
            ' O ',
            'CGC',
            'LLL'
        ],{
            G: item.create.gyroscopic_mechanism,
            L: tag.ingot.brass,
            C: item.comparator,
            O: item.compass
        }
    ).id(getRecipeID('gyroscope'))
    
    evt.shaped(
        Item.of(item.ia.gyroscope_hud, 1),
        [
            'TPT',
            'ELE',
            'NGM'
        ],{
            G: item.ia.gyroscope,
            M: item.iu.microchip.lvl1,
            N: 'minecraft:note_block',
            L: 'minecraft:redstone_lamp',
            P: tag.glass_panel,
            E: tag.ingot.electrum,
            T: item.create.electron_tube
        }
    ).id(getRecipeID('gyroscope_hud'))
    
    evt.shaped(
        Item.of(item.ia.gyroscope_dials, 1),
        [
            'PPP',
            'CCC',
            'NGT'
        ],{
            G: item.ia.gyroscope,
            N: 'minecraft:note_block',
            P: tag.glass_panel,
            T: item.create.electron_tube,
            C: 'minecraft:clock'
        }
    ).id(getRecipeID('gyroscope_dials'))
    
    evt.shaped(
        Item.of(item.ia.hull_reinforcement, 1),
        [
            'TTT',
            'HHH',
            'TTT'
        ],{
            T: tag.plate.titanium_steel,
            H: item.ia.hull
        }
    ).id(getRecipeID('hull_reinforcement'))
    
    


}