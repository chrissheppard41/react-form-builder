interface ValidationHook {
  atLeastMessage: string;
  atLeast: boolean;
}

const useValidationAtLeast = (
  validation: any,
  values: string[],
  id: string,
  addValidation: (id: string, validationRule: string) => void,
  removeValidation: (id: string, validationRule: string) => void
): ValidationHook => {
  let atLeastMessage = "";
  let atLeast = false;

  if (validation && validation.atLeast) {
    atLeast = validation.atLeast.enabled;

    if (require) {
      if (
        values.filter((value: string) => value !== "").length <
        validation.atLeast.count
      ) {
        atLeastMessage = `${validation.atLeast.message} (Pick ${validation.atLeast.count})`;
        addValidation(id, "atLeast");
      } else {
        removeValidation(id, "atLeast");
      }
    }
  }

  return { atLeast, atLeastMessage };
};

export default useValidationAtLeast;
