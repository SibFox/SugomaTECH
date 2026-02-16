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

    iuRecipe(evt, getRecipeID('ssd'), IUMachineCraft.ELECTRONIC_ASSEMBLER,
        [
            asItem(item.iu.rom.corpus),
            asItem(item.ingot.red_alloy),
            asItem('industrialupgrade:crafting_elements/crafting_590_element'),
            asItem(item.iu.capacitor.lvl3),
            asItem(item.iu.ram.interface)
        ],[
            asItem(item.cn.ssd)
        ]
    )
    
    iuRecipe(evt, getRecipeID('gpu'), IUMachineCraft.ELECTRONIC_ASSEMBLER,
        [
            asItem(item.iu.rom.corpus),
            asItem('industrialupgrade:crafting_elements/crafting_560_element'),
            asItem(item.iu.chip.lvl3),
            asItem(item.iu.diode.lvl2, 2),
            asItem(item.iu.cooling_system.lvl2)
        ],[
            asItem(item.cn.gpu)
        ]
    )
    
    

    // "createcybernetics:component_wiring",
    // "createcybernetics:netherite_qpu"
}