import {useStateValue} from '../context/FormContext';

interface ValidationHook {
  message: string, 
  require: boolean
};

const useValidationRequire = (
  validation: any, 
  value: string,
  id: string
): ValidationHook => {
  const {actions}: any = useStateValue();
  let message = '';
  let require = false;

  if (validation && validation.required) {
    require = validation.required.enabled;

    if (require) {
      if (!value) {
        message = validation.required.message;
        actions.addValidation(id, 'required');
      } else {
        actions.removeValidation(id, 'required');
      }
    }
  }

  return {message, require};
};

export default useValidationRequire;
