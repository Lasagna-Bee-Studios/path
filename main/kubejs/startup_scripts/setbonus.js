const INFINITE = Java.loadClass('java.lang.Integer').MAX_VALUE;
const bonuses = {
  set1: {
    armors: ['path:stone_mask'],
    bonus: ['speed', 0]
  }
};
function armor_set_bonus(context) {
  const {entity, previousStack, currentStack} = context;
  const {potionEffects, armorSlots} = entity;

  const now_set = armorSlots.toArray().map(i => i.id);
  const last_set = now_set.map(i => (i == currentStack.id ? previousStack.id : i));

  Object.keys(bonuses).forEach(set => {
    const data = bonuses[set];
    const {armors, bonus} = data;
    if(!armors.every(a => last_set.includes(a))) entity.removeEffect(bonus[0]);
    if(armors.every(a => now_set.includes(a))) {
      potionEffects.add(bonus[0], INFINITE, bonus[1] || 0, true, bonus[2] || false);
    }
  })
};
EntityJSEvents.modifyEntity(e => e.modify('minecraft:player', modifyBuilder => modifyBuilder.onEquipItem(context => armor_set_bonus(context))))
