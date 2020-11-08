export {};

interface Person {
  type: 'a';
  name: string;
  age: number;
}

interface Product {
  type: 'b';
  name: string;
  price: number;
}

// 인터페이스 구분하기 위한 방법.
function print(value: Person | Product) {
  if (value.type === 'a') {
    console.log(value.age);
  } else {
    console.log(value.price);
  }
}
