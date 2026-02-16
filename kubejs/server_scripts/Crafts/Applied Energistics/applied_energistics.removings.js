"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerAERemovings = (evt) => {
    
    evt.remove({ output: 'ae2:vibration_chamber' })
    evt.remove({ output: item.ingot.quantum_alloy, type: 'advanced_ae:reaction' })
    evt.remove({ output: item.ae.redstone_crystal, type: 'ae2:transform' })
    evt.remove({ output: item.ingot.sky_steel })
    evt.remove({ output: item.ingot.sky_bronze })
    evt.remove({ output: item.ingot.entro })

}