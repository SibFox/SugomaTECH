// priority: 11
"use sctrict";

const registerInteractions = () => {

    BlockEvents.rightClicked('minecraft:spawner', evt => {
        if (evt.item == 'create:empty_blaze_burner') 
            evt.cancel()
    })

    ItemEvents.entityInteracted('create:empty_blaze_burner', evt => {
        evt.cancel()
        // if (evt.target.type == 'minecraft:blaze') {
        //     evt.item.count++
        //     removeFromInventory(evt.player, 'create:blaze_burner', 1)
        //     // evt.player.inventory.removeItem('create:blaze_burner')          
        //     return
        // }
    })



    ItemEvents.entityInteracted(item.glass_bottle, evt => {
        if (evt.target.type != 'minecraft:cow') return
        evt.item.count--
        evt.player.giveInHand(item.milk_bottle)
        evt.player.playSound('minecraft:entity.cow.milk')
    })

    ItemEvents.foodEaten(event => {
        const {player} = event
        if (player)
        {
            if ([ 'kubejs:plated_brain_arphex', 'kubejs:plated_brain_end', 'kubejs:plated_brain_nether',
                'kubejs:plated_minced_brain_stew', 'kubejs:plated_minced_brain_with_milk',
                'kubejs:plated_heart_arphex', 'kubejs:plated_heart_end', 'kubejs:plated_heart_nether', 
                'kubejs:plated_minced_heart_stew', 'kubejs:plated_liver_end', 'kubejs:plated_liver_nether', 
                'kubejs:plated_minced_liver_stew', 'kubejs:plated_minced_liver_with_apple', 
                'kubejs:plated_lungs_arphex', 'kubejs:plated_lungs_end', 'kubejs:plated_lungs_nether',
                'kubejs:plated_minced_lungs_stew', 'kubejs:plated_minced_lungs_with_potatoes', 
                'kubejs:plated_stomach_end', 'kubejs:plated_stomach_nether', 'kubejs:plated_minced_stomach_stew'
            ].includes(event.item.id)) {
                event.player.give(Item.of('minecraft:bowl'))
                return
            }
        
            if (event.item.id == 'kubejs:preserved_meat') {
                event.player.give(Item.of(item.iu.tin_can))
                return
            }
        
            if (['kubejs:jar_orphan_paste', 'kubejs:jar_fettus'].includes(event.item.id))
            {
                event.player.give(Item.of(item.custom.jar))
                return
            }
        }
    })

    ItemEvents.firstRightClicked(evt => {
        let { item } = evt
        if (item.id == 'industrialupgrade:energy_tools/nano_saber')
        {
            if (item.getComponentMap().get('industrialupgrade:active') == true)
                item.setAttackDamage(13)
            else
                item.setAttackDamage(5)
        }
        if (item.id == 'industrialupgrade:energy_tools/katana')
        {
            if (item.getComponentMap().get('industrialupgrade:active') == true)
                item.setAttackDamage(13)
            else
                item.setAttackDamage(5)
        }
        if (item.id == 'industrialupgrade:energy_tools/itemnanosaber1')
        {
            if (item.getComponentMap().get('industrialupgrade:active') == true)
                item.setAttackDamage(18)
            else
                item.setAttackDamage(8)
        }
        if (item.id == 'industrialupgrade:energy_tools/itemnanosaber')
        {
            if (item.getComponentMap().get('industrialupgrade:active') == true)
                item.setAttackDamage(24)
            else
                item.setAttackDamage(12)
        }
    })

    console.info('Interactions adding passed')
}
