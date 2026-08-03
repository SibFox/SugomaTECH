//priority: 10

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Resources ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 

//#region ITEMS 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ITEMS ITEMS ITEMS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
const item = {
    // ~~~~~~~~~~~~~~~~~~~~ Minecraft ~~~~~~~~~~~~~~~~~~~~ 
    redstone: 'minecraft:redstone',
    redstone_block: 'minecraft:redstone_block',
    lapis: 'minecraft:lapis_lazuli',
    quartz: 'minecraft:quartz',
    diamond: 'minecraft:diamond',
    gunpowder: 'minecraft:gunpowder',
    tnt: 'minecraft:tnt',
    enderpearl: 'minecraft:ender_pearl',
    leather: 'minecraft:leather',
    flint: 'minecraft:flint',
    rotten_flesh: 'minecraft:rotten_flash',
    glass: 'minecraft:glass',
    glass_bottle: 'minecraft:glass_bottle',
    clay_ball: 'minecraft:clay_ball',
    andesite: 'minecraft:andesite',
    diorite: 'minecraft:diorite',
    bone: 'minecraft:bone',
    bone_meal: 'minecraft:bone_meal',
    blaze_rod: 'minecraft:blaze_rod',
    blaze_powder: 'minecraft:blaze_powder',
    breeze_rod: 'minecraft:breeze_rod',
    sugar: 'minecraft:sugar',
    salt: 'createfood:salt',
    glowstone: 'minecraft:glowstone_dust', 
    nether_star: 'minecraft:nether_star',
    chest: 'minecraft:chest',
    bamboo: 'minecraft:bamboo',
    piston: 'minecraft:piston',
    furnace: 'minecraft:furnace',
    obsidian: 'minecraft:obsidian',
    phantom_membrane: 'minecraft:phantom_membrane',
    amethyst_shard: 'minecraft:amethyst_shard',
    string: 'minecraft:string',
    repeater: 'minecraft:repeater',
    redstone_torch: 'minecraft:redstone_torch',
    comparator: 'minecraft:comparator',
    experience_bottle: 'minecraft:experience_bottle',
    echo_shard: 'minecraft:echo_shard',
    fns: 'minecraft:flint_and_steel',
    compass: 'minecraft:compass',
    conduit: 'minecraft:conduit',

    // ~~~~~~~~~~~~~~~~~~~~ Farmer's Delight ~~~~~~~~~~~~~~~~~~~~ 
    milk_bottle: 'farmersdelight:milk_bottle',

    // ~~~~~~~~~~~~~~~~~~~~ Tables ~~~~~~~~~~~~~~~~~~~~

    dye: {
        white: 'minecraft:white_dye',
        light_gray: 'minecraft:light_gray_dye',
        gray: 'minecraft:gray_dye',
        black: 'minecraft:black_dye',
        brown: 'minecraft:brown_dye',
        red: 'minecraft:red_dye',
        orange: 'minecraft:orange_dye',
        yellow: 'minecraft:yellow_dye',
        lime: 'minecraft:lime_dye',
        green: 'minecraft:green_dye',
        cyan: 'minecraft:cyan_dye',
        light_blue: 'minecraft:light_blue_dye',
        blue: 'minecraft:blue_dye',
        purple: 'minecraft:purple_dye',
        magenta: 'minecraft:magenta_dye',
        pink: 'minecraft:pink_dye',
    },

    plank: {
        minecraft: {

        }
    },

    log: {
        minecraft: {
            standart: {
                oak: 'minecraft:oak_log',
                spruce: 'minecraft:spruce_log',
                birch: 'minecraft:birch_log',
                jungle: 'minecraft:jungle_log',
                acacia: 'minecraft:acacia_log',
                dark_oak: 'minecraft:dark_oak_log',
                mangrove: 'minecraft:mangrove_log',
                cherry: 'minecraft:cherry_log',
                bamboo: 'minecraft:bamboo_block',
                crimson: 'minecraft:crimson_stem',
                warped: 'minecraft:warped_stem',
            },
            stripped: {
                oak: 'minecraft:stripped_oak_log',
                spruce: 'minecraft:stripped_spruce_log',
                birch: 'minecraft:stripped_birch_log',
                jungle: 'minecraft:stripped_jungle_log',
                acacia: 'minecraft:stripped_acacia_log',
                dark_oak: 'minecraft:stripped_dark_oak_log',
                mangrove: 'minecraft:stripped_mangrove_log',
                cherry: 'minecraft:stripped_cherry_log',
                bamboo: 'minecraft:stripped_bamboo_block',
                crimson: 'minecraft:stripped_crimson_stem',
                warped: 'minecraft:stripped_warped_stem',
            }
        }
    },

    //#region Metals
    nugget: {
        copper: 'create:copper_nugget',
        iron: 'minecraft:iron_nugget',
        gold: 'minecraft:gold_nugget',
        zinc: 'industrialupgrade:nugget/zinc',
        electrum: 'industrialupgrade:nugget/electrum',
        titanium: 'industrialupgrade:nugget/titanium',
        platinum: 'industrialupgrade:nugget/platinum',
        bronze: 'createbigcannons:bronze_scrap',
        steel: 'createbigcannons:steel_scrap',
        brass: 'industrialupgrade:alloynugget/red_brass',
    },

    ingot: {
        // Обычные
        copper: 'minecraft:copper_ingot',
        iron: 'minecraft:iron_ingot',
        gold: 'minecraft:gold_ingot',
        zinc: 'industrialupgrade:itemingots/zinc_ingot',
        platinum: 'industrialupgrade:itemingots/platinum_ingot',
        netherite_scrap: 'minecraft:netherite_scrap',
        titanium: 'industrialupgrade:itemingots/titanium_ingot',
        composite: 'industrialupgrade:crafting_elements/crafting_274_element',
        // 2 сплавка
        bronze: 'industrialupgrade:itemingots/bronze_ingot',
        brass: 'industrialupgrade:alloyingot/red_brass',
        electrum: 'industrialupgrade:itemingots/electrum_ingot',
        red_alloy: 'morered:red_alloy_ingot',
        gunmetal: 'pointblank:gunmetal_ingot',
        wolframite: 'industrialupgrade:wolframite',
        gallium_arsenic: 'industrialupgrade:alloyingot/gallium_arsenic',
        titanium_steel: 'industrialupgrade:crafting_elements/crafting_504_element',
        carbon_tungsteen: 'industrialupgrade:crafting_elements/crafting_480_element',
        steel: 'industrialupgrade:itemingots/steel_ingot',
        nether_star: 'industrialupgrade:nether_star_ingot',
        steel_untreated: 'industrialupgrade:crafting_elements/crafting_502_element',
        nichrome: 'industrialupgrade:alloyingot/nichrome',
        nitenol: 'industrialupgrade:alloyingot/nitenol',
        duralumin: 'industrialupgrade:alloyingot/duralumin',
        alumel: 'industrialupgrade:alloyingot/alumel',
        niobium_titanium: 'industrialupgrade:alloyingot/niobium_titanium',
        cobalt_chrome: 'industrialupgrade:alloyingot/cobalt_chrome',
        osmiridium: 'industrialupgrade:alloyingot/osmiridium',
        ferromanganese: 'industrialupgrade:alloyingot/ferromanganese',
        // 3 сплавка
        netherite: 'minecraft:netherite_ingot',
        vanadoalumite: 'industrialupgrade:alloyingot/vanadoalumite',
        quantum_alloy: 'advanced_ae:quantum_alloy',
        sky_bronze: 'megacells:sky_bronze_ingot',
        sky_steel: 'megacells:sky_steel_ingot',
        entro: 'extendedae:entro_ingot',
        muntsa: 'industrialupgrade:alloyingot/muntsa',
        alcled: 'industrialupgrade:alloyingot/alcled',
        aluminum_bronze: 'industrialupgrade:alloyingot/aluminum_bronze',
        vitalium: 'industrialupgrade:alloyingot/vitalium',
        aluminium_silicon: 'industrialupgrade:alloyingot/aluminium_silicon',
        beryllium_bronze: 'industrialupgrade:alloyingot/beryllium_bronze',
        zeliber: 'industrialupgrade:alloyingot/zeliber',
        hafnium_boride: 'industrialupgrade:alloyingot/hafnium_boride_alloy',
        tan_tung_haf: 'industrialupgrade:alloyingot/tantalum_tungsten_hafnium',
        hafnium_carbide: 'industrialupgrade:alloyingot/hafnium_carbide',
        molybdenum_steel: 'industrialupgrade:alloyingot/molybdenum_steel',
        yttrium_aluminium_garnet: 'industrialupgrade:alloyingot/yttrium_aluminium_garnet',
        // 4 сплавка
        stainless_steel: 'industrialupgrade:alloyingot/stainless_steel',
        inconel: 'industrialupgrade:alloyingot/inconel',
        stellite: 'industrialupgrade:alloyingot/stellite',
        woods: 'industrialupgrade:alloyingot/woods',
        permalloy: 'industrialupgrade:alloyingot/permalloy',
        // 5 сплавка
        superalloy_haynes: 'industrialupgrade:alloyingot/superalloy_haynes',
        superalloy_rene: 'industrialupgrade:alloyingot/superalloy_rene',


        titanium_steel_untreated: 'industrialupgrade:crafting_elements/crafting_503_element',
    },

    plate: {
        copper: 'industrialupgrade:itemplates/copper_plate',
        iron: 'industrialupgrade:itemplates/iron_plate',
        gold: 'industrialupgrade:itemplates/gold_plate',
        electrum: 'industrialupgrade:itemplates/electrum_plate',
        zinc: 'industrialupgrade:itemplates/zinc_plate',
        titanium: 'industrialupgrade:itemplates/titanium_plate',
        obsidian: 'industrialupgrade:itemplates/obsidian_plate',
        lapis: 'industrialupgrade:itemplates/lapis_plate',
        platinum: 'industrialupgrade:itemplates/platinum_plate',
        titanium_steel: 'industrialupgrade:crafting_elements/crafting_501_element',
        niobium_titanium: 'industrialupgrade:alloyplate/niobium_titanium',
        brass: 'industrialupgrade:alloyplate/red_brass',
        wolframite: 'industrialupgrade:crafting_elements/crafting_655_element',
    },

    doubleplate: {
        brass: 'industrialupgrade:alloydoubleplate/red_brass',
    },

    casing: {
        wolframite: 'industrialupgrade:crafting_elements/crafting_505_element',
    },

    rod: {
        tungsten: 'industrialupgrade:stick/tungsten',
        titanium: 'industrialupgrade:stick/titanium',
    },

    ore_block: {
        copper: 'minecraft:copper_block',
        iron: 'minecraft:iron_block',
        gold: 'minecraft:gold_block',
        diamond: 'minecraft:diamond_block',
        zinc: 'industrialupgrade:baseblockingot/zinc',
        electrum: 'industrialupgrade:baseblockingot/electrum',
        titanium: 'industrialupgrade:baseblockingot/titanium',
        platinum: 'industrialupgrade:baseblockingot/platinum',
        bronze: 'industrialupgrade:blockresource/bronze_block',
        brass: 'industrialupgrade:baseblockalloy/red_brass',
        sky_steel: 'megacells:sky_steel_block',
        sky_bronze: 'megacells:sky_bronze_block',
    },

    //#endregion

    custom: {
        spool: 'kubejs:spool',
        hemolymph_drop: 'kubejs:hemolymph_drop',
        organic_polymer: 'kubejs:organic_polymer',
        conducting_organic_polymer: 'kubejs:conducting_organic_polymer',
        synth_nerve_cables: 'kubejs:synth_nerve_cables',
        pack_frame: 'kubejs:pack_frame',
        hardened_leather: 'kubejs:hardened_leather',
        embryo: 'kubejs:embryo',
        embryo_in_jar: 'kubejs:jar_embryo',
        kloverghett_seed: 'kubejs:kloverghett_seed',
        kloverghett_crystal: 'kubejs:kloverghett_crystal',
        kloverghett_part: 'kubejs:kloverghett_part',
        kloverghett_treated: 'kubejs:kloverghett_treated',

        exo_components: {
            lvl1: 'kubejs:exo_c_1',
            lvl2: 'kubejs:exo_c_2',
            lvl3: 'kubejs:exo_c_3',
            lvl4: 'kubejs:exo_c_4',
        },
    },

    // #region Industrial Upgrade
    // ~~~~~~~~~~~~~~~~~~~~ INDUSTRIAL UPGRADE ~~~~~~~~~~~~~~~~~~~~ 
    // ~~~~~~~~~~~~~~~~~~~~ INDUSTRIAL UPGRADE ~~~~~~~~~~~~~~~~~~~~ 
    // ~~~~~~~~~~~~~~~~~~~~ INDUSTRIAL UPGRADE ~~~~~~~~~~~~~~~~~~~~ 

    iu: {
        carbon: 'industrialupgrade:crafting_elements/crafting_282_element',
        compressed_carbon: 'industrialupgrade:compresscarbon',
        plastic: 'industrialupgrade:plastic_plate',
        carbon_plastic: 'industrialupgrade:crafting_elements/crafting_479_element',
        rubber: 'industrialupgrade:crafting_elements/crafting_271_element',
        synthetic_rubber: 'industrialupgrade:synthetic_rubber',
        compressed_redstone: 'industrialupgrade:compressed_redstone',
        polypropylene: 'industrialupgrade:crafting_elements/crafting_484_element',
        tempered_glass: 'industrialupgrade:blockresource/tempered_glass',
        magnet: 'industrialupgrade:energy/magnet',
        exotic_material: 'industrialupgrade:crafting_elements/crafting_434_element',
        tin_can: 'industrialupgrade:crafting_elements/crafting_296_element',
        plutonium_lazuli_crystall: 'industrialupgrade:crafting_elements/crafting_446_element',
        electum_boiler: 'industrialupgrade:crafting_elements/crafting_601_element',
        cultivated_peat: 'industrialupgrade:cultivated_peat',

        graphene_wire: 'industrialupgrade:graphene_wire',
        graphene_plate: 'industrialupgrade:graphene_plate',
        graphite_plate: 'industrialupgrade:crafting_elements/crafting_320_element',
        base_generator: 'industrialupgrade:basemachine3/generator_iu',
        autopower_module: 'industrialupgrade:crafting_elements/crafting_713_element',
        power_slot: 'industrialupgrade:crafting_elements/crafting_539_element',
        tube_scheme: 'industrialupgrade:crafting_elements/crafting_122_element',
        laser_component: 'industrialupgrade:crafting_elements/crafting_354_element',
        molecular_core: 'industrialupgrade:itemiucrafring/itemmtcore',
        energy_flow_generator: 'industrialupgrade:crafting_elements/crafting_731_element',

        cylinder: 'industrialupgrade:crafting_elements/crafting_46_element',
        heating_cylinder: 'industrialupgrade:crafting_elements/crafting_70_element',
        cooling_cylinder: 'industrialupgrade:crafting_elements/crafting_72_element',

        charged_quartz: 'industrialupgrade:charged_quartz',
        charged_redstone: 'industrialupgrade:charged_redstone',

        ruby: 'industrialupgrade:preciousgem/ruby_gem',
        saphire: 'industrialupgrade:preciousgem/sapphire_gem',
        topaz: 'industrialupgrade:preciousgem/topaz_gem',
        beryllium: 'industrialupgrade:crafting_elements/crafting_449_element',
        bor: 'industrialupgrade:crafting_elements/crafting_448_element',

        grown_silicon_crystal: 'industrialupgrade:crafting_elements/crafting_492_element',
        silicon_crystal: 'industrialupgrade:crafting_elements/crafting_493_element',
        polished_silicon_disk: 'industrialupgrade:crafting_elements/crafting_494_element',
        polished_silicon_crystal: 'industrialupgrade:crafting_elements/crafting_495_element',

        industrial_iridium_plate: 'industrialupgrade:crafting_elements/crafting_285_element',
        compressed_industrial_iridium_plate: 'industrialupgrade:quantumitems2',
        dense_compressed_industrial_iridium_plate: 'industrialupgrade:quantumitems4',
    
        wire: {
            bare: {
                copper: 'industrialupgrade:wiring/copper',
                tin: 'industrialupgrade:wiring/tin',
                iron: 'industrialupgrade:wiring/iron',
                gold: 'industrialupgrade:wiring/gold'
            },
            isolated: {
                copper: 'industrialupgrade:wiring/copper1',
                tin: 'industrialupgrade:wiring/tin1',
                iron: 'industrialupgrade:wiring/iron1',
                gold: 'industrialupgrade:wiring/gold1'
            },
            glass: 'industrialupgrade:wiring/glass_1'
        },
    
        battery: {
            lead: 'industrialupgrade:battery/advanced_re_battery',
            lithium: 'industrialupgrade:battery/re_battery',
            energy_crystal: {
                lvl1: 'industrialupgrade:battery/energy_crystal',
                lvl2: 'industrialupgrade:battery/lapotron_crystal',
                lvl3: 'industrialupgrade:battery/itembatlamacrystal'
            },
        },

        dust: {
            energy: 'industrialupgrade:itemdust/energium_dust',
            calcium_phosphate: 'industrialupgrade:itemdust/calcium_phosphate_dust',
            potassium: 'industrialupgrade:itemdust/potassium_dust',
            potassium_phosphate: 'industrialupgrade:itemdust/potassium_phosphate_dust',
            silicon: 'industrialupgrade:itemdust/silicon_dust',
            quartz: 'industrialupgrade:itemdust/quartz_dust',
            sulfur: 'industrialupgrade:itemdust/sulfur_dust',
            stone: 'industrialupgrade:itemdust/stone_dust',
            coal: 'industrialupgrade:itemdust/coal_dust',
            small: {
                calcium_phosphate: 'industrialupgrade:smalldust/calcium_phosphate',
                potassium: 'industrialupgrade:smalldust/potassium',
                silicon: 'industrialupgrade:smalldust/silico',
                quartz: 'industrialupgrade:smalldust/quartz',
                sulfur: 'industrialupgrade:smalldust/sulfur', 
            },
        },

        power_unit: {
            small: 'industrialupgrade:crafting_elements/crafting_278_element',
            normal: 'industrialupgrade:crafting_elements/crafting_279_element'
        },
        
        tech_box: {
            normal: {
                nano: 'industrialupgrade:nanobox',
                quantum: 'industrialupgrade:quantumitems6',
                spectral: 'industrialupgrade:spectral_box',
                photon: 'industrialupgrade:crafting_elements/crafting_625_element',
            },
            big: {
                nano: 'industrialupgrade:quantumitems7',
                quantum: 'industrialupgrade:quantumitems3',
                spectral: 'industrialupgrade:adv_spectral_box',
                photon: 'industrialupgrade:crafting_elements/crafting_624_element',
            }
        },

        electromotor: {
            lvl1: 'industrialupgrade:crafting_elements/crafting_276_element',
            lvl2: 'industrialupgrade:crafting_elements/crafting_20_element',
            lvl3: 'industrialupgrade:crafting_elements/crafting_96_element',
            lvl4: 'industrialupgrade:crafting_elements/crafting_120_element',
            lvl5: 'industrialupgrade:crafting_elements/crafting_622_element',
            with_bearings: {
                lvl1: 'industrialupgrade:motors_with_improved_bearings_',
                lvl2: 'industrialupgrade:adv_motors_with_improved_bearings_',
                lvl3: 'industrialupgrade:imp_motors_with_improved_bearings_'
            }
        },

        capacitor: {
            lvl1: 'industrialupgrade:circuit/circuit_part1',
            lvl2: 'industrialupgrade:circuit/advanced_part1',
            lvl3: 'industrialupgrade:circuit/nanocircuit_part1',
            lvl4: 'industrialupgrade:circuit/quantumcircuit_part1',
            lvl5: 'industrialupgrade:circuit/spectralcircuit_part1',
            lvl6: 'industrialupgrade:circuit/photon_part1'
        },

        transistor: {
            lvl1: 'industrialupgrade:crafting_elements/crafting_414_element',
            lvl2: 'industrialupgrade:crafting_elements/crafting_426_element',
            lvl3: 'industrialupgrade:crafting_elements/crafting_373_element',
            lvl4: 'industrialupgrade:crafting_elements/crafting_402_element',
        },

        resistor: {
            copper: 'industrialupgrade:crafting_elements/crafting_581_element',
            lazuli: 'industrialupgrade:crafting_elements/crafting_579_element',
            tungsten: 'industrialupgrade:crafting_elements/crafting_563_element',
            molybdenum: 'industrialupgrade:crafting_elements/crafting_585_element',
        },

        controller: {
            lvl1: 'industrialupgrade:crafting_elements/crafting_42_element',
            lvl2: 'industrialupgrade:crafting_elements/crafting_16_element',
            lvl3: 'industrialupgrade:crafting_elements/crafting_92_element',
            lvl4: 'industrialupgrade:crafting_elements/crafting_116_element',
            lvl5: 'industrialupgrade:crafting_elements/crafting_621_element',
        },

        spool: {
            lvl0: 'industrialupgrade:crafting_elements/crafting_294_element',
            lvl1: 'industrialupgrade:crafting_elements/crafting_356_element',
            lvl2: 'industrialupgrade:crafting_elements/crafting_424_element',
            lvl3: 'industrialupgrade:crafting_elements/crafting_371_element',
            lvl4: 'industrialupgrade:crafting_elements/crafting_397_element',
            superconducting: {
                lvl1: 'industrialupgrade:crafting_elements/crafting_387_element',
                lvl2: 'industrialupgrade:crafting_elements/crafting_425_element',
                lvl3: 'industrialupgrade:crafting_elements/crafting_372_element',
                lvl4: 'industrialupgrade:crafting_elements/crafting_398_element',
            },
        },

        corpus_cover: {
            lvl1: 'industrialupgrade:crafting_elements/crafting_137_element',
            lvl2: 'industrialupgrade:crafting_elements/crafting_138_element',
            lvl3: 'industrialupgrade:crafting_elements/crafting_139_element',
            lvl4: 'industrialupgrade:crafting_elements/crafting_140_element',
            lvl5: 'industrialupgrade:crafting_elements/crafting_623_element',
        },

        machine_corpus: {
            steam: 'industrialupgrade:blockresource/steam_machine',
            bio: 'industrialupgrade:blockresource/bio_machine',
            tech: 'industrialupgrade:blockresource/machine',
            tech_adv: 'industrialupgrade:blockresource/advanced_machine',
        },

        chip: {
            lvl1: 'industrialupgrade:circuit/circuit_part2',
            lvl2: 'industrialupgrade:circuit/advanced_part2',
            lvl3: 'industrialupgrade:circuit/nanocircuit_part2',
            lvl4: 'industrialupgrade:circuit/quantumcircuit_part2',
            lvl5: 'industrialupgrade:circuit/spectralcircuit_part2',
            lvl6: 'industrialupgrade:circuit/photon_part2'
        },
    
        microchip: {
            lvl1: 'industrialupgrade:crafting_elements/crafting_272_element[industrialupgrade:level_microchip=1]',
            lvl2: 'industrialupgrade:crafting_elements/crafting_272_element[industrialupgrade:level_microchip=2]',
            lvl3: 'industrialupgrade:crafting_elements/crafting_273_element[industrialupgrade:level_microchip=3]',
            lvl4: 'industrialupgrade:crafting_elements/crafting_273_element[industrialupgrade:level_microchip=4]',
            lvl5: 'industrialupgrade:circuit/nanocircuit[industrialupgrade:level_microchip=5]',
            lvl6: 'industrialupgrade:circuit/nanocircuit[industrialupgrade:level_microchip=6]',
            lvl7: 'industrialupgrade:circuit/quantumcircuit[industrialupgrade:level_microchip=7]',
            lvl8: 'industrialupgrade:circuit/quantumcircuit[industrialupgrade:level_microchip=8]',
            lvl9: 'industrialupgrade:circuit/spectralcircuit[industrialupgrade:level_microchip=9]',
            lvl10: 'industrialupgrade:circuit/spectralcircuit[industrialupgrade:level_microchip=10]',
            lvl11: 'industrialupgrade:circuit/photoncircuit[industrialupgrade:level_microchip=11]',
            lvl12: 'industrialupgrade:circuit/photoncircuit[industrialupgrade:level_microchip=12]',
        },
    
        programmed_board: {
            lvl1: 'industrialupgrade:crafting_elements/crafting_488_element',
            lvl2: 'industrialupgrade:crafting_elements/crafting_491_element',
            lvl3: 'industrialupgrade:crafting_elements/crafting_486_element',
            lvl4: 'industrialupgrade:crafting_elements/crafting_485_element',
            lvl5: 'industrialupgrade:crafting_elements/crafting_490_element',
        },
    
        processor: {
            lvl1: 'industrialupgrade:crafting_elements/crafting_533_element',
            lvl2: 'industrialupgrade:crafting_elements/crafting_541_element',
            lvl3: 'industrialupgrade:crafting_elements/crafting_543_element',
            lvl4: 'industrialupgrade:crafting_elements/crafting_545_element',
            lvl5: 'industrialupgrade:crafting_elements/crafting_549_element',
            lvl6: 'industrialupgrade:crafting_elements/crafting_551_element',
            lvl7: 'industrialupgrade:crafting_elements/crafting_555_element',
            lvl8: 'industrialupgrade:crafting_elements/crafting_556_element',
            lvl9: 'industrialupgrade:crafting_elements/crafting_558_element',
            lvl10: 'industrialupgrade:crafting_elements/crafting_534_element',
        },
    
        ram: {
            interface: 'industrialupgrade:crafting_elements/crafting_574_element',
            kb1: 'industrialupgrade:crafting_elements/crafting_538_element',
            kb8: 'industrialupgrade:crafting_elements/crafting_557_element',
            kb64: 'industrialupgrade:crafting_elements/crafting_552_element',
            kb256: 'industrialupgrade:crafting_elements/crafting_542_element',
            mb1: 'industrialupgrade:crafting_elements/crafting_540_element',
            mb4: 'industrialupgrade:crafting_elements/crafting_548_element',
            mb16: 'industrialupgrade:crafting_elements/crafting_536_element',
            mb64: 'industrialupgrade:crafting_elements/crafting_554_element',
        },
    
        rom: {
            corpus: 'industrialupgrade:crafting_elements/crafting_578_element',
            mb1: 'industrialupgrade:crafting_elements/crafting_539_element',
            mb4: 'industrialupgrade:crafting_elements/crafting_547_element',
            mb16: 'industrialupgrade:crafting_elements/crafting_535_element',
            mb32: 'industrialupgrade:crafting_elements/crafting_544_element',
            mb64: 'industrialupgrade:crafting_elements/crafting_553_element',
            mb512: 'industrialupgrade:crafting_elements/crafting_550_element',
            gb1: 'industrialupgrade:crafting_elements/crafting_537_element',
            gb4: 'industrialupgrade:crafting_elements/crafting_546_element',
        },

        disk: {
            lvl1: 'industrialupgrade:crafting_elements/crafting_572_element',
            lvl2: 'industrialupgrade:crafting_elements/crafting_577_element',
            lvl3: 'industrialupgrade:crafting_elements/crafting_575_element',
            lvl4: 'industrialupgrade:crafting_elements/crafting_587_element',
        },

        cooling_system: {
            lvl1: 'industrialupgrade:crafting_elements/crafting_588_element',
            lvl2: 'industrialupgrade:crafting_elements/crafting_598_element',
            lvl3: 'industrialupgrade:crafting_elements/crafting_592_element',
            lvl4: 'industrialupgrade:crafting_elements/crafting_594_element'
        },

        data_bus: {
            lvl1: 'industrialupgrade:crafting_elements/crafting_580_element',
            lvl2: 'industrialupgrade:crafting_elements/crafting_560_element',
            lvl3: 'industrialupgrade:crafting_elements/crafting_589_element',
            lvl4: 'industrialupgrade:crafting_elements/crafting_596_element',
        },

        diode: {
            lvl1: 'industrialupgrade:crafting_elements/crafting_568_element',
            lvl2: 'industrialupgrade:crafting_elements/crafting_567_element',
            lvl3: 'industrialupgrade:crafting_elements/crafting_565_element',
        },

        rotor: {
            wind: {
                core: {
                    iron: 'industrialupgrade:corewind/core_wind2',
                },
                model: {
                    iron: 'industrialupgrade:windrod/iron_rotor_model',
                    steel: 'industrialupgrade:windrod/steel_rotor_model',                    
                },
                ready: {
                    iron: 'industrialupgrade:rotor/rotor_iron',
                },      
            },
        },

        drilling_bit: {
            iron: 'industrialupgrade:crafting_elements/crafting_508_element',
            nano: 'industrialupgrade:crafting_elements/crafting_517_element',
            quantum: 'industrialupgrade:crafting_elements/crafting_509_element',
            photon: 'industrialupgrade:crafting_elements/crafting_525_element',
        },

        inductor: {
            lvl1: 'industrialupgrade:crafting_elements/crafting_582_element',
            lvl2: 'industrialupgrade:crafting_elements/crafting_599_element',
            lvl3: 'industrialupgrade:crafting_elements/crafting_583_element',
            lvl4: 'industrialupgrade:crafting_elements/crafting_597_element',
        },

        energy_crystal: {
            nano: 'industrialupgrade:crafting_elements/crafting_524_element',
            quantum: 'industrialupgrade:crafting_elements/crafting_516_element',
            spectral: 'industrialupgrade:crafting_elements/crafting_532_element'
        },

        upgrade: {
            casing: 'industrialupgrade:upgrade_casing',
            overclocker: 'industrialupgrade:upgrades/overclocker',
            pulling: 'industrialupgrade:upgrades/pulling',
            ejector: 'industrialupgrade:upgrades/ejector',
            fluid_pulling: 'industrialupgrade:upgrades/fluid_pulling',
            fluid_ejector: 'industrialupgrade:upgrades/fluid_ejector',
        },

        upgrade_module: {
            casing: 'industrialupgrade:module_schedule',
        },

        //#region IU Модули
        module: {
            template: {
                lvl1: 'industrialupgrade:crafting_elements/crafting_21_element',
                lvl2: 'industrialupgrade:crafting_elements/crafting_25_element',
                lvl3: 'industrialupgrade:crafting_elements/crafting_23_element',
                lvl4: 'industrialupgrade:crafting_elements/crafting_24_element',
                lvl5: 'industrialupgrade:crafting_elements/crafting_620_element',
            },
            slot: {
                x1: 'industrialupgrade:crafting_elements/crafting_44_element',
                x2: 'industrialupgrade:crafting_elements/crafting_47_element',
                x3: 'industrialupgrade:crafting_elements/crafting_49_element',
                x4: 'industrialupgrade:crafting_elements/crafting_51_element',
                x8: 'industrialupgrade:crafting_elements/crafting_52_element',
            },
            scaner: {
                lvl1: 'industrialupgrade:crafting_elements/crafting_170_element',
                lvl2: 'industrialupgrade:crafting_elements/crafting_171_element',
                lvl3: 'industrialupgrade:crafting_elements/crafting_172_element',
                lvl4: 'industrialupgrade:crafting_elements/crafting_173_element',
                lvl5: 'industrialupgrade:crafting_elements/crafting_635_element',
            },
            wireless: 'industrialupgrade:crafting_elements/crafting_90_element',
            energy: 'industrialupgrade:crafting_elements/crafting_60_element',
            energy_adv: 'industrialupgrade:crafting_elements/crafting_614_element',
            generator: {
                lvl1: 'industrialupgrade:crafting_elements/crafting_11_element',
                lvl2: 'industrialupgrade:crafting_elements/crafting_234_element',
                lvl3: 'industrialupgrade:crafting_elements/crafting_232_element',
                lvl4: 'industrialupgrade:crafting_elements/crafting_233_element',
                lvl5: 'industrialupgrade:crafting_elements/crafting_629_element'
            },
            redsonte_generator: {
                lvl1: 'industrialupgrade:crafting_elements/crafting_258_element',
                lvl2: 'industrialupgrade:crafting_elements/crafting_261_element',
                lvl3: 'industrialupgrade:crafting_elements/crafting_259_element',
                lvl4: 'industrialupgrade:crafting_elements/crafting_260_element',
                lvl5: 'industrialupgrade:crafting_elements/crafting_628_element'
            },
            gas_generator: 'industrialupgrade:crafting_elements/crafting_263_element',
            genetics: 'industrialupgrade:crafting_elements/crafting_659_element',
            analyzer: 'industrialupgrade:crafting_elements/crafting_226_element',
            liquid: {
                lvl1: 'industrialupgrade:crafting_elements/crafting_27_element',
                lvl2: 'industrialupgrade:crafting_elements/crafting_6_element',
                lvl3: 'industrialupgrade:crafting_elements/crafting_83_element',
                lvl4: 'industrialupgrade:crafting_elements/crafting_107_element',
                lvl5: 'industrialupgrade:crafting_elements/crafting_603_element',
            },
            tank: {
                lvl1: 'industrialupgrade:crafting_elements/crafting_43_element',
                lvl2: 'industrialupgrade:crafting_elements/crafting_45_element',
                lvl3: 'industrialupgrade:crafting_elements/crafting_48_element',
                lvl4: 'industrialupgrade:crafting_elements/crafting_50_element',
                storage: 'industrialupgrade:crafting_elements/crafting_154_element',
            },
            extractor: {
                lvl1: 'industrialupgrade:crafting_elements/crafting_159_element',
                lvl2: 'industrialupgrade:crafting_elements/crafting_160_element',
                lvl3: 'industrialupgrade:crafting_elements/crafting_161_element',
                lvl4: 'industrialupgrade:crafting_elements/crafting_162_element',
                lvl5: 'industrialupgrade:crafting_elements/crafting_615_element',
            },
            extruder: {
                lvl1: 'industrialupgrade:crafting_elements/crafting_163_element',
                lvl2: 'industrialupgrade:crafting_elements/crafting_125_element',
                lvl3: 'industrialupgrade:crafting_elements/crafting_126_element',
                lvl4: 'industrialupgrade:crafting_elements/crafting_127_element',
                lvl5: 'industrialupgrade:crafting_elements/crafting_616_element',
            },
            transformation: 'industrialupgrade:crafting_elements/crafting_75_element',
            transformation_adv: 'industrialupgrade:crafting_elements/crafting_10_element',
            combining: {
                lvl1: 'industrialupgrade:crafting_elements/crafting_124_element',
                lvl2: 'industrialupgrade:crafting_elements/crafting_135_element',
                lvl3: 'industrialupgrade:crafting_elements/crafting_146_element',
                lvl4: 'industrialupgrade:crafting_elements/crafting_157_element',
                lvl5: 'industrialupgrade:crafting_elements/crafting_632_element',
            },
            upgrade: 'industrialupgrade:crafting_elements/crafting_66_element',
            downgrade: 'industrialupgrade:crafting_elements/crafting_67_element',
            circuit: 'industrialupgrade:crafting_elements/crafting_73_element',
            potion: 'industrialupgrade:crafting_elements/crafting_661_element',
            brewing: 'industrialupgrade:crafting_elements/crafting_658_element',
            press: {
                lvl1: 'industrialupgrade:crafting_elements/crafting_63_element',
                lvl2: 'industrialupgrade:crafting_elements/crafting_1_element',
                lvl3: 'industrialupgrade:crafting_elements/crafting_77_element',
                lvl4: 'industrialupgrade:crafting_elements/crafting_102_element',
                lvl5: 'industrialupgrade:crafting_elements/crafting_608_element',
            },
            rolling: {
                lvl1: 'industrialupgrade:crafting_elements/crafting_165_element',
                lvl2: 'industrialupgrade:crafting_elements/crafting_166_element',
                lvl3: 'industrialupgrade:crafting_elements/crafting_167_element',
                lvl4: 'industrialupgrade:crafting_elements/crafting_168_element',
                lvl5: 'industrialupgrade:crafting_elements/crafting_609_element',
            },
            heat: {
                lvl1: 'industrialupgrade:crafting_elements/crafting_39_element',
                lvl2: 'industrialupgrade:crafting_elements/crafting_15_element',
                lvl3: 'industrialupgrade:crafting_elements/crafting_91_element',
                lvl4: 'industrialupgrade:crafting_elements/crafting_115_element',
                lvl5: 'industrialupgrade:crafting_elements/crafting_613_element',
            },
            day: 'industrialupgrade:crafting_elements/crafting_37_element',
            night: 'industrialupgrade:crafting_elements/crafting_30_element',
            preservation: 'industrialupgrade:crafting_elements/crafting_264_element',
            dna: 'industrialupgrade:crafting_elements/crafting_676_element',
            speed: 'industrialupgrade:crafting_elements/crafting_155_element',
            synthesis: {
                plastic: 'industrialupgrade:crafting_elements/crafting_65_element',
                oil: 'industrialupgrade:crafting_elements/crafting_98_element',
                radiation: 'industrialupgrade:crafting_elements/crafting_99_element',
                photon: 'industrialupgrade:crafting_elements/crafting_100_element',
            },
            bio: {
                lvl1: 'industrialupgrade:crafting_elements/crafting_64_element',
                lvl2: 'industrialupgrade:crafting_elements/crafting_19_element',
                lvl3: 'industrialupgrade:crafting_elements/crafting_95_element',
                lvl4: 'industrialupgrade:crafting_elements/crafting_119_element',
                lvl5: 'industrialupgrade:crafting_elements/crafting_611_element',
            },
            crafting: {
                lvl1: 'industrialupgrade:crafting_elements/crafting_128_element',
                lvl2: 'industrialupgrade:crafting_elements/crafting_129_element',
                lvl3: 'industrialupgrade:crafting_elements/crafting_130_element',
                lvl4: 'industrialupgrade:crafting_elements/crafting_131_element',
                lvl5: 'industrialupgrade:crafting_elements/crafting_605_element',
            },
            mineral: {
                lvl1: 'industrialupgrade:crafting_elements/crafting_205_element',
                lvl2: 'industrialupgrade:crafting_elements/crafting_204_element',
                lvl3: 'industrialupgrade:crafting_elements/crafting_202_element',
                lvl4: 'industrialupgrade:crafting_elements/crafting_203_element',
                lvl5: 'industrialupgrade:crafting_elements/crafting_633_element',
            },
            electrofurnace: {
                lvl1: 'industrialupgrade:crafting_elements/crafting_219_element',
                lvl2: 'industrialupgrade:crafting_elements/crafting_225_element',
                lvl3: 'industrialupgrade:crafting_elements/crafting_221_element',
                lvl4: 'industrialupgrade:crafting_elements/crafting_223_element',
                lvl5: 'industrialupgrade:crafting_elements/crafting_617_element',
            },
            repulsor_shield: 'industrialupgrade:crafting_elements/crafting_439_element',
            ore: 'industrialupgrade:crafting_elements/crafting_53_element',
            boosting: 'industrialupgrade:crafting_elements/crafting_155_element',
            macerator: {
                lvl1: 'industrialupgrade:crafting_elements/crafting_69_element',
                lvl2: 'industrialupgrade:crafting_elements/crafting_2_element',
                lvl3: 'industrialupgrade:crafting_elements/crafting_78_element',
                lvl4: 'industrialupgrade:crafting_elements/crafting_103_element',
                lvl5: 'industrialupgrade:crafting_elements/crafting_602_element',
            },
            cutting: {
                lvl1: 'industrialupgrade:crafting_elements/crafting_132_element',
                lvl2: 'industrialupgrade:crafting_elements/crafting_133_element',
                lvl3: 'industrialupgrade:crafting_elements/crafting_134_element',
                lvl4: 'industrialupgrade:crafting_elements/crafting_136_element',
                lvl5: 'industrialupgrade:crafting_elements/crafting_612_element',
            },
            pump: {
                lvl1: 'industrialupgrade:crafting_elements/crafting_241_element',
                lvl2: 'industrialupgrade:crafting_elements/crafting_248_element',
                lvl3: 'industrialupgrade:crafting_elements/crafting_245_element',
            },
            filler: 'industrialupgrade:crafting_elements/crafting_265_element',
            electrolyzer: 'industrialupgrade:crafting_elements/crafting_244_element',
            assembler: 'industrialupgrade:crafting_elements/crafting_243_element',
            cybernetics: 'kubejs:module_cybernetics',
            lava: 'industrialupgrade:crafting_elements/crafting_228_element',
            unpacking: 'industrialupgrade:crafting_elements/crafting_469_element',
            transformer: 'industrialupgrade:crafting_elements/crafting_156_element',
            steam: 'industrialupgrade:crafting_elements/crafting_32_element',
        },

        //#endregion

        core: {
            normal: {
                advanced: 'industrialupgrade:itemcore/advcore',
                hybrid: 'industrialupgrade:itemcore/hybcore',
                ultra: 'industrialupgrade:itemcore/ultcore',
                quantum: 'industrialupgrade:itemcore/quacore',
                spectral: 'industrialupgrade:itemcore/specore',
                proton: 'industrialupgrade:itemcore/procore',
                singular: 'industrialupgrade:itemcore/sincore',
                diffraction: 'industrialupgrade:itemcore/admcore',
                photon: 'industrialupgrade:itemcore/phocore',
                neutron: 'industrialupgrade:itemcore/neucore',
                barion: 'industrialupgrade:itemcore/barcore',
                adrone: 'industrialupgrade:itemcore/adrcore',
                graviton: 'industrialupgrade:itemcore/gracore',
                quark: 'industrialupgrade:itemcore/kvrcore'
            },
            excited: {
                codeadvanced: 'industrialupgrade:excitednucleus/advcore',
                hybrid: 'industrialupgrade:excitednucleus/hybcore',
                ultra: 'industrialupgrade:excitednucleus/ultcore',
                quantum: 'industrialupgrade:excitednucleus/quacore',
                spectral: 'industrialupgrade:excitednucleus/specore',
                proton: 'industrialupgrade:excitednucleus/procore',
                singular: 'industrialupgrade:excitednucleus/sincore',
                diffraction: 'industrialupgrade:excitednucleus/admcore',
                photon: 'industrialupgrade:excitednucleus/phocore',
                neutron: 'industrialupgrade:excitednucleus/neucore',
                barion: 'industrialupgrade:excitednucleus/barcore',
                adrone: 'industrialupgrade:excitednucleus/adrcore',
                graviton: 'industrialupgrade:excitednucleus/gracore',
                quark: 'industrialupgrade:excitednucleus/kvrcore'
            },
        },
    },

    //#endregion
    //#region Applied Energistics

    // ~~~~~~~~~~~~~~~~~~~~ APPLIED ENERGISTICS ~~~~~~~~~~~~~~~~~~~~ 
    // ~~~~~~~~~~~~~~~~~~~~ APPLIED ENERGISTICS ~~~~~~~~~~~~~~~~~~~~ 

    ae: {
        energy_acceptor: 'ae2:energy_acceptor',
        wireless_booster: 'ae2:wireless_booster',

        certus_quartz_crystal: 'ae2:certus_quartz_crystal',
        charged_certus_quartz_crystal: 'ae2:charged_certus_quartz_crystal',
        certus_quartz_dust: 'ae2:certus_quartz_dust',
        fluix_crystal: 'ae2:fluix_crystal',
        fluix_dust: 'ae2:fluix_dust',
        fluix_pearl: 'ae2:fluix_pearl',
        fluix_block: 'ae2:fluix_block',
        entro_crystal: 'extendedae:entro_crystal',
        entro_shard: 'extendedae:entro_shard',
        entro_dust: 'extendedae:entro_dust',
        redstone_crystal: 'appflux:redstone_crystal',
        charged_redstone_crystal: 'appflux:charged_redstone',
        sky_dust: 'ae2:sky_dust',
        ender_dust: 'ae2:ender_dust',
        singularity: 'ae2:singularity',
        quantum_singularity: 'ae2:quantum_entangled_singularity',
        shattered_singularity: 'advanced_ae:shattered_singularity',
        wireless_receiver: 'ae2:wireless_receiver',
        vibrant_glass: 'ae2:quartz_vibrant_glass',
        insulating_resin: 'appflux:harden_insulating_resin',
        
        wireless_access_point: 'ae2:wireless_access_point',

        silicon: 'ae2:silicon',
        printed_silicon: 'ae2:printed_silicon',

        extended_machine_frame: 'extendedae:machine_frame',

        processor: {
            logic: 'ae2:logic_processor',
            calculation: 'ae2:calculation_processor',
            engineering: 'ae2:engineering_processor',
            energy: 'appflux:energy_processor',
            concurrent: 'extendedae:concurrent_processor',
            quantum: 'advanced_ae:quantum_processor', 
            accumulation: 'megacells:accumulation_processor',
            printed: {
                calculation: 'ae2:printed_calculation_processor',
                engineering: 'ae2:printed_engineering_processor',
                energy: 'appflux:printed_energy_processor',
                logic: 'ae2:printed_logic_processor',
                concurrent: 'extendedae:concurrent_processor_print',
                quantum: 'advanced_ae:printed_quantum_processor',
                accumulation: 'megacells:printed_accumulation_processor',
            }
        },

        core: {
            formation: 'ae2:formation_core',
            annihilation: 'ae2:annihilation_core',
        },

        cable: {
            quartz_fiber: 'ae2:quartz_fiber',
            fluix_glass: 'ae2:fluix_glass_cable',
            fluix_covered: 'ae2:fluix_covered_cable',
            fluix_covered_dence: 'ae2:fluix_covered_dense_cable',
            smart: 'ae2:fluix_smart_cable',
        },
    },

    //#endregion
    //#region ArPhEx

    // ~~~~~~~~~~~~~~~~~~~~ ARPHEX ~~~~~~~~~~~~~~~~~~~~ 
    // ~~~~~~~~~~~~~~~~~~~~ ARPHEX ~~~~~~~~~~~~~~~~~~~~ 
    // ~~~~~~~~~~~~~~~~~~~~ ARPHEX ~~~~~~~~~~~~~~~~~~~~ 

    arphex: {
        ectoplasm: 'arphex:ectoplasm',
        burning_glands: 'arphex:burning_glands',
        raw_hemolymph: 'arphex:raw_hemolymph',
        chitin: 'arphex:chitin',
        heavy_chitin: 'arphex:heavy_chitin',
        scorch_charge: 'arphex:scorch_charge',
        mantle_of_vitality: 'arphex:mantle_of_vitality',
        spectral_shard: 'arphex:spectral_shard',
        spectral_ingot: 'arphex:spectral_ingot',
        infernal_shard: 'arphex:infernal_shard',
        infernal_ingot: 'arphex:infernal_ingot',
        umbral_shard: 'arphex:umbral_shard',
        umbral_ingot: 'arphex:umbral_ingot',
        spacetime_shard: 'arphex:spacetime_shard',
        spacetime_ingot: 'arphex:spacetime_ingot',
        abyssal_crystal: {
            full: 'arphex:abyssal_crystal',
            shard: 'arphex:abyssal_shard',
        },
        fire_opal: {
            full: 'arphex:fire_opal',
            shard: 'arphex:fire_opal_shard'
        },
        void_geode: {
            full: 'arphex:void_geode',
            shard: 'arphex:void_geode_shard',
        },
        time_prism: {
            full: 'arphex:time_prism',
            shard: 'arphex:time_prism_shard'
        },
        entropy_matrix: {
            full: 'arphex:entropy_matrix',
            shard: 'arphex:entropy_matrix_shard',
        },
    },

    //#endregion
    //#region Computer Craft

    // ~~~~~~~~~~~~~~~~~~~~ Computer Craft ~~~~~~~~~~~~~~~~~~~~

    cc: {
        casing: 'advancedperipherals:peripheral_casing',
        disk_drive: 'computercraft:disk_drive',
        speaker: 'computercraft:speaker',
        printer: 'computercraft:printer',
        redstone_relay: 'computercraft:redstone_relay',
        computer: {
            normal: 'computercraft:computer_normal',
            advanced: 'computercraft:computer_advanced',
            pocket: {
                normal: 'computercraft:pocket_computer_normal',
                advanced: 'computercraft:pocket_computer_advanced'
            },
        },
        turtle: {
            normal: 'computercraft:turtle_normal',
            advanced: 'computercraft:turtle_advanced'
        },
        cable: 'computercraft:cable',
        modem: {
            wired: 'computercraft:wired_modem',
            wired_full: 'computercraft:wired_modem_full',
            wireless: {
                normal: 'computercraft:wireless_modem_normal',
                advanced: 'computercraft:wireless_modem_advanced',
            },
        },
        monitor: {
            normal: 'computercraft:monitor_normal',
            advanced: 'computercraft:monitor_advanced',
        },

    },

    //#endregion
    //#region Create

    // ~~~~~~~~~~~~~~~~~~~~ Create ~~~~~~~~~~~~~~~~~~~~
    // ~~~~~~~~~~~~~~~~~~~~ Create ~~~~~~~~~~~~~~~~~~~~
    // ~~~~~~~~~~~~~~~~~~~~ Create ~~~~~~~~~~~~~~~~~~~~

    create: {
        shaft: 'create:shaft',
        andesite_alloy: 'create:andesite_alloy',
        obsidian_powder:'create:powdered_obsidian',
        andesite_casing: 'create:andesite_casing',
        polished_rose_quarts: 'create:polished_rose_quartz',
        electron_tube: 'create:electron_tube',
        transmitter: 'create:transmitter',
        precision_mechanism: 'create:precision_mechanism',
        redstone_link: 'create:redstone_link',
        belt: 'create:belt_connector',
        fluid_pipe: 'create:fluid_pipe',
        mechanical_pump: 'create:mechanical_pump',
        whisk: 'create:whisk',
        gyroscopic_mechanism: 'simulated:gyroscopic_mechanism',
        
        casing: {
            andesite: 'create:andesite_casing',
            brass: 'create:brass_casing',
            industrial_iron: 'create:industrial_iron_block',
            platinum: 'createpropulsion:platinum_casing',
            conductive: 'powergrid:conductive_casing',
        },

        cogwheel: {
            small : {
                wooden: 'create:cogwheel',
                copycat: 'copycats:copycat_cogwheel',
                // dark_metal: 'dndecor:dark_metal_cogwheel',
                // industrial: 'dndecor:industrial_cogwheel'
            },
            large: {
                wooden: 'create:large_cogwheel',
                copycat: 'copycats:copycat_large_cogwheel',
                // dark_metal: 'dndecor:large_dark_metal_cogwheel',
                // industrial: 'dndecor:large_industrial_cogwheel'
            },
            colossal_cogwheel: 'petrolsparts:colossal_cogwheel',
            coaxial: {
                small: 'petrolsparts:coaxial_gear',
                large: 'petrolsparts:large_coaxial_gear'
            },
            planetary_geatset: 'petrolsparts:planetary_gearset',
            differential: 'petrolsparts:differential'
        },
    
        // ~~~~~~~~~~~~~~~~~~~~ Addons ~~~~~~~~~~~~~~~~~~~~
        control_chip: 'create_connected:control_chip',
        
        // ~~~~~~~~~~~~~~~~~~~~ Create Compressed ~~~~~~~~~~~~~~~~~~~~
        crushed_ore_block: {
            copper: 'create_compressed:crushed_copper_pile',
            iron: 'create_compressed:crushed_iron_pile',
            gold: 'create_compressed:crushed_gold_pile',
            zinc: 'create_compressed:crushed_zinc_pile',
        },        

        // ~~~~~~~~~~~~~~~~~~~~ Create Power Grid ~~~~~~~~~~~~~~~~~~~~
        electrical_gizmo: 'powergrid:electrical_gizmo',
        integrated_circuit: 'powergrid:integrated_circuit',

        // ~~~~~~~~~~~~~~~~~~~~ Aeronautics ~~~~~~~~~~~~~~~~~~~~
        engine_assembly: 'simulated:engine_assembly',
    },

    //#endregion
    //#region Cybernetics

    // ~~~~~~~~~~~~~~~~~~~~ Cybernetics ~~~~~~~~~~~~~~~~~~~~ 

    cn: {
        titanium_mesh: 'createcybernetics:component_mesh',
        titanium_plating: 'createcybernetics:component_plating',
        ssd: 'createcybernetics:component_ssd',
        gpu: 'createcybernetics:component_graphicscard',
        data_shards: 'createcybernetics:data_shards',
        diodes: 'createcybernetics:component_diodes',
        synthnerves: 'createcybernetics:component_synthnerves',
        actuator: 'createcybernetics:component_actuator',
        storage: 'createcybernetics:component_storage',
        fiber_optic: 'createcybernetics:component_fiberoptics',
        eye_upgrade_base: 'createcybernetics:eyeupgradebase',
        internal_battery: 'createcybernetics:organsupgrades_battery',
        bodypart: {
            brain: 'createcybernetics:bodypart_brain',
            skin: 'createcybernetics:bodypart_skin',
            liver: 'createcybernetics:bodypart_liver',
            muscle: 'createcybernetics:bodypart_muscle',
            heart: 'createcybernetics:bodypart_heart',
            liver: 'createcybernetics:bodypart_liver',
            lungs: 'createcybernetics:bodypart_lungs',
            stomach: 'createcybernetics:bodypart_intestines',
        },
        upgradepart: {
            titanium_hand: 'createcybernetics:titanium_hand',
            pneumatic_wrist: 'createcybernetics:armupgrades_pneumaticwrist',
            pneumatic_legs: 'createcybernetics:legupgrades_jumpboost',
            neural_processor: 'createcybernetics:brainupgrades_neuralprocessor',
            synthskin: 'createcybernetics:skinupgrades_synthskin',
            bone_battery: 'createcybernetics:boneupgrades_bonebattery',
        },
    },

    //#endregion

    // ~~~~~~~~~~~~~~~~~~~~ Point Blank ~~~~~~~~~~~~~~~~~~~~ 

    pb: {
        guninternals: 'pointblank:guninternals',
        processor: 'pointblank:processor',
        gunmetal_mesh: 'pointblank:gunmetal_mesh',
    },

    //#region Immersive Aircraft

    // ~~~~~~~~~~~~~~~~~~~~ Immersive Aircraft/Machinery ~~~~~~~~~~~~~~~~~~~~

    ia: {
        engine: 'immersive_aircraft:engine',
        nether_engine: 'immersive_aircraft:nether_engine',
        eco_engine: 'immersive_aircraft:eco_engine',
        boiler: 'immersive_aircraft:boiler',
        steel_boiler: 'immersive_aircraft:steel_boiler',
        propeller: 'immersive_aircraft:propeller',
        enhanced_propeller: 'immersive_aircraft:enhanced_propeller',
        sail: 'immersive_aircraft:sail',
        hull: 'immersive_aircraft:hull',
        redstone_mechanism: 'immersive_machinery:redstone_mechanism',
        industrial_gears: 'immersive_aircraft:industrial_gears',
        sturdy_pipes: 'immersive_aircraft:sturdy_pipes',
        improved_landing_gear: 'immersive_aircraft:improved_landing_gear',
        iron_drill: 'immersive_machinery:iron_drill',
        rotary_cannon: 'immersive_aircraft:rotary_cannon',
        heavy_crossbow: 'immersive_aircraft:heavy_crossbow',
        bomb_bay: 'immersive_aircraft:bomb_bay',
        gyroscope: 'immersive_aircraft:gyroscope',
        gyroscope_hud: 'immersive_aircraft:gyroscope_hud',
        gyroscope_dials: 'immersive_aircraft:gyroscope_dials',
        hull_reinforcement: 'immersive_aircraft:hull_reinforcement',
    },

    //#endregion
    //#region Genetics Resequenced

    // ~~~~~~~~~~~~~~~~~~~~ Genetics Resequenced ~~~~~~~~~~~~~~~~~~~~

    gr: {
        cell: 'geneticsresequenced:gmo_cell',
        overclocker: 'geneticsresequenced:overclocker',
        cell_analyzer: 'geneticsresequenced:cell_analyzer',
        blood_purifier: 'geneticsresequenced:blood_purifier',
        dna_extractor: 'geneticsresequenced:dna_extractor',
        dna_decryptor: 'geneticsresequenced:dna_decryptor',
        plasmid_infuser: 'geneticsresequenced:plasmid_infuser',
        plasmid_injector: 'geneticsresequenced:plasmid_injector',
        coal_generator: 'geneticsresequenced:coal_generator',
        incubator: 'geneticsresequenced:incubator',
        advanced_incubator: 'geneticsresequenced:advanced_incubator',
    },

    //#endregion

    // ~~~~~~~~~~~~~~~~~~~~ Modular Force Fields System ~~~~~~~~~~~~~~~~~~~~

    mffs: {
        focus_matrix: 'mffs:focus_matrix',
        blank_card: 'mffs:blank_card',
    },
}


