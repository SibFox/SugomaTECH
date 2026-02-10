// priority: 11

const IUMachineCraft = {
    MACERATOR: 'macerator',
    CHARGER: 'charger',
    SILICON_CHAMBER: 'silicon_recipe',
    FLUID_INTEGRATOR: 'fluid_integrator',
    WELDING: 'welding',
    ROLLING: 'rolling',
    CHEMICAL_FACTORY: 'plastic',
    DIVIDER: {
        ITEM: 'item_divider',
        ITEM_FLUID: 'item_divider_fluid'
    },
    MIXER: {
        TRIPLE_SOLID: 'triple_solid_mixer',
    },
    ALLOY_SMELTER: {
        lvl1: 'alloysmelter',
        lvl2: 'advalloysmelter',
        lvl3: 'impalloysmelter',
        lvl4: 'peralloysmelter',
    },
}


function noHash(str) {
    return str.replace('#', '').replace('$', '')
}

function recipeID(from, path) {
    const str = 'sugomatech:' + from
    if (path != null) {
        return str + "/" + path
    }
    return str
}

function asItem(item, amount) {
    if (amount === undefined || amount < 1 || amount == null) {
        amount = 1
    }
    return {
        item: noHash(item),
        count: amount,
        isTag: item.startsWith('#'),
        isFluid: item.startsWith('$'),

        toString() {
            return amount + 'x ' + noHash(item)
        }
    }
}

const shapedRecipe = (evt, id, inputs, output, amount) => {
    if (amount === undefined || amount < 1 || amount == null) {
        amount = 1
    }
    const letters = 'ABCDEFGHI'
    const pattern = []
    const indexes = {}
    let c = 0
    for (let i = 0; i < inputs.length; i++) {
        let row = inputs[i];
        pattern[i] = ''
        for (let k = 0; k < row.length; k++) {
            let el = row[k];
            if (el != null) {
                indexes[letters[c]] = el
                pattern[i] = pattern[i].concat('', letters[c])
                c++
            } else {
                pattern[i] = pattern[i].concat('', ' ')
            }
        }
    }
    evt.shaped(
        Item.of(output, amount),
        pattern,
        indexes
    ).id(id)
}

const cnRecipe = (evt, output, pattern, indexes) => {
    let keys = {}
    for (const [key, entry] of Object.entries(indexes)) {
        entry = asItem(entry)
        let val = {}
        if (entry.isTag) {
            val.tag = entry.item
        } else {
            val.item = entry.item
        }
        keys[key] = val
    }
    evt.custom({
        "type": "createcybernetics:engineering_table",
        "accept_mirrored": true,
        "key": keys,
        "pattern": pattern,
        "result": {
            "count": output.count,
            "id": output.item
        }
    })
}

const iuRecipe = (evt, id, type, inputs, outputs, params) => {
    if (params === undefined || params < 1 || params == null) {
        params = {}
    }
    let recipe = {
        "type": "industrialupgrade:universal_recipe",
        "recipe_type": type,
        "isFluidRecipe": false,
        "inputs": [],
        "outputs": [],
        "params": params
    }

    for (let input of inputs) {
        let dict = {
            "type": "item",
            "id": input.item,
            "amount": input.count
        }
        if (input.isTag) {
            dict.type = "tag"
        }
        if (input.isFluid) {
            dict.type = "fluid"
            recipe.isFluidRecipe = true
        }

        recipe.inputs.push(dict)
    }

    for (let output of outputs) {
        let dict = {
            "type": "item",
            "id": output.item,
            "amount": output.count
        }
        if (output.isTag) {
            console.error('Wrong output item in IU recipe\nRecipe ID: ' + id)
            continue
        }
        if (output.isFluid) {
            dict.type = "fluid"
            recipe.isFluidRecipe = true
        }

        recipe.outputs.push(dict)
    }

    evt.custom(recipe).id(id)
}

const aeReactionRecipe = (evt, id, energy, input_fluid, input_items, output) => {
    let input_arr = []
    let output_ready = { "#": output.count, "#t": "ae2:i", "id": output.item }

    if (output.isTag) {
        console.error("Recipe output was a Tag in AE Reaction chamber. Recipe ID: " + id)
    }
    if (output.isFluid) {
        output_ready["#t"] = "ae2:f"
    }

    for (let i = 0; i < input_items.length; i++) {
        let input = input_items[i];
        if (input.isTag || input.isFluid) {
            console.error("Recipe input was not an Item in AE Reaction chamber. Recipe ID: " + id)
            return
        }
        input_arr.push({
            "amount": input.count,
            "ingredient": { "item": input.item }
        })
    }
    
    evt.custom({
        "type": "advanced_ae:reaction",
        "input_energy": energy,
        "input_fluid": {
            "amount": input_fluid.count,
            "ingredient": {
                "fluid": input_fluid.item
            }
        },
        "input_items": input_arr,
        "output": output_ready
    }).id(id)
}