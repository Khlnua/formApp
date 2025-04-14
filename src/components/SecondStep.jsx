import { ChevronLeft, ChevronRight } from "lucide-react";
import { InputSection } from "./InputSection";
import { Title } from "./Title";

export const SecondStep = ({
  nextStep,
  previousStep,
  formValues,
  handleInputChange,
}) => {
  const { email, phoneNumber, password, confirmPassword } = formValues;
  return (
    <div className="flex flex-col justify-between w-120 h-164 mt-45 p-8 rounded-xl bg-white">
      <div>
        <Title />
        <div className="flex flex-col gap-4 ">
          <InputSection
            name="email"
            type="text"
            value={email}
            onChange={handleInputChange}
            placeholder="Your email"
            label="Email"
          />
          <InputSection
            name="phoneNumber"
            type="number"
            value={phoneNumber}
            onChange={handleInputChange}
            placeholder="Your phone number"
            label="Phone number"
          />
          <InputSection
            name="password"
            type="text"
            value={password}
            onChange={handleInputChange}
            placeholder="Your password"
            label="Password"
          />
          <InputSection
            name="confirmPassword"
            type="text"
            value={confirmPassword}
            onChange={handleInputChange}
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
          onClick={nextStep}
          className="bg-black text-white pl-22.5 rounded-xl mt-4 px-4 p-2 flex w-70 "
        >
          Continue 2/3
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