//#endregion
//#region TAGS

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ TAGS TAGS TAGS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const tag = {
    plank: '#minecraft:planks',
    log: '#minecraft:logs',
    wooden_slab: '#minecraft:wooden_slabs',
    stone: '#c:stones',
    sand: '#c:sands',
    redstone: '#c:dusts/redstone',
    lapis: '#c:gems/lapis',
    quartz: '#c:gems/quartz',
    diamond: '#c:gems/diamond',
    gunpowder: '#c:gunpowders',
    enderpearl: '#c:ender_pearls',
    leather: '#c:leathers',
    glass: '#c:glass_blocks',
    glass_panel: '#c:glass_panes',
    wool: '#minecraft:wool',
    string: '#c:strings',
    obsidian: '#c:obsidians',
    slime_ball: '#c:slime_balls',
    certus_quartz: '#ae2:all_certus_quartz',
    rope: '#c:ropes',
    
    rods: '#c:rods',
    shaft: '#techoma:shafts',
    cogwheel: '#techoma:cogwheel',
    large_cogwheel: '#techoma:large_cogwheel',

    agritech_basic_planters: '#agritechevolved:basic_planter_items',
    cybernetics_data_shards: '#createcybernetics:data_shards',



    
    // ~~~~~~~~~~ Tables ~~~~~~~~~

    //#region Metals

    nugget: {
        copper: '#c:nuggets/copper',
        iron: '#c:nuggets/iron',
        gold: '#c:nuggets/gold',
        zinc: '#c:nuggets/zinc',
        brass: '#c:nuggets/brass',
        electrum: '#c:nuggets/electrum',
        titanium: '#c:nuggets/titanium',
        bronze: '#c:nuggets/bronze',
        steel: '#c:nuggets/steel',
        platinum: '#c:nuggets/platinum',
        germanium: '#c:nuggets/germanium',
    },

    //#region Ingots

    ingot: {
        // Обычное
        copper: '#c:ingots/copper',
        iron: '#c:ingots/iron',
        gold: '#c:ingots/gold',
        zinc: '#c:ingots/zinc',
        silver: '#c:ingots/silver',
        tin: '#c:ingots/tin',
        lead: '#c:ingots/lead',
        aluminium: '#c:ingots/aluminium',
        tungsten: '#c:ingots/tungsten',
        magnesium: '#c:ingots/magnesium',
        hafnium: '#c:ingots/hafnium',
        brass: '#c:ingots/brass',
        titanium: '#c:ingots/titanium',
        platinum: '#c:ingots/platinum',
        yttrium: '#c:ingots/yttrium',
        germanium: '#c:ingots/germanium',
        nickel: '#c:ingots/nickel',
        arsenic: '#c:ingots/arsenic',
        gallium: '#c:ingots/gallium',
        chromium: '#c:ingots/chromium',
        niobium: '#c:ingots/niobium',
        vanadium: '#c:ingots/vanadium',
        cobalt: '#c:ingots/cobalt',
        thallium: '#c:ingots/thallium',
        molybdenum: '#c:ingots/molybdenum',
        osmium: '#c:ingots/osmium',
        tantalum: '#c:ingots/tantalum',
        neodymium: '#c:ingots/neodymium',
        iridium: '#c:ingots/iridium',
        manganese: '#c:ingots/manganese',
        barium: '#c:ingots/barium',
        bismuth: '#c:ingots/bismuth',
        cadmium: '#c:ingots/cadmium',
        // 2 сплавка
        invar: '#c:ingots/invar',
        steel: '#c:ingots/steel',
        electrum: '#c:ingots/electrum',
        brass: '#c:ingots/brass',
        bronze: '#c:ingots/bronze',
        duralumin: '#c:ingots/duralumin',
        wolframite: '#c:ingots/wolframite',
        titanium_steel: '#c:ingots/titaniumsteel',
        aluminiumlithium: '#c:ingots/aluminiumlithium',
        osmiridium: '#c:ingots/osmiridium',
        niobium_titanium: '#c:ingots/niobiumtitanium',
        galliumarsenic: '#c:ingots/galliumarsenic',
        // 3 сплавка
        molybdenum_steel: '#c:ingots/molybdenumsteel',
        alcled: '#c:ingots/alcled',
        berylliumbronze: '#c:ingots/berylliumbronze',
        carbon_tungsteen: '#c:ingots/carbontungsteen',
        hafniumboride: '#c:ingots/hafniumboride',
        tan_tung_haf: '#c:ingots/tantalumtungstenhafnium',
        aluminiumsilicon: '#c:ingots/aluminiumsilicon',
        hafniumcarbide: '#c:ingots/hafniumcarbide',
        muntsa: '#c:ingots/muntsa',
        vitalium: '#c:ingots/vitalium',
        // 4 сплавка
        woods: '#c:ingots/woods',
        stainless_steel: '#c:ingots/stainlesssteel',
        stellite: '#c:ingots/stellite',
        inconel: '#c:ingots/inconel',
        permalloy: '#c:ingots/permalloy',
        // Космическое
        mithril: '#c:ingots/mithril',
        adamantium: '#c:ingots/adamantium',
        orichalcum: '#c:ingots/orichalcum',
        bloodstone: '#c:ingots/bloodstone',
        draconid: '#c:ingots/draconid',
    },

    //#endregion
    //#region Plates

    plate: {
        // Обычное
        copper: '#c:plates/copper',
        tin: '#c:plates/tin',
        iron: '#c:plates/iron',
        gold: '#c:plates/gold',
        electrum: '#c:plates/electrum',
        titanium: '#c:plates/titanium',
        bronze: '#c:plates/bronze',
        nichrome: '#c:plates/nichrome',
        zinc: '#c:plates/zinc',
        cobalt: '#c:plates/cobalt',
        obsidian: '#c:plates/obsidian',
        hafnium: '#c:plates/hafnium',
        platinum: '#c:plates/platinum',
        yttrium: '#c:plates/yttrium',
        composite: '#c:plates/advancedalloy',
        tantalum: '#c:plates/tantalum',
        germanium: '#c:plates/germanium',
        aluminium: '#c:plates/aluminium',
        nickel: '#c:plates/nickel',
        arsenic: '#c:plates/arsenic',
        gallium: '#c:plates/gallium',
        chromium: '#c:plates/chromium',
        niobium: '#c:plates/niobium',
        vanadium: '#c:plates/vanadium',
        osmium: '#c:plates/osmium',
        iridium: '#c:plates/iridium',
        manganese: '#c:plates/manganese',
        // 2 сплавка
        invar: '#c:plates/invar',
        steel: '#c:plates/steel',
        brass: '#c:plates/brass',
        alumel: '#c:plates/alumel',
        duralumin: '#c:plates/duralumin',
        aluminumbronze: '#c:plates/aluminumbronze',
        duralumin: '#c:plates/duralumin',
        cobaltchrome: '#c:plates/cobaltchrome',
        titanium_steel: '#c:plates/titaniumsteel',
        osmiridium: '#c:plates/osmiridium',
        galliumarsenic: '#c:plates/galliumarsenic',
        // 3 сплавка
        molybdenumsteel: '#c:plates/molybdenumsteel',
        berylliumbronze: '#c:plates/berylliumbronze',
        hafniumboride: '#c:plates/hafniumboride',
        alcled: '#c:plates/alcled',
        niobium_titanium: '#c:plates/niobiumtitanium',
        tan_tung_haf: '#c:plates/tantalumtungstenhafnium',
        aluminiumsilicon: '#c:plates/aluminiumsilicon',
        hafniumcarbide: '#c:plates/hafniumcarbide',
        muntsa: '#c:plates/muntsa',
        vitalium: '#c:plates/vitalium',
        // 4 сплавка
        woods: '#c:plates/woods',
        permalloy: '#c:plates/permalloy',
        stellite: '#c:plates/stellite',
        inconel: '#c:plates/inconel',
        // Космическое
        mithril: '#c:plates/mithril',
        adamantium: '#c:plates/adamantium',
        orichalcum: '#c:plates/orichalcum',
        bloodstone: '#c:plates/bloodstone',
        draconid: '#c:plates/draconid',
    },

    //#endregion
    //#region Doubleplates
    
    doubleplate: {
        // Обычное
        titanium: '#c:doubleplate/titanium',
        obsidian: '#c:doubleplate/obsidian',
        hafnium: '#c:doubleplate/hafnium',
        yttrium: '#c:doubleplate/yttrium',
        tin: '#c:doubleplate/tin',
        germanium: '#c:doubleplate/germanium',
        aluminium: '#c:doubleplate/aluminium',
        tantalum: '#c:doubleplate/tantalum',
        nickel: '#c:doubleplate/nickel',
        arsenic: '#c:doubleplate/arsenic',
        gallium: '#c:doubleplate/gallium',
        gallium: '#c:doubleplate/tantalum',
        chromium: '#c:doubleplate/chromium',
        niobium: '#c:doubleplate/niobium',
        cobalt: '#c:doubleplate/cobalt',
        osmium: '#c:doubleplate/osmium',
        vanadium: '#c:doubleplate/vanadium',
        iridium: '#c:doubleplate/iridium',
        manganese: '#c:doubleplate/manganese',
        // 2 сплавка
        invar: '#c:doubleplate/invar',
        bronze: '#c:doubleplate/bronze',
        brass: '#c:doubleplate/brass',
        electrum: '#c:doubleplate/electrum',
        nichrome: '#c:doubleplate/nichrome',
        duralumin: '#c:doubleplate/duralumin',
        molybdenumsteel: '#c:doubleplate/molybdenumsteel',
        niobium_titanium: '#c:doubleplate/niobiumtitanium',
        alumel: '#c:doubleplate/alumel',
        nitenol: '#c:doubleplate/nitenol',
        galliumarsenic: '#c:doubleplate/galliumarsenic',
        // 3 сплавка
        alcled: '#c:doubleplate/alcled',
        berylliumbronze: '#c:doubleplate/berylliumbronze',
        hafniumboride: '#c:doubleplate/hafniumboride',
        vanadoalumite: '#c:doubleplate/vanadoalumite',
        tan_tung_haf: '#c:doubleplate/tantalumtungstenhafnium',
        aluminiumsilicon: '#c:doubleplate/aluminiumsilicon',
        hafniumcarbide: '#c:doubleplate/hafniumcarbide',
        muntsa: '#c:doubleplate/muntsa',
        vitalium: '#c:doubleplate/vitalium',
        // 4 сплавка
        woods: '#c:doubleplate/woods',
        permalloy: '#c:doubleplate/permalloy',
        stellite: '#c:doubleplate/stellite',
        inconel: '#c:doubleplate/inconel',
        // Космическое
        mithril: '#c:doubleplate/mithril',
        adamantium: '#c:doubleplate/adamantium',
        orichalcum: '#c:doubleplate/orichalcum',
        bloodstone: '#c:doubleplate/bloodstone',
        draconid: '#c:doubleplate/draconid',
    },

    //#endregion
    //#region Casings

    casing: {
        // Обычное
        iron: '#c:casings/iron',
        tungsten: '#c:casings/tungsten',
        lead: '#c:casings/lead',
        titanium: '#c:casings/titanium',
        palladium: '#c:casings/palladium',
        polonium: '#c:casings/polonium',
        niobium: '#c:casings/niobium',
        hafnium: '#c:casings/hafnium',
        yttrium: '#c:casings/yttrium',
        tin: '#c:casings/tin',
        germanium: '#c:casings/germanium',
        aluminium: '#c:casings/aluminium',
        tantalum: '#c:casings/tantalum',
        nickel: '#c:casings/nickel',
        arsenic: '#c:casings/arsenic',
        gallium: '#c:casings/gallium',
        chromium: '#c:casings/chromium',
        cobalt: '#c:casings/cobalt',
        osmium: '#c:casings/osmium',
        iridium: '#c:casings/iridium',
        manganese: '#c:casings/manganese',
        vanadium: '#c:casings/vanadium',
        // 2 сплавка
        invar: '#c:casings/invar',
        electrum: '#c:casings/electrum',
        brass: '#c:casings/brass',
        duralumin: '#c:casings/duralumin',
        alumel: '#c:casings/alumel',
        // 3 сплавка
        galliumarsenic: '#c:casings/galliumarsenic',
        tan_tung_haf: '#c:casings/tantalumtungstenhafnium',
        muntsa: '#c:casings/muntsa',
        vitalium: '#c:casings/vitalium',
        // 4 сплавка
        alcled: '#c:casings/alcled',
        woods: '#c:casings/woods',
        stellite: '#c:casings/stellite',
        inconel: '#c:casings/inconel',
        // Космическое
        mithril: '#c:casings/mithril',
        adamantium: '#c:casings/adamantium',
        orichalcum: '#c:casings/orichalcum',
        bloodstone: '#c:casings/bloodstone',
        draconid: '#c:casings/draconid',
    },
    
    //#endregion
    //#region Gears

    gear: {
        // Обычыное
        titanium: '#c:gears/titanium',
        yttrium: '#c:gears/yttrium',
        aluminium: '#c:gears/aluminium',
        tungsten: '#c:gears/tungsten',
        germanium: '#c:gears/germanium',
        tin: '#c:gears/tin',
        nickel: '#c:gears/nickel',
        arsenic: '#c:gears/arsenic',
        tantalum: '#c:gears/tantalum',
        gallium: '#c:gears/gallium',
        chromium: '#c:gears/chromium',
        niobium: '#c:gears/niobium',
        cobalt: '#c:gears/cobalt',
        osmium: '#c:gears/osmium',
        iridium: '#c:gears/iridium',
        vanadium: '#c:gears/vanadium',
        manganese: '#c:gears/manganese',
        // 2 сплавка
        invar: '#c:gears/invar',
        brass: '#c:gears/brass',
        alumel: '#c:gears/alumel', // Алюминид-титан
        brass: '#c:gears/redbrass',
        duralumin: '#c:gears/duralumin',
        // 3 сплавка
        hafniumboride: '#c:gears/hafniumboride',
        tan_tung_haf: '#c:gears/tantalumtungstenhafnium',
        // 4 сплавка
        alcled: '#c:gears/alcled',
        woods: '#c:gears/woods',
    },
    
    //#endregion
    //#region Rods

    rod: {
        electrum: '#c:rods/electrum',
        aluminium: '#c:rods/aluminium',
        titanium: '#c:rods/titanium',
        germanium: '#c:rods/germanium',
        tungsten: '#c:rods/tungsten',
        nickel: '#c:rods/nickel',
        arsenic: '#c:rods/arsenic',
        tin: '#c:rods/tin',
        gallium: '#c:rods/gallium',
        chromium: '#c:rods/chromium',
        niobium: '#c:rods/niobium',
        cobalt: '#c:rods/cobalt',
        osmium: '#c:rods/osmium',
        vanadium: '#c:rods/vanadium',
        iridium: '#c:rods/iridium',
        manganese: '#c:rods/manganese',
        tantalum: '#c:rods/tantalum',
    },
    
    //#endregion
    //#region Ore Blocks

    ore_block: {
        // Обычное
        copper: '#c:storage_blocks/copper',
        iron: '#c:storage_blocks/iron',
        gold: '#c:storage_blocks/gold',
        diamond: '#c:storage_blocks/diamond',
        redstone: '#c:storage_blocks/redstone',
        germanium: '#c:storage_blocks/germanium',
        aluminium: '#c:storage_blocks/aluminium',
        nickel: '#c:storage_blocks/nickel',
        zinc: '#c:storage_blocks/zinc',
        tin: '#c:storage_blocks/tin',
        titanium: '#c:storage_blocks/titanium',
        platinum: '#c:storage_blocks/platinum',
        arsenic: '#c:storage_blocks/arsenic',
        tantalum: '#c:storage_blocks/tantalum',
        vanadium: '#c:storage_blocks/vanadium',
        gallium: '#c:storage_blocks/gallium',
        chromium: '#c:storage_blocks/chromium',
        niobium: '#c:storage_blocks/niobium',
        cobalt: '#c:storage_blocks/cobalt',
        osmium: '#c:storage_blocks/osmium',
        iridium: '#c:storage_blocks/iridium',
        manganese: '#c:storage_blocks/manganese',
        // 2 сплавка
        invar: '#c:storage_blocks/invar',
        brass: '#c:storage_blocks/brass',
        bronze: '#c:storage_blocks/bronze',
        electrum: '#c:storage_blocks/electrum',
        steel: '#c:storage_blocks/steel',
        // 3 сплавка
        // 4 сплавка
        woods: '#c:storage_blocks/woods',
    },

    //#endregion

    wire: {
        copper: '#c:wires/copper',
        iron: '#c:wires/iron',
        gold: '#c:wires/gold',
    },

    tool: {
        knife: '#c:tools/knife',
        wrench: '#c:tools/wrench',        
    },

    dusts: {
        diamond: '#c:dusts/diamond',
        emerald: '#c:dusts/emerald',
        coal: '#c:dusts/coal',
    },

    ae: {
        glass_cable: '#ae2:glass_cable',
        smart_cable: '#ae2:smart_cable',
        covered_cable: '#ae2:covered_cable',
        covered_dence_cable: '#ae2:covered_dense_cable',
        smart_dence_cable: '#ae2:smart_dense_cable',
        illuminated_panel: '#ae2:illuminated_panel',
    },

    chests: {
        wooden: '#c:chests/wooden',
    },
}

