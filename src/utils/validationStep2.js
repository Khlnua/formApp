const isEmpty = (value) => !value?.trim();

export const validateStepTwo = ({
  email,
  password,
  phoneNumber,
  confirmPassword,
}) => {
  const validationErrors = {};

  if (isEmpty(email)) {
    validationErrors.email = "Мэйл хаягаа оруулна уу";
  }

  if (isEmpty(phoneNumber)) {
    validationErrors.phoneNumber = "Утасны дугаараа оруулна уу";
  } else if (phoneNumber.length !== 8) {
    validationErrors.phoneNumber = "8 оронтой дугаар оруулна уу";
  }

  if (isEmpty(password)) {
    validationErrors.password = "Нууц үгээ оруулна уу";
  } else if (password.length < 6) {
    validationErrors.password = "6 оронтой тоо оруулна уу";
  }

  if (isEmpty(confirmPassword)) {
    validationErrors.confirmPassword = "Нууц үгээ давтаж оруулна уу";
  } else if (password !== confirmPassword) {
    validationErrors.confirmPassword = "Таны оруулсан нууц үг таарахгүй байна.";
  }

  const isFormValid = Object.keys(validationErrors).length === 0;

  return { isFormValid, validationErrors };
};
