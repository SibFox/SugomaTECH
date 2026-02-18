import crafttweaker.api.recipe.CraftingTableRecipeManager;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.ItemDefinition;
import crafttweaker.api.data.IData;
import crafttweaker.api.data.ListData;
import crafttweaker.api.data.MapData;
import crafttweaker.api.ingredient.IIngredient;
import crafttweaker.api.ingredient.IIngredientWithAmount;
import crafttweaker.api.util.random.Percentaged;
import crafttweaker.api.util.Many;
import crafttweaker.api.tag.type.KnownTag;
import stdlib.List;

// ~~~~~~~~~~ Resources ~~~~~~~~~~ 


// ~~~~~~~~~~ Minecraft / Global Tags ~~~~~~~~~~ 
var air = <item:minecraft:air>;

var diamond = <item:minecraft:diamond>;
var stones = <tag:item:c:stones>;
var rods = <tag:item:c:rods>;
var strings = <tag:item:c:strings>;
var planks = <tag:item:minecraft:planks>;
var bamboo = <item:minecraft:bamboo>;
var glass_block = <tag:item:c:glass_blocks>;
var glass_panel = <tag:item:c:glass_panes>;
var wool = <tag:item:minecraft:wool>;
var leather = <item:minecraft:leather>;

var redstone = <item:minecraft:redstone>;
var lapis = <item:minecraft:lapis_lazuli>;
var blaze_powder = <item:minecraft:blaze_powder>;
var glowstone_dust = <item:minecraft:glowstone_dust>;

var iron_nugget = <item:minecraft:iron_nugget>;

var copper_ingot = <item:minecraft:copper_ingot>;
var iron_ingot = <item:minecraft:iron_ingot>;
var gold_ingot = <item:minecraft:gold_ingot>;
var electrum_ingot = <tag:item:c:ingots/electrum>;
var red_alloy_ingot = <item:morered:red_alloy_ingot>;
var netherite_ingot = <item:minecraft:netherite_ingot>;

var copper_plate = <tag:item:c:plates/copper>;
var tin_plate = <tag:item:c:plates/tin>;
var iron_plate = <tag:item:c:plates/iron>;
var electrum_plate = <tag:item:c:plates/electrum>;
var bronze_plate = <tag:item:c:plates/bronze>;
var nichrome_plate = <tag:item:c:plates/nichrome>;
var cobalt_plate = <tag:item:c:plates/cobalt>;
var composite = <tag:item:c:plates/advancedalloy>;
var steel_plate = <tag:item:c:plates/steel>;
var alumel_plate = <tag:item:c:plates/alumel>;
var aluminumbronze_plate = <tag:item:c:plates/aluminumbronze>;
var duralumin_plate = <tag:item:c:plates/duralumin>;
var cobaltchrome_plate = <tag:item:c:plates/cobaltchrome>;
var molybdenumsteel_plate = <tag:item:c:plates/molybdenumsteel>;
var berylliumbronze_plate = <tag:item:c:plates/berylliumbronze>;

var invar_doubleplate = <tag:item:c:doubleplate/invar>;
var bronze_doubleplate = <tag:item:c:doubleplate/bronze>;
var electrum_doubleplate = <tag:item:c:doubleplate/electrum>;
var nichrome_doubleplate = <tag:item:c:doubleplate/nichrome>;
var obsidian_doubleplate = <tag:item:c:doubleplate/obsidian>;
var molybdenumsteel_doubleplate = <tag:item:c:doubleplate/molybdenumsteel>;
var berylliumbronze_doubleplate = <tag:item:c:doubleplate/berylliumbronze>;
var vanadoalumite_doubleplate = <tag:item:c:doubleplate/vanadoalumite>;
var nitenol_doubleplate = <tag:item:c:doubleplate/nitenol>;

var invar_gear = <tag:item:c:gears/invar>;
var alumel_gear = <tag:item:c:gears/alumel>; // Алюминид-титан

var electrum_rod = <tag:item:c:rods/electrum>;
var aluminium_rod = <tag:item:c:rods/aluminium>;
var titan_rod = <tag:item:c:rods/titanium>;
var tungsten_rod = <tag:item:c:rods/tungsten>;

var copper_block = <item:minecraft:copper_block>;
var iron_block = <item:minecraft:iron_block>;
var gold_block = <item:minecraft:gold_block>;
var diamond_block = <item:minecraft:diamond_block>;
var obsidian_block = <tag:item:c:obsidians>;

var slime_ball = <tag:item:c:slime_balls>;
var nether_star = <item:minecraft:nether_star>;

// ArPhEx

var time_prism = <item:arphex:time_prism>;
var time_prism_shard = <item:arphex:time_prism_shard>;


// ~~~~~~~~~~ Applied Energistics ~~~~~~~~~~ 
var ae_logic_processor = <item:ae2:logic_processor>;
var ae_calculation_processor = <item:ae2:calculation_processor>;
var ae_engineering_processor = <item:ae2:engineering_processor>;
var af_energy_processor = <item:appflux:energy_processor>;
var eae_concurrent_processor = <item:extendedae:concurrent_processor>;
var aae_quantum_processor = <item:advanced_ae:quantum_processor>;
var ae_energy_acceptor = <item:ae2:energy_acceptor>;
var ae_formation_core = <item:ae2:formation_core>;
var ae_annihilation_core = <item:ae2:annihilation_core>;

var ae_wireless_booster = <item:ae2:wireless_booster>; // Пойдёт в крафт модема CC

var ae_certus_quartz_crystal = <item:ae2:certus_quartz_crystal>;
var ae_charged_certus_quartz_crystal = <item:ae2:charged_certus_quartz_crystal>;

var ae_silicon = <item:ae2:silicon>;
var ae_printed_silicon = <item:ae2:printed_silicon>;
var ae_printed_calculation_processor = <item:ae2:printed_calculation_processor>;
var ae_printed_engineering_processor = <item:ae2:printed_engineering_processor>;
var ae_printed_logic_processor = <item:ae2:printed_logic_processor>;
var eae_printed_concurrent_processor = <item:extendedae:concurrent_processor_print>;


// ~~~~~~~~~~ Industrial Upgrade ~~~~~~~~~~ 
var iu_ec_level1 = <item:industrialupgrade:crafting_elements/crafting_272_element>.withJsonComponent(<componenttype:industrialupgrade:level_microchip>, 1);
var iu_ec_level2 = <item:industrialupgrade:crafting_elements/crafting_272_element>.withJsonComponent(<componenttype:industrialupgrade:level_microchip>, 2);
var iu_ec_level3 = <item:industrialupgrade:crafting_elements/crafting_273_element>.withJsonComponent(<componenttype:industrialupgrade:level_microchip>, 3);
var iu_ec_level4 = <item:industrialupgrade:crafting_elements/crafting_273_element>.withJsonComponent(<componenttype:industrialupgrade:level_microchip>, 4);
var iu_ec_level5 = <item:industrialupgrade:circuit/nanocircuit>.withJsonComponent(<componenttype:industrialupgrade:level_microchip>, 5);
var iu_ec_level6 = <item:industrialupgrade:circuit/nanocircuit>.withJsonComponent(<componenttype:industrialupgrade:level_microchip>, 6);
var iu_ec_level7 = <item:industrialupgrade:circuit/quantumcircuit>.withJsonComponent(<componenttype:industrialupgrade:level_microchip>, 7);
var iu_ec_level8 = <item:industrialupgrade:circuit/quantumcircuit>.withJsonComponent(<componenttype:industrialupgrade:level_microchip>, 8);
var iu_ec_level9 = <item:industrialupgrade:circuit/spectralcircuit>.withJsonComponent(<componenttype:industrialupgrade:level_microchip>, 9);
var iu_ec_level10 = <item:industrialupgrade:circuit/spectralcircuit>.withJsonComponent(<componenttype:industrialupgrade:level_microchip>, 10);
var iu_ec_level11 = <item:industrialupgrade:circuit/photoncircuit>.withJsonComponent(<componenttype:industrialupgrade:level_microchip>, 11);
var iu_ec_level12 = <item:industrialupgrade:circuit/photoncircuit>.withJsonComponent(<componenttype:industrialupgrade:level_microchip>, 12);

var iu_processor_1 = <item:industrialupgrade:crafting_elements/crafting_533_element>;
var iu_processor_2 = <item:industrialupgrade:crafting_elements/crafting_541_element>;
var iu_processor_3 = <item:industrialupgrade:crafting_elements/crafting_543_element>;

var iu_ram_256kb = <item:industrialupgrade:crafting_elements/crafting_542_element>;

var iu_controller = <item:industrialupgrade:crafting_elements/crafting_42_element>;
var iu_programmed_circuit_board = <item:industrialupgrade:crafting_elements/crafting_488_element>;

