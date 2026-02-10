StartupEvents.registry('item', event => {
  event.create('invar_boiler')
  event.create('heat_resistant_clay')
  event.create('blast_brick')
  event.create('coin')
  event.create('shop')
})
StartupEvents.registry('block', event => {
  event.create('quartz_glass')
    .transparent(true)
    .hardness(0.3)
    .resistance(0.3)
    .requiresTool(false)
    .soundType('glass')
    .renderType('cutout')
})
StartupEvents.registry('fluid', event => {
  event.create('liquid_redstone')
})

Platform.mods.kubejs.name = 'SUGOMA Tech'