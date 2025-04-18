import { Title } from "./Title";
import { InputSection } from "./InputSection";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { validateStepTwo } from "@/utils/validationStep2";

export const SecondStep = ({
  nextStep,
  formValues,
  formErrors,
  currentStep,
  previousStep,
  updateFormErrors,
  handleInputChange,
}) => {
  const { email, phoneNumber, password, confirmPassword } = formValues;

  const {
    email: emailError,
    phoneNumber: phoneNumberError,
    password: passwordError,
    confirmPassword: confirmPasswordError,
  } = formErrors;

  const handleSubmit = (event) => {
    event.preventDefault();

    const { isFormValid, validationErrors } = validateStepTwo(formValues);

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
        <div className="flex flex-col gap-9 ">
          <InputSection
            name="email"
            type="email"
            label="Email"
            placeholder="Your email"
            value={email}
            error={emailError}
            onChange={handleInputChange}
          />
          <InputSection
            type="number"
            name="phoneNumber"
            label="Phone number"
            placeholder="Your phone number"
            value={phoneNumber}
            error={phoneNumberError}
            onChange={handleInputChange}
          />
          <InputSection
            name="password"
            type="password"
            label="Password"
            placeholder="Your password"
            value={password}
            error={passwordError}
            onChange={handleInputChange}
          />
          <InputSection
            type="password"
            name="confirmPassword"
            label="Confirm password"
            placeholder="Confirm password"
            value={confirmPassword}
            error={confirmPasswordError}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="flex w-104 gap-1">
        <button
          type="button"
          onClick={previousStep}
          className="bg-white text-black border-[#CBD5E1] border-[1px] rounded-xl mt-4 px-4 p-2 flex w-32"
        >
          <ChevronLeft />
          Back
        </button>
        <button
          type="submit"
          className="bg-black text-white pl-22.5 rounded-xl mt-4 px-4 p-2 flex w-70 "
        >
          Continue 2/3
          <ChevronRight />
        </button>
      </div>
    </form>
  );
};
