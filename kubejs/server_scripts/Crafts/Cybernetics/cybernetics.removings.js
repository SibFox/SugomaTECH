"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCyberneticsRemovings = (evt) => {

    evt.remove({ output: item.cn.titanium_plating })
    evt.remove({ output: item.cn.titanium_mesh })
    evt.remove({ output: item.cn.fiber_optic })
    evt.remove({ output: item.cn.synthnerves })
    evt.remove({ output: item.cn.diodes })
    evt.remove({ output: item.cn.actuator })
    evt.remove({ output: item.cn.storage })
    evt.remove({ output: item.cn.eye_upgrade_base })
    evt.remove({ output: 'createcybernetics:organsupgrades_dualisticconverter' })
    evt.remove({ output: 'createcybernetics:organsupgrades_magiccatalyst' })
    evt.remove({ id: 'createcybernetics:titanium_hand_createpresent' })
    
}