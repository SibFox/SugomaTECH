"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerPBRemovings = (evt) => {

    evt.remove({ output: item.pb.processor })
    evt.remove({ output: 'pointblank:printer' })

}