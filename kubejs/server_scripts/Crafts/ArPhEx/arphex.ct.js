"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerArPhExCTRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('arphex', path)
    }

    evt.shaped(
        Item.of('arphex:chitin_armour_helmet', 1),
        [
            'CAC',
            'F F'
        ],{
            F: item.arphex.burning_glands,
            C: item.arphex.chitin,
            A: 'minecraft:iron_helmet'
        }
    ).id(getRecipeID('chitin_armour_helmet'))
    
    evt.shaped(
        Item.of('arphex:chitin_armour_chestplate', 1),
        [
            'C C',
            'TAT',
            'FFF'
        ],{
            F: item.arphex.burning_glands,
            C: item.arphex.chitin,
            T: tag.rod.titanium,
            A: 'minecraft:iron_chestplate'
        }
    ).id(getRecipeID('chitin_armour_chestplate'))
    
    evt.shaped(
        Item.of('arphex:chitin_armour_leggings', 1),
        [
            'TAT',
            'C C',
            'F F'
        ],{
            F: item.arphex.burning_glands,
            C: item.arphex.chitin,
            T: tag.rod.titanium,
            A: 'minecraft:iron_leggings'
        }
    ).id(getRecipeID('chitin_armour_leggings'))
    
    evt.shaped(
        Item.of('arphex:chitin_armour_boots', 1),
        [
            'CAC',
            'F F'
        ],{
            F: item.arphex.burning_glands,
            C: item.arphex.chitin,
            A: 'minecraft:iron_boots'
        }
    ).id(getRecipeID('chitin_armour_boots'))


    evt.smithing('arphex:vitality_armour_helmet',
                    item.custom.exo_components.lvl1,
                    'minecraft:golden_helmet',
                    item.arphex.mantle_of_vitality
    ).id(getRecipeID('vitality_helmet'))

    evt.smithing('arphex:vitality_armour_chestplate',
                    item.custom.exo_components.lvl1,
                    'minecraft:golden_chestplate',
                    item.arphex.mantle_of_vitality
    ).id(getRecipeID('vitality_chestplate'))

    evt.smithing('arphex:vitality_armour_leggings',
                    item.custom.exo_components.lvl1,
                    'minecraft:golden_leggings',
                    item.arphex.mantle_of_vitality
    ).id(getRecipeID('vitality_leggings'))

    evt.smithing('arphex:vitality_armour_boots',
                    item.custom.exo_components.lvl1,
                    'minecraft:golden_boots',
                    item.arphex.mantle_of_vitality
    ).id(getRecipeID('vitality_boots'))


    evt.smithing('arphex:chitin_armour_tier_2_helmet',
                    item.custom.exo_components.lvl1,
                    'arphex:chitin_armour_helmet',
                    tag.ingot.titanium_steel
    ).id(getRecipeID('chitin_armour_tier_2_helmet'))

    evt.smithing('arphex:chitin_armour_tier_2_chestplate',
                    item.custom.exo_components.lvl1,
                    'arphex:chitin_armour_chestplate',
                    tag.ingot.titanium_steel
    ).id(getRecipeID('chitin_armour_tier_2_chestplate'))

    evt.smithing('arphex:chitin_armour_tier_2_leggings',
                    item.custom.exo_components.lvl1,
                    'arphex:chitin_armour_leggings',
                    tag.ingot.titanium_steel
    ).id(getRecipeID('chitin_armour_tier_2_leggings'))

    evt.smithing('arphex:chitin_armour_tier_2_boots',
                    item.custom.exo_components.lvl1,
                    'arphex:chitin_armour_boots',
                    tag.ingot.titanium_steel
    ).id(getRecipeID('chitin_armour_tier_2_boots'))


    evt.smithing('arphex:chitin_armour_tier_3_helmet',
                    item.custom.exo_components.lvl1,
                    'arphex:chitin_armour_tier_2_helmet',
                    item.ingot.netherite
    ).id(getRecipeID('chitin_armour_tier_3_helmet'))

    evt.smithing('arphex:chitin_armour_tier_3_chestplate',
                    item.custom.exo_components.lvl1,
                    'arphex:chitin_armour_tier_2_chestplate',
                    item.ingot.netherite
    ).id(getRecipeID('chitin_armour_tier_3_chestplate'))

    evt.smithing('arphex:chitin_armour_tier_3_leggings',
                    item.custom.exo_components.lvl1,
                    'arphex:chitin_armour_tier_2_leggings',
                    item.ingot.netherite
    ).id(getRecipeID('chitin_armour_tier_3_leggings'))

    evt.smithing('arphex:chitin_armour_tier_3_boots',
                    item.custom.exo_components.lvl1,
                    'arphex:chitin_armour_tier_2_boots',
                    item.ingot.netherite
    ).id(getRecipeID('chitin_armour_tier_3_boots'))


    evt.smithing('arphex:juggernaut_helmet',
                    item.custom.exo_components.lvl2,
                    'arphex:chitin_armour_tier_3_helmet',
                    item.arphex.heavy_chitin
    ).id(getRecipeID('juggernaut_helmet'))

    evt.smithing('arphex:juggernaut_chestplate',
                    item.custom.exo_components.lvl2,
                    'arphex:chitin_armour_tier_3_chestplate',
                    item.arphex.heavy_chitin
    ).id(getRecipeID('juggernaut_chestplate'))

    evt.smithing('arphex:juggernaut_leggings',
                    item.custom.exo_components.lvl2,
                    'arphex:chitin_armour_tier_3_leggings',
                    item.arphex.heavy_chitin
    ).id(getRecipeID('juggernaut_leggings'))

    evt.smithing('arphex:juggernaut_boots',
                    item.custom.exo_components.lvl2,
                    'arphex:chitin_armour_tier_3_boots',
                    item.arphex.heavy_chitin
    ).id(getRecipeID('juggernaut_boots'))


    evt.smithing('arphex:spectral_helmet',
                    item.custom.exo_components.lvl2,
                    'arphex:juggernaut_helmet',
                    item.arphex.spectral_ingot
    ).id(getRecipeID('spectral_helmet'))

    evt.smithing('arphex:spectral_chestplate',
                    item.custom.exo_components.lvl2,
                    'arphex:juggernaut_chestplate',
                    item.arphex.spectral_ingot
    ).id(getRecipeID('spectral_chestplate'))

    evt.smithing('arphex:spectral_leggings',
                    item.custom.exo_components.lvl2,
                    'arphex:juggernaut_leggings',
                    item.arphex.spectral_ingot
    ).id(getRecipeID('spectral_leggings'))

    evt.smithing('arphex:spectral_boots',
                    item.custom.exo_components.lvl2,
                    'arphex:juggernaut_boots',
                    item.arphex.spectral_ingot
    ).id(getRecipeID('spectral_boots'))


    evt.smithing('arphex:infernal_helmet',
                    item.custom.exo_components.lvl3,
                    'arphex:juggernaut_helmet',
                    item.arphex.infernal_ingot
    ).id(getRecipeID('infernal_helmet'))

    evt.smithing('arphex:infernal_chestplate',
                    item.custom.exo_components.lvl3,
                    'arphex:juggernaut_chestplate',
                    item.arphex.infernal_ingot
    ).id(getRecipeID('infernal_chestplate'))

    evt.smithing('arphex:infernal_leggings',
                    item.custom.exo_components.lvl3,
                    'arphex:juggernaut_leggings',
                    item.arphex.infernal_ingot
    ).id(getRecipeID('infernal_leggings'))

    evt.smithing('arphex:infernal_boots',
                    item.custom.exo_components.lvl3,
                    'arphex:juggernaut_boots',
                    item.arphex.infernal_ingot
    ).id(getRecipeID('infernal_boots'))


    evt.smithing('arphex:umbral_helmet',
                    item.custom.exo_components.lvl3,
                    'arphex:juggernaut_helmet',
                    item.arphex.umbral_ingot
    ).id(getRecipeID('umbral_helmet'))

    evt.smithing('arphex:umbral_chestplate',
                    item.custom.exo_components.lvl3,
                    'arphex:juggernaut_chestplate',
                    item.arphex.umbral_ingot
    ).id(getRecipeID('umbral_chestplate'))

    evt.smithing('arphex:umbral_leggings',
                    item.custom.exo_components.lvl3,
                    'arphex:juggernaut_leggings',
                    item.arphex.umbral_ingot
    ).id(getRecipeID('umbral_leggings'))

    evt.smithing('arphex:umbral_boots',
                    item.custom.exo_components.lvl3,
                    'arphex:juggernaut_boots',
                    item.arphex.umbral_ingot
    ).id(getRecipeID('umbral_boots'))


    evt.smithing('arphex:spacetime_helmet',
                    item.custom.exo_components.lvl4,
                    'arphex:vitality_armour_helmet',
                    item.arphex.spacetime_ingot
    ).id(getRecipeID('spacetime_helmet'))

    evt.smithing('arphex:spacetime_chestplate',
                    item.custom.exo_components.lvl4,
                    'arphex:vitality_armour_chestplate',
                    item.arphex.spacetime_ingot
    ).id(getRecipeID('spacetime_chestplate'))

    evt.smithing('arphex:spacetime_leggings',
                    item.custom.exo_components.lvl4,
                    'arphex:vitality_armour_leggings',
                    item.arphex.spacetime_ingot
    ).id(getRecipeID('spacetime_leggings'))

    evt.smithing('arphex:spacetime_boots',
                    item.custom.exo_components.lvl4,
                    'arphex:vitality_armour_boots',
                    item.arphex.spacetime_ingot
    ).id(getRecipeID('spacetime_boots'))
}