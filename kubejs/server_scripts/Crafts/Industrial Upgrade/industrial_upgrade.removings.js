// priority: 1000
"use strict";

const registerIURecipeRemovings = () => {
    
    function getRecipeID(path) {
        return recipeID('iu_change', path)
    }
    
    let { $ItemStack } = require("@package/net/minecraft/world/item");

    ServerEvents.recipes(evt => {
        evt.remove({ output: [
            'industrialupgrade:basemachine3/steam_generator', 'industrialupgrade:basemachine3/electric_wire_insulator',
            'industrialupgrade:basemachine3/crystal_charge', 'industrialupgrade:basemachine3/bio_generator',
            'industrialupgrade:basemachine3/fluid_heater', 'industrialupgrade:basemachine3/electric_squeezer',
            'industrialupgrade:simplemachine/compressor_iu', 'industrialupgrade:simplemachine/macerator_iu',
            'industrialupgrade:moremachine2/cutting', 'industrialupgrade:simplemachine/extractor_iu',
            'industrialupgrade:moremachine2/extruder', 'industrialupgrade:moremachine2/rolling',
            'industrialupgrade:basemachine1/handler_ho', 'industrialupgrade:basemachine2/electrolyzer_iu',
            'industrialupgrade:basemachine3/pump_iu', 'industrialupgrade:basemachine3/laser_polisher',
            'industrialupgrade:basemachine3/peat_generator', 'industrialupgrade:basemachine3/electric_refractory_furnace',
            'industrialupgrade:basemachine3/ampere_generator', 'industrialupgrade:basemachine3/electric_dryer'
        ] })
    
        for (let t of ['wind', 'water']) {
            evt.remove({ output: [
                item.iu.rotor[t].core.bronze,
                item.iu.rotor[t].core.iron, item.iu.rotor[t].core.steel,
                item.iu.rotor[t].core.carbon, item.iu.rotor[t].core.iridium,
                item.iu.rotor[t].core.comp_iridium, item.iu.rotor[t].core.spectral,
                item.iu.rotor[t].core.mythic, item.iu.rotor[t].core.neutron,
                item.iu.rotor[t].core.photon, item.iu.rotor[t].core.barion,
                item.iu.rotor[t].core.adron, item.iu.rotor[t].core.ultra
            ] })
        }
    
        /**
         * 
         * @param {string} type 
         * @param {Array<Dictionary>} items 
         */
        function removeIUCraft(type, items)
        {
            let dict = {
                "type": "industrialupgrade:universal_recipe_delete",
                "recipe_type": type,
                "isFluidRecipe": false,
                "isRemoveAll": true,
                "output": []
            }
    
            for (let item of items) {
                let out = {
                    "type": "item",
                    "id": item.item
                }
                if (item.isTag) {
                    console.error('Wrong output item in IU remove\nitem ID: ' + item.item)
                    return
                }
                if (item.isFluid) {
                    out.type = "fluid"
                    dict.isFluidRecipe = true
                }
    
                dict.output.push(out)
            }
    
            evt.custom(dict)
        }

        /**
         * 
         * @param {string} type 
         * @param {Array<$ItemStack>} items 
         */
        function removeIUCraftWrapped(type, items)
        {
            let dict = {
                "type": "industrialupgrade:universal_recipe_delete",
                "recipe_type": type,
                "isFluidRecipe": false,
                "isRemoveAll": true,
                "output": []
            }
            
            for (let item of items) {
                let out = {
                    "type": "item",
                    "id": item.id
                }
                // if (item. isTag) {
                //     console.error('Wrong output item in IU remove\nitem ID: ' + item.item)
                //     return
                // }
                // if (item.isFluid) {
                //     out.type = "fluid"
                //     dict.isFluidRecipe = true
                // }
    
                dict.output.push(out)
            }
    
            evt.custom(dict)
        }
    
        evt.remove({ output: item.iu.qfp.lvl2 })
        evt.remove({ output: item.iu.qfp.lvl3 })
        evt.remove({ output: item.iu.qfp.lvl4 })
        evt.remove({ output: item.iu.qfp.lvl5 })
        evt.remove({ output: item.iu.qfp.lvl6 })

        removeIUCraftWrapped(IUMachineCraft.FLUID_INTEGRATOR, [Item.of('industrialupgrade:blockresource/asphalt')])
    
        // Процессоры
        removeIUCraft(IUMachineCraft.ELECTRONIC_ASSEMBLER, [asItem(item.iu.processor.lvl3)])
        removeIUCraft(IUMachineCraft.ELECTRONIC_ASSEMBLER, [asItem(item.iu.processor.lvl4)])
        removeIUCraft(IUMachineCraft.ELECTRONIC_ASSEMBLER, [asItem(item.iu.processor.lvl5)])
        removeIUCraft(IUMachineCraft.ELECTRONIC_ASSEMBLER, [asItem(item.iu.processor.lvl6)])
        removeIUCraft(IUMachineCraft.ELECTRONIC_ASSEMBLER, [asItem(item.iu.processor.lvl7)])
        removeIUCraft(IUMachineCraft.ELECTRONIC_ASSEMBLER, [asItem(item.iu.processor.lvl8)])
        removeIUCraft(IUMachineCraft.ELECTRONIC_ASSEMBLER, [asItem(item.iu.processor.lvl9)])
        removeIUCraft(IUMachineCraft.ELECTRONIC_ASSEMBLER, [asItem(item.iu.processor.lvl10)])
    
        // Сплаволитейка на 2
        removeIUCraft(IUMachineCraft.ALLOY_SMELTER.lvl1, [asItem(item.ingot.steel_untreated)])
        removeIUCraft(IUMachineCraft.ALLOY_SMELTER.lvl1, [asItem(item.ingot.wolframite)])
        removeIUCraft(IUMachineCraft.ALLOY_SMELTER.lvl1, [asItem(item.ingot.titanium_steel_untreated)])
        removeIUCraft(IUMachineCraft.ALLOY_SMELTER.lvl1, [asItem(item.ingot.gallium_arsenic)])
        removeIUCraft(IUMachineCraft.ALLOY_SMELTER.lvl1, [asItem(item.ingot.brass)])
        removeIUCraft(IUMachineCraft.ALLOY_SMELTER.lvl1, [asItem(item.ingot.nichrome)])
        removeIUCraft(IUMachineCraft.ALLOY_SMELTER.lvl1, [asItem(item.ingot.nitenol)])
        removeIUCraft(IUMachineCraft.ALLOY_SMELTER.lvl1, [asItem(item.ingot.duralumin)])
        removeIUCraft(IUMachineCraft.ALLOY_SMELTER.lvl1, [asItem(item.ingot.alumel)])
        removeIUCraft(IUMachineCraft.ALLOY_SMELTER.lvl1, [asItem(item.ingot.cobalt_chrome)])
        removeIUCraft(IUMachineCraft.ALLOY_SMELTER.lvl1, [asItem(item.ingot.niobium_titanium)])
        removeIUCraft(IUMachineCraft.ALLOY_SMELTER.lvl1, [asItem(item.ingot.osmiridium)])
        removeIUCraft(IUMachineCraft.ALLOY_SMELTER.lvl1, [asItem(item.ingot.ferromanganese)])
    
        // Сплаволитейка на 3
        removeIUCraft(IUMachineCraft.ALLOY_SMELTER.lvl2, [asItem(item.ingot.titanium_steel)])
        removeIUCraft(IUMachineCraft.ALLOY_SMELTER.lvl2, [asItem(item.ingot.yttrium_aluminium_garnet)])
        removeIUCraft(IUMachineCraft.ALLOY_SMELTER.lvl2, [asItem(item.ingot.molybdenum_steel)])
        removeIUCraft(IUMachineCraft.ALLOY_SMELTER.lvl2, [asItem(item.ingot.hafnium_carbide)])
        removeIUCraft(IUMachineCraft.ALLOY_SMELTER.lvl2, [asItem(item.ingot.hafnium_boride)])
        removeIUCraft(IUMachineCraft.ALLOY_SMELTER.lvl2, [asItem(item.ingot.tan_tung_haf)])
        removeIUCraft(IUMachineCraft.ALLOY_SMELTER.lvl2, [asItem(item.ingot.zeliber)])
        removeIUCraft(IUMachineCraft.ALLOY_SMELTER.lvl2, [asItem(item.ingot.beryllium_bronze)])
        removeIUCraft(IUMachineCraft.ALLOY_SMELTER.lvl2, [asItem(item.ingot.aluminium_silicon)])
        removeIUCraft(IUMachineCraft.ALLOY_SMELTER.lvl2, [asItem(item.ingot.vitalium)])
        removeIUCraft(IUMachineCraft.ALLOY_SMELTER.lvl2, [asItem(item.ingot.vanadoalumite)])
        removeIUCraft(IUMachineCraft.ALLOY_SMELTER.lvl2, [asItem(item.ingot.aluminum_bronze)])
        removeIUCraft(IUMachineCraft.ALLOY_SMELTER.lvl2, [asItem(item.ingot.alcled)])
        removeIUCraft(IUMachineCraft.ALLOY_SMELTER.lvl2, [asItem(item.ingot.muntsa)])
    
        // Сплаволитейка на 4
        removeIUCraft(IUMachineCraft.ALLOY_SMELTER.lvl3, [asItem(item.ingot.stainless_steel)])
        removeIUCraft(IUMachineCraft.ALLOY_SMELTER.lvl3, [asItem(item.ingot.inconel)])
        removeIUCraft(IUMachineCraft.ALLOY_SMELTER.lvl3, [asItem(item.ingot.stellite)])
        removeIUCraft(IUMachineCraft.ALLOY_SMELTER.lvl3, [asItem(item.ingot.woods)])
        removeIUCraft(IUMachineCraft.ALLOY_SMELTER.lvl3, [asItem(item.ingot.steel)])
        removeIUCraft(IUMachineCraft.ALLOY_SMELTER.lvl3, [asItem(item.ingot.permalloy)])    
    })

    console.info('IU recipe removing passed')
}