var iu_rubber = <item:industrialupgrade:crafting_elements/crafting_271_element>;
var iu_wire_copper = <item:industrialupgrade:wiring/copper>;
var iu_wire_copper_isolated = <item:industrialupgrade:wiring/copper1>;
var iu_wire_tin = <item:industrialupgrade:wiring/tin>;
var iu_wire_tin_isolated = <item:industrialupgrade:wiring/tin1>;
var iu_wire_iron = <item:industrialupgrade:wiring/iron>;
var iu_wire_iron_isolated = <item:industrialupgrade:wiring/iron1>;
var iu_wire_gold = <item:industrialupgrade:wiring/gold>;
var iu_wire_gold_isolated = <item:industrialupgrade:wiring/gold1>;
var iu_wire_glass = <item:industrialupgrade:wiring/glass_1>;
var iu_graphene_wire = <item:industrialupgrade:graphene_wire>;

var iu_spool_1 = <item:industrialupgrade:crafting_elements/crafting_356_element>;
var iu_spool_2 = <item:industrialupgrade:crafting_elements/crafting_424_element>;
var iu_plastic_plate = <item:industrialupgrade:plastic_plate>;

var iu_corpus_cover = <item:industrialupgrade:crafting_elements/crafting_137_element>;
var iu_corpus_cover_2 = <item:industrialupgrade:crafting_elements/crafting_138_element>;
var iu_machine_corpus = <item:industrialupgrade:blockresource/machine>;
var iu_machine_corpus_2 = <item:industrialupgrade:blockresource/advanced_machine>;
var iu_base_generator = <item:industrialupgrade:basemachine3/generator_iu>;
var iu_upgrade_casing = <item:industrialupgrade:upgrade_casing>;
var iu_rotor_iron_model = <item:industrialupgrade:windrod/iron_rotor_model>;
var iu_rotor_steel_model = <item:industrialupgrade:windrod/steel_rotor_model>;
var iu_rotor_iron_core = <item:industrialupgrade:corewind/core_wind2>;

var iu_cylinder = <item:industrialupgrade:crafting_elements/crafting_46_element>;
var iu_cooling_cylinder = <item:industrialupgrade:crafting_elements/crafting_72_element>;
var iu_heating_cylinder = <item:industrialupgrade:crafting_elements/crafting_70_element>;

var iu_charged_quartz = <item:industrialupgrade:charged_quartz>;
var iu_quartz_dust = <item:industrialupgrade:itemdust/quartz_dust>;
var iu_charged_redstone = <item:industrialupgrade:charged_redstone>;

var iu_calcium_phosphate_dust = <item:industrialupgrade:itemdust/calcium_phosphate_dust>;
var iu_potassium_dust = <item:industrialupgrade:itemdust/potassium_dust>;
var iu_silicon_dust = <item:industrialupgrade:itemdust/silicon_dust>;

var iu_carbon = <item:industrialupgrade:crafting_elements/crafting_282_element>;
var iu_electromotor = <item:industrialupgrade:crafting_elements/crafting_276_element>;
var iu_electromotor_advanced = <item:industrialupgrade:crafting_elements/crafting_20_element>;
var iu_electromotor_with_bearings = <item:industrialupgrade:motors_with_improved_bearings_>;
var iu_autopower_module = <item:industrialupgrade:crafting_elements/crafting_713_element>;
var iu_lead_battery = <item:industrialupgrade:battery/advanced_re_battery>;
var iu_lithium_battery = <item:industrialupgrade:battery/re_battery>;
var iu_power_slot = <item:industrialupgrade:crafting_elements/crafting_593_element>;
var iu_capacitor_advanced = <item:industrialupgrade:circuit/advanced_part1>;
var iu_transistor_advanced = <item:industrialupgrade:crafting_elements/crafting_426_element>;
var iu_tube_scheme = <item:industrialupgrade:crafting_elements/crafting_122_element>;
var iu_laser_component = <item:industrialupgrade:crafting_elements/crafting_354_element>;
var iu_power_unit = <item:industrialupgrade:crafting_elements/crafting_279_element>;
var iu_energy_dust = <item:industrialupgrade:itemdust/energium_dust>;
var iu_energy_crystal = <item:industrialupgrade:battery/energy_crystal>;
var iu_energy_crystal_2 = <item:industrialupgrade:battery/lapotron_crystal>;
var iu_nanobox = <item:industrialupgrade:nanobox>;
var iu_drilling_bit_nano = <item:industrialupgrade:crafting_elements/crafting_517_element>;
var iu_moleculare_core = <item:industrialupgrade:itemiucrafring/itemmtcore>;

var iu_upgrade_overclocker = <item:industrialupgrade:upgrades/overclocker>;

var iu_sensor_template = <item:industrialupgrade:crafting_elements/crafting_21_element>;
var iu_sensor_slot_1x = <item:industrialupgrade:crafting_elements/crafting_44_element>;
var iu_sensor_slot_2x = <item:industrialupgrade:crafting_elements/crafting_47_element>;
var iu_sensor_slot_3x = <item:industrialupgrade:crafting_elements/crafting_49_element>;
var iu_sensor_slot_4x = <item:industrialupgrade:crafting_elements/crafting_51_element>;
var iu_sensor_slot_8x = <item:industrialupgrade:crafting_elements/crafting_52_element>;
var iu_sensor_scaner = <item:industrialupgrade:crafting_elements/crafting_170_element>;
var iu_sensor_scaner_2 = <item:industrialupgrade:crafting_elements/crafting_171_element>;
var iu_sensor_wireless = <item:industrialupgrade:crafting_elements/crafting_90_element>;
var iu_sensor_energy = <item:industrialupgrade:crafting_elements/crafting_60_element>;
var iu_sensor_energy_2 = <item:industrialupgrade:crafting_elements/crafting_614_element>;
var iu_sensor_generator = <item:industrialupgrade:crafting_elements/crafting_11_element>;
var iu_sensor_generator_2 = <item:industrialupgrade:crafting_elements/crafting_234_element>;
var iu_sensor_analyzer = <item:industrialupgrade:crafting_elements/crafting_226_element>;
var iu_sensor_liquid = <item:industrialupgrade:crafting_elements/crafting_27_element>;
var iu_sensor_tank = <item:industrialupgrade:crafting_elements/crafting_43_element>;
var iu_sensor_tank_2 = <item:industrialupgrade:crafting_elements/crafting_45_element>;
var iu_sensor_tank_3 = <item:industrialupgrade:crafting_elements/crafting_48_element>;
var iu_sensor_tank_4 = <item:industrialupgrade:crafting_elements/crafting_50_element>;
var iu_sensor_tank_storage = <item:industrialupgrade:crafting_elements/crafting_154_element>;
var iu_sensor_extractor_2 = <item:industrialupgrade:crafting_elements/crafting_160_element>;
var iu_sensor_transformation = <item:industrialupgrade:crafting_elements/crafting_75_element>;
var iu_sensor_combining = <item:industrialupgrade:crafting_elements/crafting_124_element>;
var iu_sensor_combining_2 = <item:industrialupgrade:crafting_elements/crafting_135_element>;
var iu_sensor_upgrade = <item:industrialupgrade:crafting_elements/crafting_66_element>;
var iu_sensor_downgrade = <item:industrialupgrade:crafting_elements/crafting_67_element>;
var iu_sensor_circuit = <item:industrialupgrade:crafting_elements/crafting_73_element>;
var iu_sensor_potion = <item:industrialupgrade:crafting_elements/crafting_661_element>;
var iu_sensor_brewing = <item:industrialupgrade:crafting_elements/crafting_658_element>;
var iu_sensor_heat = <item:industrialupgrade:crafting_elements/crafting_39_element>;
var iu_sensor_heat_2 = <item:industrialupgrade:crafting_elements/crafting_15_element>;
var iu_sensor_day = <item:industrialupgrade:crafting_elements/crafting_37_element>;
var iu_sensor_night = <item:industrialupgrade:crafting_elements/crafting_30_element>;
var iu_sensor_preservation = <item:industrialupgrade:crafting_elements/crafting_264_element>;
var iu_sensor_dna = <item:industrialupgrade:crafting_elements/crafting_676_element>;
var iu_sensor_genetics = <item:industrialupgrade:crafting_elements/crafting_659_element>;
var iu_sensor_speed = <item:industrialupgrade:crafting_elements/crafting_155_element>;
var iu_sensor_synthesis = <item:industrialupgrade:crafting_elements/crafting_100_element>;
var iu_sensor_bio_2 = <item:industrialupgrade:crafting_elements/crafting_19_element>;

var iu_iron_disk = <item:industrialupgrade:crafting_elements/crafting_572_element>;

var iu_wolframite_ingot = <item:industrialupgrade:wolframite>;
var iu_titanium_steel_ingot = <item:industrialupgrade:crafting_elements/crafting_504_element>;

