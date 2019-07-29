import init from "jooks";
import useMultiSelect from "../js/hooks/useMultiSelect";
import ClassificationInputs from "../js/constants/ClassificationInputs";

describe("useMultiSelect hook tests for radio", () => {
  const jooks = init(() => useMultiSelect("", ClassificationInputs.RADIO));

  it("Should have the default state for this which is an empty array", () => {
    const { array } = jooks.run();

    expect(array).toEqual([""]);
  });
  it("Should check if the value exists and if so add it", () => {
    let { array, check } = jooks.run();

    check("test");
    ({ array } = jooks.run());
    expect(array).toEqual(["test"]);
  });
  it("Should replace item for radios", () => {
    let { array, check } = jooks.run();

    check("test");
    ({ array, check } = jooks.run());
    expect(array).toEqual(["test"]);

    check("test2");
    ({ array } = jooks.run());
    expect(array).toEqual(["test2"]);
  });
});
