export {};

interface Person {
  readonly name: string;
  age: number;
  [key: string]: string | number; // index type
}

const p1: Person = {
  name: 'Jaeik',
  age: 29,
};

const p2: Person = {
  name: 'mike',
  birthday: '1997-01-01',
  age: 30,
};

const p3: Person = p2;

interface YearPriceMap {
  [year: number]: number;
  [year: string]: string | number;
}

const yearMap: YearPriceMap = {};
yearMap[1998] = 1000;
// yearMap[1998] = 'abc';  Error
yearMap['2000'] = 1234;
yearMap['2000'] = 'million';

interface GetText {
  (name: string, age: number): string;
  totalCall?: number;
}

const getText: GetText = function (name, age) {
  if (getText.totalCall !== undefined) {
    getText.totalCall += 1;
    console.log(`totalCall: ${getText.totalCall}`);
  }
  return '';
};

getText.totalCall = 0;
getText('', 0);
getText('', 0);
