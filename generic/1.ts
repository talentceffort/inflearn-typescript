export {};

function makeArr<T>(defaultValue: T, size: number): T[] {
  const arr: T[] = [];
  for (let i = 0; i < size; i += 1) {
    arr.push(defaultValue);
  }
  return arr;
}

makeArr('1', 10);
makeArr(false, 2);
makeArr(5, 5);

function identity<T extends number | string>(p1: T): T {
  return p1;
}

identity(false);
identity(1);
identity('aa');
