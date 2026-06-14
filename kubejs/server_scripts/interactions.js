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

    console.info('Interactions adding passed')
}