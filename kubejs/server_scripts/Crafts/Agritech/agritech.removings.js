"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerAgritechRemovings = (evt) => {

    evt.remove({ output: 'agritechevolved:advanced_planter' })
    evt.remove({ output: 'agritechevolved:cloche_dome' })
    evt.remove({ output: 'agritechevolved:mulch' })
    evt.remove({ output: 'agritechevolved:infused_farmland' })
    evt.remove({ output: 'agritechevolved:ym_mk1' })
    evt.remove({ output: 'agritechevolved:ym_mk2' })
    evt.remove({ output: 'agritechevolved:ym_mk3' })
    evt.remove({ output: 'agritechevolved:sm_mk1' })
    evt.remove({ output: 'agritechevolved:sm_mk2' })
    evt.remove({ output: 'agritechevolved:sm_mk3' })
    evt.remove({ output: 'agritechevolved:composter' })

}