var iu_titanium_steel_plate = <item:industrialupgrade:crafting_elements/crafting_501_element>;
var iu_niobium_titanium_alloy_plate = <item:industrialupgrade:alloyplate/niobium_titanium>;
var iu_red_brass_alloy_plate = <item:industrialupgrade:alloyplate/red_brass>;


// ~~~~~~~~~~ Computer Craft ~~~~~~~~~~ 
var ccap_casing = <item:advancedperipherals:peripheral_casing>;
var cc_computer = <item:computercraft:computer_normal>;
var cc_computer_advanced = <item:computercraft:computer_advanced>;
var cc_computer_pocket = <item:computercraft:pocket_computer_normal>;
var cc_computer_pocket_advanced = <item:computercraft:pocket_computer_advanced>;
var cc_turtle = <item:computercraft:turtle_normal>;
var cc_turtle_advanced = <item:computercraft:turtle_advanced>;
var cc_cable = <item:computercraft:cable>;
var cc_wired_modem = <item:computercraft:wired_modem>;


// ~~~~~~~~~~ Phasorite Networks ~~~~~~~~~~ 
// var pn_crystal = <item:phasoritenetworks:phasorite_crystal>;
// var pn_charged_crystal = <item:phasoritenetworks:charged_phasorite_crystal>;
// var pn_lens = <item:phasoritenetworks:phasorite_lens>;
// var pn_core = <item:phasoritenetworks:phasorite_core>;


// ~~~~~~~~~~ Create / Create: Crafts & Additions ~~~~~~~~~~
// var c_shaft = <item:create:shaft>;
// var c_andesite_alloy = <item:create:andesite_alloy>;
// var c_brass_casing = <item:create:brass_casing>;
// var cca_spool = <item:createaddition:spool>;
// var cca_copper_spool = <item:createaddition:copper_spool>;
// var cca_gold_spool = <item:createaddition:gold_spool>;
// var cca_electrum_spool = <item:createaddition:electrum_spool>;
// var cca_connector = <item:createaddition:connector>;


// ~~~~~~~~~~ Immersive Aircraft/Machinery ~~~~~~~~~~ 
// var ia_engine = <item:immersive_aircraft:engine>;
// var ia_boiler = <item:immersive_aircraft:boiler>;
// var ia_propeller = <item:immersive_aircraft:propeller>;
// var ia_sail = <item:immersive_aircraft:sail>;
// var ia_hull = <item:immersive_aircraft:hull>;
// var ia_redstone_mechanism = <item:immersive_machinery:redstone_mechanism>;


// ~~~~~~~~~~ Genetics Resequenced ~~~~~~~~~~ 
// var gr_cell = <item:geneticsresequenced:gmo_cell>;


// ~~~~~~~~~~ Point Blank ~~~~~~~~~~ 
// var pb_kamicat_p = <item:pointblank:processor>;
// var pb_gunmetal_ingot = <item:pointblank:gunmetal_ingot>;
// var pb_guninternals = <item:pointblank:guninternals>;


// ~~~~~~~~~~ Modular Force Fields System ~~~~~~~~~~ 
// var mffs_focus_matrix = <item:mffs:focus_matrix>;
// var mffs_blank_card = <item:mffs:blank_card>;








// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Crafts ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~ Minecraft ~~~~~~~~~~ 

// craftingTable.addShaped("minecraft/saddle", <item:minecraft:saddle>,
// [
//   [ air, leather, air ],
//   [ leather, iron_ingot, leather ],
//   [ air, air, air ]
// ]);


// ~~~~~~~~~~ Industrial Upgrade ~~~~~~~~~~ 

// craftingTable.remove(<item:industrialupgrade:wiring/itemcable23>); // Кобальтовая труба
// craftingTable.remove(<item:industrialupgrade:wiring/itemcable22>); // Входная труба

// craftingTable.addShaped("iu/cobalt_pipe", <item:industrialupgrade:wiring/itemcable23> * 6,
// [
//   [ cobalt_plate, cobalt_plate, cobalt_plate ],
//   [ air, nichrome_plate, air ],
//   [ cobalt_plate, cobalt_plate, cobalt_plate ]
// ]);

// craftingTable.addShaped("iu/cobalt_pipe_entering", <item:industrialupgrade:wiring/itemcable22> * 6,
// [
//   [ cobalt_plate, cobalt_plate, cobalt_plate ],
//   [ lapis, nichrome_plate, lapis ],
//   [ cobalt_plate, cobalt_plate, cobalt_plate ]
// ]);

// craftingTable.remove(<item:industrialupgrade:wiring/itemcable26>); // Кобальто-хромовая труба
// craftingTable.remove(<item:industrialupgrade:wiring/itemcable25>); // Входная труба

// craftingTable.addShaped("iu/cobaltchrome_pipe", <item:industrialupgrade:wiring/itemcable26> * 6,
// [
//   [ cobaltchrome_plate, cobaltchrome_plate, cobaltchrome_plate ],
//   [ air, iu_tube_scheme, air ],
//   [ cobaltchrome_plate, cobaltchrome_plate, cobaltchrome_plate ]
// ]);

// craftingTable.addShaped("iu/cobaltchrome_pipe_entering", <item:industrialupgrade:wiring/itemcable25> * 6,
// [
//   [ cobaltchrome_plate, cobaltchrome_plate, cobaltchrome_plate ],
//   [ lapis, iu_tube_scheme, lapis ],
//   [ cobaltchrome_plate, cobaltchrome_plate, cobaltchrome_plate ]
// ]);

// craftingTable.addShaped("iu/casing_2", <item:industrialupgrade:crafting_elements/crafting_138_element>,
// [
//   [ iu_corpus_cover, electrum_plate ],
//   [ iu_plastic_plate, iu_plastic_plate ]
// ]);

// craftingTable.addShapeless("iu/polonium_raw_block_to_raw", <item:industrialupgrade:raw_metals/raw_polonium> * 9,
// [ <item:industrialupgrade:raw_block/raw_polonium> ]);

// craftingTable.addShapeless("iu/thallium_raw_block_to_raw", <item:industrialupgrade:raw_metals/raw_thallium> * 9,
// [ <item:industrialupgrade:raw_block/raw_thallium> ]);

// craftingTable.addShapeless("iu/strontium_raw_block_to_raw", <item:industrialupgrade:raw_metals/raw_strontium> * 9,
// [ <item:industrialupgrade:raw_block/raw_strontium> ]);

// craftingTable.addShapeless("iu/zirconium_raw_block_to_raw", <item:industrialupgrade:raw_metals/raw_zirconium> * 9,
// [ <item:industrialupgrade:raw_block/raw_zirconium> ]);

// ~~~~~~~~~~ Applied Energistics ~~~~~~~~~~ 

// craftingTable.addShaped("ae2/vibration_chamber", <item:ae2:vibration_chamber>,
// [
//     [ iron_ingot,   iron_ingot,          iron_ingot ],
//     [ iron_ingot,   iu_base_generator,   iron_ingot ],
//     [ iron_ingot,   ae_energy_acceptor,  iron_ingot ]
// ]);

// craftingTable.addShaped("ae2/certus_quartz_crystal", <item:ae2:certus_quartz_crystal> * 8,
// [
//     [ iu_quartz_dust,    iu_charged_quartz,  iu_quartz_dust    ],
//     [ iu_charged_quartz, iu_quartz_dust,     iu_charged_quartz ],
//     [ iu_quartz_dust,    iu_charged_quartz,  iu_quartz_dust    ]
// ]);

// craftingTable.addShapeless("ae2/charged_certus_quartz_crystal", <item:ae2:charged_certus_quartz_crystal>,
// [ ae_certus_quartz_crystal, iu_charged_redstone]);

// craftingTable.addShapeless("ae2/fluix_crystal", <item:ae2:fluix_crystal> * 2,
// [ iu_charged_quartz, iu_charged_redstone, ae_charged_certus_quartz_crystal]);

// craftingTable.addShapeless("ae2/silicon_x4", <item:ae2:silicon> * 4,
// [ iu_calcium_phosphate_dust, iu_silicon_dust ]);

// craftingTable.addShapeless("ae2/silicon_x8", <item:ae2:silicon> * 8,
// [ iu_potassium_dust, iu_silicon_dust, iu_silicon_dust, iu_silicon_dust, iu_silicon_dust]);

// craftingTable.addShaped("ae2/calculation_processor", <item:ae2:calculation_processor> * 6,
// [
//     [ air,                      ae_printed_silicon, air ],
//     [ ae_printed_calculation_processor, iu_processor_1,     ae_printed_calculation_processor ],
//     [ air,                      ae_printed_silicon, air ]
// ]);

