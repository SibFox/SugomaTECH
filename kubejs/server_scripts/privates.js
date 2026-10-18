// priority: 10
"use strict";

let checkPrivateTerritories = () => {
    BlockEvents.leftClicked(evt => {
        const {player, block} = evt
        const {x, z, y} = block
        if (!player.isCreative()) {
            if ((x > -315 && x < -200 && z > -15 && z < 70) || // Спавн
                (x > -403 && x < -398 && z >  63 && z < 71 && y > -42 && y < -30)){ // Чел
                evt.cancel()
            }
        }
    })

    BlockEvents.placed(evt => {
        const {player, block} = evt
        const {x, z, y} = block
        if (!player.isCreative()) {
            if (x > -315 && x < -200 && z > -15 && z < 70 || // Спавн
                (x > -403 && x < -398 && z >  63 && z < 71 && y > -42 && y < -30)){ // Чел
                evt.cancel()
            }
        }
    })
}