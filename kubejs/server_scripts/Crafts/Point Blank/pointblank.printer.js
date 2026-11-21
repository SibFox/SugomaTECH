"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerPBPrinterRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('pb', path)
    }

    function addPrinterCraft(result, ingredients)
    {
        let ingredientsMap = []
        for (let i = 0; i < ingredients.length; i++)
        {
            let ingredient_elem = ingredients[i]
            let ingredient = { 
                count: ingredient_elem.count,
            }
            if (ingredient_elem.isTag) {
                ingredient.tag = ingredient_elem.item
            } else {
                ingredient.item = ingredient_elem.item
            }
            if (ingredient_elem.haveComponents) {
                ingredient.components = ingredient_elem.components
            }
            ingredientsMap.push(ingredient)
        }

        evt.remove({ output: result.item })

        evt.custom({
            "type": "pointblank:default",
            "ingredients": ingredientsMap,
            "result": {
                "count": result.count,
                "item": result.item
            }
        }).id(getRecipeID(result.item.slice(result.item.lastIndexOf(":") + 1)))
    }

    // ====== ПУШКИ ======
    // Стандартные
    addPrinterCraft(asItem('pointblank:ak47'), [
        asItem(item.ingot.gunmetal, 14), asItem(item.pb.guninternals, 6), 
        asItem(tag.ingot.steel, 2), asItem(tag.plank, 6)
    ])
    addPrinterCraft(asItem('pointblank:glock17'), [
        asItem(item.ingot.gunmetal, 5), asItem(item.pb.guninternals, 3), asItem(tag.ingot.steel, 2)
    ])
    addPrinterCraft(asItem('pointblank:glock18'), [
        asItem(item.ingot.gunmetal, 6), asItem(item.pb.guninternals, 5), asItem(tag.ingot.steel, 2)
    ])

    // Cyberpunk 2077
    addPrinterCraft(asItem('pointblank:cp2077_darra_da8_umbra'), [
        asItem(item.ingot.gunmetal, 12), asItem(item.pb.guninternals, 4),
        asItem(tag.ingot.titanium_steel, 2)
    ])
    addPrinterCraft(asItem('pointblank:cp2077_darra_da8_umbra_xmod2'), [
        asItem('cp2077_darra_da8_umbra'), asItem(item.pb.guninternals, 4),
        asItem(item.dye.blue, 5) 
    ])
    addPrinterCraft(asItem('pointblank:cp2077_darra_da8_umbra_paco'), [
        asItem('cp2077_darra_da8_umbra'), asItem(item.pb.guninternals, 5),
        asItem(item.dye.lime, 5) 
    ])

    addPrinterCraft(asItem('pointblank:cp2077_kang_tao_g58_dian'), [ 
        asItem(item.ingot.gunmetal, 14), asItem(item.pb.guninternals, 6),
        asItem(item.iu.wire.isolated.iron, 12),
        asItem(item.ae.processor.calculation), asItem(item.ae.processor.logic)
    ])
    addPrinterCraft(asItem('pointblank:cp2077_kang_tao_g58_dian_yinglong'), [
        asItem(item.pb.guninternals, 3), asItem(item.iu.wire.isolated.gold, 8)
    ])
    
    addPrinterCraft(asItem('pointblank:cp2077_arasaka_hjke11_yukimura'), [
        asItem(item.ingot.gunmetal, 12), asItem(item.pb.guninternals, 3),
        asItem(item.iu.wire.isolated.iron, 12), 
        asItem(item.ae.processor.calculation), asItem(item.ae.processor.logic)
    ])
    addPrinterCraft(asItem('pointblank:cp2077_arasaka_hjke11_yukimura_genjiroh'), [
        asItem('cp2077_arasaka_hjke11_yukimura'),
        asItem(item.dye.white, 2), asItem(item.ingot.gold, 3)
    ])
    addPrinterCraft(asItem('pointblank:cp2077_arasaka_hjke11_yukimura_skippy'), [
        asItem('cp2077_arasaka_hjke11_yukimura'), asItem(item.pb.guninternals, 2),
        asItem(item.dye.white, 2), asItem(item.ingot.gold, 3), asItem(item.dye.blue, 2)
    ])

    addPrinterCraft(asItem('pointblank:cp2077_arasaka_senkoh_lx'), [
        asItem(item.ingot.gunmetal, 10), asItem(item.pb.guninternals, 4),
        asItem(item.ingot.gold, 8), asItem(item.iu.wire.bare.iron, 12)
    ])
    addPrinterCraft(asItem('pointblank:cp2077_arasaka_senkoh_lx_proto'), [
        asItem('pointblank:cp2077_arasaka_senkoh_lx'),
        asItem(item.ingot.gunmetal, 6), asItem(item.pb.guninternals, 6),
        asItem(item.redstone, 16), asItem(item.iu.wire.bare.gold, 8)
    ])
    
    addPrinterCraft(asItem('pointblank:cp2077_nokota_d5_sidewinder'), [
        asItem(item.ingot.gunmetal, 12), asItem(item.pb.guninternals, 4),
        asItem(item.iu.wire.isolated.iron, 8),
        asItem(item.ae.processor.calculation), asItem(item.ae.processor.logic)
    ])
    addPrinterCraft(asItem('pointblank:cp2077_nokota_d5_sidewinder_dws'), [
        asItem('pointblank:cp2077_nokota_d5_sidewinder'),
        asItem(item.ingot.gunmetal, 4), asItem(item.pb.guninternals, 2),
        asItem(item.dye.yellow, 10), asItem(item.dye.blue, 5),
        asItem(item.dye.white, 3), asItem(item.dye.red, 3)
    ])
    
    addPrinterCraft(asItem('pointblank:cp2077_nokota_d5_copperhead'), [
        asItem(item.ingot.gunmetal, 12), asItem(item.pb.guninternals, 6),
        asItem(tag.ingot.titanium_steel, 3)
    ])
    addPrinterCraft(asItem('pointblank:cp2077_nokota_d5_copperhead_psalm'), [
        asItem('pointblank:cp2077_nokota_d5_copperhead'),
        asItem(item.ingot.gunmetal, 4), asItem(item.pb.guninternals, 2),
        asItem('minecraft:fire_charge', 5)
    ])
    
    
    
    
    
    
    
    
    

    // ====== АММУНИЦИЯ ======
    addPrinterCraft(asItem('pointblank:ammo9mm', 19), [
        asItem(tag.casing.lead, 2), asItem(item.gunpowder, 1)
    ])
    addPrinterCraft(asItem('pointblank:ammo45acp', 19), [
        asItem(tag.casing.lead, 2), asItem(item.gunpowder, 1)
    ])
    addPrinterCraft(asItem('pointblank:ammo57', 19), [
        asItem(tag.casing.lead, 2), asItem(item.gunpowder, 1)
    ])
    addPrinterCraft(asItem('pointblank:ammo357', 19), [
        asItem(tag.casing.lead, 2), asItem(item.gunpowder, 1)
    ])
    addPrinterCraft(asItem('pointblank:ammo50ae', 19), [
        asItem(tag.casing.lead, 2), asItem(item.gunpowder, 1)
    ])
    addPrinterCraft(asItem('pointblank:ammo46', 19), [
        asItem(tag.casing.lead, 2), asItem(item.gunpowder, 1)
    ])
    addPrinterCraft(asItem('pointblank:ammo545', 17), [
        asItem(tag.casing.lead, 4), asItem(item.gunpowder, 1)
    ])
    addPrinterCraft(asItem('pointblank:ammo556', 17), [
        asItem(tag.casing.lead, 4), asItem(item.gunpowder, 1)
    ])
    addPrinterCraft(asItem('pointblank:ammo68', 17), [
        asItem(tag.casing.lead, 5), asItem(item.gunpowder, 1)
    ])
    addPrinterCraft(asItem('pointblank:ammo762', 17), [
        asItem(tag.casing.lead, 5), asItem(item.gunpowder, 1)
    ])
    addPrinterCraft(asItem('pointblank:ammo762x51', 16), [
        asItem(tag.casing.lead, 6), asItem(item.gunpowder, 1)
    ])
    addPrinterCraft(asItem('pointblank:ammo338lapua', 10), [
        asItem(tag.casing.lead, 6), asItem(item.gunpowder, 2)
    ])
    addPrinterCraft(asItem('pointblank:ammo50bmg', 8), [
        asItem(tag.casing.lead, 6), asItem(item.gunpowder, 3)
    ])
    addPrinterCraft(asItem('pointblank:ammo12gauge', 10), [
        asItem(tag.casing.lead, 3), asItem(item.gunpowder, 1)
    ])

    addPrinterCraft(asItem('pointblank:ammolasercharge', 24), [
        asItem(tag.casing.electrum, 4), asItem(item.iu.battery.lithium), 
        asItem(item.iu.wire.bare.gold, 8), asItem(tag.redstone, 16)
    ])

    // Подствольные гранаты и ракеты
    addPrinterCraft(asItem('pointblank:grenade20mm'), [
        asItem(item.ingot.gunmetal, 2), asItem(item.tnt, 1)
    ])
    addPrinterCraft(asItem('pointblank:grenade40mm'), [
        asItem(item.ingot.gunmetal, 3), asItem(item.tnt, 1)
    ])
    addPrinterCraft(asItem('pointblank:smaw_rocket'), [
        asItem(item.ingot.gunmetal, 8), asItem(item.tnt, 3)
    ])
    addPrinterCraft(asItem('pointblank:at4_rocket'), [
        asItem(item.ingot.gunmetal, 8), asItem(item.tnt, 3)
    ])
    addPrinterCraft(asItem('pointblank:javelin_rocket'), [
        asItem(item.ingot.gunmetal, 10), asItem(item.iu.microchip.lvl2),
            asItem(item.iu.wire.isolated.copper, 12), asItem(item.redstone, 16),
            asItem(item.tnt, 6)
    ])

}