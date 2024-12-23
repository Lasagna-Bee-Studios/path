
StartupEvents.registry('item', e => {
  e.create('path:stone_mask', 'anim_helmet').geoModel(geo => {
	  geo.setSimpleModel('path:geo/armor/stone_mask.json')
  geo.setSimpleTexture('path:textures/armor/stone_mask.png')}).tier('vampire').displayName('Ancient Stone Mask')
})

 ItemEvents.armorTierRegistry(event => {
event.add('vampire', tier => {
  tier.durabilityMultiplier = 120
  tier.slotProtections = [7, 12, 14, 8] 
  tier.enchantmentValue = 22
  tier.equipSound = 'minecraft:item.armor.equip_netherite'
  tier.repairIngredient = 'vamparism:blood_infused_iron_ingot'
  tier.toughness = 6.0
  tier.knockbackResistance = 5.5
}) })

