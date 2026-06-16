"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCyberneticsIURecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('createcybernetics', path)
    }

    iuRecipe(evt, getRecipeID('titanium_plating'), IUMachineCraft.ROLLING,
        [ asItem(tag.doubleplate.titanium) ],
        [ asItem(item.cn.titanium_plating) ]
    )

    iuRecipe(evt, getRecipeID('titanium_mesh'), IUMachineCraft.CUTTER,
        [
            asItem(tag.doubleplate.titanium)
        ],[
            asItem(item.cn.titanium_mesh)
        ]
    )

    iuRecipe(evt, getRecipeID('synthnerves'), IUMachineCraft.CHEMICAL_FACTORY,
        [
            asItem(fluid.glucose, 100),
            asItem(item.custom.synth_nerve_cables),
            asItem(item.custom.conducting_organic_polymer)
        ],[
            asItem(item.cn.synthnerves)
        ]
    )

    iuRecipe(evt, getRecipeID('ssd'), IUMachineCraft.CIRCUIT_MANUFACTURER,
        [
            asItem(item.iu.rom.corpus),
            asItem(item.iu.chip.lvl3),
            asItem('industrialupgrade:crafting_elements/crafting_560_element'),
            asItem(item.iu.capacitor.lvl3, 2),
            asItem(item.iu.ram.interface)
        ],[
            asItem(item.cn.ssd)
        ],
        { "temperature": 1250 }
    )
    
    iuRecipe(evt, getRecipeID('gpu'), IUMachineCraft.CIRCUIT_MANUFACTURER,
        [
            asItem(item.iu.rom.corpus),
            asItem(item.iu.chip.lvl3),
            asItem('industrialupgrade:crafting_elements/crafting_560_element'),
            asItem(item.iu.diode.lvl2, 2),
            asItem(item.iu.cooling_system.lvl2)
        ],[
            asItem(item.cn.gpu)
        ],
        { "temperature": 1250 }
    )

    iuRecipe(evt, getRecipeID('neural_processor'), IUMachineCraft.CIRCUIT_MANUFACTURER,
        [
            asItem(item.iu.programmed_board.lvl4),
            asItem(item.iu.processor.lvl8),
            asItem(item.cn.ssd, 2),
            asItem(item.custom.conducting_organic_polymer, 4),
            asItem(item.iu.chip.lvl4, 1)
        ],[
            asItem(item.cn.upgradepart.neural_processor)
        ],
        { "temperature": 4500 }
    )
    
    
}