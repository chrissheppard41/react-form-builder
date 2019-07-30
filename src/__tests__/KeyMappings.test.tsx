import KeyMappings from "../js/utilities/KeyMappings";

describe("KeyMappings tests", () => {
  it("Should create a key map", () => {
    expect(KeyMappings(["test", "test2"])).toEqual({
      test: "test",
      test2: "test2"
    });
  });
});
