import { Title } from "./Title";
import { InputSection } from "./InputSection";
import { validateStepOne } from "@/utils/validationStep1";

export const FirstStep = ({
  nextStep,
  formErrors,
  formValues,
  currentStep,
  updateFormErrors,
  handleInputChange,
}) => {
  const { firstName, lastName, userName, parsedData } = formValues;

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
      localStorage.setItem(
        "multiStepFormData",
        JSON.stringify({ ...formValues, step: currentStep })
      );
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
            type="text"
            name="firstName"
            label="First Name"
            placeholder="Your first name"
            value={firstName}
            error={firtNameError}
            onChange={handleInputChange}
          />
          <InputSection
            type="text"
            name="lastName"
            label="Last Name"
            placeholder="Your last name"
            value={lastName}
            error={lastNameError}
            onChange={handleInputChange}
          />
          <InputSection
            type="text"
            name="userName"
            label="Username"
            placeholder="Your username"
            value={userName}
            error={userNameError}
            onChange={handleInputChange}
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
