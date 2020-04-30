import caesarChipher from './caesarCipher';

test('Should wrap from z to a', () => {
  expect(caesarChipher('hello world', 4)).toMatch('lipps asvph');
});

test('Should keep the same case', () => {
  expect(caesarChipher('Hello World', 4)).toMatch('Lipps Asvph');
});

test('Should not change punctuation', () => {
  expect(caesarChipher('Hello, World!', 4)).toMatch('Lipps, Asvph!');
});
