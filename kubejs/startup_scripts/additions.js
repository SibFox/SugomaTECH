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

Platform.mods.kubejs.name = 'SUGOMA Tech'