const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello()).toEqual("Hello World");
  });
});