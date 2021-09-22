import capitalize from './capitalize';

test('The first letter of each word should be capital', () => {
  expect(capitalize('welcome to javascript testing')).toMatch('Welcome To Javascript Testing');
});

test('It should remove spaces', () => {
  expect(capitalize(' nick haras')).toMatch('Nick Haras');
});