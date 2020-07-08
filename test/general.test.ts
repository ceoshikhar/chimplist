import Chimplist from "../lib";

test("throw error if invalid API key is provided by the user", () => {
  expect(() => {
    const chimp = new Chimplist("invalidAPIKey");
  }).toThrow(Error);
});
