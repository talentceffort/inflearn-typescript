export {};

class Person {
  private _name = '';

  get name(): string {
    console.log('getter called');
    return this._name;
  }

  set name(newName: string) {
    console.log('setter called');
    if (newName.length > 10) {
      throw new Error('이름은 10자를 넘을 수 없습니다.');
    }
    this._name = newName;
  }
}

const person = new Person();
person.name = '홍길동';
console.log(person.name);
person.name = 'adfd asdf asdf';