// craftingTable.addShaped("ae2/logic_processor", <item:ae2:logic_processor> * 6,
// [
//     [ air,        ae_printed_silicon, air ],
//     [ ae_printed_logic_processor, iu_processor_1,     ae_printed_logic_processor ],
//     [ air,        ae_printed_silicon, air ]
// ]);

// craftingTable.addShaped("ae2/engineering_processor", <item:ae2:engineering_processor> * 6,
// [
//     [ air,     ae_printed_silicon, air ],
//     [ ae_printed_engineering_processor, iu_processor_2,     ae_printed_engineering_processor ],
//     [ air,     ae_printed_silicon, air ]
// ]);

// craftingTable.addShaped("ae2/concurrent_processor", <item:extendedae:concurrent_processor> * 6,
// [
//     [ air,     ae_printed_silicon, air ],
//     [ eae_printed_concurrent_processor, iu_processor_2,     eae_printed_concurrent_processor ],
//     [ air,     ae_printed_silicon, air ]
// ]);


// ~~~~~~~~~~ Computer Craft / Advanced Peripheral ~~~~~~~~~~ 

var ccCopyComputerIDVarFunction as function(usualOut as IItemStack, inputs as IItemStack[][]) as IItemStack = (usualOut, inputs) => {
    var inp = inputs[1][1] as IData; 
    var id = -1;
    if ("components" in inp["base"]["item"]) {
        id = inp["base"]["item"]["components"]["computercraft:computer_id"].asInt();
    }
    // println(inp.getAsString());
    if (id > 0) {
        //println("Upgraded to Advanced computer with id " + id);
        return usualOut.withJsonComponent(<componenttype:computercraft:computer_id>, id);
    }
    return usualOut;
};


// craftingTable.remove(cc_computer);
// craftingTable.remove(cc_computer_advanced);

// craftingTable.addShaped("cc/computer_normal", cc_computer,
// [
//     [ iu_wire_copper_isolated, iu_ec_level1, iu_wire_copper_isolated ],
//     [ glass_panel, ccap_casing, glass_panel ],
//     [ iu_wire_copper_isolated, iu_autopower_module, iu_wire_copper_isolated]
// ]);

// craftingTable.addShaped("cc/computer_advanced", cc_computer_advanced,
// [
//     [ iu_wire_gold_isolated, iu_ec_level3, iu_wire_gold_isolated ],
//     [ glass_panel, ccap_casing, glass_panel ],
//     [ iu_wire_gold_isolated, iu_autopower_module, iu_wire_gold_isolated ]
// ]);

craftingTable.addShaped("cc/computer_advanced_upgrade", cc_computer_advanced,
[
    [ iu_wire_gold_isolated, iu_ec_level3, iu_wire_gold_isolated ],
    [ air, cc_computer, air ],
    [ iu_wire_gold_isolated, air, iu_wire_gold_isolated ]
], ccCopyComputerIDVarFunction);


// craftingTable.remove(cc_computer_pocket);
// craftingTable.remove(cc_computer_pocket_advanced);

// craftingTable.addShaped("cc/pocket_computer_normal", cc_computer_pocket,
// [
//     [ iu_wire_copper_isolated, iu_ec_level1, iu_wire_copper_isolated ],
//     [ iu_corpus_cover, glass_panel, iu_corpus_cover ],
//     [ iu_wire_copper_isolated, iu_autopower_module, iu_wire_copper_isolated]
// ]);

// craftingTable.addShaped("cc/pocket_computer_advanced", cc_computer_pocket_advanced,
// [
//     [ iu_wire_gold_isolated, iu_ec_level3, iu_wire_gold_isolated ],
//     [ iu_corpus_cover, glass_panel, iu_corpus_cover ],
//     [ iu_wire_gold_isolated, iu_autopower_module, iu_wire_gold_isolated ]
// ]);

craftingTable.addShaped("cc/pocket_computer_advanced_upgrade", cc_computer_pocket_advanced,
[
    [ iu_wire_gold_isolated, iu_ec_level3, iu_wire_gold_isolated ],
    [ air, cc_computer_pocket, air ],
    [ iu_wire_gold_isolated, air, iu_wire_gold_isolated ]
], ccCopyComputerIDVarFunction);



// craftingTable.remove(cc_turtle);
// craftingTable.remove(cc_turtle_advanced);

// craftingTable.addShaped("cc/turtle_normal", cc_turtle,
// [
//     [ iu_wire_copper_isolated, iu_ec_level2, iu_wire_copper_isolated ],
//     [ iu_sensor_slot_8x, ccap_casing, iu_sensor_slot_8x ],
//     [ iu_wire_copper_isolated, iu_lead_battery, iu_wire_copper_isolated]
// ]);

// craftingTable.addShaped("cc/turtle_advanced", cc_turtle_advanced,
// [
//     [ iu_wire_gold_isolated, iu_ec_level4, iu_wire_gold_isolated ],
//     [ iu_sensor_slot_8x, ccap_casing, iu_sensor_slot_8x ],
//     [ iu_wire_gold_isolated, iu_lead_battery, iu_wire_gold_isolated ]
// ]);

craftingTable.addShaped("cc/turtle_advanced_upgrade", cc_turtle_advanced,
[
    [ iu_wire_gold_isolated, iu_ec_level4, iu_wire_gold_isolated ],
    [ air,                   cc_turtle,     air ],
    [ iu_wire_gold_isolated, air, iu_wire_gold_isolated ]
], ccCopyComputerIDVarFunction);


// craftingTable.remove(<item:computercraft:monitor_normal>);
// craftingTable.remove(<item:computercraft:monitor_advanced>);

// craftingTable.addShaped("cc/monitor_normal", <item:computercraft:monitor_normal> * 6,
// [
//     [ iu_corpus_cover, iu_wire_copper_isolated, iu_corpus_cover ],
//     [ iu_wire_copper_isolated, glass_panel, iu_wire_copper_isolated],
//     [ iu_corpus_cover, iu_wire_copper_isolated, iu_corpus_cover ]
// ]);

// craftingTable.addShaped("cc/monitor_advanced", <item:computercraft:monitor_advanced> * 6,
// [
//     [ iu_corpus_cover, iu_wire_gold_isolated, iu_corpus_cover ],
//     [ iu_wire_gold_isolated, glass_panel, iu_wire_gold_isolated],
//     [ iu_corpus_cover, iu_wire_gold_isolated, iu_corpus_cover ]
// ]);


// craftingTable.remove(<item:computercraft:cable>);

// craftingTable.addShaped("cc/cable", <item:computercraft:cable> * 12,
// [
//     [ copper_plate, copper_plate, copper_plate ],
//     [ redstone, electrum_plate, redstone],
//     [ copper_plate, copper_plate, copper_plate ]
// ]);


// craftingTable.removeByName("computercraft:wired_modem");

// craftingTable.addShaped("cc/wired_modem", cc_wired_modem,
// [
//     [ iron_plate, redstone, iron_plate ],
//     [ cc_cable, electrum_plate, cc_cable],
//     [ iron_plate, redstone, iron_plate ]
// ]);


// craftingTable.remove(<item:computercraft:wireless_modem_normal>);
// craftingTable.remove(<item:computercraft:wireless_modem_advanced>);

// craftingTable.addShaped("cc/wireless_modem_normal", <item:computercraft:wireless_modem_normal>,
// [
//     [ iu_wire_copper, air, iu_wire_copper],
//     [ iron_plate, ae_wireless_booster, iron_plate ],
//     [ air, iu_wire_copper, air]
// ]);

// craftingTable.addShaped("cc/wireless_modem_advanced", <item:computercraft:wireless_modem_advanced>,
// [
//     [ iu_wire_gold, air, iu_wire_gold],
//     [ electrum_plate, ae_wireless_booster, electrum_plate ],
//     [ air, iu_wire_gold, air]
// ]);


// craftingTable.remove(<item:computercraft:redstone_relay>);

// craftingTable.addShaped("cc/redstone_relay", <item:computercraft:redstone_relay>,
// [
//     [ iu_corpus_cover, red_alloy_ingot, iu_corpus_cover ],
//     [ red_alloy_ingot, cc_wired_modem, red_alloy_ingot ],
//     [ iu_corpus_cover, red_alloy_ingot, iu_corpus_cover ]
// ]);


// craftingTable.remove(<item:computercraft:disk_drive>);
// craftingTable.remove(<item:computercraft:speaker>);
// craftingTable.remove(<item:computercraft:printer>);

// craftingTable.addShaped("cc/disk_drive", <item:computercraft:disk_drive>,
// [
//     [ iu_wire_copper_isolated, red_alloy_ingot, iu_wire_copper_isolated ],
//     [ iu_wire_copper_isolated, iu_iron_disk, iu_wire_copper_isolated ],
//     [ iu_autopower_module, ccap_casing, iu_power_slot ]
// ]);

