"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerIURecipeRemovings = (evt) => {

    function getRecipeID(path) {
        return recipeID('iu_change', path)
    }

    evt.remove({ output: [
        'industrialupgrade:basemachine3/steam_generator', 'industrialupgrade:basemachine3/electric_wire_insulator',
        'industrialupgrade:basemachine3/crystal_charge', 'industrialupgrade:basemachine3/bio_generator',
        'industrialupgrade:basemachine3/fluid_heater', 'industrialupgrade:basemachine3/electric_squeezer',
        'industrialupgrade:simplemachine/compressor_iu', 'industrialupgrade:simplemachine/macerator_iu',
        'industrialupgrade:moremachine2/cutting', 'industrialupgrade:simplemachine/extractor_iu',
        'industrialupgrade:moremachine2/extruder', 'industrialupgrade:moremachine2/rolling',
        'industrialupgrade:basemachine1/handler_ho', 'industrialupgrade:basemachine2/electrolyzer_iu',
        'industrialupgrade:basemachine3/pump_iu', 'industrialupgrade:basemachine3/laser_polisher',
        'industrialupgrade:basemachine3/peat_generator'
    ] })    






    /**
     * 
     * @param {Internal.RecipesEventJS} evt 
     * @param {string} type 
     * @param {Array<Dictionary>} items 
     */
    function removeIUCraft(evt, type, items)
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

    // Процессоры
    removeIUCraft(evt, IUMachineCraft.ELECTRONIC_ASSEMBLER, [asItem(item.iu.processor.lvl3)])
    removeIUCraft(evt, IUMachineCraft.ELECTRONIC_ASSEMBLER, [asItem(item.iu.processor.lvl4)])
    removeIUCraft(evt, IUMachineCraft.ELECTRONIC_ASSEMBLER, [asItem(item.iu.processor.lvl5)])
    removeIUCraft(evt, IUMachineCraft.ELECTRONIC_ASSEMBLER, [asItem(item.iu.processor.lvl6)])
    removeIUCraft(evt, IUMachineCraft.ELECTRONIC_ASSEMBLER, [asItem(item.iu.processor.lvl7)])
    removeIUCraft(evt, IUMachineCraft.ELECTRONIC_ASSEMBLER, [asItem(item.iu.processor.lvl8)])
    removeIUCraft(evt, IUMachineCraft.ELECTRONIC_ASSEMBLER, [asItem(item.iu.processor.lvl9)])
    removeIUCraft(evt, IUMachineCraft.ELECTRONIC_ASSEMBLER, [asItem(item.iu.processor.lvl10)])

    // Сплаволитейка на 2
    removeIUCraft(evt, IUMachineCraft.ALLOY_SMELTER.lvl1, [asItem(item.ingot.steel_untreated)])
    removeIUCraft(evt, IUMachineCraft.ALLOY_SMELTER.lvl1, [asItem(item.ingot.wolframite)])
    removeIUCraft(evt, IUMachineCraft.ALLOY_SMELTER.lvl1, [asItem(item.ingot.titanium_steel_untreated)])
    removeIUCraft(evt, IUMachineCraft.ALLOY_SMELTER.lvl1, [asItem(item.ingot.gallium_arsenic)])
    removeIUCraft(evt, IUMachineCraft.ALLOY_SMELTER.lvl1, [asItem(item.ingot.brass)])
    removeIUCraft(evt, IUMachineCraft.ALLOY_SMELTER.lvl1, [asItem(item.ingot.nichrome)])
    removeIUCraft(evt, IUMachineCraft.ALLOY_SMELTER.lvl1, [asItem(item.ingot.nitenol)])
    removeIUCraft(evt, IUMachineCraft.ALLOY_SMELTER.lvl1, [asItem(item.ingot.duralumin)])
    removeIUCraft(evt, IUMachineCraft.ALLOY_SMELTER.lvl1, [asItem(item.ingot.alumel)])
    removeIUCraft(evt, IUMachineCraft.ALLOY_SMELTER.lvl1, [asItem(item.ingot.cobalt_chrome)])
    removeIUCraft(evt, IUMachineCraft.ALLOY_SMELTER.lvl1, [asItem(item.ingot.niobium_titanium)])
    removeIUCraft(evt, IUMachineCraft.ALLOY_SMELTER.lvl1, [asItem(item.ingot.osmiridium)])
    removeIUCraft(evt, IUMachineCraft.ALLOY_SMELTER.lvl1, [asItem(item.ingot.ferromanganese)])

    // Сплаволитейка на 3
    removeIUCraft(evt, IUMachineCraft.ALLOY_SMELTER.lvl2, [asItem(item.ingot.titanium_steel)])
    removeIUCraft(evt, IUMachineCraft.ALLOY_SMELTER.lvl2, [asItem(item.ingot.yttrium_aluminium_garnet)])
    removeIUCraft(evt, IUMachineCraft.ALLOY_SMELTER.lvl2, [asItem(item.ingot.molybdenum_steel)])
    removeIUCraft(evt, IUMachineCraft.ALLOY_SMELTER.lvl2, [asItem(item.ingot.hafnium_carbide)])
    removeIUCraft(evt, IUMachineCraft.ALLOY_SMELTER.lvl2, [asItem(item.ingot.hafnium_boride)])
    removeIUCraft(evt, IUMachineCraft.ALLOY_SMELTER.lvl2, [asItem(item.ingot.tan_tung_haf)])
    removeIUCraft(evt, IUMachineCraft.ALLOY_SMELTER.lvl2, [asItem(item.ingot.zeliber)])
    removeIUCraft(evt, IUMachineCraft.ALLOY_SMELTER.lvl2, [asItem(item.ingot.beryllium_bronze)])
    removeIUCraft(evt, IUMachineCraft.ALLOY_SMELTER.lvl2, [asItem(item.ingot.aluminium_silicon)])
    removeIUCraft(evt, IUMachineCraft.ALLOY_SMELTER.lvl2, [asItem(item.ingot.vitalium)])
    removeIUCraft(evt, IUMachineCraft.ALLOY_SMELTER.lvl2, [asItem(item.ingot.vanadoalumite)])
    removeIUCraft(evt, IUMachineCraft.ALLOY_SMELTER.lvl2, [asItem(item.ingot.aluminum_bronze)])
    removeIUCraft(evt, IUMachineCraft.ALLOY_SMELTER.lvl2, [asItem(item.ingot.alcled)])
    removeIUCraft(evt, IUMachineCraft.ALLOY_SMELTER.lvl2, [asItem(item.ingot.muntsa)])

    // Сплаволитейка на 4
    removeIUCraft(evt, IUMachineCraft.ALLOY_SMELTER.lvl3, [asItem(item.ingot.stainless_steel)])
    removeIUCraft(evt, IUMachineCraft.ALLOY_SMELTER.lvl3, [asItem(item.ingot.inconel)])
    removeIUCraft(evt, IUMachineCraft.ALLOY_SMELTER.lvl3, [asItem(item.ingot.stellite)])
    removeIUCraft(evt, IUMachineCraft.ALLOY_SMELTER.lvl3, [asItem(item.ingot.woods)])
    removeIUCraft(evt, IUMachineCraft.ALLOY_SMELTER.lvl3, [asItem(item.ingot.steel)])
    removeIUCraft(evt, IUMachineCraft.ALLOY_SMELTER.lvl3, [asItem(item.ingot.permalloy)])
    
    console.info('IU recipe removing passed')
}