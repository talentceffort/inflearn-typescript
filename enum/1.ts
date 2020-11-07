export {};

enum Fruit {
  Apple,
  Banana,
  Orange,
}

const v1: Fruit = Fruit.Apple;
const v2: Fruit.Apple | Fruit.Banana = Fruit.Banana;

console.log(v1, v2); // 0 1

enum Fruit2 {
  Apple,
  Banana = 5,
  Orange,
}

console.log(Fruit2.Apple, Fruit2.Banana, Fruit2.Orange); // 0 5 6

console.log(Fruit2[0]); // Apple
console.log(Fruit2[5]); // banana

// enum 숫자를 할당하면 양방향, 문자열을 할당하면 단방향

function getIsValidEnumValue(enumObject: any, value: number | string) {
  return Object.keys(enumObject)
    .filter((key) => isNaN(Number(key)))
    .some((key) => enumObject[key] === value);
}

enum Some {
  key1 = 1,
}

console.log(Some.key1);
console.log(Some[1]);
console.log(getIsValidEnumValue(Some, 2)); // false
console.log(getIsValidEnumValue(Some, 1)); // true
console.log(getIsValidEnumValue(Some, 'key1')); // false

enum Fruit3 {
  Apple,
  Banana,
  Orange,
}

enum Language {
  Korean = 'ko',
  English = 'en',
  Japanese = 'jp',
}

console.log('1 in Fruit3', getIsValidEnumValue(Fruit3, 1));
console.log('5 in Fruit3', getIsValidEnumValue(Fruit3, 5));
console.log('Orange in Fruit3', getIsValidEnumValue(Fruit3, 'Orange'));
console.log('ko in Language', getIsValidEnumValue(Language, 'ko'));
console.log('Korean in Language', getIsValidEnumValue(Language, 'Korean'));

// const enum 을 사용해서 enum 을 남겨두지 않을 수 있음.
