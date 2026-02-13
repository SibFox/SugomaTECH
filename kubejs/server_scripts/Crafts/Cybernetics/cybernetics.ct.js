"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerCyberneticsCTRecipes = (evt) => {

    function getRecipeID(path) {
        return recipeID('createcybernetics', path)
    }

    shapedRecipe(evt, getRecipeID('engineering_table'),
        [
            [ null, item.iu.module.crafting.lvl2, null ],
            [ item.iu.module.circuit, item.iu.machine_corpus.advanced_tech, item.iu.module.combining.lvl2 ],
            [ item.ae.core.formation, 'industrialupgrade:solderingiron', item.ae.core.annihilation ]
        ],
    'createcybernetics:engineering_table')

    cnRecipe(evt, asItem('createcybernetics:data_shard_biochip'),
        [
            'ISCSI',
            ' TST ',
            'RTGTR',
            ' TST ',
            '  TT ',
        ],{
            T: tag.plate.titanium,
            G: tag.ingot.gold,
            S: item.cn.ssd,
            I: tag.ingot.titanium,
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
            G: item.nugget.gold,
            E: item.create.electron_tube
        }
    )

    cnRecipe(evt, asItem('createcybernetics:brainupgrades_eyeofdefender'),
        [
            ' NNN ',
            'NETEN',
            'NTYTN',
            'NETEN',
            ' NNN ',
        ],{
            N: item.nugget.titanium,
            E: item.create.electron_tube,
            T: item.cn.titanium_plating,
            Y: 'minecraft:ender_eye'
        }
    )

    cnRecipe(evt, asItem('createcybernetics:basecyberware_leftleg'),
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
            R: 'minecraft:red_dye'  // поменять
        }
    )
    
    cnRecipe(evt, asItem('createcybernetics:legupgrades_metaldetector'),
        [
            ' TNT ',
            'TESET',
            'TWRWT',
            'TWRWT',
            'TWRWT',
        ],{
            S: item.iu.module.scaner.lvl1,
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

    console.info('Cybernetics recipe adding passed')
}