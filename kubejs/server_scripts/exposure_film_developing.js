// "use strict";

// ServerEvents.recipes(evt => {
//     evt.recipes.create.mixing('exposure:developed_color_film',
//         [
//             Fluid.of('industrialupgrade:iufluidnitrogenhydride', 50),
//             Fluid.of('minecraft:water', 150),
//             Item.of('exposure:color_film')
//         ]
//     ).modifyResult('exposure_film_develop')

//     evt.shapeless(Item.of('exposure:developed_color_film', 1),
//         [
//             'exposure:color_film',
//             'industrialupgrade:itemcell/itemcell[industrialupgrade:fluid={amount:1000,id:"industrialupgrade:iufluidnitrogenhydride"}]',
//             'industrialupgrade:itemcell/itemcell[industrialupgrade:fluid={amount:1000,id:"minecraft:water"}]'
//         ]
//     ).id('exposure:developed_color_film')
//     .replaceIngredient('industrialupgrade:itemcell/itemcell[industrialupgrade:fluid={amount:1000,id:"industrialupgrade:iufluidnitrogenhydride"}]', 
//         'industrialupgrade:itemcell/itemcell')
//     .replaceIngredient('industrialupgrade:itemcell/itemcell[industrialupgrade:fluid={amount:1000,id:"minecraft:water"}]', 
//         'industrialupgrade:itemcell/itemcell')
//     .modifyResult('exposure_film_develop')
    
// })

// ServerEvents.modifyRecipeResult('exposure_film_develop', event => {
//     console.log('Entered result modifying')
//     let film = event.grid.find('exposure:color_film')
//     // let data = film.components
//     // console.log("\nData^", data)
//     // console.log("\nItem component 1^", film.get('exposure:film_frames'))
//     // console.log("\nItem component 2^", film.components.get('exposure:film_frames'))
//     // console.log("\nItem component patched^", film.getComponentsPatch())
//     // console.log("\nItem component patched 2^", film.getComponentsPatch().get('exposure:film_frames'))
//     // console.log("\nAll data 1^", film.componentMap)
//     // console.log("\nAll data 2^", data.toString())

//     // let test = Item.of('exposure:developed_color_film', film.getComponentMap())
//     // console.log(test)
//     // console.log(test.toStringJS())
//     // console.log(test.components)
//     // console.log(test.componentString)
    

//     let final_film = Item.of('exposure:developed_color_film')
//     final_film.applyComponentsAndValidate(film.getComponentsPatch())//film.components.get('exposure:film_frames'))// getComponentsPatch())
//     event.success(final_film)
// })

// console.info('Loaded exposure film developing scripts')
