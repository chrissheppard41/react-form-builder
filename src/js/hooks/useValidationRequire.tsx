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

    if (!value) {
      message = validation.required.message;
      if (validation.required.error === 'false' || !validation.required.error) {
        actions.validation(id, 'required', true);
      }
    } else {
      if (validation.required.error) {
        actions.validation(id, 'required', false);
      }
    }
  }

  return {message, require};
};

export default useValidationRequire;