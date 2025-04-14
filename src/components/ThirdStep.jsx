import { ChevronLeft, ChevronRight } from "lucide-react";
import { InputSection } from "./InputSection";
import { Title } from "./Title";

export const ThirdStep = ({
  nextStep,
  previousStep,
  formValues,
  handleInputChange,
}) => {
  const { dateOfBirth, profileImage } = formValues;

  return (
    <div className="flex flex-col justify-between w-120 h-164 mt-45 p-8 rounded-xl bg-white">
      <div>
        <Title />
        <div className="flex flex-col gap-4 ">
          <InputSection
            name="dateOfBirth"
            type="date"
            value={dateOfBirth}
            onChange={handleInputChange}
            placeholder="Your date of birth"
            label="Date of birth"
          />
          <InputSection
            name="profileImage"
            type="text"
            value={profileImage}
            onChange={handleInputChange}
            placeholder="Browse or Drop Image"
            label="Profile Image"
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
          Continue 3/3
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
