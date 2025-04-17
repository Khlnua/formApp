const isEmpty = (value) => !value?.trim();

export const validateStepOne = ({ firstName, lastName, userName }) => {
  const validationErrors = {};

  if (isEmpty(firstName)) {
    validationErrors.firstName = "Нэрээ оруулна уу";
  }
  if (isEmpty(lastName)) {
    validationErrors.lastName = "Овгоо оруулна уу";
  }
  if (isEmpty(userName)) {
    validationErrors.userName = "Хэрэглэгчийн нэрээ оруулна уу";
  }

  const isFormValid = Object.keys(validationErrors).length === 0;

  return { isFormValid, validationErrors };
};
