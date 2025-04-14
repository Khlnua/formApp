import { InputSection } from "./InputSection";
import { Title } from "./Title";

export const FirstStep = ({ nextStep, formValues, handleInputChange }) => {
  const { firstName, lastName, userName } = formValues;

  return (
    <div className="flex flex-col justify-between w-120 h-164 mt-45 p-8 rounded-xl bg-white">
      <div>
        <Title />
        <div className="flex flex-col gap-4 ">
          <InputSection
            name="firstName"
            type="text"
            value={firstName}
            onChange={handleInputChange}
            placeholder="Your first name"
            label="First Name"
          />
          <InputSection
            name="lastName"
            type="text"
            value={lastName}
            onChange={handleInputChange}
            placeholder="Your last name"
            label="Last Name"
          />
          <InputSection
            name="usertName"
            type="text"
            value={userName}
            onChange={handleInputChange}
            placeholder="Your username"
            label="Username"
          />
        </div>
      </div>

      <button
        onClick={nextStep}
        className="bg-black text-white rounded-xl mt-4 px-4 p-2 "
      >
        Continue 1/3
      </button>
    </div>
  );
};
