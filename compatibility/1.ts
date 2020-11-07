function func1(a: number, b: number | string) {
  const v1: number | string = a;
  const v2: number = b;
}

function func2(a: 1 | 2) {
  const v1: 1 | 3 = a;
  const v2: 1 | 2 | 3 = a;
}

// interface A가  interface B로 할당 가능하기 위한 조건
// 1. B 에 있는 모든 필수 속성의 이름이 A 에도 존재
// 2. 같은 속성 이름에 대해, A의 속성이 B의 속성에 할당 가능해야 함.

type F1 = (a: number, b: string) => string;
type F2 = (a: number, b: string | number) => string;
type F3 = (a: number) => string;
type F4 = (a: number) => number | string;

let f1: F1 = (a, b) => `${a} ${b.length}`;
const f2: F2 = (a, b) => `${a} ${b}`;
let f3: F3 = (a) => `${a}`;
const f4: F4 = (a) => (a < 10 ? a : 'too big');

f1 = f3;
f3 = f1;

// 다음은 함수 타입 A가 함수 타입 B로 할당 가능하기 위한 조건이다
// 1. A의 매개변수 개수가 B의 매개변수 갯수보다 적어야함
// 2. 같은 위치의 매개변수에 대해 B의 매개변수가 A의 매개변수로 할당 가능해야 함
// 3. A의 반환값은 B의 반환값으로 할당 가능해야 함.
