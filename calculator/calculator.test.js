import calculator from './calculator';

test('Should do addition', () => {
  expect(calculator.add(2, 3)).toEqual(5);
});

test('Should do subtraction', () => {
  expect(calculator.subtract(2, 3)).toEqual(-1);
});

test('Should do division', () => {
  expect(calculator.divide(2, 3)).toBeCloseTo(0.66666);
});

test('Should do multiplication', () => {
  expect(calculator.multiply(2, 3)).toEqual(6);
});
