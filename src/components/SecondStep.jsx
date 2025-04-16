import { ChevronLeft, ChevronRight } from "lucide-react";
import { InputSection } from "./InputSection";
import { Title } from "./Title";

const isEmpty = (value) => !value?.trim();

const validateStepTwo = ({ email, phoneNumber, password, confirmPassword }) => {
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

export const SecondStep = ({
  nextStep,
  previousStep,
  formValues,
  handleInputChange,
  formErrors,
  updateFormErrors,
}) => {
  const { email, phoneNumber, password, confirmPassword } = formValues;

  const {
    email: emailError,
    phoneNumber: phoneNumberError,
    password: passwordError,
    confirmPassword: confirmPasswordError,
  } = formErrors;

  const handleSubmit = () => {
    event.preventDefault();
    const { isFormValid, validationErrors } = validateStepTwo(formValues);

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
        <div className="flex flex-col gap-9 ">
          <InputSection
            name="email"
            type="email"
            id="email"
            value={email}
            onChange={handleInputChange}
            error={emailError}
            placeholder="Your email"
            label="Email"
          />
          <InputSection
            name="phoneNumber"
            type="number"
            value={phoneNumber}
            onChange={handleInputChange}
            error={phoneNumberError}
            placeholder="Your phone number"
            label="Phone number"
          />
          <InputSection
            name="password"
            type="password"
            value={password}
            onChange={handleInputChange}
            error={passwordError}
            placeholder="Your password"
            label="Password"
          />
          <InputSection
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={handleInputChange}
            error={confirmPasswordError}
            placeholder="Confirm password"
            label="Confirm password"
          />
        </div>
      </div>

      <div className="flex w-104 gap-1">
        <button
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
          Continue 3/3
          <ChevronRight />
        </button>
      </div>
    </form>
  );
};
