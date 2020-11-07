export {};

type T1 = { [K in 'prop1' | 'prop2']: boolean };

const obj: T1 = {
  prop1: true,
  prop2: false,
};

interface Person {
  name: string;
  age: number;
}

type MakeBoolean<T> = { [P in keyof T]?: boolean };

const pMap: MakeBoolean<Person> = {};

pMap.age = true;
pMap.name = false;

type T2 = Person['name'];

type Readonly<T> = { readonly [P in keyof T]: T[P] }; // 타입스크립트 내장
type Partial<T> = { [P in keyof T]?: T[P] }; // 타입스크립트 내장

type T3 = Partial<Person>;
type T4 = Readonly<Person>;

// mapped 타입을 사용하면 함수를 사용하는 것 처럼!
