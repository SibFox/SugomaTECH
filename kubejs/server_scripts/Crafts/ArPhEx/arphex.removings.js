"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerArPhExCTRemovings = (evt) => {

    evt.remove({ output: item.arphex.spacetime_shard })
    evt.remove({ output: item.arphex.spacetime_ingot })
    evt.remove({ output: item.arphex.infernal_shard })
    evt.remove({ output: item.arphex.infernal_ingot })
}