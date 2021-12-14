const date = require("./context.js");

describe("date", () => {
  test("works", () => {
    expect(date).toEqual(new Date());
  });
});