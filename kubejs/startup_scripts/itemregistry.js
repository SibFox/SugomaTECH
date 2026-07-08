"use strict";

const registerItems = (evt) => {
    evt.create('coin')
    evt.create('shop')
    evt.create('synth_nerve_cables')
    evt.create('hemolymph_drop')
    evt.create('organic_polymer')
    evt.create('conducting_organic_polymer')
    evt.create('pack_frame')
    evt.create('hardened_leather')
    evt.create('module_cybernetics')
    evt.create('jar')
    evt.create('embryo')
    evt.create('jar_embryo')
    evt.create('kloverghett_seed')
    evt.create('kloverghett_crystal')
    evt.create('kloverghett_part')
    evt.create('kloverghett_treated')

    for (let item of [
        'copper', 'bronze', 'gold', 'iron', 'lead', 'steel', 
        'tin', 'duralumin', 'electrum', 
        'ferromanganese', 'gadolinium', 'gallium_arsenic',
        'gallium', 'germanium',
        'hafnium', 'invar',
        'iridium', 'magnesium', 'manganese', 'meteoric_iron',
        'mikhail', 'molybdenum', 'molybdenum_steel', 'muntsa',
        'mithril', 'neodymium', 'nichrome', 'nickel',
        'niobium', 'niobium_titanium',
        'nitenol', 'orichalcum', 'osmiridium', 'osmium',
        'palladium', 'platinum', 'polonium',
        'red_brass', 'silver', 'spinel', 'strontium',
        'tantalum', 'thallium', 'titanium', 'vanadoalumite',
        'vanadium', 'tungsten', 'yttrium', 'zeliber',
        'zinc', 'zirconium', 'aluminium', 'cobalt',
        'chromium', 'cadmium', 'arsenic', 'barium',
        'bismuth'
    ])
    {
        evt.create('incomplete_' + item).texture('kubejs:item/plates/' + item + '_plate')
    }

    evt.create('peeper', 'helmet').material('kubejs:bio').displayName('Глазастик').maxDamage(163)

    console.info('Item registry passed')
}