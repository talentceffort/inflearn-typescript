function getText(name: string, age: number, language?: string): string {
  const nameText = name.substr(0, 10);
  const ageText = age >= 35 ? 'senior' : 'junior';
  const languageText = language ? language.substr(0, 10) : '';
  return `name: ${nameText}, age ${ageText}, language: ${languageText}`;
}

const v1: string = getText('mike', 23);
// const v2: string = getText('mike', '23'); // error
// const v3: number = getText('mike', 23); // error

const getText2: (name: string, age: number) => string = function (name, age) {
  return '';
}; // const getText2 = function (name, age) { return '' }

// named parameter 는 뒤에 나옴

// rest parameters 의 타입은 항상 배열로 정의함.
function getText3(name: string, ...rest: number[]): string {
  return '';
}

getText3('mike', 1, 2, 3, 4, 5, 6, 7);
// getText3('mike', 'aa');
// getText3('mike', 1, 2, 3, 'a');
