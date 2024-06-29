// Клас Key
class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

// Клас Person
class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

// Абстрактний клас House
abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[];

  constructor(key: Key) {
    this.door = false; // двері закриті спочатку
    this.key = key;
    this.tenants = [];
  }

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log(`${person.getKey().getSignature()} прийшов додому.`);
    } else {
      console.log('Двері зачинені. Не можу увійти.');
    }
  }

  abstract openDoor(key: Key): void;
}

// Клас MyHouse, який успадковується від класу House
class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  openDoor(key: Key): void {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
      console.log('Двері відчинено.');
    } else {
      console.log('Неправильний ключ. Двері залишаються зачиненими.');
    }
  }
}

// Створення об'єктів і відтворення сценарію
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person); // Person входить у дім

export {};
