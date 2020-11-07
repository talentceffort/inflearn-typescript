export {};

// 타입스크립트 내장 메소드

type Omit<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>>;

interface Person {
  name: string;
  age: number;
  nation: string;
}

type T1 = Omit<Person, 'nation' | 'age'>;
