"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCyberneticsETRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('createcybernetics', path)
    }
    cnRecipe(evt, asItem('createcybernetics:data_shard_biochip'),
        [
            'ISCSI',
            ' TST ',
            'RTGTR',
            ' TST ',
            '  TT ',
        ],{
            T: item.plate.titanium,
            G: item.ingot.electrum,
            S: item.cn.ssd,
            I: item.ingot.titanium,
            C: tag.cybernetics_data_shards,
            R: 'minecraft:red_dye',
        }
    )

    cnRecipe(evt, asItem('createcybernetics:boneupgrades_sandevistan'),
        [
            ' SPT ',
            'SGPE ',
            ' SPT ',
            'SGPE ',
            ' SPT ',
        ],{
            S: item.cn.synthnerves,
            P: item.plate.titanium,
            T: item.cn.titanium_plating,
            G: item.nugget.electrum,
            E: item.create.electron_tube
        }
    )

    cnRecipe(evt, asItem('createcybernetics:brainupgrades_eyeofdefender'),
        [
            ' NKN ',
            'NSTBN',
            'KTYTK',
            'NETCN',
            ' NKN ',
        ],{
            N: item.nugget.titanium,
            K: item.nugget.electrum,
            E: item.ae.processor.logic,
            C: item.ae.processor.calculation,
            T: item.cn.titanium_plating,
            S: item.iu.module.scaner.lvl1,
            B: item.iu.module.boosting,
            Y: 'minecraft:ender_eye'
        }
    )

    cnRecipe(evt, asItem('createcybernetics:basecyberware_rightleg'),
        [
            '   TT',
            '  TST',
            ' TAT ',
            ' TST ',
            'TII  ',
        ],{
            T: item.cn.titanium_plating,
            S: item.cn.synthnerves,
            I: item.ingot.titanium,
            A: item.cn.actuator
        }
    )

    cnRecipe(evt, asItem('createcybernetics:basecyberware_leftleg'),
        [
            'TT   ',
            'TST  ',
            ' TAT ',
            ' TST ',
            '  IIT'
        ],{
            T: item.cn.titanium_plating,
            S: item.cn.synthnerves,
            I: item.ingot.titanium,
            A: item.cn.actuator
        }
    )

    cnRecipe(evt, asItem('createcybernetics:basecyberware_rightarm'),
        [
            '  T  ',
            ' TST ',
            ' TAT ',
            '  TST',
            '   HT',
        ],{
            T: item.cn.titanium_plating,
            S: item.cn.synthnerves,
            A: item.cn.actuator,
            H: 'createcybernetics:titanium_hand'
        }
    )

    cnRecipe(evt, asItem('createcybernetics:basecyberware_leftarm'),
        [
            '  T  ',
            ' TST ',
            ' TAT ',
            'TST  ',
            'HT   ',
        ],{
            T: item.cn.titanium_plating,
            S: item.cn.synthnerves,
            A: item.cn.actuator,
            H: 'createcybernetics:titanium_hand'
        }
    )

    cnRecipe(evt, asItem('createcybernetics:brainupgrades_matrix'),
        [
            'GTTT ',
            'TRWRT',
            'TWMWT',
            'TRWRT',
            ' TTT ',
        ],{
            G: item.nugget.electrum,
            T: item.cn.titanium_plating,
            W: item.iu.spool.lvl1,
            M: 'mffs:warn_module',
            R: item.cn.titanium_mesh
        }
    )
    
    cnRecipe(evt, asItem('createcybernetics:legupgrades_metaldetector'),
        [
            ' TNT ',
            'TESET',
            'TWOWT',
            'TWRWT',
            'TWRWT',
        ],{
            S: item.iu.module.scaner.lvl1,
            O: item.iu.module.ore,
            T: item.cn.titanium_plating,
            E: item.create.electron_tube,
            W: item.iu.spool.lvl1,
            N: 'minecraft:note_block',
            R: item.ingot.red_alloy,
        }
    )

    cnRecipe(evt, asItem('createcybernetics:occipital_lobe'),
        [
            ' SSS ',
            'SRGGS',
            'SCPGS',
            'SRGGS',
            ' SSS ',
        ],{
            S: item.cn.synthnerves,
            R: item.ingot.red_alloy,
            G: item.cn.gpu,
            C: item.cn.ssd,
            P: item.iu.microchip.lvl6
        }
    )

    cnRecipe(evt, asItem('createcybernetics:parietal_lobe'),
        [
            ' NNN ',
            'NZZZN',
            'NCMGN',
            'NRNRN',
            ' NNN '
        ],{
            N: item.cn.synthnerves,
            C: item.cn.ssd,
            G: item.cn.gpu,
            R: item.ingot.red_alloy,
            M: item.iu.microchip.lvl6,
            Z: 'minecraft:comparator'
        }
    )

    cnRecipe(evt, asItem('createcybernetics:frontal_lobe'),
        [
            ' NNN ',
            'NRSRN',
            'NCMGN',
            'NRZRN',
            ' NNN '
        ],{
            N: item.cn.synthnerves,
            R: item.ingot.red_alloy,
            S: item.cn.storage,
            C: item.cn.ssd,
            G: item.cn.gpu,
            M: item.iu.microchip.lvl6,
            Z: 'minecraft:comparator'
        }
    )

    cnRecipe(evt, asItem('createcybernetics:temporal_lobe'),
        [
            ' NNN ',
            'NRSRN',
            'NCMGN',
            'NRSRN',
            ' NNN '
        ],{
            N: item.cn.synthnerves,
            R: item.ingot.red_alloy,
            S: item.cn.storage,
            C: item.cn.ssd,
            G: item.cn.gpu,
            M: item.iu.microchip.lvl6
        }
    )

    cnRecipe(evt, asItem('createcybernetics:cerebellum'),
        [
            ' SSS ',
            'SRCRS',
            'SZMGS',
            'SRKRS',
            ' SSS ',
        ],{
            S: item.cn.synthnerves,
            R: item.ingot.red_alloy,
            C: 'minecraft:comparator',
            K: 'minecraft:compass',
            Z: item.cn.ssd,
            G: item.cn.gpu,
            M: item.iu.microchip.lvl6
        }
    )

    cnRecipe(evt, asItem('createcybernetics:brainupgrades_cyberbrain'),
        [
            ' TTT ',
            'TKZWT',
            'TXMCT',
            'TLVPT',
            '  NBN'
        ],{
            T: item.cn.titanium_plating,
            N: item.cn.synthnerves,
            K: item.iu.controller.lvl3,
            M: item.iu.microchip.lvl8,
            P: item.ae.processor.concurrent,
            L: item.ae.processor.logic,
            W: item.ae.processor.calculation,
            Z: 'createcybernetics:parietal_lobe', X: 'createcybernetics:frontal_lobe',
            C: 'createcybernetics:occipital_lobe', V: 'createcybernetics:temporal_lobe',
            B: 'createcybernetics:cerebellum',
        }
    )

    cnRecipe(evt, asItem('createcybernetics:brainupgrades_neuralcontextualizer'),
        [
            '  P  ',
            ' TTTG',
            ' TNT ',
            ' SBS ',
            '     ',
        ],{
            P: item.dye.pink,
            T: item.cn.titanium_plating,
            S: item.cn.synthnerves,
            G: item.nugget.electrum,
            B: item.cn.bodypart.brain,
            N: 'minecraft:observer'
        }
    )

    cnRecipe(evt, asItem('createcybernetics:brainupgrades_idem'),
        [
            ' E   ',
            ' ROO ',
            ' OFO ',
            '  O  ',
            ' WSW ',
        ],{
            E: item.create.electron_tube,
            R: 'minecraft:lightning_rod',
            O: item.obsidian,
            F: 'minecraft:flint_and_steel',
            W: item.iu.spool.lvl1,
            S: item.cn.synthnerves
        }
    )

    cnRecipe(evt, asItem('createcybernetics:skinupgrades_netheriteplating'),
        [
            '     ',
            'NNNNN',
            'STSTS',
            'BIBIB',
            'J J J',
        ],{
            N: 'minecraft:netherite_block',
            S: 'createcybernetics:skinupgrades_synthskin',
            T: item.cn.titanium_plating,
            B: 'minecraft:slime_block',
            I: 'minecraft:blue_ice', // Заменить на криогент
            J: item.cn.synthnerves,
        }
    )

    cnRecipe(evt, asItem('createcybernetics:skinupgrades_chromatophores'),
        [
            'QWERT',
            'YSSSU',
            'IOAOC',
            'ZJJJX',
            'CVBNM',
        ],{
            Q: item.dye.white, W: item.dye.light_gray, E: item.dye.gray, R: item.dye.black,
            T: item.dye.brown, Y: item.dye.red, U: item.dye.orange, I: item.dye.yellow,
            C: item.dye.lime, Z: item.dye.green, X: item.dye.cyan, C: item.dye.light_blue,
            V: item.dye.blue, B: item.dye.purple, N: item.dye.magenta, M: item.dye.pink,
            S: 'createcybernetics:skinupgrades_synthskin',
            O: item.cn.fiber_optic,
            A: item.cn.actuator,
            J: item.cn.synthnerves
        }
    )

    cnRecipe(evt, asItem('createcybernetics:skinupgrades_synthskin'),
        [
            '     ',
            '     ',
            'TKTKT',
            'STSTS',
            '     ',
        ],{
            T: item.cn.titanium_plating,
            K: item.cn.bodypart.skin,
            S: item.cn.synthnerves
        }
    )

    cnRecipe(evt, asItem('createcybernetics:boneupgrades_boneflex'),
        [
            'MT   ',
            'TSWG ',
            ' WBW ',
            ' GW  ',
            '     ',
        ],{
            M: item.cn.diodes,
            T: item.cn.titanium_plating,
            S: 'minecraft:sugar',
            W: item.iu.spool.lvl1,
            B: item.bone,
            G: item.dye.green
        }
    )

    cnRecipe(evt, asItem('createcybernetics:heartupgrades_cyberheart'),
        [
            '     ',
            'TPCPT',
            'TFRFT',
            'TPCPT',
            '     ',
        ],{
            T: item.cn.titanium_plating,
            P: 'create:fluid_pipe',
            C: 'minecraft:comparator',
            R: item.ingot.red_alloy,
            F: 'create:mechanical_pump'
        }
    )

    cnRecipe(evt, asItem('createcybernetics:skinupgrades_arterialturbine'),
        [
            ' MWM ',
            'MDGDM',
            'WDPDW',
            'MDGDM',
            ' MWM ',
        ],{
            M: item.cn.titanium_mesh,
            W: item.iu.spool.lvl1,
            D: item.cn.diodes,
            G: tag.gear.titanium,
            P: item.iu.rotor.wind.ready.iron
        }
    )

    cnRecipe(evt, asItem('createcybernetics:lungsupgrades_oxygen'),
        [
            '   TD',
            '  TCT',
            ' TOT ',
            'TCT  ',
            'TT   ',
        ],{
            T: item.cn.titanium_plating,
            D: 'industrialupgrade:wiring/itemcable26', //кобальт-хром труба
            C: item.plate.copper,
            O: 'create:copper_backtank'
        }
    )

    cnRecipe(evt, asItem('createcybernetics:organsupgrades_heatengine'),
        [
            '  C I',
            ' PAPI',
            ' PFWI',
            ' PPP ',
            '     ',
        ],{
            I: item.ingot.titanium,
            P: item.plate.titanium,
            A: item.cn.actuator,
            F: 'minecraft:blast_furnace',
            W: item.iu.rotor.wind.ready.iron,
            C: item.iu.spool.superconducting.lvl1
        }
    )

    cnRecipe(evt, asItem('createcybernetics:organsupgrades_diamondwaferstack'),
        [
            'DD DD',
            'DK KD',
            ' W W ',
            ' RWL ',
            ' WBW ',
        ],{
            D: item.diamond,
            K: 'minecraft:end_crystal',
            W: item.iu.spool.lvl1,
            R: item.dye.red, L: item.dye.blue, B: item.dye.black,
        }
    )

    cnRecipe(evt, asItem('createcybernetics:eyeupgrades_zoom'),
        [
            ' GRG ',
            ' DSD ',
            'PUMZP',
            ' DAD ',
            '     ',
        ],{
            R: item.ingot.red_alloy,
            G: item.nugget.electrum,
            U: item.cn.gpu,
            Z: item.cn.ssd,
            M: item.cn.eye_upgrade_base,
            D: item.cn.diodes,
            P: item.custom.conducting_organic_polymer,
            S: 'minecraft:spyglass',
            A: 'minecraft:amethyst_shard'
        }
    )

    cnRecipe(evt, asItem('createcybernetics:eyeupgrades_underwatervision'),
        [
            ' ERE ',
            ' OFO ',
            'PGMSP',
            ' OZO ',
            '     ',
        ],{
            E: item.nugget.electrum,
            R: item.ingot.red_alloy,
            O: item.cn.fiber_optic,
            F: item.phantom_membrane,
            Z: item.glass,
            G: item.cn.gpu,
            S: item.cn.ssd,
            M: item.cn.eye_upgrade_base,
            P: item.custom.conducting_organic_polymer,
        }
    )

    cnRecipe(evt, asItem('createcybernetics:brainupgrades_cyberdeck'),
        [
            'M    ',
            'TTTTT',
            'TWDET',
            'TTTTT',
            '     ',
        ],{
            M: 'create:redstone_link',
            T: item.cn.titanium_plating,
            W: item.iu.spool.lvl1,
            D: item.cn.diodes,
            E: item.create.electron_tube
        }
    )

    cnRecipe(evt, asItem('createcybernetics:brainupgrades_chipwareslots'),
        [
            '     ',
            ' TTT ',
            ' TSST',
            'NJTTT',
            ' N   ',
        ],{
            T: item.cn.titanium_plating,
            S: item.cn.storage,
            N: item.cn.synthnerves,
            J: item.cn.ssd
        }
    )

    cnRecipe(evt, asItem('createcybernetics:heartupgrades_stemcell'),
        [
            'TT TT',
            'TGBGT',
            ' BSB ',
            'TTBTT',
            'TG GT'
        ],{
            T: item.cn.titanium_plating,
            G: 'minecraft:ghast_tear',
            B: item.ore_block.titanium,
            S: item.cn.synthnerves
        }
    )

    cnRecipe(evt, asItem('createcybernetics:boneupgrades_bonebattery'),
        [
            '   TG',
            '  TRT',
            ' TBT ',
            'TRT  ',
            'GT   '
        ],{
            T: item.cn.titanium_plating,
            G: item.nugget.electrum,
            R: item.ingot.red_alloy,
            B: item.cn.internal_battery
        }
    )

    cnRecipe(evt, asItem('createcybernetics:organsupgrades_liverfilter'),
        [
            '  T  ',
            'STMT ',
            'LTFT ',
            'STMT ',
            '  T  '
        ],{
            T: item.cn.titanium_plating,
            M: item.cn.titanium_mesh,
            S: item.cn.synthnerves,
            L: item.cn.bodypart.liver,
            F: 'create:filter'
        }
    )

    cnRecipe(evt, asItem('createcybernetics:heartupgrades_defibrillator'),
        [
            'S S  ',
            'TTTTT',
            'TRNRT',
            'TIWIT',
            ' TTT '
        ],{
            T: item.cn.titanium_plating,
            S: item.cn.synthnerves,
            W: item.iu.spool.lvl1,
            R: 'minecraft:redstone_torch',
            N: 'minecraft:observer',
            I: 'minecraft:lightning_rod'
        }
    )

    cnRecipe(evt, asItem('createcybernetics:legupgrades_spurs'),
        [
            '     ',
            '  NI ',
            ' TTN ',
            ' TT  ',
            '     '
        ],{
            T: item.cn.titanium_plating,
            N: item.nugget.titanium,
            I: item.ingot.titanium
        }
    )

    cnRecipe(evt, asItem('createcybernetics:basecyberware_cybereyes'),
        [
            ' TTT ',
            'TOWDS',
            'AOGCS',
            'TOWDS',
            ' TTT '
        ],{
            T: item.cn.titanium_plating,
            O: item.cn.fiber_optic,
            D: item.cn.diodes,
            S: item.cn.synthnerves,
            C: item.cn.actuator,
            G: item.cn.gpu,
            W: item.iu.spool.lvl2,
            A: item.amethyst_shard
        }
    )

    cnRecipe(evt, asItem('createcybernetics:skinupgrades_metalplating'),
        [
            '     ',
            'TTTTT',
            'ASASA',
            'N N N',
            '     '
        ],{
            T: item.cn.titanium_plating,
            N: item.cn.synthnerves,
            A: 'createcybernetics:skinupgrades_subdermalarmor',
            S: 'createcybernetics:skinupgrades_synthskin'
        }
    )

    cnRecipe(evt, asItem('createcybernetics:armupgrades_armcannon'),
        [
            '     ',
            'TTETG',
            'SODRN',
            'TTETG',
            '     '
        ],{
            T: item.cn.titanium_plating,
            N: item.cn.synthnerves,
            R: item.ingot.red_alloy,
            S: item.cn.storage,
            E: item.create.electron_tube,
            G: item.nugget.electrum,
            D: item.pb.guninternals,
            O: item.ingot.gunmetal
        }
    )

    cnRecipe(evt, asItem('createcybernetics:eyeupgrades_nightvision'),
        [
            ' GRG ',
            ' OCO ',
            'PZMXP',
            ' OCO ',
            '     '
        ],{
            G: item.nugget.electrum,
            R: item.ingot.red_alloy,
            O: item.cn.fiber_optic,
            M: item.cn.eye_upgrade_base,
            Z: item.cn.gpu,
            X: item.cn.ssd,
            P: item.custom.conducting_organic_polymer,
            C: 'minecraft:golden_carrot'
        }
    )

    cnRecipe(evt, asItem('createcybernetics:muscleupgrades_synthmuscle'),
        [
            '   BM',
            ' MBMB',
            ' BTB ',
            'BMBM ',
            'MB   '
        ],{
            M: item.cn.titanium_mesh,
            B: item.cn.bodypart.muscle,
            T: 'minecraft:ghast_tear'
        }
    )

    cnRecipe(evt, asItem('createcybernetics:organsupgrades_adrenaline'),
        [
            ' TET ',
            'TSDPT',
            ' FTF ',
            ' F F ',
            '     '
        ],{
            T: item.cn.titanium_plating,
            E: item.create.electron_tube,
            S: item.sugar,
            P: item.blaze_powder,
            F: 'create:fluid_pipe',
            D: 'minecraft:dispenser'
        }
    )

    cnRecipe(evt, asItem('createcybernetics:armupgrades_firestarter'),
        [
            '  T  ',
            ' TST ',
            'TNFNT',
            'TRDRT',
            ' TTT '
        ],{
            T: item.cn.titanium_plating,
            S: item.cn.storage,
            N: item.cn.synthnerves,
            R: item.ingot.red_alloy,
            F: 'minecraft:flint_and_steel',
            D: 'minecraft:dispenser'
        }
    )

    cnRecipe(evt, asItem('createcybernetics:legupgrades_jumpboost'),
        [
            '  S  ',
            ' TAT ',
            ' TPT ',
            ' TST ',
            '  B  '
        ],{
            T: item.cn.titanium_plating,
            S: item.cn.synthnerves,
            B: item.ore_block.titanium,
            P: item.piston,
            A: 'create:piston_extension_pole'
        }
    )

    cnRecipe(evt, asItem('createcybernetics:skinupgrades_faceplate'),
        [
            'STMTS',
            'TSTST',
            'M T M',
            'TS ST',
            'MTMTM'
        ],{
            T: item.cn.titanium_plating,
            M: item.cn.titanium_mesh,
            S: item.cn.synthnerves
        }
    )

    cnRecipe(evt, asItem('createcybernetics:boneupgrades_cyberskull'),
        [
            '     ',
            '  B  ',
            ' BSB ',
            '  B  ',
            '     '
        ],{
            B: item.ore_block.titanium,
            S: 'minecraft:skeleton_skull'
        }
    )
    
    cnRecipe(evt, asItem('createcybernetics:armupgrades_flywheel'),
        [
            '     ',
            'RT TR',
            'IBGBI',
            ' TGT ',
            '  T  '
        ],{
            T: item.cn.titanium_plating,
            I: item.ingot.titanium,
            B: item.ore_block.titanium,
            R: item.ingot.red_alloy,
            G: tag.gear.titanium
        }
    )

    cnRecipe(evt, asItem('createcybernetics:legupgrades_anklebracers'),
        [
            ' BBB ',
            ' TPT ',
            ' TLT ',
            ' TPT ',
            ' BBB '
        ],{
            T: item.cn.titanium_plating,
            B: item.ore_block.titanium,
            P: 'create:mechanical_piston',
            L: 'create:piston_extension_pole'
        }
    )

    cnRecipe(evt, asItem('createcybernetics:armupgrades_reinforcedknuckles'),
        [
            ' TTT ',
            'TIBIT',
            'NBHBT',
            'TIBIT',
            ' TTT '
        ],{
            T: item.cn.titanium_plating,
            N: item.cn.synthnerves,
            B: item.ore_block.titanium,
            I: item.ore_block.iron,
            H: 'createcybernetics:titanium_hand'
        }
    )

    cnRecipe(evt, asItem('createcybernetics:legupgrades_ocelotpaws'),
        [
            '     ',
            ' TTT ',
            ' TMT ',
            'TAAAT',
            'WWWWW'
        ],{
            T: item.cn.titanium_plating,
            M: item.create.precision_mechanism,
            A: item.cn.actuator,
            W: tag.wool
        }
    )

    cnRecipe(evt, asItem('createcybernetics:eyeupgrades_hudlens'),
        [
            ' MO  ',
            'MO   ',
            'MOGN ',
            'MO   ',
            ' MO  '
        ],{
            M: item.phantom_membrane,
            O: item.cn.fiber_optic,
            G: item.cn.gpu,
            N: item.cn.synthnerves
        }
    )

    cnRecipe(evt, asItem('createcybernetics:armupgrades_drillfist'),
        [
            '  D  ',
            ' DMD ',
            'DMBMD',
            'DTWTD',
            ' BBB '
        ],{
            D: item.diamond,
            M: 'immersive_machinery:diamond_drill',
            B: item.ore_block.titanium,
            T: item.cn.titanium_plating,
            W: item.create.shaft
        }
    )

    cnRecipe(evt, asItem('createcybernetics:skinupgrades_immuno'),
        [
            ' GTT ',
            'GTPET',
            'TPMDT',
            'TEPZT',
            ' TTT '
        ],{
            T: item.cn.titanium_plating,
            G: item.dye.green,
            P: item.custom.conducting_organic_polymer,
            E: item.iu.capacitor.lvl3,
            Z: item.iu.transistor.lvl2,
            M: 'minecraft:milk_bucket',
            D: 'minecraft:dispenser'
        }
    )

    cnRecipe(evt, asItem('createcybernetics:organsupgrades_metabolic'),
        [
            '  TWW',
            'LTNT ',
            'LTSTL',
            ' TNTL',
            'WWT  '
        ],{
            T: item.cn.titanium_plating,
            W: item.iu.spool.lvl1,
            L: item.cn.bodypart.liver,
            N: item.cn.synthnerves,
            S: item.cn.storage
        }
    )

    cnRecipe(evt, asItem('createcybernetics:boneupgrades_piezo'),
        [
            '  TQR',
            '  WRA',
            'TWBWT',
            'ARW  ',
            'RQT  '
        ],{
            T: item.cn.titanium_plating,
            Q: item.quartz,
            R: 'create:rose_quartz',
            W: item.iu.spool.lvl1,
            A: item.amethyst_shard,
            B: item.bone
        }
    )

    cnRecipe(evt, asItem('createcybernetics:legupgrades_propellers'),
        [
            '     ',
            '  N  ',
            ' TST ',
            ' TPT ',
            '  T  '
        ],{
            T: item.cn.titanium_plating,
            N: item.cn.synthnerves,
            S: item.create.shaft,
            P: item.iu.rotor.wind.ready.iron
        }
    )

    cnRecipe(evt, asItem('createcybernetics:muscleupgrades_wiredreflexes'),
        [
            '     ',
            'SNSNS',
            'TTTLN',
            'TCETS',
            'LTTTN'
        ],{
            T: item.cn.titanium_plating,
            S: item.cn.synthnerves,
            C: item.cn.ssd,
            E: item.create.electron_tube,
            N: item.nugget.titanium,
            L: item.dye.light_blue
        }
    )

    cnRecipe(evt, asItem('createcybernetics:skinupgrades_subdermalspikes'),
        [
            '     ',
            'S S S',
            'NSNSN',
            'TTTTT',
            '     '
        ],{
            T: item.cn.titanium_plating,
            N: item.nugget.titanium,
            S: 'createcybernetics:skinupgrades_synthskin'
        }
    )

    cnRecipe(evt, asItem('createcybernetics:organsupgrades_battery'),
        [
            '  TTG',
            ' TSRT',
            'TSCST',
            'TRST ',
            'GTT  '
        ],{
            T: item.cn.titanium_plating,
            G: item.nugget.electrum,
            R: item.ingot.red_alloy,
            S: item.cn.storage,
            C: item.iu.inductor.lvl1
        }
    )

    cnRecipe(evt, asItem('createcybernetics:skinupgrades_subdermalarmor'),
        [
            '     ',
            'SSSSS',
            'TTTTT',
            'M M M',
            '     '
        ],{
            T: item.cn.titanium_plating,
            M: item.cn.titanium_mesh,
            S: 'createcybernetics:skinupgrades_synthskin'
        }
    )

    cnRecipe(evt, asItem('createcybernetics:basecyberware_linearframe'),
        [
            '  I  ',
            ' TPT ',
            'TAIAT',
            'ETPTE',
            'TAIAT'
        ],{
            A: item.cn.actuator,
            T: item.cn.titanium_plating,
            E: item.create.electron_tube,
            I: item.ingot.titanium,
            P: item.plate.titanium
        }
    )

    cnRecipe(evt, asItem('createcybernetics:armupgrades_crafthands'),
        [
            ' PPP ',
            ' NNN ',
            ' TMNP',
            ' TST ',
            '  H  '
        ],{
            T: item.cn.titanium_plating,
            P: item.plate.titanium,
            N: item.nugget.titanium,
            M: item.create.precision_mechanism,
            S: item.cn.synthnerves,
            H: 'createcybernetics:titanium_hand'
        }
    )

    cnRecipe(evt, asItem('createcybernetics:skinupgrades_sweat'),
        [
            '     ',
            '     ',
            'SDSDS',
            'NEGEN',
            '     '
        ],{
            N: item.cn.synthnerves,
            E: item.create.electron_tube,
            S: 'createcybernetics:skinupgrades_synthskin',
            D: 'minecraft:dispenser',
            G: 'cold_sweat:thermometer'
        }
    )

    cnRecipe(evt, asItem('createcybernetics:lungsupgrades_hyperoxygenation'),
        [
            '  T  ',
            ' TRT ',
            'TRMRT',
            ' TRT ',
            '  T  '
        ],{
            T: item.cn.titanium_plating,
            M: item.cn.titanium_mesh,
            R: item.breeze_rod
        }
    )

    cnRecipe(evt, asItem('createcybernetics:organsupgrade_densebattery'),
        [
            'IRDRI',
            'BAWAB',
            'BAAAB',
            'BAMAB',
            'BAAAB'
        ],{
            A: item.cn.internal_battery,
            I: item.ingot.electrum,
            R: item.ingot.red_alloy,
            D: item.cn.diodes,
            M: item.cn.titanium_mesh,
            B: item.ore_block.titanium,
            W: item.iu.spool.superconducting.lvl1
        }
    )

    cnRecipe(evt, asItem('createcybernetics:brainupgrades_enderjammer'),
        [
            '  H P',
            '  PP ',
            'HPEPH',
            'PRP  ',
            'TPH  '
        ],{
            P: item.enderpearl,
            T: item.create.electron_tube,
            R: 'minecraft:lightning_rod',
            E: 'minecraft:end_rod',
            H: 'minecraft:chorus_flower'
        }
    )

    cnRecipe(evt, asItem('createcybernetics:eyeupgrades_hudjack'),
        [
            ' NRN ',
            ' OOO ',
            'PGMSP',
            ' OOO ',
            '     '
        ],{
            N: item.nugget.electrum,
            R: item.ingot.red_alloy,
            O: item.cn.fiber_optic,
            G: item.cn.gpu,
            S: item.cn.ssd,
            P: item.custom.conducting_organic_polymer,
            M: item.cn.eye_upgrade_base
        }
    )

    cnRecipe(evt, asItem('createcybernetics:heartupgrades_coupler'),
        [
            '     ',
            ' NTTE',
            '  TST',
            '  TTT',
            ' N  N'
        ],{
            T: item.cn.titanium_plating,
            E: item.iu.transistor.lvl2,
            S: item.cn.storage,
            N: item.nugget.titanium
        }
    )

    cnRecipe(evt, asItem('createcybernetics:eyeupgrades_trajectorycalculator'),
        [
            ' NRN ',
            ' OAO ',
            'PGMSP',
            ' OGO ',
            '     '
        ],{
            N: item.nugget.electrum,
            R: item.ingot.red_alloy,
            O: item.cn.fiber_optic,
            G: item.cn.gpu,
            S: item.cn.ssd,
            M: item.cn.eye_upgrade_base,
            P: item.custom.conducting_organic_polymer,
            A: 'minecraft:spectral_arrow'
        }
    )

    cnRecipe(evt, asItem('createcybernetics:boneupgrades_bonelacing'),
        [
            '   MM',
            '  MNM',
            ' MBM ',
            'MNM  ',
            'MM   '
        ],{
            M: item.cn.titanium_mesh,
            B: item.bone,
            N: tag.nugget.titanium
        }
    )
    
    cnRecipe(evt, asItem('createcybernetics:heartupgrades_platelets'),
        [
            ' TTT ',
            'WTMTW',
            'RTGTB',
            'WTMTW',
            ' TTT '
        ],{
            T: item.cn.titanium_plating,
            W: item.iu.spool.lvl2,
            R: item.dye.red,
            B: item.dye.blue,
            M: 'minecraft:glistering_melon_slice',
            G: 'minecraft:ghast_tear'
        }
    )
    
    cnRecipe(evt, asItem('createcybernetics:armupgrades_pneumaticwrist'),
        [
            '     ',
            ' TTT ',
            'NAPNH',
            ' TTT ',
            '     '
        ],{
            T: item.cn.titanium_plating,
            N: item.cn.synthnerves,
            H: item.cn.upgradepart.titanium_hand,
            A: 'create:piston_extension_pole',
            P: 'create:mechanical_piston'
        }
    )
    
    cnRecipe(evt, asItem('createcybernetics:eyeupgrades_targeting'),
        [
            ' NRN ',
            ' DZD ',
            'PGMSP',
            ' DSD ',
            '     '
        ],{
            N: item.nugget.electrum,
            R: item.ingot.red_alloy,
            D: item.cn.diodes,
            F: item.dye.red,
            G: item.cn.gpu,
            S: item.cn.ssd,
            M: item.cn.eye_upgrade_base,
            P: item.custom.conducting_organic_polymer,
            Z: 'mffs:warn_module'
        }
    )
    
    cnRecipe(evt, asItem('createcybernetics:armupgrades_claws'),
        [
            'I I I',
            'I I I',
            'SGSGS',
            'TRTRT',
            ' TNT '
        ],{
            T: item.cn.titanium_plating,
            N: item.cn.synthnerves,
            S: item.cn.storage,
            R: item.ingot.red_alloy,
            G: tag.gear.titanium,
            I: item.rod.titanium
        }
    )
    
    cnRecipe(evt, asItem('createcybernetics:boneupgrades_spinalinjector'),
        [
            'TT TT',
            'TSEST',
            ' PDP ',
            'TSEST',
            'TT TT'
        ],{
            T: item.cn.titanium_plating,
            S: item.cn.storage,
            E: item.create.electron_tube,
            P: item.plate.titanium,
            D: 'minecraft:dispenser'
        }
    )
    
    cnRecipe(evt, asItem('createcybernetics:skinupgrades_solarskin'),
        [
            '     ',
            'SPPPS',
            'TLLLT',
            'W W W',
            '     '
        ],{
            P: item.iu.wire.glass,
            S: 'createcybernetics:skinupgrades_synthskin',
            T: item.cn.titanium_plating,
            W: item.iu.spool.superconducting.lvl2,
            L: 'industrialupgrade:photoniumglass/photoniyglass1', //Улучшенное стекло
        }
    )
    
    cnRecipe(evt, asItem('createcybernetics:skinupgrades_empthreading'),
        [
            '     ',
            '     ',
            'SMSMS',
            'CICIC',
            '     '
        ],{
            S: item.cn.upgradepart.synthskin,
            M: item.cn.titanium_mesh,
            C: item.iu.spool.lvl1,
            I: item.ingot.red_alloy
        }
    )
    
    cnRecipe(evt, asItem('createcybernetics:boneupgrades_capacitorframe'),
        [
            '  P  ',
            ' MNM ',
            'MAIAM',
            'SMNMS',
            'MAIAM'
        ],{
            M: item.cn.upgradepart.bone_battery,
            N: tag.nugget.electrum,
            I: tag.ingot.electrum,
            A: item.cn.actuator,
            S: item.iu.spool.superconducting.lvl1,
            P: item.iu.spool.superconducting.lvl2
        }
    )
    
    cnRecipe(evt, asItem('createcybernetics:brainupgrades_cyberdeck'),
        [
            'W    ',
            'TTTTT',
            'TSPDT',
            'TTTTT',
            '     '
        ],{
            W: item.create.redstone_link,
            T: item.cn.titanium_plating,
            S: item.ae.processor.calculation,
            P: item.iu.microchip.lvl6,
            D: item.ae.processor.concurrent
        }
    )
    
    cnRecipe(evt, asItem('createcybernetics:exosuit1'),
        [
            'TATAT',
            'P A P',
            '  T  ',
            ' A A ',
            ' L L '
        ],{
            A: item.cn.actuator,
            T: tag.ingot.titanium,
            P: item.cn.upgradepart.pneumatic_wrist,
            L: item.cn.upgradepart.pneumatic_legs
        }
    )
    
    

}