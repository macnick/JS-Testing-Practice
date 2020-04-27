import reverseString from './reverse';

test('Should reverse the string', () => {
  expect(reverseString('Hello World')).toMatch('dlroW olleH');
});
