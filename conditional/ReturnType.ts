export {};

// ReturnType은 T가 함수일 때 T 함수의 반환 타입을 가져옴.
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

type T1 = ReturnType<() => string>;

function f1(s: string): number {
  return s.length;
}

type T2 = ReturnType<typeof f1>;
