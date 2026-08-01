"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerIARemovings = (evt) => {

    evt.remove({ output: item.ia.propeller })
    evt.remove({ output: item.ia.enhanced_propeller })
    evt.remove({ output: item.ia.boiler })
    evt.remove({ output: item.ia.steel_boiler })
    evt.remove({ output: item.ia.industrial_gears })
    evt.remove({ output: item.ia.sturdy_pipes })
    evt.remove({ output: item.ia.improved_landing_gear })
    evt.remove({ output: item.ia.engine })
    evt.remove({ output: item.ia.nether_engine })
    evt.remove({ output: item.ia.eco_engine })
    evt.remove({ output: item.ia.iron_drill })
    evt.remove({ output: item.ia.redstone_mechanism })
    evt.remove({ output: item.ia.hull })
    evt.remove({ output: item.ia.sail })
    evt.remove({ id: 'immersive_aircraft:airship' })
    // evt.remove({ id: 'immersive_aircraft:cargo_airship' })
    evt.remove({ id: 'immersive_aircraft:warship' })
    evt.remove({ id: 'immersive_aircraft:biplane' })
    // evt.remove({ id: 'immersive_aircraft:quadrocopter' })
    evt.remove({ id: 'immersive_aircraft:bamboo_hopper' })
    evt.remove({ id: item.ia.rotary_cannon })
    evt.remove({ id: item.ia.heavy_crossbow })
    evt.remove({ id: item.ia.bomb_bay })
    evt.remove({ id: item.ia.gyroscope })
    evt.remove({ id: item.ia.gyroscope_hud })
    evt.remove({ id: item.ia.gyroscope_dials })
    evt.remove({ id: item.ia.hull_reinforcement })
    evt.remove({ id: 'immersive_machinery:tunnel_digger' })
    // evt.remove({ id: 'immersive_machinery:bamboo_bee' })
    // evt.remove({ id: 'immersive_machinery:redstone_sheep' })
    evt.remove({ id: 'immersive_machinery:copperfin' })

}