export {};

// extends 가 성립하려면 T는 K에 할당 가능해야함.
type Pick<T, K extends keyof T> = { [P in K]: T[P] }; // 타입스크립트 내장

interface Person {
  name: string;
  age: number;
  language: string;
}

type T1 = Pick<Person, 'name' | 'language'>;

type Record<K extends string, T> = { [P in K]: T };

type T2 = Record<'p1' | 'p2', Person>;
type T3 = Record<'p1' | 'p2', number>;

const obj: T2 = {
  p1: {
    name: 'hihi',
    age: 13,
    language: 'ko',
  },
  p2: {
    name: '하이',
    age: 15,
    language: 'en',
  },
};

const obj2: T3 = {
  p1: 13,
  p2: 15,
};
