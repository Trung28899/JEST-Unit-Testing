const sum = require("./sum");

// 1 + 2 === 3
test("properly add 2 numbers: ", () => {
  expect(sum(1, 2)).toBe(3);
});
