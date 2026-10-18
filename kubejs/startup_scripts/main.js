function calcSaturation(nutrition, saturation) {
    return { nutrition: nutrition, 
        saturation: saturation / nutrition / 2
    }
}

StartupEvents.registry('item', evt => {
  registerItems(evt)
  registerFoods(evt)
})

StartupEvents.registry('block', evt => {
  // event.create('quartz_glass')
  //   .transparent(true)
  //   .hardness(0.3)
  //   .resistance(0.3)
  //   .requiresTool(false)
  //   .soundType('glass')
  //   .renderType('cutout')

  // evt.create('jar_embryo_block')
  //   .parentModel('kubejs:models/block/jar_embryo')
  //   .item(i => {
  //     i.food(food => {
  //       let hungerData = calcSaturation(4, 10)
  //       food.nutrition(hungerData.nutrition)
  //           .saturation(hungerData.saturation)
  //           .effect('minecraft:nausea', 1200, 0, 1)
  //           .effect('minecraft:poison', 100, 0, 0.7)
  //           .effect('minecraft:darkness', 300, 0, 1)
  //     }).maxStackSize(16)
  //   })

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

const tools = [
    { name: 'industrialupgrade:sapphire_pickaxe', maxDamage: 0, attackDamage: 4, attackSpeed: 1.5 },
    { name: 'industrialupgrade:sapphire_axe', maxDamage: 0, attackDamage: 8, attackSpeed: 1.1 },
    { name: 'industrialupgrade:sapphire_shovel', maxDamage: 0, attackDamage: 4.5, attackSpeed: 1.3 },
    { name: 'industrialupgrade:topaz_pickaxe', maxDamage: 0, attackDamage: 4, attackSpeed: 1.5 },
    { name: 'industrialupgrade:topaz_axe', maxDamage: 0, attackDamage: 8, attackSpeed: 1.1 },
    { name: 'industrialupgrade:topaz_shovel', maxDamage: 0, attackDamage: 4.5, attackSpeed: 1.3 },
    { name: 'industrialupgrade:ruby_pickaxe', maxDamage: 0, attackDamage: 4, attackSpeed: 1.5 },
    { name: 'industrialupgrade:ruby_axe', maxDamage: 0, attackDamage: 8, attackSpeed: 1.1 },
    { name: 'industrialupgrade:ruby_shovel', maxDamage: 0, attackDamage: 4.5, attackSpeed: 1.3 },
];

ItemEvents.modification(evt => {
    tools.forEach(tool => {
        evt.modify(tool.name, item => {
            if (tool.maxDamage > 0)
              item.maxDamage = tool.maxDamage       // durability
            if (tool.attackDamage > 0)
              item.attackDamage = tool.attackDamage-1
            if (tool.attackSpeed > 0)
              item.attackSpeed = tool.attackSpeed-4
        })
    })
})




// Логает названия и UUID аттрибутов в консоль
// let $EquipmentSlot = Java.loadClass('net.minecraft.world.entity.EquipmentSlot')

// ItemEvents.rightClicked(e => {
//     let player = e.player
//     let item = player.mainHandItem

//     if (!item || item.isEmpty()) return

//     console.log(`  Item: ${item.id}`)

//     for (let slot of $EquipmentSlot.values()) {
//         let modifiers = item.getAttributeModifiers(slot)
//         if (modifiers.isEmpty()) continue

//         console.log(`  Slot: ${slot.name()}`)

//         let entries = modifiers.entries().toArray()

//         for (let entry of entries) {
//             let attribute = entry.key
//             let modList = entry.value

//             let list = modList.toArray ? modList.toArray() : [modList]

//             for (let mod of list) {
//                 console.log(`  Attribute: ${attribute.descriptionId}`)
//                 console.log(`  UUID: ${mod.id}`)
//                 console.log(`  Name: ${mod.name}`)
//                 console.log(`  Amount: ${mod.amount}`)
//                 console.log(`  Operation: ${mod.operation}`)
//             }
//         }
//     }
// })












Platform.mods.kubejs.name = 'SUGOMA Tech'