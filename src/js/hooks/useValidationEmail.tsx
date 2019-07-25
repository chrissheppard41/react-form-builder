interface ValidationHook {
  message: string, 
  enabled: boolean
};

const validateEmail = (email: string): boolean => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const useValidationEmail = (
  validation: any, 
  value: string,
  id: string,
  addValidation: (id: string, validationRule: string) => void,
  removeValidation: (id: string, validationRule: string) => void
): ValidationHook => {
  let message = '';
  let enabled = false;

  if (validation && validation.email) {
    enabled = validation.email.enabled;

    if (enabled) {
      if (!validateEmail(value)) {
        message = validation.email.message;
        addValidation(id, 'email');
      } else {
        removeValidation(id, 'email');
      }
    }
  }

  return {message, enabled};
};

export default useValidationEmail;