//#endregion
//#region Fluids

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FLUIDS FLUIDS FLUIDS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const fluid = {
    water: '$minecraft:water',
    lava: '$minecraft:lava',
    redstone: '$kubejs:liquid_redstone',
    oxygen: '$industrialupgrade:iufluidoxygen',
    glowstone: '$industrialupgrade:iufluidglowstone',
    quantum_infusion: '$advanced_ae:quantum_infusion_source',
    polypropylene: '$industrialupgrade:iufluidpolyprop',
    glucose: '$industrialupgrade:iufluidglucose',
    fluid_matter: '$industrialupgrade:iufluiduu_matter',
    coolant: '$industrialupgrade:iufluidcoolant',
    hot_coolant: '$industrialupgrade:iufluidhot_coolant',
    nitrooxide: '$industrialupgrade:iufluidnitricoxide',
    cryogen: '$industrialupgrade:iufluidcryogen',
    biomass: '$industrialupgrade:iufluidbiomass',
    plant_mixture: '$industrialupgrade:iufluidplantmixture',
    brilliant_azure: '$industrialupgrade:iufluidazurebrilliant',

    metal: {
        bronze: '$industrialupgrade:iufluidbronze',
        steel: '$industrialupgrade:iufluidsteel',
        cast_iron: '$createbigcannons:molten_cast_iron',
        nethersteel: '$createbigcannons:molten_nethersteel',
    },
}

