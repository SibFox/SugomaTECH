"use strict";

/**
 * 
 * @param {Internal.RecipesevtJS} evt 
 */
const registerAEIURecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('ae', path)
    }

    iuRecipe(evt, getRecipeID('charged_certus_quartz'), IUMachineCraft.CHARGER,
        [
            asItem(item.ae.certus_quartz_crystal)
        ],[
            asItem(item.ae.charged_certus_quartz_crystal)
        ]
    )

    iuRecipe(evt, getRecipeID('liquid_redstone'), IUMachineCraft.DIVIDER.ITEM_FLUID,
        [
            asItem(item.redstone),
            asItem(fluid.oxygen, 1)
        ],[
            asItem(fluid.redstone, 144),
            asItem(fluid.oxygen, 5)
        ]
    )

    iuRecipe(evt, getRecipeID('certus_dust'), IUMachineCraft.MACERATOR,
        [
            asItem(item.ae.certus_quartz_crystal)
        ],[
            asItem(item.ae.certus_quartz_dust)
        ]
    )

    iuRecipe(evt, getRecipeID('certus_crystal'), IUMachineCraft.SILICON_CHAMBER,
        [
            asItem(item.ae.certus_quartz_dust),
            asItem(tag.sand)
        ],[
            asItem(item.ae.certus_quartz_crystal, 3)
        ]
    )

    iuRecipe(evt, getRecipeID('fluix_crystal'), IUMachineCraft.MIXER.TRIPLE_SOLID,
        [
            asItem(item.ae.fluix_crystal),
            asItem(item.quartz),
            asItem(item.redstone)
        ],[
            asItem(item.ae.fluix_crystal, 2),
            asItem(item.iu.dust.small.quartz)
        ]
    )

    iuRecipe(evt, getRecipeID('fluix_dust'), IUMachineCraft.MACERATOR,
        [
            asItem(item.ae.fluix_crystal)
        ],[
            asItem(item.ae.fluix_dust)
        ]
    )

    iuRecipe(evt, getRecipeID('entro_crystal'), IUMachineCraft.SILICON_CHAMBER,
        [
            asItem(item.ae.entro_shard),
            asItem(tag.sand)
        ],[
            asItem(item.ae.entro_shard, 4)
        ]
    )

    iuRecipe(evt, getRecipeID('entro_dust'), IUMachineCraft.MACERATOR,
        [
            asItem(item.ae.entro_crystal)
        ],[
            asItem(item.ae.entro_dust)
        ]
    )

    iuRecipe(evt, getRecipeID('charged_redstone_crystal'), IUMachineCraft.CHARGER,
        [
            asItem(item.ae.redstone_crystal)
        ],[
            asItem(item.ae.charged_redstone_crystal)
        ]
    )

    iuRecipe(evt, getRecipeID('redstone_crystal'), IUMachineCraft.MIXER.TRIPLE_SOLID,
        [
            asItem(tag.ore_block.redstone),
            asItem(item.ae.fluix_crystal),
            asItem(item.glowstone)
        ],[
            asItem(item.ae.redstone_crystal, 2),
            asItem(item.iu.dust.small.quartz)
        ]
    )

    iuRecipe(evt, getRecipeID('logic_processor'), IUMachineCraft.CHEMICAL_FACTORY,
        [
            asItem(tag.ingot.gold),
            asItem(item.ae.silicon),
            asItem(fluid.redstone, 144)
        ],[
            asItem(item.ae.processor.logic)
        ]
    )

    iuRecipe(evt, getRecipeID('calculation_processor'), IUMachineCraft.CHEMICAL_FACTORY,
        [
            asItem(item.ae.certus_quartz_crystal),
            asItem(item.ae.silicon),
            asItem(fluid.redstone, 144)
        ],[
            asItem(item.ae.processor.calculation)
        ]
    )

    iuRecipe(evt, getRecipeID('engineering_processor'), IUMachineCraft.CHEMICAL_FACTORY,
        [
            asItem(tag.diamond),
            asItem(item.ae.silicon),
            asItem(fluid.redstone, 144)
        ],[
            asItem(item.ae.processor.engineering)
        ]
    )

    iuRecipe(evt, getRecipeID('energy_processor'), IUMachineCraft.CHEMICAL_FACTORY,
        [
            asItem(item.ae.charged_redstone_crystal),
            asItem(item.ae.silicon),
            asItem(fluid.redstone, 144)
        ],[
            asItem(item.ae.processor.energy)
        ]
    )

    iuRecipe(evt, getRecipeID('concurrent_processor'), IUMachineCraft.CHEMICAL_FACTORY,
        [
            asItem(item.ae.entro_crystal),
            asItem(item.ae.silicon),
            asItem(fluid.redstone, 144)
        ],[
            asItem(item.ae.processor.concurrent)
        ]
    )

    iuRecipe(evt, getRecipeID('accumulation_processor'), IUMachineCraft.CHEMICAL_FACTORY,
        [
            asItem(item.ingot.sky_steel),
            asItem(item.ae.silicon),
            asItem(fluid.glowstone, 144)
        ],[
            asItem(item.ae.processor.accumulation)
        ]
    )

    iuRecipe(evt, getRecipeID('sky_dust'), IUMachineCraft.MACERATOR,
        [
            asItem('ae2:sky_stone_block')
        ],[
            asItem(item.ae.sky_dust)
        ]
    )

    iuRecipe(evt, getRecipeID('sky_steel'), IUMachineCraft.ALLOY_SMELTER.lvl2,
        [
            asItem(item.ae.sky_dust),
            asItem(item.ingot.titanium_steel),
            asItem(item.ae.charged_certus_quartz_crystal)
        ],[
            asItem(item.ingot.sky_steel, 2)
        ],
        { "temperature": 4500 }
    )

    iuRecipe(evt, getRecipeID('sky_bronze'), IUMachineCraft.ALLOY_SMELTER.lvl2,
        [
            asItem(item.ae.sky_dust),
            asItem(item.ingot.bronze),
            asItem(item.ae.charged_certus_quartz_crystal),
        ],[
            asItem(item.ingot.sky_bronze, 2)
        ],
        { "temperature": 2500 }
    )
    
    iuRecipe(evt, getRecipeID('entro_ingot'), IUMachineCraft.ALLOY_SMELTER.lvl2,
        [
            asItem(item.plate.lapis),
            asItem(item.ingot.vanadoalumite),
            asItem(item.ae.entro_dust)
        ],[
            asItem(item.ingot.entro, 2)
        ],
        { "temperature": 3500 }
    )
    
    

}