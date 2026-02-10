"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerAERemovings = (evt) => {
    
    evt.remove({ output: 'ae2:vibration_chamber' })
    evt.remove({ output: item.ingot.quantum_alloy, type: 'advanced_ae:reaction' })

}