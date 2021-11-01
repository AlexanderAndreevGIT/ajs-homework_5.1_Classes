export default class Character {
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
    this.attack = 0;
    this.defence = 0;
  }
}
