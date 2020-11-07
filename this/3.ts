// add 함수 작성하기
// 두 매개변수가 모두 문자열이면 문자열 반환
// 두 매개변수가 모두 숫자면 숫자 반환
// 두 매개변수를 서로 다른 타입으로 입력하면 안됨
export {};

function add(x: string, y: string): string;
function add(x: number, y: number): number;
function add(x: number | string, y: number | string): number | string {
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y;
  } else {
    const reuslt = Number(x) + Number(y);
    return reuslt.toString();
  }
}

const v1: number = add(1, 2);
const v2: number = add('1', '2');
console.log(add(1, '3'));
console.log(add('3', 1));
