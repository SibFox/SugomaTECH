// kubejsstudio item/block properties; re-apply merges by id
BlockEvents.modification(event => {
    event.modify('industrialupgrade:blockresource/asphalt', m => { m.speedFactor = 1.3 })
})
