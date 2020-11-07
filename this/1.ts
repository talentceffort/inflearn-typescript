// function Counter(this: { value: number; add: (amount: number) => void }) {
//   this.value = 0;
//   this.add = (amount: number) => {
//     this.value += amount;
//   };
// }

class Counter {
  value: number;
  add: (amount: number) => void;
  constructor() {
    this.value = 0;
    this.add = (amount: number) => {
      this.value += amount;
    };
  }
}

const counter = new Counter();

console.log(counter.value); // 0
counter.add(5);
console.log(counter.value); // 5
const add = counter.add;
add(5);
console.log(counter.value); // 10

const counter3 = {
  value: 0,
  add: function (amount: number) {
    this.value += amount;
  },
  add2: (amount: number) => {
    this.value += amount;
  },
};

console.log(counter3.value); // 0
counter3.add(5);
console.log(counter3.value); // 0
const add3 = counter3.add;
console.log(add3(5));

class Counter2 {
  value: number;
  add: (amount: number) => void;
  constructor() {
    this.value = 0;
    this.add = function (amount: number) {
      this.value += amount;
    };
  }
}

const counter2 = new Counter2();
console.log(counter2.value); // 0
counter2.add(5);
console.log(counter2.value); // 5
const add2 = counter2.add; // this === global
add2(5);
console.log(counter2.value); // 5 | undefined
