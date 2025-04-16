import { InputSection } from "./InputSection";
import { Title } from "./Title";

const isEmpty = (value) => !value?.trim();

const validateStepOne = ({ firstName, lastName, userName }) => {
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

export const FirstStep = ({
  nextStep,
  formValues,
  handleInputChange,
  formErrors,
  updateFormErrors,
}) => {
  const { firstName, lastName, userName } = formValues;

  const {
    firstName: firtNameError,
    lastName: lastNameError,
    userName: userNameError,
  } = formErrors;

  const handleSubmit = (event) => {
    event.preventDefault();
    const { isFormValid, validationErrors } = validateStepOne(formValues);

    if (isFormValid) {
      nextStep();
      return;
    }

    updateFormErrors(validationErrors);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-between w-120 h-164 mt-45 p-8 rounded-xl bg-white"
    >
      <div>
        <Title />
        <div className="flex flex-col gap-10">
          <InputSection
            name="firstName"
            type="text"
            value={firstName}
            onChange={handleInputChange}
            error={firtNameError}
            placeholder="Your first name"
            label="First Name"
          />
          <InputSection
            name="lastName"
            type="text"
            value={lastName}
            onChange={handleInputChange}
            error={lastNameError}
            placeholder="Your last name"
            label="Last Name"
          />
          <InputSection
            name="userName"
            type="text"
            value={userName}
            onChange={handleInputChange}
            error={userNameError}
            placeholder="Your username"
            label="Username"
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-black text-white rounded-xl mt-4 px-4 p-2 "
      >
        Continue 1/3
      </button>
    </form>
  );
};
