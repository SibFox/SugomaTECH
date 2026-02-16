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

})

StartupEvents.registry('fluid', evt => {
  evt.create('liquid_redstone')
})

ItemEvents.modification(evt => {
  // evt.modify('twm:tomahawk', item => {
  //   item.maxDamage = 64
  // })
  // evt.modify('twm:tomahawk_with_torpor', item => {
  //   item.maxDamage = 64
  // })
  // evt.modify('twm:tomahawk_with_wild_toxin', item => {
  //   item.maxDamage = 64
  // })
})

Platform.mods.kubejs.name = 'SUGOMA Tech'