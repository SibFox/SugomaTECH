"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerAECTRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('ae2', path)
    }

    // ~~~~~~ Предметы ~~~~~~

    shapedRecipe(evt, getRecipeID('certus_quartz_crystal'),
        [
            [ item.iu.dust.quartz, item.iu.charged_quartz, item.iu.dust.quartz ],
            [ item.iu.charged_quartz, item.iu.dust.quartz, item.iu.charged_quartz ],
            [ item.iu.dust.quartz, item.iu.charged_quartz, item.iu.dust.quartz ]
        ],
    item.ae.certus_quartz_crystal, 8)

    evt.shapeless(Item.of(item.ae.fluix_crystal, 2),
        [
            item.iu.charged_quartz, item.iu.charged_redstone, item.ae.charged_certus_quartz_crystal
        ]
    ).id(getRecipeID('fluix_crystal'))

    evt.shapeless(Item.of(item.ae.silicon, 4),
        [
            item.iu.dust.calcium_phosphate, item.iu.dust.silicon
        ]
    ).id(getRecipeID('silicon_x4'))

    evt.shapeless(Item.of(item.ae.silicon, 8),
        [
            item.iu.dust.potassium, Item.of(item.iu.dust.silicon, 4)
        ]
    ).id(getRecipeID('silicon_x8'))

    shapedRecipe(evt, getRecipeID('inscriber'),
        [
            [ item.iu.module.macerator.lvl2, null, item.iu.module.cutting.lvl2 ],
            [ item.ae.processor.calculation, item.iu.machine_corpus.tech_adv, item.ae.processor.logic ],
            [ item.iu.module.slot.x3, item.iu.electromotor.lvl2, item.iu.module.slot.x1 ]
        ],
    'ae2:inscriber')

    evt.shaped(
        Item.of('ae2:wireless_receiver', 1),
        [
            ' F ',
            'CTC',
            'COC'
        ],{
            F: item.ae.fluix_pearl,
            O: item.ae.cable.quartz_fiber,
            T: item.create.transmitter,
            C: tag.casings.niobium
        }
    ).id(getRecipeID('wireless_receiver'))

    evt.shaped(
        Item.of('ae2:network_tool', 1),
        [
            'PCW',
            'Q  '
        ],{
            P: tag.ae.illuminated_panel,
            C: item.iu.module.slot.x8,
            W: tag.tool.wrench,
            Q: item.ae.processor.calculation
        }
    ).id(getRecipeID('network_tool'))

    evt.shapeless(Item.of('ae2:storage_bus', 1),
        [
            item.iu.upgrade.pulling,
            '#ae2:interface'
        ]
    ).id(getRecipeID('storage_bus'))
    
    evt.shaped(
        Item.of('ae2:import_bus', 1),
        [
            ' A ',
            'CPC',
            'C C'
        ],{
            A: item.ae.core.annihilation,
            C: tag.casings.hafnium,
            P: item.iu.upgrade.pulling
        }
    ).id(getRecipeID('import_bus'))

    evt.shaped(
        Item.of('ae2:export_bus', 1),
        [
            'C C',
            'CEC',
            ' F '
        ],{
            F: item.ae.core.formation,
            C: tag.casings.hafnium,
            E: item.iu.upgrade.ejector
        }
    ).id(getRecipeID('export_bus'))
    
    evt.shaped(
        Item.of('advanced_ae:adv_pattern_encoder', 1),
        [
            'CEC',
            'PBR',
            'CLC'
        ],{
            B: 'ae2:blank_pattern',
            C: item.ae.charged_certus_quartz_crystal,
            E: item.ae.processor.engineering,
            P: item.ae.processor.concurrent,
            L: item.ae.processor.logic,
            R: item.ingot.red_alloy
        }
    ).id(getRecipeID('adv_pattern_encoder'))
    
    
    





    // ~~~~~~ Машинки и их части ~~~~~~
    
    shapedRecipe(evt, getRecipeID('vibration_chamber'),
        [
            [ item.iu.corpus_cover.lvl1, tag.ingot.iron, item.iu.corpus_cover.lvl1 ],
            [ tag.ingot.steel, item.iu.base_generator, tag.ingot.steel ],
            [ tag.ingot.steel, item.ae.energy_acceptor, tag.ingot.steel ]
        ],
    'ae2:vibration_chamber')

    evt.shaped(
        Item.of('ae2:crafting_unit', 1),
        [
            'COC',
            'WPW',
            'COC'
        ],{
            C: item.iu.corpus_cover.lvl1,
            O: item.ae.processor.calculation,
            P: item.ae.processor.logic,
            W: item.ae.cable.fluix_glass
        }
    ).id(getRecipeID('crafting_unit'))

    evt.shaped(
        Item.of(item.ae.extended_machine_frame, 1),
        [
            'ETE',
            'SCS',
            'ETE'
        ],{
            E: item.ingot.entro,
            T: item.ingot.sky_steel,
            S: item.ingot.sky_bronze,
            C: item.iu.machine_corpus.tech_adv
        }
    ).id(getRecipeID('extended_machine_frame_1'))

    evt.shaped(
        Item.of(item.ae.extended_machine_frame, 1),
        [
            'ESE',
            'TCT',
            'ESE'
        ],{
            E: item.ingot.entro,
            T: item.ingot.sky_steel,
            S: item.ingot.sky_bronze,
            C: item.iu.machine_corpus.tech_adv
        }
    ).id(getRecipeID('extended_machine_frame_2'))
    
    evt.shaped(
        Item.of('extendedae:crystal_assembler', 1),
        [
            ' A ',
            'LMC',
            'SEO'
        ],{
            A: item.iu.module.assembler,
            L: item.ae.processor.logic,
            C: item.ae.processor.concurrent,
            M: item.ae.extended_machine_frame,
            S: item.iu.module.slot.x8,
            O: item.iu.module.tank.storage,
            E: item.iu.electromotor.lvl3
        }
    ).id(getRecipeID('crytal_assembler'))
    
    evt.shaped(
        Item.of('ae2:molecular_assembler', 1),
        [
            'GMG',
            'DCF',
            'GSG'
        ],{
            G: item.iu.tempered_glass,
            D: item.ae.core.annihilation,
            F: item.ae.core.formation,
            C: item.iu.molecular_core,
            M: item.iu.module.crafting.lvl2,
            S: item.iu.module.slot.x2
        }
    ).id(getRecipeID('molecular_assembler'))
    
    evt.shaped(
        Item.of('advanced_ae:reaction_chamber', 1),
        [
            ' C ',
            'MRP',
            'TEB'
        ],{
            C: 'ae2:condenser',
            R: 'industrialupgrade:molecular/molecular',
            E: item.iu.electromotor.lvl2,
            T: item.iu.module.tank.storage,
            B: item.iu.module.tank.lvl1,
            M: item.iu.module.crafting.lvl2,
            P: item.iu.module.transformation_adv
        }
    ).id(getRecipeID('reaction_chamber'))
    
    evt.shaped(
        Item.of('ae2:condenser', 1),
        [
            ' S ',
            'MCB',
            'QQQ'
        ],{
            C: item.iu.machine_corpus.tech_adv,
            S: item.iu.module.synthesis.photon,
            B: item.iu.module.slot.x2,
            M: item.iu.module.slot.x1,
            Q: 'industrialupgrade:excitednucleus/quacore'
        }
    ).id(getRecipeID('condenser'))
    
    evt.shaped(
        Item.of('ae2:energy_acceptor', 1),
        [
            'GEG',
            'ICI',
            'GRG'
        ],{
            C: item.iu.machine_corpus.tech,
            G: item.iu.tempered_glass,
            E: item.iu.module.energy,
            I: tag.ingot.electrum,
            R: item.ingot.red_alloy
        }
    ).id(getRecipeID('energy_acceptor'))
    
    evt.shaped(
        Item.of('megacells:cell_dock', 1),
        [
            'CSC',
            ' G ',
        ],{
            C: tag.plate.iron,
            S: item.iu.module.slot.x1,
            G: tag.ae.glass_cable 
        }
    ).id(getRecipeID('cell_dock'))
    
    evt.shaped(
        Item.of('ae2:crystal_resonance_generator', 1),
        [
            'MFM',
            'MKM',
            'AGA'
        ],{
            F: item.ae.fluix_block,
            K: item.ae.charged_certus_quartz_crystal,
            M: tag.ingot.aluminium,
            A: tag.ingot.hafnium,
            G: item.iu.module.generator.lvl1
        }
    ).id(getRecipeID('crystal_resonance_generator'))
    
    evt.shaped(
        Item.of('ae2:charger', 1),
        [
            'ATA',
            'CS ',
            'AEA'
        ],{
            A: item.iu.corpus_cover.lvl2,
            E: item.iu.module.energy_adv,
            S: item.iu.module.slot.x1,
            C: item.iu.spool.superconducting.lvl2,
            T: item.cn.diodes
        }
    ).id(getRecipeID('charger'))
    
    evt.shaped(
        Item.of('ae2:pattern_provider', 1),
        [
            'AQF',
            'SCU'
        ],{
            Q: item.iu.machine_corpus.tech,
            A: item.ae.core.annihilation,
            F: item.ae.core.formation,
            S: item.iu.module.slot.x8,
            U: item.iu.module.unpacking,
            C: item.ae.processor.calculation
        }
    ).id(getRecipeID('pattern_provider'))
    
    evt.shaped(
        Item.of('ae2:energy_cell', 1),
        [
            'CDC',
            'DMD',
            'CDC'
        ],{
            M: 'industrialupgrade:wiring_storage/cesu_iu',
            D: item.ae.fluix_dust,
            C: item.ae.charged_certus_quartz_crystal
        }
    ).id(getRecipeID('energy_cell'))
    
    evt.shaped(
        Item.of('ae2:dense_energy_cell', 1),
        [
            'FPF',
            'CMC',
            'FPF'
        ],{
            M: 'ae2:energy_cell',
            C: item.iu.battery.energy_crystal.lvl1,
            P: item.ae.processor.calculation,
            F: item.ae.fluix_block,
        }
    ).id(getRecipeID('dense_energy_cell'))

    evt.shaped(
        Item.of('megacells:mega_energy_cell', 1),
        [
            'SAS',
            'ECE',
            'SAS'
        ],{
            A: item.ae.processor.accumulation,
            S: item.ore_block.sky_steel,
            E: item.iu.battery.energy_crystal.lvl2,
            C: 'ae2:dense_energy_cell'
        }
    ).id(getRecipeID('mega_energy_cell'))
    
    evt.shaped(
        Item.of('appflux:flux_accessor', 1),
        [
            'EGE',
            'LAL',
            'LGL'
        ],{
            A: 'ae2:energy_acceptor',
            E: item.ae.processor.energy,
            G: item.glowstone,
            L: tag.ingot.aluminiumlithium
        }
    ).id(getRecipeID('flux_accessor'))
    
    evt.shaped(
        Item.of('ae2:growth_accelerator', 1),
        [
            'BMB',
            'GFG',
            'BEB'
        ],{
            F: item.ae.fluix_block,
            B: tag.gear.hafniumboride,
            E: item.iu.electromotor.lvl2,
            M: item.iu.module.bio.lvl2,
            G: item.iu.tempered_glass
        }
    ).id(getRecipeID('growth_accelerator'))
    
    evt.shaped(
        Item.of('ae2:cell_workbench', 1),
        [
            'GPG',
            'UQS',
            'CCC'
        ],{
            P: item.ae.processor.calculation,
            Q: item.iu.machine_corpus.tech,
            S: item.iu.module.slot.x1,
            U: item.iu.module.upgrade,
            G: item.iu.tempered_glass,
            C: item.ingot.composite
        }
    ).id(getRecipeID('cell_workbench'))
    
    evt.shaped(
        Item.of('ae2:interface', 1),
        [
            'AQF',
            'SPT'
        ],{
            A: item.ae.core.annihilation,
            F: item.ae.core.formation,
            Q: item.iu.machine_corpus.tech,
            S: item.iu.module.slot.x8,
            T: item.iu.module.tank.storage,
            P: item.iu.microchip.lvl2
        }
    ).id(getRecipeID('interface'))
    
    evt.shaped(
        Item.of('ae2:drive', 1),
        [
            'PDP',
            ' S '
        ],{
            D: 'computercraft:disk_drive',
            P: item.ae.processor.engineering,
            S: item.iu.module.slot.x8
        }
    ).id(getRecipeID('drive'))
    
    evt.shaped(
        Item.of('ae2:chest', 1),
        [
            ' T ',
            'EQP',
            'SLN'
        ],{
            T: 'ae2:terminal',
            S: item.iu.module.slot.x1,
            N: item.iu.microchip.lvl3,
            Q: item.iu.machine_corpus.tech_adv,
            L: item.iu.battery.lead,
            E: item.iu.upgrade.ejector,
            P: item.iu.upgrade.pulling
        }
    ).id(getRecipeID('chest'))
    
    evt.shaped(
        Item.of('ae2:io_port', 1),
        [
            'GNG',
            'DQD',
            'RLR'
        ],{
            D: 'ae2:drive',
            N: item.iu.microchip.lvl4,
            L: item.ae.processor.logic,
            R: tag.ingot.hafnium,
            Q: item.iu.machine_corpus.tech_adv,
            G: tag.glass
        }
    ).id(getRecipeID('io_port'))
    
    evt.shaped(
        Item.of('ae2:controller', 1),
        [
            'KPK',
            'TQT',
            'RBR'
        ],{
            Q: 'ae2:smooth_sky_stone_block',
            P: item.iu.microchip.lvl4,
            T: item.iu.transistor.lvl2,
            B: item.iu.data_bus.lvl2,
            R: item.iu.resistor.lazuli,
            K: item.ae.fluix_crystal
        }
    ).id(getRecipeID('controller'))
    
    evt.shaped(
        Item.of('ae2:quantum_link', 1),
        [
            'GCG',
            'C C',
            'GCG'
        ],{
            G: item.ae.vibrant_glass,
            C: item.iu.core.excited.spectral
        }
    ).id(getRecipeID('quantum_link'))
    
    evt.shaped(
        Item.of('ae2:quantum_ring', 1),
        [
            'RLR',
            'EQD',
            'RCR'
        ],{
            Q: 'ae2:energy_cell',
            L: item.ae.processor.logic,
            E: item.ae.processor.engineering,
            C: item.ae.processor.concurrent,
            D: tag.ae.smart_dence_cable,
            R: tag.doubleplate.woods
        }
    ).id(getRecipeID('quantum_ring'))
    
    evt.shaped(
        Item.of('advanced_ae:adv_pattern_provider', 1),
        [
            'FEF',
            'CQR',
            'FLF'
        ],{
            Q: 'extendedae:ex_pattern_provider',
            F: item.ae.fluix_crystal,
            E: item.ae.processor.engineering,
            C: item.ae.processor.concurrent,
            L: item.ae.processor.logic,
            R: item.ingot.red_alloy
        }
    ).id(getRecipeID('adv_pattern_provider'))
    
    evt.shaped(
        Item.of('ae2:spatial_io_port', 1),
        [
            'TPT',
            'SIS',
            'HAH'
        ],{
            I: 'ae2:io_port',
            T: item.iu.tempered_glass,
            P: item.iu.microchip.lvl7,
            H: tag.ingot.hafniumboride,
            A: item.ae.processor.accumulation,
            S: item.ae.quantum_singularity
        }
    ).id(getRecipeID('spatial_io_port'))
    
    evt.shaped(
        Item.of('ae2:spatial_pylon', 1),
        [
            'TIT',
            'CFC',
            'TIT'
        ],{
            F: item.ae.fluix_block,
            I: tag.doubleplate.tan_tung_haf,
            C: item.iu.controller.lvl3,
            T: item.iu.tempered_glass
        }
    ).id(getRecipeID('spatial_pylon'))
    
    evt.shaped(
        Item.of('extendedae:assembler_matrix_wall', 1),
        [
            'BFB',
            'EAE',
            'BFB'
        ],{
            F: item.ae.fluix_crystal,
            E: item.ingot.entro,
            A: item.iu.machine_corpus.tech,
            B: item.ingot.wolframite
        }
    ).id(getRecipeID('assembler_matrix_wall'))

    evt.shaped(
        Item.of('extendedae:assembler_matrix_glass', 1),
        [
            'BFB',
            'EAE',
            'BFB'
        ],{
            F: item.ae.fluix_crystal,
            E: item.ingot.entro,
            A: item.iu.machine_corpus.tech,
            B: item.iu.tempered_glass
        }
    ).id(getRecipeID('assembler_matrix_glass'))
    
    evt.shaped(
        Item.of('extendedae:assembler_matrix_frame', 1),
        [
            'QLQ',
            'LEL',
            'QLQ'
        ],{
            L: item.plate.lapis,
            E: item.ae.extended_machine_frame,
            Q: item.ae.fluix_crystal
        }
    ).id(getRecipeID('assembler_matrix_frame'))
    
    
    
    
}