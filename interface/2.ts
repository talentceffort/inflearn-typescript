export {};

interface Person {
  name: string;
  age: number;
  isYoungerThan(age: number): boolean;
}

class SomePerson implements Person {
  age: number;
  name: string;
  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }

  isYoungerThan(age: number) {
    return this.age < age;
  }
}
