//priority: 10

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Resources ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ITEMS ITEMS ITEMS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
const item = {
    // ~~~~~~~~~~~~~~~~~~~~ Minecraft ~~~~~~~~~~~~~~~~~~~~ 
    redstone: 'minecraft:redstone',
    lapis: 'minecraft:lapis_lazuli',
    quartz: 'minecraft:quartz',
    diamond: 'minecraft:diamond',
    gunpowder: 'minecraft:gunpowder',
    tnt: 'minecraft:tnt',
    enderpearl: 'minecraft:ender_pearl',
    leather: 'minecraft:leather',
    rotten_flesh: 'minecraft:rotten_flash',
    glass: 'minecraft:glass',
    glass_bottle: 'minecraft:glass_bottle',
    clay_ball: 'minecraft:clay_ball',
    andesite: 'minecraft:andesite',
    diorite: 'minecraft:diorite',
    bone_meal: 'minecraft:bone_meal',
    blaze_rod: 'minecraft:blaze_rod',
    blaze_powder: 'minecraft:blaze_powder',
    glowstone: 'minecraft:glowstone_dust', 
    nether_star: 'minecraft:nether_star',
    chest: 'minecraft:chest',
    bamboo: 'minecraft:bamboo',
    piston: 'minecraft:piston',
    furnace: 'minecraft:furnace',

    // ~~~~~~~~~~~~~~~~~~~~ Farmer's Delight ~~~~~~~~~~~~~~~~~~~~ 
    milk_bottle: 'farmersdelight:milk_bottle',

    // ~~~~~~~~~~~~~~~~~~~~ Tables ~~~~~~~~~~~~~~~~~~~~

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

    nugget: {
        copper: 'create:copper_nugget',
        iron: 'minecraft:iron_nugget',
        gold: 'minecraft:gold_nugget',
        zinc: 'industrialupgrade:nugget/zinc',
        electrum: 'createaddition:electrum_nugget',
        titanium: 'industrialupgrade:nugget/titanium',
    },

    ingot: {
        copper: 'minecraft:copper_ingot',
        iron: 'minecraft:iron_ingot',
        gold: 'minecraft:gold_ingot',
        zinc: 'create:zinc_ingot',
        electrum: 'createaddition:electrum_ingot',
        red_alloy: 'morered:red_alloy_ingot',
        netherite: 'minecraft:netherite_ingot',
        gunmetal: 'pointblank:gunmetal_ingot',
        titanium: 'industrialupgrade:itemingots/titanium_ingot',
        composite: 'industrialupgrade:crafting_elements/crafting_274_element',
        wolframite: 'industrialupgrade:wolframite',
        titanium_steel: 'industrialupgrade:crafting_elements/crafting_504_element',
        carbon_tungsteen: 'industrialupgrade:crafting_elements/crafting_480_element',
        quantum_alloy: 'advanced_ae:quantum_alloy',
        woods_alloy: 'industrialupgrade:alloyingot/woods',
        sky_steel: 'megacells:sky_steel_ingot',
    },

    plate: {
        copper: 'industrialupgrade:itemplates/copper_plate',
        iron: 'industrialupgrade:itemplates/iron_plate',
        gold: 'industrialupgrade:itemplates/gold_plate',
        electrum: 'industrialupgrade:itemplates/electrum_plate',
        zinc: 'industrialupgrade:itemplates/zinc_plate',
        titanium_steel: 'industrialupgrade:crafting_elements/crafting_501_element',
        niobium_titanium: 'industrialupgrade:alloyplate/niobium_titanium',
        red_brass: 'industrialupgrade:alloyplate/red_brass',
        titanium: 'industrialupgrade:itemplates/titanium_plate'
    },

    ore_block: {
        copper: 'minecraft:copper_block',
        iron: 'minecraft:iron_block',
        gold: 'minecraft:gold_block',
        diamond: 'minecraft:diamond_block',
        zinc: 'create:zinc_block',
        electrum: 'createaddition:electrum_block'
    },

    // ~~~~~~~~~~~~~~~~~~~~ INDUSTRIAL UPGRADE ~~~~~~~~~~~~~~~~~~~~ 
    // ~~~~~~~~~~~~~~~~~~~~ INDUSTRIAL UPGRADE ~~~~~~~~~~~~~~~~~~~~ 
    // ~~~~~~~~~~~~~~~~~~~~ INDUSTRIAL UPGRADE ~~~~~~~~~~~~~~~~~~~~ 

    iu: {
        carbon: 'industrialupgrade:crafting_elements/crafting_282_element',
        plastic: 'industrialupgrade:plastic_plate',
        carbon_plastic: 'industrialupgrade:crafting_elements/crafting_479_element',
        rubber: 'industrialupgrade:crafting_elements/crafting_271_element',
        compressed_redstone: 'industrialupgrade:compressed_redstone',

        graphene_wire: 'industrialupgrade:graphene_wire',
        base_generator: 'industrialupgrade:basemachine3/generator_iu',
        autopower_module: 'industrialupgrade:crafting_elements/crafting_713_element',
        power_slot: 'industrialupgrade:crafting_elements/crafting_539_element',
        tube_scheme: 'industrialupgrade:crafting_elements/crafting_122_element',
        laser_component: 'industrialupgrade:crafting_elements/crafting_354_element',
        molecular_core: 'industrialupgrade:itemiucrafting/itemmtcore',
        upgrade_casing: 'industrialupgrade:upgrade_casing',

        cylinder: 'industrialupgrade:crafting_elements/crafting_46_element',
        heating_cylinder: 'industrialupgrade:crafting_elements/crafting_70_element',
        cooling_cylinder: 'industrialupgrade:crafting_elements/crafting_72_element',

        charged_quartz: 'industrialupgrade:charged_quartz',
        charged_redstone: 'industrialupgrade:charged_redstone',

    
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
            silicon: 'industrialupgrade:itemdust/silicon_dust',
            quartz: 'industrialupgrade:itemdust/quartz_dust',
            sulfur: 'industrialupgrade:itemdust/sulfur_dust',
            small: {
                energy: 'industrialupgrade:smalldust/energium',
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
            normal: 'industrialupgrade:circuit/circuit_part1',
            advanced: 'industrialupgrade:circuit/advanced_part1',
            nano: 'industrialupgrade:circuit/nanocircuit_part1',
            quantum: 'industrialupgrade:circuit/quantumcircuit_part1',
            spectral: 'industrialupgrade:circuit/spectralcircuit_part1',
            photon: 'industrialupgrade:circuit/photon_part1'
        },

        transistor: {
            lvl1: 'industrialupgrade:crafting_elements/crafting_414_element',
            lvl2: 'industrialupgrade:crafting_elements/crafting_426_element',
            lvl3: 'industrialupgrade:crafting_elements/crafting_373_element',
            lvl4: 'industrialupgrade:crafting_elements/crafting_402_element',
        },

        upgrade: {
            overclocker: 'industrialupgrade:upgrades/overclocker',
        },

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
            transformation: 'industrialupgrade:crafting_elements/crafting_75_element',
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
            repulsor_shield: 'industrialupgrade:crafting_elements/crafting_439_element',
        },

        spool: {
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
            advanced_tech: 'industrialupgrade:blockresource/advanced_machine',
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
            iron: 'industrialupgrade:crafting_elements/crafting_572_element',
            cobalt_chrome: 'industrialupgrade:crafting_elements/crafting_577_element',
            yttrim_alluminum: 'industrialupgrade:crafting_elements/crafting_575_element',
            nickel: 'industrialupgrade:crafting_elements/crafting_587_element',
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
                    
                },      
            },
        },

        drilling_bit: {
            iron: 'industrialupgrade:crafting_elements/crafting_508_element',
            nano: 'industrialupgrade:crafting_elements/crafting_517_element',
            quantum: 'industrialupgrade:crafting_elements/crafting_509_element',
            photon: 'industrialupgrade:crafting_elements/crafting_525_element',
        },
    },

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
        entro_crystal: 'extendedae:entro_crystal',
        entro_shard: 'extendedae:entro_shard',
        entro_dust: 'extendedae:entro_dust',
        redstone_crystal: 'appflux:redstone_crystal',
        charged_redstone_crystal: 'appflux:charged_redstone',
        singularity: 'ae2:singularity',
        shattered_singularity: 'advanced_ae:shattered_singularity',

        silicon: 'ae2:silicon',
        printed_silicon: 'ae2:printed_silicon',

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
    },

    // ~~~~~~~~~~~~~~~~~~~~ ARPHEX ~~~~~~~~~~~~~~~~~~~~ 
    // ~~~~~~~~~~~~~~~~~~~~ ARPHEX ~~~~~~~~~~~~~~~~~~~~ 
    // ~~~~~~~~~~~~~~~~~~~~ ARPHEX ~~~~~~~~~~~~~~~~~~~~ 

    arphex: {
        time_prism: {
            full: 'arphex:time_prism',
            shard: 'arphex:time_prism_shard'
        },
        entropy_matrix: {
            full: 'arphex:entropy_matrix',
            shard: 'arphex:entropy_matrix_shard',
        },
    },

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

    // ~~~~~~~~~~~~~~~~~~~~ Create ~~~~~~~~~~~~~~~~~~~~
    // ~~~~~~~~~~~~~~~~~~~~ Create ~~~~~~~~~~~~~~~~~~~~

    create: {
        shaft: 'create:shaft',
        andesite_alloy: 'create:andesite_alloy',
        copper_magnet: 'create_sa:copper_magnet',
        obsidian_powder:'create:powdered_obsidian',
        andesite_casing: 'create:andesite_casing',
        modular_accumulator: 'createaddition:modular_accumulator',
        electron_tube: 'create:electron_tube',
        
        casing: {
            andesite: 'create:andesite_casing',
            casing: 'create:brass_casing',
        },

        cogwheel: {
            small : {
                wooden: 'create:cogwheel',
                copycat: 'copycats:copycat_cogwheel',
                dark_metal: 'dndecor:dark_metal_cogwheel',
                industrial: 'dndecor:industrial_cogwheel'
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

        spool: {
            item: 'createaddition:spool',
            copper: 'createaddition:copper_spool',
            gold: 'createaddition:gold_spool',
            electrum: 'createaddition:electrum_spool'
        },

        connector: {
            small: 'createaddition:connector',
            small_light: 'createaddition:small_light_connector',
            large: 'createaddition:large_connector',
        },
    
        // ~~~~~~~~~~~~~~~~~~~~ Create Compressed ~~~~~~~~~~~~~~~~~~~~
    
        crushed_ore_block: {
            copper: 'create_compressed:crushed_copper_pile',
            iron: 'create_compressed:crushed_iron_pile',
            gold: 'create_compressed:crushed_gold_pile',
            zinc: 'create_compressed:crushed_zinc_pile',
        },        
    },

    // ~~~~~~~~~~~~~~~~~~~~ Cybernetics ~~~~~~~~~~~~~~~~~~~~ 

    cn: {
        titanium_mesh: 'createcybernetics:component_mesh',
        titanium_plating: 'createcybernetics:component_plating',
        ssd: 'createcybernetics:component_ssd',
        gpu: 'createcybernetics:component_graphicscard',
        data_shards: 'createcybernetics:data_shards',
        diodes: 'createcybernetics:component_diodes',
        synthnerves: 'createcybernetics:component_synthnerves',
    },

    // ~~~~~~~~~~~~~~~~~~~~ Point Blank ~~~~~~~~~~~~~~~~~~~~ 

    pb: {
        guninternals: 'pointblank:guninternals',
        processor: 'pointblank:processor',
        gunmetal_mesh: 'pointblank:gunmetal_mesh',
    },

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
    },

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

    // ~~~~~~~~~~~~~~~~~~~~ Modular Force Fields System ~~~~~~~~~~~~~~~~~~~~

    mffs: {
        focus_matrix: 'mffs:focus_matrix',
        blank_card: 'mffs:blank_card',
    },
}




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ TAGS TAGS TAGS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const tag = {
    plank: '#minecraft:planks',
    log: '#minecraft:logs',
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
    
    rods: '#c:rods',
    shaft: '#techoma:shafts',
    cogwheel: '#techoma:cogwheel',
    large_cogwheel: '#techoma:large_cogwheel',

    agritech_basic_planters: '#agritechevolved:basic_planter_items',
    cybernetics_data_shards: '#createcybernetics:data_shards',

    // ~~~~~~~~~~ Tables ~~~~~~~~~

    nugget: {
        copper: '#c:nuggets/copper',
        iron: '#c:nuggets/iron',
        gold: '#c:nuggets/gold',
        zinc: '#c:nuggets/zinc',
        electrum: '#c:nuggets/electrum',
        titanium: '#c:nuggets/titanium',
    },

    ingot: {
        copper: '#c:ingots/copper',
        iron: '#c:ingots/iron',
        gold: '#c:ingots/gold',
        zinc: '#c:ingots/zinc',
        electrum: '#c:ingots/electrum',
        lead: '#c:ingots/lead',
        titanium: '#c:ingots/titanium',
        steel: '#c:ingots/steel',
        wolframite: '#c:ingots/wolframite',
        titanium_steel: '#c:ingots/titaniumsteel',
        carbon_tungsteen: '#c:ingots/carbontungsteen',
    },

    plate: {
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
        composite: '#c:plates/advancedalloy',
        steel: '#c:plates/steel',
        alumel: '#c:plates/alumel',
        aluminumbronze: '#c:plates/aluminumbronze',
        duralumin: '#c:plates/duralumin',
        cobaltchrome: '#c:plates/cobaltchrome',
        molybdenumsteel: '#c:plates/molybdenumsteel',
        berylliumbronze: '#c:plates/berylliumbronze',
        titanium_steel: '#c:plates/titaniumsteel',
        niobium_titanium: '#c:plates/niobiumtitanium',
        red_brass: '#c:plates/redbrass',
    },
    
    doubleplate: {
        invar: '#c:doubleplate/invar',
        bronze: '#c:doubleplate/bronze',
        electrum: '#c:doubleplate/electrum',
        titanium: '#c:doubleplate/titanium',
        nichrome: '#c:doubleplate/nichrome',
        obsidian: '#c:doubleplate/obsidian',
        molybdenumsteel: '#c:doubleplate/molybdenumsteel',
        berylliumbronze: '#c:doubleplate/berylliumbronze',
        vanadoalumite: '#c:doubleplate/vanadoalumite',
        nitenol: '#c:doubleplate/nitenol',
    },

    casings: {
        electrum: '#c:casings/electrum',
        lead: '#c:casings/lead',
        titan: '#c:casings/titanium',
    },
    
    gear: {
        invar: '#c:gears/invar',
        alumel: '#c:gears/alumel', // Алюминид-титан
    },
    
    rod: {
        electrum: '#c:rods/electrum',
        aluminium: '#c:rods/aluminium',
        titan: '#c:rods/titanium',
        tungsten: '#c:rods/tungsten',
    },
    
    ore_block: {
        copper: '#c:storage_blocks/copper',
        iron: '#c:storage_blocks/iron',
        gold: '#c:storage_blocks/gold',
        diamond: '#c:storage_blocks/diamond',
        redstone: '#c:storage_blocks/redstone',
        zinc: '#c:storage_blocks/zinc',
        electrum: '#c:storage_blocks/electrum',
        titanium: '#c:storage_blocks/titanium',
    }
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FLUIDS FLUIDS FLUIDS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const fluid = {
    redstone: '$kubejs:liquid_redstone',
    oxygen: '$industrialupgrade:iufluidoxygen',
    glowstone: '$industrialupgrade:iufluidglowstone',
    quantum_infusion: '$advanced_ae:quantum_infusion_source',
}
