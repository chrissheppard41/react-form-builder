import init from "jooks";
import useValidationAtLeast from "../js/hooks/useValidationAtLeast";

const addValidation = jest.fn();
const removeValidation = jest.fn();
const atLeastCheck = (
  values: string[],
  messageCompare: string,
  count: number,
  enabledCompare: boolean
) => {
  const jooks = init(() =>
    useValidationAtLeast(
      {
        atLeast: {
          enabled: enabledCompare,
          message: "lorem ipsum",
          count
        }
      },
      values,
      "id",
      addValidation,
      removeValidation
    )
  );
  const { atLeastMessage, atLeast } = jooks.run();

  expect(atLeastMessage).toEqual(messageCompare);
  expect(atLeast).toEqual(enabledCompare);
};

describe("useValidationEmail hook tests", () => {
  it("Should not recognise what this validation is and no nothing", () => {
    const jooks = init(() =>
      useValidationAtLeast({}, [], "", addValidation, removeValidation)
    );
    const { atLeastMessage, atLeast } = jooks.run();

    expect(atLeastMessage).toEqual("");
    expect(atLeast).toEqual(false);
  });

  it("Should error on an empty string in the array", () => {
    atLeastCheck([""], "lorem ipsum (Pick 1)", 1, true);
  });

  it("Should error on an empty array", () => {
    atLeastCheck([], "lorem ipsum (Pick 1)", 1, true);
  });

  it("Should error on an array containing 3 when looking for 5", () => {
    atLeastCheck(["6", "7", "8"], "lorem ipsum (Pick 5)", 5, true);
  });

  it("Should pass for 3 items when looking for 3", () => {
    atLeastCheck(["6", "7", "8"], "", 3, true);
  });

  it("Should pass for 3 items when looking for 1", () => {
    atLeastCheck(["6", "7", "8"], "", 1, true);
  });

  it("Should pass for 1 items when looking for 0", () => {
    atLeastCheck(["6"], "", 0, true);
  });

  it("Should do nothing when enable compare is disabled", () => {
    atLeastCheck(["6"], "", 0, false);
  });
});
