"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerMFFSRemovings = (evt) => {

    evt.remove({ output: item.mffs.focus_matrix })
    evt.remove({ output: 'mffs:projector' })
    evt.remove({ output: 'mffs:coercion_deriver' })
    evt.remove({ output: 'mffs:fortron_capacitor' })
    evt.remove({ output: 'mffs:biometric_identifier' })
    evt.remove({ output: 'mffs:intrediction_matrix' })
    evt.remove({ output: 'mffs:battery' })
    evt.remove({ output: 'mffs:cube_mode' })
    evt.remove({ output: 'mffs:sphere_mode' })
    evt.remove({ output: 'mffs:tube_mode' })
    evt.remove({ output: 'mffs:pyramid_mode' })
    evt.remove({ output: 'mffs:scale_module' })
    evt.remove({ output: 'mffs:rotation_module' })
    evt.remove({ output: 'mffs:translation_module' })
    evt.remove({ output: 'mffs:speed_module' })
    evt.remove({ output: 'mffs:capacity_module' })
    evt.remove({ output: 'mffs:camouflage_module' })

}