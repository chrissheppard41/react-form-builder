interface ValidationHook {
  requiredMessage: string;
  require: boolean;
}

const useValidationRequire = (
  validation: any,
  value: string,
  id: string,
  addValidation: (id: string, validationRule: string) => void,
  removeValidation: (id: string, validationRule: string) => void
): ValidationHook => {
  let requiredMessage = "";
  let require = false;

  if (validation && validation.required) {
    require = validation.required.enabled;

    if (require) {
      if (!value) {
        requiredMessage = validation.required.message;
        addValidation(id, "required");
      } else {
        removeValidation(id, "required");
      }
    }
  }

  return { require, requiredMessage };
};

export default useValidationRequire;