// craftingTable.addShaped("cc/speaker", <item:computercraft:speaker>,
// [
//     [ iu_wire_copper_isolated, red_alloy_ingot, iu_wire_copper_isolated ],
//     [ iu_wire_copper_isolated, <item:minecraft:note_block>, iu_wire_copper_isolated ],
//     [ iu_autopower_module, ccap_casing, iu_power_slot ]
// ]);

// craftingTable.addShaped("cc/printer", <item:computercraft:printer>,
// [
//     [ iu_wire_copper_isolated, red_alloy_ingot, iu_wire_copper_isolated ],
//     [ iu_wire_copper_isolated, iu_sensor_slot_1x, iu_wire_copper_isolated ],
//     [ iu_autopower_module, ccap_casing, iu_power_slot ]
// ]);




// craftingTable.remove(ccap_casing);

// craftingTable.addShaped("cc_ap/peripheral_casing", ccap_casing,
// [
//     [ aluminium_rod, iron_plate, aluminium_rod ],
//     [ iron_plate, iu_machine_corpus, iron_plate ],
//     [ aluminium_rod, iron_plate, aluminium_rod ]
// ]);

// craftingTable.remove(<item:advancedperipherals:player_detector>);

// craftingTable.addShaped("cc_ap/player_detector", <item:advancedperipherals:player_detector>,
// [
//     [ iu_wire_gold_isolated, red_alloy_ingot, iu_wire_gold_isolated ],
//     [ iu_wire_gold_isolated, iu_sensor_scaner, iu_wire_gold_isolated ],
//     [ iu_autopower_module, ccap_casing, iu_power_slot ]
// ]);

// craftingTable.addShaped("cc_ap/peripheral_casing", <item:advancedperipherals:peripheral_casing>,
// [
//     [ aluminium_rod, iu_programmed_circuit_board, aluminium_rod ],
//     [ iu_ram_256kb, iu_machine_corpus, iu_ram_256kb ],
//     [ aluminium_rod, iu_processor_2, aluminium_rod ]
// ]);



// craftingTable.remove(<item:computercraft:turtle_normal>);





// ~~~~~~~~~~ Wireless Chargers / Phasorite Networks ~~~~~~~~~~ 

// craftingTable.removeByModid("wirelesschargers");

// craftingTable.addShaped("wc/base_player", <item:wirelesschargers:basic_wireless_player_charger>,
// [
//     [ iu_sensor_wireless, iu_electromotor, blaze_powder ],
//     [ electrum_ingot, ae_wireless_booster, electrum_ingot ],
//     [ electrum_ingot, iu_machine_corpus, electrum_ingot ]
// ]);

// craftingTable.addShaped("wc/advanced_player", <item:wirelesschargers:advanced_wireless_player_charger>,
// [
//     [ air, iu_electromotor_advanced, air ],
//     [ electrum_plate, <item:wirelesschargers:basic_wireless_player_charger>, electrum_plate ],
//     [ electrum_plate, iu_machine_corpus_2, electrum_plate ]
// ]);

// craftingTable.addShaped("wc/base_block", <item:wirelesschargers:basic_wireless_block_charger>,
// [
//     [ iu_sensor_wireless, iu_electromotor, glowstone_dust ],
//     [ electrum_ingot, ae_wireless_booster, electrum_ingot ],
//     [ electrum_ingot, iu_machine_corpus, electrum_ingot ]
// ]);

// craftingTable.addShaped("wc/advanced_block", <item:wirelesschargers:advanced_wireless_block_charger>,
// [
//     [ air, iu_electromotor_advanced, air ],
//     [ electrum_plate, <item:wirelesschargers:basic_wireless_block_charger>, electrum_plate ],
//     [ electrum_plate, iu_machine_corpus_2, electrum_plate ]
// ]);

// craftingTable.removeByName("phasoritenetworks:phasorite_exporter");
// craftingTable.removeByName("phasoritenetworks:phasorite_importer");

// craftingTable.addShaped("pn/exporter", <item:phasoritenetworks:phasorite_exporter>,
// [
//     [ pn_charged_crystal, pn_lens, pn_charged_crystal ],
//     [ iu_sensor_wireless, pn_core, iu_sensor_energy ],
//     [ iu_machine_corpus_2, red_alloy_ingot, iu_machine_corpus_2 ]
// ]);

// craftingTable.addShaped("pn/importer", <item:phasoritenetworks:phasorite_importer>,
// [
//     [ pn_charged_crystal, red_alloy_ingot, pn_charged_crystal ],
//     [ iu_sensor_wireless, pn_core, iu_sensor_energy ],
//     [ iu_machine_corpus_2, pn_lens, iu_machine_corpus_2 ]
// ]);



// ~~~~~~~~~~ Backpacks ~~~~~~~~~~ 

  // craftingTable.addShaped("sb/backpack", <item:sophisticatedbackpacks:backpack>,
  // [
  //   [ leather, diamond, leather ],
  //   [ titan_rod, <item:minecraft:chest>, titan_rod ],
  //   [ leather, diamond, leather ]
  // ]);

// craftingTable.addShaped("sb/copper_bakcpack", <item:sophisticatedbackpacks:copper_backpack>,
// [
//     [ copper_block, copper_block, copper_block ],
//     [ copper_block, <item:sophisticatedbackpacks:backpack>, copper_block ],
//     [ copper_block, copper_block, copper_block]
// ]);

// craftingTable.addShaped("sb/iron_bakcpack", <item:sophisticatedbackpacks:iron_backpack>,
// [
//     [ iron_block, iron_block, iron_block ],
//     [ iron_block, <item:sophisticatedbackpacks:copper_backpack>, iron_block ],
//     [ iron_block, iron_block, iron_block]
// ]);

// craftingTable.addShaped("sb/gold_bakcpack", <item:sophisticatedbackpacks:gold_backpack>,
// [
//     [ gold_block, gold_block, gold_block ],
//     [ gold_block, <item:sophisticatedbackpacks:iron_backpack>, gold_block ],
//     [ gold_block, gold_block, gold_block]
// ]);

// craftingTable.addShaped("sb/diamond_bakcpack", <item:sophisticatedbackpacks:diamond_backpack>,
// [
//     [ diamond_block, diamond_block, diamond_block ],
//     [ diamond_block, <item:sophisticatedbackpacks:gold_backpack>, diamond_block ],
//     [ diamond_block, diamond_block, diamond_block]
// ]);

// // SmithingRecipeManager.addTransformRecipe(recipeName as string, result as IItemStack, template as IIngredient, base as IIngredient, addition as IIngredient);
// smithing.addTransformRecipe("sb/netherite_backpack", <item:sophisticatedbackpacks:netherite_backpack>, <item:minecraft:netherite_upgrade_smithing_template>, <item:sophisticatedbackpacks:diamond_backpack>, <item:minecraft:netherite_block>);


// ~~~~~~~~~~ Create / Create: Crafts & Additions ~~~~~~~~~~

// craftingTable.addShaped("cca/copper_spool", cca_copper_spool,
// [
//     [ air, iu_wire_copper, air ],
//     [ iu_wire_copper, cca_spool, iu_wire_copper ],
//     [ air, iu_wire_copper, air ],
// ]);

// craftingTable.addShaped("cca/gold_spool", cca_gold_spool,
// [
//     [ air, iu_wire_gold, air ],
//     [ iu_wire_gold, cca_spool, iu_wire_gold ],
//     [ air, iu_wire_gold, air ],
// ]);

// craftingTable.addShaped("cca/electrum_spool", cca_electrum_spool,
// [
//     [ air, iu_wire_gold_isolated, air ],
//     [ iu_wire_gold_isolated, cca_spool, iu_wire_gold_isolated ],
//     [ air, iu_wire_gold_isolated, air ],
// ]);

// craftingTable.remove(<item:createaddition:modular_accumulator>);

// craftingTable.addShaped("cca/accumulator", <item:createaddition:modular_accumulator>,
// [
//     [ air, electrum_rod, air ],
//     [ iu_capacitor_advanced, c_brass_casing, iu_capacitor_advanced ],
//     [ iu_lead_battery, iu_lead_battery, iu_lead_battery ]
// ]);

// craftingTable.remove(<item:createaddition:connector>);
// craftingTable.remove(<item:createaddition:small_light_connector>);
// craftingTable.remove(<item:createaddition:large_connector>);

// craftingTable.addShaped("cca/connector", cca_connector,
// [
//     [ air, c_andesite_alloy, air ],
//     [ c_andesite_alloy, iu_spool_1, c_andesite_alloy],
//     [ air, c_andesite_alloy, air ]
// ]);

// craftingTable.addShaped("cca/large_connector", <item:createaddition:large_connector>,
// [
//     [ air, c_andesite_alloy, air ],
//     [ c_andesite_alloy, iu_spool_2, c_andesite_alloy],
//     [ air, c_andesite_alloy, air ]
// ]);

