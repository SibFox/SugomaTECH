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
    
}