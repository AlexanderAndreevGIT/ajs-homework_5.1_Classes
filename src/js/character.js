/* eslint-disable max-classes-per-file */
export class Character {
  constructor(name, type) {
    if ((typeof name === 'string') && (name.length > 2 && name.length < 11)) {
      this.name = name;
    } else {
      throw new Error('Не корректное имя пользователя. Имя должно быть не менее 2х и не более 10и символов');
    }
    if (type === 'bowerman'
            || type === 'swordsman'
            || type === 'magician'
            || type === 'daemon'
            || type === 'undead'
            || type === 'zombie') {
      this.type = type;
    } else {
      throw new Error(`Персонаж ${type} не существет`);
    }
    this.health = 100;
    this.level = 1;
  }
}

export class Bowerman extends Character {
  constructor(name) {
    super(name, 'bowerman');
    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordsman extends Character {
  constructor(name) {
    super(name, 'swordsman');
    this.attack = 40;
    this.defence = 10;
  }
}

export class Magician extends Character {
  constructor(name) {
    super(name, 'magician');
    this.attack = 10;
    this.defence = 40;
  }
}

export class Daemon extends Character {
  constructor(name) {
    super(name, 'daemon');
    this.attack = 10;
    this.defence = 40;
  }
}

export class Undead extends Character {
  constructor(name) {
    super(name, 'undead');
    this.attack = 25;
    this.defence = 25;
  }
}

export class Zombie extends Character {
  constructor(name) {
    super(name, 'zombie');
    this.attack = 40;
    this.defence = 10;
  }
}