// craftingTable.addShaped("cca/straw", <item:createaddition:straw>,
// [
//   [ bamboo, bamboo ],
//   [ bamboo ],
//   [ bamboo ]
// ]);

// craftingTable.addShapeless("cca/small_light_connector", <item:createaddition:small_light_connector>,
// [ iu_wire_tin, glass_block, cca_connector ]);

// <recipetype:create:mechanical_crafting>.remove(<item:createaddition:electric_motor>);
// <recipetype:create:mechanical_crafting>.remove(<item:createaddition:alternator>);
// <recipetype:create:mechanical_crafting>.remove(<item:createaddition:tesla_coil>);

// <recipetype:create:mechanical_crafting>.addJsonRecipe("cca/alternator", {
//   "type": "create:mechanical_crafting",
//   "accept_mirrored": true,
//   "category": "misc",
//   "key": {
//     "A": {
//       "item": "create:andesite_alloy"
//     },
//     "C": {
//       "item": "industrialupgrade:crafting_elements/crafting_426_element" //Улучшенный транзистор
//     },
//     "I": {
//       "item": "industrialupgrade:crafting_elements/crafting_501_element" // Пластина обработаной титановой стали
//     },
//     "R": {
//       "item": "create:shaft"
//     },
//     "S": {
//       "item": "industrialupgrade:crafting_elements/crafting_424_element" // Улучшеная катушка
//     }
//   },
//   "pattern": [
//     "  A  ",
//     " ISI ",
//     "ISRSI",
//     " ICI "
//   ],
//   "result": {
//     "count": 1,
//     "id": "createaddition:alternator"
//   }
// });

// <recipetype:create:mechanical_crafting>.addJsonRecipe("cca/electric_motor", {
//   "type": "create:mechanical_crafting",
//   "accept_mirrored": true,
//   "category": "misc",
//   "key": {
//     "A": {
//       "item": "create:andesite_alloy"
//     },
//     "B": {
//       "item": "industrialupgrade:alloyplate/alumel"
//     },
//     "C": {
//       "item": "industrialupgrade:crafting_elements/crafting_426_element" //Улучшенный транзистор
//     },
//     "R": {
//       "item": "create:shaft"
//     },
//     "S": {
//       "item": "industrialupgrade:crafting_elements/crafting_424_element" // Улучшеная катушка
//     }
//   },
//   "pattern": [
//     "  A  ",
//     " BSB ",
//     "BSRSB",
//     " BCB "
//   ],
//   "result": {
//     "count": 1,
//     "id": "createaddition:electric_motor"
//   }
// });

// <recipetype:create:mechanical_crafting>.addJsonRecipe("cca/tesla_coil", {
//   "type": "create:mechanical_crafting",
//   "accept_mirrored": true,
//   "category": "misc",
//   "key": {
//     "A": {
//       "item": "create:andesite_alloy"
//     },
//     "B": {
//       "item": "industrialupgrade:blockresource/machine"
//     },
//     "C": {
//       "item": "industrialupgrade:crafting_elements/crafting_426_element" // Улучшенный тразистор
//     },
//     "E": {
//       "item": "create:electron_tube"
//     },
//     "P": {
//       "item": "industrialupgrade:alloyplate/alumel"
//     },
//     "S": {
//       "item": "industrialupgrade:crafting_elements/crafting_424_element" // Улучшенная катушка
//     }
//   },
//   "pattern": [
//     "SSS",
//     "CAC",
//     "PBP",
//     "PEP"
//   ],
//   "result": {
//     "count": 1,
//     "id": "createaddition:tesla_coil"
//   }
// });

// <recipetype:create:mechanical_crafting>.addJsonRecipe("cpl/brass_loader", {
//   "type": "create:mechanical_crafting",
//   "neoforge:conditions": [{"type": "neoforge:true"}],
//   "accept_mirrored": false,
//   "key": {
//     "G": {
//       "item": "industrialupgrade:blockresource/tempered_glass"
//     },
//     "R": {
//       "item": "minecraft:respawn_anchor"
//     },
//     "S": {
//       "item": "create:shaft"
//     },
//     "C": {
//       "item": "create:brass_casing"
//     },
//     "P": {
//       "item": "create:precision_mechanism"
//     },
//     "L": {
//       "item": "chunkloaders:advanced_chunk_loader"
//     },
//     "A": {
//       "tag": "c:gears/alumel"
//     }
//   },
//   "pattern": [
//     "GGGGG",
//     "G L G",
//     "GARAG",
//     "CPPPC",
//     "CCSCC"
//   ],
//   "result": {
//     "id": "create_power_loader:empty_brass_chunk_loader"
//   }
// });

// craftingTable.remove(<item:bellsandwhistles:metro_window>);

// craftingTable.addShapeless("baw/metro_window", <item:bellsandwhistles:metro_window>,
// [ <item:bellsandwhistles:metro_casing>, glass_block ]);


// ~~~~~~~~~~ Immersive Aircraft/Machinary ~~~~~~~~~~ 

// craftingTable.remove(ia_propeller);
// craftingTable.remove(<item:immersive_aircraft:enhanced_propeller>);

// craftingTable.addShaped("ia/propeller", ia_propeller,
// [
//   [ air, iu_rotor_iron_model, air ],
//   [ iu_rotor_iron_model, iu_rotor_iron_core, iu_rotor_iron_model ],
//   [ air, iu_rotor_iron_model, air ]
// ]);

// craftingTable.addShaped("ia/enhanced_propeller", <item:immersive_aircraft:enhanced_propeller>,
// [
//   [ air, iu_rotor_steel_model, air ],
//   [ iu_rotor_steel_model, ia_propeller, iu_rotor_steel_model ],
//   [ air, iu_rotor_steel_model, air ]
// ]);

// craftingTable.remove(ia_boiler);
// craftingTable.remove(<item:immersive_aircraft:steel_boiler>);

// craftingTable.addShaped("ia/boiler", ia_boiler,
// [
//   [ bronze_plate, bronze_doubleplate, bronze_plate ],
//   [ bronze_plate, air, bronze_plate ],
//   [ bronze_doubleplate, iu_heating_cylinder, bronze_doubleplate ]
// ]);

// craftingTable.addShaped("ia/steel_boiler", <item:immersive_aircraft:steel_boiler>,
// [
//   [ steel_plate, iu_titanium_steel_ingot, steel_plate ],
//   [ steel_plate, ia_boiler, steel_plate ],
//   [ air, iu_titanium_steel_ingot, air ]
// ]);

// craftingTable.remove(<item:immersive_aircraft:industrial_gears>);

// craftingTable.addShaped("ia/industrial_gears", <item:immersive_aircraft:industrial_gears>,
// [
//   [ iu_titanium_steel_plate, invar_gear, iu_titanium_steel_plate ],
//   [ alumel_gear, iu_sensor_template, alumel_gear ],
//   [ iu_titanium_steel_plate, invar_gear, iu_titanium_steel_plate ]
// ]);

// craftingTable.remove(<item:immersive_aircraft:sturdy_pipes>);

// craftingTable.addShaped("ia/sturdy_pipes", <item:immersive_aircraft:sturdy_pipes>,
// [
//   [ bronze_plate, bronze_plate, bronze_plate ],
//   [ aluminumbronze_plate, iu_tube_scheme, aluminumbronze_plate ],
//   [ bronze_plate, bronze_plate, bronze_plate ]
// ]);

// craftingTable.remove(<item:immersive_aircraft:improved_landing_gear>);

// craftingTable.addShaped("ia/landing_gear", <item:immersive_aircraft:improved_landing_gear>,
// [
//   [ air, steel_plate, steel_plate],
//   [ iu_rubber, iu_rubber, steel_plate],
//   [ invar_gear, iu_rubber ]
// ]);

// craftingTable.remove(<item:immersive_aircraft:engine>);
// craftingTable.remove(<item:immersive_aircraft:nether_engine>);
// craftingTable.remove(<item:immersive_aircraft:eco_engine>);

// craftingTable.addShaped("ia/engine", ia_engine,
// [
//   [ <item:minecraft:piston>, iu_titanium_steel_plate, iu_titanium_steel_plate ],
//   [ iu_sensor_heat, ia_boiler, alumel_plate ],
//   [ ia_redstone_mechanism, alumel_gear, alumel_plate ]
// ]);

// craftingTable.addShaped("ia/nether_engine", <item:immersive_aircraft:nether_engine>,
// [
//   [ alumel_plate, <item:minecraft:netherite_ingot>, alumel_plate ],
//   [ <item:minecraft:blaze_rod>, ia_engine, <item:minecraft:blaze_rod> ],
//   [ alumel_plate, iu_sensor_heat_2, alumel_plate ]
// ]);

