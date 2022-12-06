const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };


  const dragonDamage = () => {
    const draggyDamage = Math.floor(Math.random() * (dragon.strength - 15) + 15)
    return `O dragão causou ${draggyDamage} de dano`
  } 

  const warriorAtack = () => {
    const minDamage = warrior.strength;
    const maxDamage = Math.floor(Math.random() *(minDamage * warrior.weaponDmg));
    const warriorDamage = maxDamage > minDamage ? maxDamage : minDamage;
    return `O Guerreiro causou ${warriorDamage} de dano`;
  }

 const mageAtack = () => {
    const minDamage = mage.intelligence;
    const maxDamage = minDamage * 2;
    const manaPoints = mage.mana;
    const turnSpent = {
        manaSpent: 0,
        damageDealt: 'Não possui mana suficiente'
    };
    if (manaPoints > 15) {
    const mageDamage = minDamage > maxDamage ? maxDamage : minDamage;
        turnSpent.manaSpent = 15;
        turnSpent.damageDealt = mageDamage;
        return turnSpent
    }
    return turnSpent
 };

 console.log(mageAtack());

