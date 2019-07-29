import RelatedInputs from "../js/utilities/RelatedInputs";
let other = {
  panelName: "",
  enableChildren: false,
  type: "",
  label: "",
  inputName: "",
  inputValue: "",
  inputClassName: "",
  validation: {}
};
let inputs = {
  test1: { id: "test1", connected: "", ...other },
  test2: { id: "test2", connected: "", ...other },
  test3: { id: "test3", connected: "test2", ...other },
  test4: { id: "test4", connected: "test3", ...other },
  test5: { id: "test5", connected: "test2", ...other },
  test6: { id: "test6", connected: "test1", ...other },
  test7: { id: "test7", connected: "", ...other }
};

describe("RelatedInputs tests", () => {
  it("Should return all related id to test 1", () => {
    expect(RelatedInputs(inputs, "test1")).toEqual([
      {
        ...inputs.test1
      },
      {
        ...inputs.test6
      }
    ]);
  });

  it("Should return all related id to test 2", () => {
    expect(RelatedInputs(inputs, "test2")).toEqual([
      {
        ...inputs.test2
      },
      {
        ...inputs.test3
      },
      {
        ...inputs.test4
      },
      {
        ...inputs.test5
      }
    ]);
  });

  it("Should return all related id to test 3", () => {
    expect(RelatedInputs(inputs, "test3")).toEqual([
      {
        ...inputs.test3
      },
      {
        ...inputs.test4
      }
    ]);
  });

  it("Should return all related id to test 4", () => {
    expect(RelatedInputs(inputs, "test4")).toEqual([
      {
        ...inputs.test4
      }
    ]);
  });

  it("Should return all related id to test 5", () => {
    expect(RelatedInputs(inputs, "test5")).toEqual([
      {
        ...inputs.test5
      }
    ]);
  });

  it("Should return all related id to test 6", () => {
    expect(RelatedInputs(inputs, "test6")).toEqual([
      {
        ...inputs.test6
      }
    ]);
  });

  it("Should return all related id to test 7", () => {
    expect(RelatedInputs(inputs, "test7")).toEqual([
      {
        ...inputs.test7
      }
    ]);
  });

  it("Should return all related id to test 8", () => {
    expect(RelatedInputs(inputs, "test8")).toEqual([]);
  });
});