// craftingTable.addShaped("ia/eco_engine", <item:immersive_aircraft:eco_engine>,
// [
//   [ duralumin_plate, air, duralumin_plate ],
//   [ slime_ball, ia_engine, slime_ball ],
//   [ duralumin_plate, iu_sensor_bio_2, duralumin_plate ]
// ]);


// ~~~~~~~~~~ Genetics Resequenced ~~~~~~~~~~ 

// craftingTable.remove(<item:geneticsresequenced:overclocker>);

// craftingTable.addShaped("gr/overclocker", <item:geneticsresequenced:overclocker>,
// [
//   [ air, gr_cell, air],
//   [ gr_cell, iu_upgrade_overclocker, gr_cell],
//   [ air, gr_cell, air]
// ]);

// craftingTable.remove(<item:geneticsresequenced:cell_analyzer>);
// craftingTable.remove(<item:geneticsresequenced:blood_purifier>);
// craftingTable.remove(<item:geneticsresequenced:dna_extractor>);
// craftingTable.remove(<item:geneticsresequenced:dna_decryptor>);
// craftingTable.remove(<item:geneticsresequenced:plasmid_infuser>);
// craftingTable.remove(<item:geneticsresequenced:plasmid_injector>);
// craftingTable.remove(<item:geneticsresequenced:coal_generator>);
// craftingTable.remove(<item:geneticsresequenced:incubator>);
// craftingTable.remove(<item:geneticsresequenced:advanced_incubator>);

// craftingTable.addShaped("gr/cell_analyzer", <item:geneticsresequenced:cell_analyzer>,
// [
//   [ iu_sensor_analyzer, air, iu_cooling_cylinder ],
//   [ iu_sensor_slot_1x, iu_machine_corpus, iu_sensor_slot_1x ],
//   [ air, iu_electromotor_with_bearings, air ]
// ]);

// craftingTable.addShaped("gr/blood_purifier", <item:geneticsresequenced:blood_purifier>,
// [
//   [ iu_sensor_liquid, air, iu_cooling_cylinder  ],
//   [ iu_sensor_tank, iu_machine_corpus, iu_sensor_slot_1x ],
//   [ air, iu_electromotor_with_bearings, air ]
// ]);

// craftingTable.addShaped("gr/dna_extractor", <item:geneticsresequenced:dna_extractor>,
// [
//   [ iu_sensor_transformation, iu_cooling_cylinder, iu_sensor_extractor_2 ],
//   [ iu_sensor_slot_1x, iu_machine_corpus, iu_sensor_slot_1x ],
//   [ air, iu_electromotor_with_bearings, air ]
// ]);

// craftingTable.addShaped("gr/dna_decryptor", <item:geneticsresequenced:dna_decryptor>,
// [
//   [ iu_sensor_analyzer, iu_cooling_cylinder, iu_sensor_circuit ],
//   [ iu_sensor_slot_1x, iu_machine_corpus, iu_sensor_slot_1x ],
//   [ air, iu_electromotor_with_bearings, air ]
// ]);

// craftingTable.addShaped("gr/plasmid_infuser", <item:geneticsresequenced:plasmid_infuser>,
// [
//   [ iu_sensor_combining_2, air, iu_cooling_cylinder ],
//   [ iu_sensor_slot_1x, iu_machine_corpus, iu_sensor_slot_1x ],
//   [ air, iu_electromotor_with_bearings, air ]
// ]);

// craftingTable.addShaped("gr/plasmid_injector", <item:geneticsresequenced:plasmid_injector>,
// [
//   [ iu_sensor_combining_2, iu_cooling_cylinder, iu_sensor_circuit ],
//   [ iu_sensor_slot_1x, iu_machine_corpus, iu_sensor_tank ],
//   [ air, iu_electromotor_with_bearings, air ]
// ]);

// craftingTable.addShaped("gr/advanced_incubator", <item:geneticsresequenced:advanced_incubator>,
// [
//   [ iu_sensor_combining_2, iu_sensor_heat_2, iu_sensor_brewing ],
//   [ iu_sensor_slot_4x, iu_machine_corpus, iu_sensor_slot_2x ],
//   [ air, iu_electromotor_with_bearings, air ]
// ]);

// craftingTable.addShapeless("gr/coal_generator", <item:geneticsresequenced:coal_generator>,
// [ iu_sensor_generator, iu_machine_corpus, <item:minecraft:furnace> ]);

/*
// ~~~~~~~~~~ Fossils Legacy ~~~~~~~~~~

craftingTable.remove(<item:fossilslegacy:analyzer>);
craftingTable.remove(<item:fossilslegacy:feeder>);
craftingTable.remove(<item:fossilslegacy:gene_modification_table>);

craftingTable.addShaped("fl/analyzer", <item:fossilslegacy:analyzer>,
[
  [ iu_sensor_day, air, iu_sensor_night ],
  [ iu_sensor_slot_8x, iu_machine_corpus, iu_sensor_slot_3x ],
  [ air, iu_electromotor, iu_autopower_module ]
]);

craftingTable.addShaped("fl/feeder", <item:fossilslegacy:feeder>,
[
  [ air, iu_sensor_preservation, air  ],
  [ iu_sensor_tank, iu_machine_corpus, iu_sensor_tank ],
  [ air, air, air ]
]);

craftingTable.addShaped("fl/gene_modification_table", <item:fossilslegacy:gene_modification_table>,
[
  [ iu_sensor_dna, air, iu_sensor_genetics ],
  [ iu_sensor_slot_2x, iu_machine_corpus_2, iu_sensor_transformation],
  [ air, air, air ]
]);

craftingTable.remove(<item:fossilslegacy:white_cultivator>);
craftingTable.remove(<item:fossilslegacy:orange_cultivator>);
craftingTable.remove(<item:fossilslegacy:magenta_cultivator>);
craftingTable.remove(<item:fossilslegacy:light_blue_cultivator>);
craftingTable.remove(<item:fossilslegacy:yellow_cultivator>);
craftingTable.remove(<item:fossilslegacy:lime_cultivator>);
craftingTable.remove(<item:fossilslegacy:pink_cultivator>);
craftingTable.remove(<item:fossilslegacy:gray_cultivator>);
craftingTable.remove(<item:fossilslegacy:light_gray_cultivator>);
craftingTable.remove(<item:fossilslegacy:cyan_cultivator>);
craftingTable.remove(<item:fossilslegacy:purple_cultivator>);
craftingTable.remove(<item:fossilslegacy:blue_cultivator>);
craftingTable.remove(<item:fossilslegacy:brown_cultivator>);
craftingTable.remove(<item:fossilslegacy:green_cultivator>);
craftingTable.remove(<item:fossilslegacy:red_cultivator>);
craftingTable.remove(<item:fossilslegacy:black_cultivator>);

craftingTable.addShaped("fl/cultivator", <item:fossilslegacy:white_cultivator>,
[
  [ iu_sensor_heat_2, iu_cylinder, iu_sensor_genetics],
  [ <item:minecraft:glass>, <item:minecraft:water_bucket>, <item:minecraft:glass> ],
  [ <item:minecraft:glass>, iu_sensor_slot_1x, <item:minecraft:glass> ]
]);
*/

// ~~~~~~~~~~ Chunk Loaders ~~~~~~~~~~

// craftingTable.remove(<item:chunkloaders:single_chunk_loader>);
// craftingTable.remove(<item:chunkloaders:basic_chunk_loader>);
// craftingTable.remove(<item:chunkloaders:advanced_chunk_loader>);
// craftingTable.remove(<item:chunkloaders:ultimate_chunk_loader>);

// craftingTable.addShaped("cl/single_chunk_loader", <item:chunkloaders:single_chunk_loader>,
// [
//   [ invar_doubleplate, obsidian_block, invar_doubleplate ],
//   [ obsidian_block, <item:minecraft:ender_pearl>, obsidian_block ],
//   [ invar_doubleplate, obsidian_block, invar_doubleplate ]
// ]);

// craftingTable.addShaped("cl/basic_chunk_loader", <item:chunkloaders:basic_chunk_loader>,
// [
//   [ nitenol_doubleplate, obsidian_doubleplate, nitenol_doubleplate ],
//   [ obsidian_doubleplate, <item:chunkloaders:single_chunk_loader>, obsidian_doubleplate ],
//   [ nitenol_doubleplate, obsidian_doubleplate, nitenol_doubleplate ]
// ]);

// craftingTable.addShaped("cl/advanced_chunk_loader", <item:chunkloaders:advanced_chunk_loader>,
// [
//   [ electrum_doubleplate, vanadoalumite_doubleplate, electrum_doubleplate ],
//   [ vanadoalumite_doubleplate, <item:chunkloaders:basic_chunk_loader>, vanadoalumite_doubleplate ],
//   [ electrum_doubleplate, vanadoalumite_doubleplate, electrum_doubleplate ]
// ]);


