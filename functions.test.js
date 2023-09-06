const sum = require("./functions");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 1 + 3 to NOT equal 3", () => {
  expect(sum(1, 3)).not.toBe(3);
});

// Simple run 'npm run test' in the terminal below to test your solution!
