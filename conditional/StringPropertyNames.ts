export {};

type StringPropertyNames<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

interface Person {
  name: string;
  age: number;
  nation: string;
}

interface Person2 {
  name: 'name';
  age: never;
  nation: 'nation';
}

type T3 = Person2['name' | 'nation' | never];

type T1 = StringPropertyNames<Person>; // name, nation

type StringProperties<T> = Pick<T, StringPropertyNames<T>>;
type T2 = StringProperties<Person>;