// ~~~~~~~~~~ PipeZ ~~~~~~~~~~

// craftingTable.remove(<item:pipez:item_pipe>);
// craftingTable.remove(<item:pipez:fluid_pipe>);
// craftingTable.remove(<item:pipez:energy_pipe>);
// craftingTable.remove(<item:pipez:universal_pipe>);

// craftingTable.addShaped("pipez/item_pipe", <item:pipez:item_pipe> * 6,
// [
//   [ alumel_plate, alumel_plate, alumel_plate ],
//   [ red_alloy_ingot, iu_tube_scheme, red_alloy_ingot ],
//   [ alumel_plate, alumel_plate, alumel_plate ]
// ]);

// craftingTable.addShaped("pipez/fluid_pipe", <item:pipez:fluid_pipe> * 6,
// [
//   [ iu_niobium_titanium_alloy_plate, iu_niobium_titanium_alloy_plate, iu_niobium_titanium_alloy_plate ],
//   [ red_alloy_ingot, iu_tube_scheme, red_alloy_ingot ],
//   [ iu_niobium_titanium_alloy_plate, iu_niobium_titanium_alloy_plate, iu_niobium_titanium_alloy_plate ]
// ]);

// craftingTable.addShaped("pipez/universal_pipe", <item:pipez:universal_pipe> * 6,
// [
//   [ <item:pipez:item_pipe>, <item:pipez:item_pipe>, <item:pipez:item_pipe> ],
//   [ iu_tube_scheme, iu_tube_scheme, iu_tube_scheme ],
//   [ <item:pipez:fluid_pipe>, <item:pipez:fluid_pipe>, <item:pipez:fluid_pipe> ]
// ]);


// ~~~~~~~~~~ Point Blank ~~~~~~~~~~

// craftingTable.addShaped("pb/processor", <item:pointblank:processor>,
// [
//   [ air, eae_concurrent_processor, air ],
//   [ ae_calculation_processor, iu_ec_level4, ae_engineering_processor ],
//   [ ae_formation_core, iu_lithium_battery, ae_formation_core ]
// ]);

// craftingTable.addShaped("pb/printer", <item:pointblank:printer>,
// [
//   [ iu_corpus_cover_2, pb_kamicat_p, iu_corpus_cover_2 ],
//   [ iu_corpus_cover_2, cc_computer_pocket_advanced, iu_corpus_cover_2 ],
//   [ iu_autopower_module, iu_power_unit, <item:industrialupgrade:upgradekitstorage/upgradekit> ]
// ]);

// craftingTable.remove(pb_guninternals);
// craftingTable.remove(<item:pointblank:gunmetal_mesh>);

// craftingTable.addShaped("pb/guninternals", pb_guninternals,
// [
//   [ pb_gunmetal_ingot, alumel_gear, pb_gunmetal_ingot ],
//   [ iu_titanium_steel_plate, tungsten_rod, iu_titanium_steel_plate ],
//   [ pb_gunmetal_ingot, iu_titanium_steel_plate, pb_gunmetal_ingot ]
// ]);

// craftingTable.addShaped("pb/gunmetal_mesh", <item:pointblank:gunmetal_mesh> * 3,
// [
//   [ iu_titanium_steel_plate ],
//   [ composite ]
// ]);


// ~~~~~~~~~~ ArPhEx ~~~~~~~~~~ 

// craftingTable.addShapeless("arphex/entropy_matrix_shard_1", <item:arphex:entropy_matrix_shard>,
// [ time_prism, netherite_ingot, netherite_ingot, time_prism ]);

// craftingTable.addShapeless("arphex/entropy_matrix_shard_2", <item:arphex:entropy_matrix_shard>,
// [ nether_star, netherite_ingot, netherite_ingot, time_prism_shard ]);


// ~~~~~~~~~~ Modular Force Fields System ~~~~~~~~~~ 

// craftingTable.addShaped("mffs/focus_matrix", mffs_focus_matrix * 4,
// [
//   [ molybdenumsteel_plate, iu_wire_glass, molybdenumsteel_plate ],
//   [ iu_graphene_wire, iu_ec_level6, iu_graphene_wire ],
//   [ molybdenumsteel_plate, iu_wire_glass, molybdenumsteel_plate]
// ]);

// craftingTable.addShaped("mffs/projector", <item:mffs:projector>,
// [
//   [ air, iu_energy_crystal_2, air ],
//   [ iu_sensor_synthesis, mffs_focus_matrix, iu_sensor_slot_8x ],
//   [ iu_sensor_combining_2, iu_machine_corpus_2, iu_sensor_tank_4 ]
// ]);

// craftingTable.addShaped("mffs/coerceion_deriver", <item:mffs:coercion_deriver>,
// [
//   [ air, iu_sensor_generator_2, air ],
//   [ air, mffs_focus_matrix, air ],
//   [ iu_sensor_tank_4, iu_machine_corpus_2, iu_sensor_slot_1x ]
// ]);

// craftingTable.addShaped("mffs/fortron_capacitor", <item:mffs:fortron_capacitor>,
// [
//   [ molybdenumsteel_doubleplate, iu_sensor_tank_storage, molybdenumsteel_doubleplate ],
//   [ berylliumbronze_plate, mffs_focus_matrix, berylliumbronze_plate ],
//   [ molybdenumsteel_doubleplate, iu_sensor_tank_storage, molybdenumsteel_doubleplate ]
// ]);

// craftingTable.addShaped("mffs/biometric_identifier", <item:mffs:biometric_identifier>,
// [
//   [ air, iu_sensor_scaner, air ],
//   [ iu_sensor_slot_3x, mffs_focus_matrix, iu_sensor_tank ],
//   [ air, iu_machine_corpus_2, air ]
// ]);

// craftingTable.addShaped("mffs/interdiction_matrix", <item:mffs:interdiction_matrix>,
// [
//   [ iu_sensor_scaner_2, <item:mffs:shock_module>, iu_sensor_preservation ],
//   [ air, mffs_focus_matrix, air ],
//   [ iu_sensor_slot_8x, iu_machine_corpus_2, iu_sensor_slot_8x ]
// ]);

// craftingTable.addShaped("mffs/battery", <item:mffs:battery>,
// [
//   [ iu_lead_battery ],
//   [ red_alloy_ingot ]
// ]);

// craftingTable.addShaped("mffs/cube_mode", <item:mffs:cube_mode>,
// [
//   [ composite, composite, composite ],
//   [ composite, mffs_focus_matrix, composite ],
//   [ composite, composite, composite ]
// ]);

// craftingTable.addShaped("mffs/sphere_mode", <item:mffs:sphere_mode>,
// [
//   [ air, composite, air ],
//   [ composite, mffs_focus_matrix, composite ],
//   [ air, composite, air ]
// ]);

// craftingTable.addShaped("mffs/tube_mode", <item:mffs:tube_mode>,
// [
//   [ composite, composite, composite ],
//   [ air, mffs_focus_matrix, air ],
//   [ composite, composite, composite ]
// ]);

// craftingTable.addShaped("mffs/pyramid_mode", <item:mffs:pyramid_mode>,
// [
//   [ composite, air, air ],
//   [ composite, mffs_focus_matrix, air ],
//   [ composite, composite, composite ]
// ]);

// craftingTable.addShaped("mffs/scale_module", <item:mffs:scale_module> * 8,
// [
//   [ iu_sensor_upgrade ],
//   [ mffs_focus_matrix ],
//   [ iu_upgrade_casing ]
// ]);

// craftingTable.addShapeless("mffs/rotation_module", <item:mffs:rotation_module> * 3,
// [ <item:mffs:scale_module>, <item:mffs:scale_module>, iu_graphene_wire ]);

// craftingTable.addShaped("mffs/translation_module", <item:mffs:translation_module> * 4,
// [
//   [ iu_sensor_upgrade ],
//   [ <item:mffs:scale_module> ],
//   [ iu_sensor_downgrade ]
// ]);

// craftingTable.addShaped("mffs/speed_module", <item:mffs:speed_module> * 2,
// [	
//   [ air, iu_sensor_speed, air ],
//   [ air, mffs_focus_matrix, air ],
//   [ red_alloy_ingot, iu_upgrade_casing, red_alloy_ingot ]
// ]);

// craftingTable.addShaped("mffs/capasity_module", <item:mffs:capacity_module> * 4,
// [	
//   [ iu_sensor_energy_2 ],
//   [ mffs_focus_matrix ],
//   [ iu_upgrade_casing ]
// ]);

// craftingTable.addShaped("mffs/camouflage_module", <item:mffs:camouflage_module>,
// [
//   [ wool, wool, wool ],
//   [ wool, mffs_focus_matrix, wool ],
//   [ wool, iu_upgrade_casing, wool ]
// ]);