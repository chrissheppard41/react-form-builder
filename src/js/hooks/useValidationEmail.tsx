interface ValidationHook {
  emailMessage: string;
  email: boolean;
}

const validateEmail = (email: string): boolean => {
  // eslint-disable-next-line
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
  let emailMessage = "";
  let email = false;

  if (validation && validation.email) {
    email = validation.email.enabled;

    if (email) {
      if (!validateEmail(value)) {
        emailMessage = validation.email.message;
        addValidation(id, "email");
      } else {
        removeValidation(id, "email");
      }
    }
  }

  return { emailMessage, email };
};

export default useValidationEmail;
