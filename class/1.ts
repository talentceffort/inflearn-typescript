class Person {
  #name: string;
  protected constructor(name: string) {
    this.#name = name;
  }

  sayHello() {
    console.log(`안녕하세요 저는 ${this.#name} 입니다`);
  }
}

class Doctor extends Person {
  constructor(name: string) {
    super(name);
  }

  sayHello() {
    super.sayHello();
    console.log('저는 의사입니다.');
  }
}

class Programmer extends Person {
  constructor(name: string) {
    super(name);
  }

  sayHello() {
    super.sayHello(); // 부모 메서드 호출.
    console.log('저는 프로그래머 입니다.');
  }
}

const programmer: Programmer = new Programmer('Jaeik');

programmer.sayHello();
console.log(programmer);

// public, private, protected
// protected 는 상속에만 노출. 외부에는 노출 x
// private 대신 # 사용 가능.
// constructor 앞에 protected 를 붙이면 객체 생성 불가능

const person: Person = new Person('홍길동');
console.log(person.#name);

class Person2 {
  readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const person2 = new Person2('홍길동');
// readonly 라서 변경 불가.
person2.name = '홍길서';

class Person3 {
  constructor(public name: string, public age: number) {}
}

const person3: Person3 = new Person3('홍길동', 13);
