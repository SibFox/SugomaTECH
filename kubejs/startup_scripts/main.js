StartupEvents.registry('item', evt => {
  registerItems(evt)
  // registerFoods(evt)
})

StartupEvents.registry('block', evt => {
  // event.create('quartz_glass')
  //   .transparent(true)
  //   .hardness(0.3)
  //   .resistance(0.3)
  //   .requiresTool(false)
  //   .soundType('glass')
  //   .renderType('cutout')

})

StartupEvents.registry('armor_material', evt => {
  evt.create('bio')
  .defense({
    helmet: 2,
    chestplate: 4,
    leggings: 3,
    boots: 2
  })
  .enchantmentValue(3)
  .equipSound('minecraft:item.armor.equip_iron')
})

StartupEvents.registry('fluid', evt => {
  evt.create('liquid_redstone')
})

// const tools = [
//     { name: 'minecraft:flint_and_steel', maxDamage: 4 }
// ];

// ItemEvents.modification(evt => {
//     tools.forEach(tool => {
//         evt.modify(tool.name, item => {
//             item.maxDamage = tool.maxDamage       // durability
//         })
//     })
// })

Platform.mods.kubejs.name = 'SUGOMA Tech'