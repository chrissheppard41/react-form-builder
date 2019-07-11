interface ValidationHook {
  message: string, 
  require: boolean
};

const useValidationRequire = (
  validation: any, 
  value: string
): ValidationHook => {
  let message = '';
  let require = false;

  if (validation && validation.required) {
    require = validation.required.enabled;

    if (!value) {
      message = validation.required.message;
    }
  }

  return {message, require};
};

export default useValidationRequire;