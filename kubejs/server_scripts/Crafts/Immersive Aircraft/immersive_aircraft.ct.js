"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerIACTRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('ia', path)
    }

    shapedRecipe(evt, getRecipeID('propeller'),
        [
            [ null, item.iu.rotor.wind.model.iron, null ],
            [ item.iu.rotor.wind.model.iron, item.iu.rotor.wind.core.iron, item.iu.rotor.wind.model.iron ],
            [ null, item.iu.rotor.wind.model.iron, null ]
        ],
    item.ia.propeller)

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
            C: 'minecraft:comparator',
            I: item.iu.compressed_redstone,
            F: 'minecraft:redstone_torch',
            P: 'minecraft:repeater',
            A: tag.gear.alumel,
            B: item.create.electron_tube
        }
    ).id(getRecipeID('redstone_mechanism'))
    
    

}