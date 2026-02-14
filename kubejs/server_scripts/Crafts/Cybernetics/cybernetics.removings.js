"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCyberneticsRemovings = (evt) => {

    evt.remove({ output: item.cn.titanium_plating })
    evt.remove({ output: 'createcybernetics:organsupgrades_dualisticconverter' })
    evt.remove({ output: 'createcybernetics:organsupgrades_magiccatalyst' })
    evt.remove({ id: 'createcybernetics:titanium_hand_createpresent' })
    
}