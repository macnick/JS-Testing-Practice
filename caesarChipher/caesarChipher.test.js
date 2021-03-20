import caesarChipher from "./caesarCipher";

test("Should wrap from z to a", () => {
  expect(caesarChipher("hello world", 4)).toMatch("lipps asvph");
});

test("Should keep the same case", () => {
  expect(caesarChipher("Hello World", 4)).toMatch("Lipps Asvph");
});

test("Should not change punctuation", () => {
  expect(caesarChipher("Hello, World!", 4)).toMatch("Lipps, Asvph!");
});

test("Should work for empty strings", () => {
  expect(caesarChipher("", 2)).toMatch("");
});

test("Should return the same string if n is zero", () => {
  expect(caesarChipher("Nick", 0)).toMatch("Nick");
});
