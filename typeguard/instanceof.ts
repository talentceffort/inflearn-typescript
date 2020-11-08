export {};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Product {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

function print(value: Person | Product) {
  if (value instanceof Person) {
    console.log(value.name);
  } else {
    console.log(value.price);
  }
}
