export const validateStepThree = ({ dateOfBirth, profileImage }) => {
  const validationErrors = {};

  const date = new Date();

  if (!dateOfBirth) {
    validationErrors.dateOfBirth = "Төрсөн өдрөө оруулна уу";
  } else if (date - new Date(dateOfBirth) < 18 * 365 * 24 * 60 * 60 * 1000) {
    validationErrors.dateOfBirth = "Та 18 ба түүнээс дээш настай байх ёстой";
  }

  if (!profileImage) {
    validationErrors.profileImage = "Профайл зурагаа оруулна уу";
  }

  const isFormValid = Object.keys(validationErrors).length === 0;

  return { isFormValid, validationErrors };
};
