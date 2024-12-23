// This script modifies the recipes surrounding the mod Roundabout 

ServerEvents.recipes(event => {

//replaces the default stand disc recipe for a botania infusion 
event.remove({output: 'roundabout:stand_disc'})
event.recipes.botania.mana_infusion("roundabout:stand_disc", "ae2:portable_item_cell_1k", 50000)

//replaces the default meteorite smelting with dragonforge smelting
event.remove({ output: 'roundabout:meteorite_ingot' })

event.custom({
  "type": "iceandfire:dragonforge",
  "dragon_type": "fire",
  "cook_time": 5000,
  "input": {
    "item" : "roundabout:meteorite"
  },
  "blood": {
    "item": "iceandfire:fire_dragon_blood"
  },
  "result": {
    "item": "roundabout:meteorite_ingot"
  }

})
event.custom({
  "type": "iceandfire:dragonforge",
  "dragon_type": "ice",
  "cook_time": 5000,
  "input": {
    "item" : "roundabout:meteorite"
  },
  "blood": {
    "item": "iceandfire:ice_dragon_blood"
  },
  "result": {
    "item": "roundabout:meteorite_ingot"
  }
})
  
event.custom({
  "type": "iceandfire:dragonforge",
  "dragon_type": "lightning",
  "cook_time": 5000,
  "input": {
    "item" : "roundabout:meteorite"
  },
  "blood": {
    "item": "iceandfire:lightning_dragon_blood"
  },
  "result": {
    "item": "roundabout:meteorite_ingot"
  }
})
})


