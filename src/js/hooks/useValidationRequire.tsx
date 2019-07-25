import {useStateValue} from '../context/FormContext';

interface ValidationHook {
  requiredMessage: string, 
  require: boolean
};

const useValidationRequire = (
  validation: any, 
  value: string,
  id: string
): ValidationHook => {
  const {actions}: any = useStateValue();
  let requiredMessage = '';
  let require = false;

  if (validation && validation.required) {
    require = validation.required.enabled;

    if (require) {
      if (!value) {
        requiredMessage = validation.required.message;
        actions.addValidation(id, 'required');
      } else {
        actions.removeValidation(id, 'required');
      }
    }
  }

  return {requiredMessage, require};
};

export default useValidationRequire;