//#endregion

const deletion_list = [
    'create:iron_sheet', 'create:copper_sheet', 
    'create:golden_sheet','create:zinc_ingot', 
    'createcybernetics:titanium_block', 'createcybernetics:titaniumingot', 
    'createcybernetics:titaniumnugget', 'createcybernetics:titaniumsheet', 
    'mffs:steel_ingot', 'create:zinc_nugget', 'create:sturdy_sheet',
    // 'createbigcannons:bronze_block', 'createbigcannons:bronze_ingot', 
    'createcybernetics:crushedtitanium', 'createpropulsion:platinum_ingot', 
    'createpropulsion:platinum_block', 'createpropulsion:platinum_sheet',
    'createpropulsion:platinum_nugget', 'createpropulsion:raw_platinum_block',
    'createpropulsion:raw_platinum', 'create:raw_zinc_block',
    'create:zinc_ore', 'create:deepslate_zinc_ore',
    'create:crushed_raw_zinc', 'create:crushed_raw_iron',
    'create:crushed_raw_gold', 'create:crushed_raw_copper',
    'createpropulsion:platinum_ore', 'createpropulsion:deepslate_platinum_ore',
    'createcybernetics:deepslate_titaniumore_block', 'createcybernetics:titaniumore_block',
    'create:zinc_block', 'powergrid:zinc_sheet', 'create:raw_zinc', 'create:brass_ingot',
    'create:brass_nugget', 'create:brass_sheet', 'create:brass_block',
    // 'createaddition:copper_rod', 'createaddition:iron_rod', 'createaddition:gold_rod',
    // 'createaddition:electrum_rod', 'createaddition:brass_rod', 'createaddition:electrum_block',
    // 'createaddition:zinc_sheet', 'createaddition:electrum_ingot',
    // 'createaddition:electrum_nugget', 'createaddition:electrum_sheet',

]

const inc_metals = [
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
]