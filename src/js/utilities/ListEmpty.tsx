export default (inputs: { [id: string]: any }, connected: string): boolean => {
  let found = false;
  Object.keys(inputs).forEach((key: string): void => {
    if (!found && inputs[key].connected === connected) {
      found = true;
    }
  });

  return found;
};
