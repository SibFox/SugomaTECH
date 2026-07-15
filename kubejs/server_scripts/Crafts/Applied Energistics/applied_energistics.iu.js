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
            asItem(item.ae.processor.printed.logic),
            asItem(item.ae.printed_silicon),
            asItem(fluid.redstone, 10)
        ],[
            asItem(item.ae.processor.logic)
        ]
    )

    iuRecipe(evt, getRecipeID('calculation_processor'), IUMachineCraft.CHEMICAL_FACTORY,
        [
            asItem(item.ae.processor.printed.calculation),
            asItem(item.ae.printed_silicon),
            asItem(fluid.redstone, 10)
        ],[
            asItem(item.ae.processor.calculation)
        ]
    )

    iuRecipe(evt, getRecipeID('engineering_processor'), IUMachineCraft.CHEMICAL_FACTORY,
        [
            asItem(item.ae.processor.printed.engineering),
            asItem(item.ae.printed_silicon),
            asItem(fluid.redstone, 10)
        ],[
            asItem(item.ae.processor.engineering)
        ]
    )

    iuRecipe(evt, getRecipeID('energy_processor'), IUMachineCraft.CHEMICAL_FACTORY,
        [
            asItem(item.ae.processor.printed.energy),
            asItem(item.ae.printed_silicon),
            asItem(fluid.redstone, 10)
        ],[
            asItem(item.ae.processor.energy)
        ]
    )

    iuRecipe(evt, getRecipeID('concurrent_processor'), IUMachineCraft.CHEMICAL_FACTORY,
        [
            asItem(item.ae.processor.printed.concurrent),
            asItem(item.ae.printed_silicon),
            asItem(fluid.redstone, 10)
        ],[
            asItem(item.ae.processor.concurrent)
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

    iuRecipe(evt, getRecipeID('wireless_booster'), IUMachineCraft.ELECTRONIC_ASSEMBLER,
        [
            asItem(item.iu.rom.corpus, 2),
            asItem(tag.certus_quartz),
            asItem(item.ae.fluix_dust),
            asItem(item.ae.ender_dust),
            asItem(item.create.transmitter)
        ],[
            asItem(item.ae.wireless_booster, 2)
        ]
    )

    iuRecipe(evt, getRecipeID('vibrant_glass'), IUMachineCraft.FLUID_INTEGRATOR,
        [
            asItem(fluid.glowstone, 50),
            asItem(item.iu.tempered_glass)
        ],[
            asItem(item.ae.vibrant_glass),
            asItem(fluid.oxygen, 15)
        ]
    )
    
    iuRecipe(evt, getRecipeID('annihilation_core'), IUMachineCraft.ELECTRONIC_ASSEMBLER,
        [
            asItem(item.iu.chip.lvl3),
            asItem(item.iu.ruby),
            asItem(item.ae.fluix_dust),
            asItem(item.ae.processor.logic),
            asItem(item.iu.cooling_system.lvl2)
        ],[
            asItem(item.ae.core.annihilation)
        ],
        { 'temperature': 1000 }
    )

    iuRecipe(evt, getRecipeID('formation_core'), IUMachineCraft.ELECTRONIC_ASSEMBLER,
        [
            asItem(item.iu.chip.lvl3),
            asItem(item.iu.saphire),
            asItem(item.ae.fluix_dust),
            asItem(item.ae.processor.logic),
            asItem(item.iu.cooling_system.lvl2)
        ],[
            asItem(item.ae.core.formation)
        ],
        { 'temperature': 1000 }
    )

    iuRecipe(evt, getRecipeID('blank_pattern'), IUMachineCraft.CIRCUIT_MANUFACTURER,
        [
            asItem(item.iu.rom.corpus, 2),
            asItem(item.iu.power_slot),
            asItem(tag.certus_quartz, 3),
            asItem(item.glowstone, 4),
            asItem(item.iu.ram.interface)
        ],[
            asItem('ae2:blank_pattern')
        ],
        { 'temperature': 1000 }
    )
    
    iuRecipe(evt, getRecipeID('item_cell_housing'), IUMachineCraft.CIRCUIT_MANUFACTURER,
        [
            asItem(item.iu.rom.corpus, 2),
            asItem(item.iu.power_slot),
            asItem(tag.ingot.tungsten, 3),
            asItem(item.redstone, 4),
            asItem(item.cn.ssd)
        ],[
            asItem('ae2:item_cell_housing')
        ],
        { 'temperature': 1000 }
    )

    iuRecipe(evt, getRecipeID('fluid_cell_housing'), IUMachineCraft.CIRCUIT_MANUFACTURER,
        [
            asItem(item.iu.rom.corpus, 2),
            asItem(item.iu.power_slot),
            asItem(tag.ingot.copper, 3),
            asItem(item.redstone, 4),
            asItem(item.cn.ssd)
        ],[
            asItem('ae2:fluid_cell_housing')
        ],
        { 'temperature': 1000 }
    )

    iuRecipe(evt, getRecipeID('experience_cell_housing'), IUMachineCraft.CIRCUIT_MANUFACTURER,
        [
            asItem(item.iu.rom.corpus, 2),
            asItem(item.iu.power_slot),
            asItem(item.experience_bottle, 3),
            asItem(item.glowstone, 4),
            asItem(item.cn.ssd)
        ],[
            asItem('appex:experience_cell_housing')
        ],
        { 'temperature': 1500 }
    )

    iuRecipe(evt, getRecipeID('fe_cell_housing'), IUMachineCraft.CIRCUIT_MANUFACTURER,
        [
            asItem(item.iu.rom.corpus, 2),
            asItem(item.iu.power_slot),
            asItem(item.ae.insulating_resin, 3),
            asItem(item.redstone, 4),
            asItem(item.cn.ssd)
        ],[
            asItem('appflux:fe_cell_housing')
        ],
        { 'temperature': 2000 }
    )

    iuRecipe(evt, getRecipeID('things_disk_housing'), IUMachineCraft.CIRCUIT_MANUFACTURER,
        [
            asItem(item.iu.rom.corpus, 2),
            asItem(item.iu.power_slot),
            asItem(item.ingot.netherite, 3),
            asItem(item.amethyst_shard, 4),
            asItem(item.cn.ssd)
        ],[
            asItem('ae2things:disk_housing')
        ],
        { 'temperature': 3000 }
    )

    iuRecipe(evt, getRecipeID('mega_item_cell_housing'), IUMachineCraft.CIRCUIT_MANUFACTURER,
        [
            asItem(item.iu.rom.corpus, 2),
            asItem(item.iu.power_slot),
            asItem(item.ingot.sky_steel, 3),
            asItem(item.ae.sky_dust, 4),
            asItem(item.cn.ssd)
        ],[
            asItem('megacells:mega_item_cell_housing')
        ],
        { 'temperature': 3000 }
    )

    iuRecipe(evt, getRecipeID('mega_fluid_cell_housing'), IUMachineCraft.CIRCUIT_MANUFACTURER,
        [
            asItem(item.iu.rom.corpus, 2),
            asItem(item.iu.power_slot),
            asItem(item.ingot.sky_bronze, 3),
            asItem(item.ae.sky_dust, 4),
            asItem(item.cn.ssd)
        ],[
            asItem('megacells:mega_fluid_cell_housing')
        ],
        { 'temperature': 3000 }
    )

    iuRecipe(evt, getRecipeID('mega_experience_cell_housing'), IUMachineCraft.CIRCUIT_MANUFACTURER,
        [
            asItem(item.iu.rom.corpus, 2),
            asItem(item.iu.power_slot),
            asItem(item.experience_bottle, 3),
            asItem(item.ae.sky_dust, 4),
            asItem(item.cn.ssd)
        ],[
            asItem('megacells:mega_experience_cell_housing')
        ],
        { 'temperature': 3000 }
    )

    iuRecipe(evt, getRecipeID('bulk_item_cell'), IUMachineCraft.CIRCUIT_MANUFACTURER,
        [
            asItem(item.iu.rom.corpus, 2),
            asItem(item.iu.power_slot),
            asItem(item.ingot.netherite, 3),
            asItem('megacells:bulk_cell_component'),
            asItem(item.cn.ssd)
        ],[
            asItem('megacells:bulk_item_cell')
        ],
        { 'temperature': 3000 }
    )    
    

}