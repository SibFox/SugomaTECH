"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerPBPrinterRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('pb', path)
    }

    function addPrinterCraft(ingredients, result)
    {
        let ingredientsMap = []
        for (let i = 0; i < ingredients.length; i++)
        {
            // console.info('!!!!!!!!!!!!!!!! ingr:\t\t' + ingredients[i])
            let ingredient = { components: {} }
            let ingredientName = ingredients[i].item
            // let nbtStartPos = ingredientName.indexOf('[')
            // if (nbtStartPos > 0)
            // {
            //     console.info('!!!!!!!!!!!!!!!! NBT START POSITION: ' + nbtStartPos)
            //     let nbtString = ingredientName.slice(nbtStartPos).replace('[', '').replace(']', '').split('=')
            //     let componentTag = nbtString[0]
            //     let componentValue = Number(nbtString[1])
            //     console.info('!!!!!!!!!!!!!!!! NBT str: ' + componentTag + ': ' + componentValue)
            //     ingredient.type = "neoforge:components"
            //     ingredient.components[componentTag] = componentValue
            //     ingredientName = ingredientName.slice(0, nbtStartPos)
            // }
            ingredient.count = ingredients[i].count

            // if (ingredient.type != null) {
            //     ingredient.items = ingredientName
            //     console.info('!!!!!!!!!!!!!!!! i:\t\t' + ingredient.items)
            // }
            // else
            // {
                if (ingredients[i].isTag /*ingredientName.startsWith('#')*/)
                {
                    ingredient.tag = ingredientName//.replace('#', '')
                    // console.info('!!!!!!!!!!!!!!!! t:\t\t' + ingredient.tag)                
                }
                else
                {
                    ingredient.item = ingredientName                
                    // console.info('!!!!!!!!!!!!!!!! i:\t\t' + ingredient.item)
                }
                
            // }
            // console.info('!!!!!!!!!!!!!!!! cnt:\t\t' + ingredient.count)
            // console.info('!!!!!!!!!!!!!!!! cmp(chip lvl):\t' + ingredient.components["industrialupgrade:level_microchip"])
            ingredientsMap.push(ingredient)
        }

        evt.remove({ output: result.item })

        // ingredients.forEach(el => {
        //     console.info('!!!!!!!!!!!!!!!!!!!!!\t\t' + el)
        // });

        evt.custom({
            "type": "pointblank:default",
            "ingredients": ingredientsMap,
            "result": {
                "count": result.count,
                "item": result.item
            }
        }).id(getRecipeID(result.item.slice(result.item.lastIndexOf(":") + 1)))
    }

    addPrinterCraft([ asItem(item.ingot.gunmetal, 20), asItem(item.pb.guninternals, 6), asItem(tag.ingot.steel, 4), asItem(tag.plank, 6) ], asItem('pointblank:ak47'))
    addPrinterCraft([ asItem(item.ingot.gunmetal, 10), asItem(item.pb.guninternals, 3), asItem(tag.ingot.steel, 2) ], asItem('pointblank:glock17'))
    addPrinterCraft([ asItem(item.ingot.gunmetal, 10), asItem(item.pb.guninternals, 5), asItem(tag.ingot.steel, 2) ], asItem('pointblank:glock18'))

    addPrinterCraft([ asItem(tag.casings.lead, 2), asItem(item.gunpowder, 1) ], asItem('pointblank:ammo9mm', 19))
    addPrinterCraft([ asItem(tag.casings.lead, 2), asItem(item.gunpowder, 1) ], asItem('pointblank:ammo45acp', 19))
    addPrinterCraft([ asItem(tag.casings.lead, 2), asItem(item.gunpowder, 1) ], asItem('pointblank:ammo57', 19))
    addPrinterCraft([ asItem(tag.casings.lead, 2), asItem(item.gunpowder, 1) ], asItem('pointblank:ammo357', 19))
    addPrinterCraft([ asItem(tag.casings.lead, 2), asItem(item.gunpowder, 1) ], asItem('pointblank:ammo50ae', 19))
    addPrinterCraft([ asItem(tag.casings.lead, 2), asItem(item.gunpowder, 1) ], asItem('pointblank:ammo46', 19))
    addPrinterCraft([ asItem(tag.casings.lead, 4), asItem(item.gunpowder, 1) ], asItem('pointblank:ammo545', 17))
    addPrinterCraft([ asItem(tag.casings.lead, 4), asItem(item.gunpowder, 1) ], asItem('pointblank:ammo556', 17))
    addPrinterCraft([ asItem(tag.casings.lead, 5), asItem(item.gunpowder, 1) ], asItem('pointblank:ammo68', 17))
    addPrinterCraft([ asItem(tag.casings.lead, 5), asItem(item.gunpowder, 1) ], asItem('pointblank:ammo762', 17))
    addPrinterCraft([ asItem(tag.casings.lead, 6), asItem(item.gunpowder, 1) ], asItem('pointblank:ammo762x51', 16))
    addPrinterCraft([ asItem(tag.casings.lead, 6), asItem(item.gunpowder, 2) ], asItem('pointblank:ammo338lapua', 10))
    addPrinterCraft([ asItem(tag.casings.lead, 6), asItem(item.gunpowder, 3) ], asItem('pointblank:ammo50bmg', 8))
    addPrinterCraft([ asItem(tag.casings.lead, 3), asItem(item.gunpowder, 1) ], asItem('pointblank:ammo12gauge', 10))

    addPrinterCraft([ asItem(tag.casings.electrum, 4), asItem(item.iu.battery.lithium), asItem(item.iu.wire.bare.gold, 8), asItem(tag.redstone, 24) ], asItem('pointblank:ammolasercharge', 16))

    addPrinterCraft([ asItem(item.ingot.gunmetal, 2), asItem(item.tnt, 1) ], asItem('pointblank:grenade20mm'))
    addPrinterCraft([ asItem(item.ingot.gunmetal, 3), asItem(item.tnt, 1) ], asItem('pointblank:grenade40mm'))
    addPrinterCraft([ asItem(item.ingot.gunmetal, 12), asItem(item.tnt, 3) ], asItem('pointblank:smaw_rocket'))
    addPrinterCraft([ asItem(item.ingot.gunmetal, 12), asItem(item.tnt, 3) ], asItem('pointblank:at4_rocket'))
    addPrinterCraft([ asItem(item.ingot.gunmetal, 16), asItem(item.pb.processor), asItem(item.iu.wire.isolated.copper, 12), asItem(tag.redstone, 48), asItem(item.tnt, 6) ], asItem('pointblank:javelin_rocket'))

}