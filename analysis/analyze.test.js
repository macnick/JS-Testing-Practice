import analyze from "./analyze";

test("Should return proper analysis", () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Should return correct results for small arrays", () => {
  expect(analyze([1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  });
});
