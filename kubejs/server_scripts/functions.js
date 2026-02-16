// priority: 11
"use strict";

const IUMachineCraft = {
    MACERATOR: 'macerator',
    CHARGER: 'charger',
    SILICON_CHAMBER: 'silicon_recipe',
    SINGLE_FLUID_ADAPTER: 'single_fluid_adapter',
    FLUID_ADAPTER: 'fluid_adapter',
    FLUID_INTEGRATOR: 'fluid_integrator',
    WELDING: 'welding',
    ROLLING: 'rolling',
    EXTRACTOR: 'extractor',
    CIRCUIT_MANUFACTURER: 'microchip',
    CUTTER: 'cutting',
    CHEMICAL_FACTORY: 'plastic',
    PLASTIC_PLATE: 'plasticplate',
    ELECTRONIC_ASSEMBLER: 'electronics',
    BREWING: 'brewing',
    ELECTROLYZER: 'electrolyzer',
    SOLID_ELECTROLYZER: 'solid_electrolyzer',
    POLYMERIZER: 'polymerizer',
    POLISHER: {
        LASER: 'laser',
        PRIMAL: 'primal_laser_polisher',
    },
    DIVIDER: {
        ITEM: 'item_divider',
        ITEM_FLUID: 'item_divider_fluid'
    },
    MIXER: {
        FLUID: 'fluid_mixer',
        SOLID: 'solid_mixer',
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
    const str = 'kubejs:' + from
    if (path != null) {
        return str + "/" + path
    }
    return str
}

function asItem(item, amount) {
    if (amount === undefined || amount < 1 || amount == null) {
        amount = 1
    }

    let dict = {
        item: noHash(item),
        count: amount,
        isTag: item.startsWith('#'),
        isFluid: item.startsWith('$'),
        haveComponents: false,
        components: {},

        toString() {
            return amount + 'x ' + item
        }
    }

    let nbtStartPos = item.indexOf('[')    
    if (nbtStartPos > 0) {
        let nbtString = item.slice(nbtStartPos).replace('[', '').replace(']', '').split('=')
        let componentTag = nbtString[0]
        let componentValue = Number(nbtString[1])
        dict.components[componentTag] = componentValue
        dict.haveComponents = true
        dict.item = dict.item.slice(0, nbtStartPos)
    }

    return dict
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
        } else if (entry.haveComponents) {
            val.items = entry.item
            val.components = entry.components
            val.type = "neoforge:components"
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
    }).id(recipeID(output.item.replace(':', '/') + '/engtable'))

    evt.remove({ output: output.item })
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

    if (type === IUMachineCraft.SOLID_ELECTROLYZER) {
        recipe.inputs.push({ "type": "fluid", "id": "minecraft:water", "amount": 1 })
        recipe.isFluidRecipe = true
    }

    for (let output of outputs) {
        let dict = {
            "type": "item",
            "id": output.item,
            "amount": output.count
        }
        if (output.isTag) {
            console.error('Wrong output item in IU recipe\nRecipe ID: ' + id)
            return
        }
        if (output.isFluid) {
            dict.type = "fluid"
            // recipe.isFluidRecipe = true
        }

        recipe.outputs.push(dict)
    }

    evt.custom(recipe).id(id + '/' + type)    
}

const aeAssemblerRecipe = (evt, id, input_fluid, input_items, output) => {
    let recipe = {
        "type": "extendedae:crystal_assembler",
        "input_fluid": {
            "amount": input_fluid.count,
            "ingredient": {
                "fluid": input_fluid.item
            }
        },
        "input_items": [],
        "output": {
            "count": output.count,
            "id": output.item
        }
    }

    if (input_fluid.isTag || !input_fluid.isFluid) {
        console.error("Recipe input fluid was not a Fluid in AE Assembler. Recipe ID: " + id)
        return
    }

    if (output.isTag || output.isFluid) {
        console.error("Recipe output was not an Item in AE Assembler. Recipe ID: " + id)
        return
    }

    for (let input of input_items) {
        let dict = {
            "amount": input.count,
            "ingredient": {}
        }

        if (input.isFluid) {
            console.error("Recipe input was a Fluid in AE Assembler. Recipe ID: " + id)
            continue
        }
        
        if (input.isTag) {
            dict.ingredient.tag = input.item
        } else {
            dict.ingredient.item = input.item
        }

        recipe.input_items.push(dict)
    }

    evt.custom(recipe).id(id + '/assembler')
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
            continue
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
    }).id(id + '/reaction')
}