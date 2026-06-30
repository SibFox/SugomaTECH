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
            [ item.ae.processor.calculation, item.iu.machine_corpus.advanced_tech, item.ae.processor.logic ],
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
            C: item.iu.machine_corpus.advanced_tech
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
            C: item.iu.machine_corpus.advanced_tech
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
            R: 'ae2:vibration_chamber',
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
            C: item.iu.machine_corpus.advanced_tech,
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
    
    
    
}