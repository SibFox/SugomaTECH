StartupEvents.registry('item', event => {
  // event.create('invar_boiler')
  // event.create('heat_resistant_clay')
  // event.create('blast_brick')
  event.create('coin')
  event.create('shop')
  event.create('synth_nerve_cables')
  event.create('hemolymph_drop')
  event.create('organic_polymer')
  event.create('conducting_organic_polymer')
})

// StartupEvents.registry('block', event => {
//   event.create('quartz_glass')
//     .transparent(true)
//     .hardness(0.3)
//     .resistance(0.3)
//     .requiresTool(false)
//     .soundType('glass')
//     .renderType('cutout')
// })

StartupEvents.registry('fluid', event => {
  event.create('liquid_redstone')
})

Platform.mods.kubejs.name = 'SUGOMA Tech'