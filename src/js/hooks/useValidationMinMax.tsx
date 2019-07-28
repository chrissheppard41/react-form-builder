interface ValidationHook {
  numberMessage: string, 
  number: boolean
};

const useValidationMinMax = (
  validation: any, 
  value: string,
  id: string,
  min: number,
  max: number,
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
        if (min && value.length < min) {
          numberMessage = `${validation.number.message} (min input size of ${min})`;
          addValidation(id, 'number');
        } else if(max && value.length > max) {
          numberMessage = `${validation.number.message} (max input size of ${max})`;
          addValidation(id, 'number');
        } else {
          removeValidation(id, 'number');
        }
      } else if(!isNaN(parseInt(value))) {
        if (value !== '') {
          if (min && parsedToNumber < min) {
            numberMessage = `${validation.number.message} (min number of ${min})`;
            addValidation(id, 'number');
          } else if(max && parsedToNumber > max) {
            numberMessage = `${validation.number.message} (max number of ${max})`;
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
