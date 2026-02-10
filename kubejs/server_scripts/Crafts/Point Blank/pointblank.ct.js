"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerPBCTRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('pb', path)
    }

    shapedRecipe(evt, getRecipeID('processor'),
        [
            [ null, item.ae.processor.concurrent, null ],
            [ item.ae.processor.calculation, item.iu.microchip.lvl4, item.ae.processor.engineering ],
            [ item.ae.core.formation, item.iu.battery.lithium, item.ae.core.formation ]
        ],
    item.pb.processor)

    shapedRecipe(evt, getRecipeID('printer'),
        [
            [ item.iu.corpus_cover.lvl2, item.pb.processor, item.iu.corpus_cover.lvl2 ],
            [ item.iu.corpus_cover.lvl2, item.cc.computer.pocket.advanced, item.iu.corpus_cover.lvl2 ],
            [ item.iu.autopower_module, item.iu.power_unit.normal, 'industrialupgrade:upgradekitstorage/upgradekit' ]
        ],
    'pointblank:printer')

    evt.remove({ output: item.pb.guninternals })
    evt.remove({ output: item.pb.gunmetal_mesh })

    shapedRecipe(evt, getRecipeID('guninternals'),
        [
            [ item.ingot.gunmetal, tag.gear.alumel, item.ingot.gunmetal ],
            [ tag.plate.titanium_steel, tag.rod.tungsteen, tag.plate.titanium_steel ],
            [ item.ingot.gunmetal, tag.plate.titanium_steel, item.ingot.gunmetal ]
        ],
    item.pb.guninternals)

}