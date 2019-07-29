import ListEmpty from "../js/utilities/ListEmpty";
let inputs = {
  test1: { id: "test1", connected: "" },
  test2: { id: "test2", connected: "" },
  test3: { id: "test3", connected: "test2" },
  test4: { id: "test4", connected: "test3" },
  test5: { id: "test5", connected: "test2" },
  test6: { id: "test6", connected: "test1" },
  test7: { id: "test7", connected: "" }
};

describe("ListEmpty tests", () => {
  it("Should be true", () => {
    expect(ListEmpty(inputs, "test1")).toBeTruthy();
  });
  it("Should be false", () => {
    expect(ListEmpty(inputs, "test8")).toBeFalsy();
  });
});
