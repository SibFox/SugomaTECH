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
    evt.remove({ output: item.ae.wireless_booster })
    evt.remove({ output: 'ae2:inscriber' })
    evt.remove({ output: 'ae2:sky_stone_tank' })
    evt.remove({ output: 'extendedae:machine_frame' })
    evt.remove({ output: 'extendedae:crystal_assembler' })
    evt.remove({ output: item.ae.shattered_singularity })
    evt.remove({ output: item.ae.vibrant_glass })
    evt.remove({ output: 'ae2:wireless_receiver' })
    evt.remove({ output: 'ae2:crafting_unit' })
    evt.remove({ output: 'ae2:molecular_assembler' })
    evt.remove({ output: 'advanced_ae:reaction_chamber' })
    evt.remove({ output: 'ae2:condenser' })
    evt.remove({ output: 'ae2:energy_acceptor' })
    evt.remove({ output: 'megacells:cell_dock' })
}