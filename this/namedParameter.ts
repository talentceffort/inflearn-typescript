export {};

function getText({
  name,
  age = 15,
  language,
}: {
  name: string;
  age?: number;
  language?: string;
}): string {
  const nameText = name.substr(0, 10);
  const ageText = age >= 35 ? 'senior' : 'junior';
  return `name: ${nameText}, age: ${ageText}, language: ${language}`;
}

interface Param {
  name: string;
  age?: number;
  language?: string;
}

function getText2({
  name,
  age = 15,
  language,
}: {
  name: string;
  age: number;
  language: string;
}) {
  return `name: ${name}, age: ${age}, language: ${language}`;
}
