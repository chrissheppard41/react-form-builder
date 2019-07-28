interface ValidationHook {
  numberMessage: string, 
  number: boolean
};

const useValidationMinMax = (
  validation: any, 
  value: string,
  id: string,
  addValidation: (id: string, validationRule: string) => void,
  removeValidation: (id: string, validationRule: string) => void
): ValidationHook => {
  let numberMessage = '';
  let number = false;

  if (validation && validation.number) {
    number = validation.number.enabled;

    const parsedToNumber = Number(value);
    if (number) {
      if (isNaN(parseInt(value))) {
        if (validation.number.min && value.length < validation.number.min) {
          numberMessage = `${validation.number.message} (min input size of ${validation.number.min})`;
          addValidation(id, 'number');
        } else if(validation.number.max && value.length > validation.number.max) {
          numberMessage = `${validation.number.message} (max input size of ${validation.number.max})`;
          addValidation(id, 'number');
        } else {
          removeValidation(id, 'number');
        }
      } else if(!isNaN(parseInt(value))) {
        if (value !== '') {
          if (validation.number.min && parsedToNumber < validation.number.min) {
            numberMessage = `${validation.number.message} (min number of ${validation.number.min})`;
            addValidation(id, 'number');
          } else if(validation.number.max && parsedToNumber > validation.number.max) {
            numberMessage = `${validation.number.message} (max number of ${validation.number.max})`;
            addValidation(id, 'number');
          } else {
            removeValidation(id, 'number');
          }
        }
      }


    }
  }

  return {numberMessage, number};
};

export default useValidationMinMax;
