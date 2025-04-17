import { Title } from "./Title";
import Image from "next/legacy/image";
import { InputSection } from "./InputSection";
import { profilePic } from "@/utils/profileInput";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { validateStepThree } from "@/utils/validationStep3";

export const ThirdStep = ({
  nextStep,
  formValues,
  formErrors,
  previousStep,
  updateFormErrors,
  handleInputChange,
}) => {
  const { dateOfBirth, profileImage } = formValues;

  const { dateOfBirth: dateOfBirthError, profileImage: profileImageError } =
    formErrors;

  const handleSubmit = (event) => {
    event.preventDefault();
    const { isFormValid, validationErrors } = validateStepThree(formValues);

    if (isFormValid) {
      nextStep();
      localStorage.removeItem("multiStepFormData");
      return;
    }

    updateFormErrors(validationErrors);
  };

  const {
    openBrowse,
    handleDrop,
    deleteImage,
    handleChange,
    handleDragOver,
    handleDragLeave,
    isDragging,
    previewLink,
    inputImageRef,
  } = profilePic();

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-between w-120 h-164 mt-45 p-8 rounded-xl bg-white"
    >
      <div>
        <Title />
        <div className="flex flex-col gap-11 ">
          <InputSection
            type="date"
            name="dateOfBirth"
            label="Date of birth"
            placeholder="Your date of birth"
            value={dateOfBirth}
            error={dateOfBirthError}
            onChange={handleInputChange}
          />

          <div className="flex w-104 h-45 ">
            <input
              hidden
              type="file"
              name="profileImage"
              label="Profile Image"
              placeholder="Browse or Drop Image"
              ref={inputImageRef}
              error={profileImageError}
              onChange={(event) => {
                handleChange(event);
                handleInputChange(event);
              }}
            />

            <div
              className={`bg-gray-200 rounded-md flex justify-center items-center  w-104 h-45 border ${
                isDragging ? "border-dashed" : "border-solid "
              }`}
              onDrop={handleDrop}
              onClick={openBrowse}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              error={profileImageError}
            >
              {previewLink !== "" ? (
                <div className="relative">
                  <Image
                    className="absolute z-1"
                    src={previewLink}
                    error={profileImageError}
                    width={416}
                    height={180}
                    alt="image"
                  />
                  <button
                    className="w-2 h-2 absolute z-10 left-97 top-1"
                    onClick={deleteImage}
                  >
                    <X />
                  </button>
                </div>
              ) : (
                <p> Browse or Drop Image</p>
              )}
            </div>
          </div>
        </div>
        {profileImageError && (
          <p className="text-red-500 text-4 h-4">{profileImageError} </p>
        )}
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
          Continue 3/3
          <ChevronRight />
        </button>
      </div>
    </form>
  );
};
