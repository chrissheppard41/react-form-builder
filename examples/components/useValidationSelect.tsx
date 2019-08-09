interface ValidationHook {
  selectedMessage: string;
  selected: boolean;
}

const useValidationSelect = (
  validation: any,
  value: boolean,
  id: string,
  addValidation: (id: string, validationRule: string) => void,
  removeValidation: (id: string, validationRule: string) => void
): ValidationHook => {
  let selectedMessage = "";
  let selected = false;

  if (validation && validation.selected) {
    selected = validation.selected.enabled;

    if (selected) {
      if (!value) {
        selectedMessage = validation.selected.message;
        addValidation(id, "selected");
      } else {
        removeValidation(id, "selected");
      }
    }
  }

  return { selected, selectedMessage };
};

export default useValidationSelect;
