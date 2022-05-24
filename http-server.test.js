const hello = require("./http-server");
describe("My hello", () => {
  test("works", () => {
    expect(hello.httpserver()).toEqual("Hello World");
  });
});