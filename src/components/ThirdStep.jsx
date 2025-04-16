import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { InputSection } from "./InputSection";
import { Title } from "./Title";
import { useState, useRef } from "react";
import Image from "next/legacy/image";

const validateStepThree = ({ dateOfBirth, profileImage }) => {
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
  console.log("dateOfBirth", profileImage);

  return { isFormValid, validationErrors };
};

export const ThirdStep = ({
  nextStep,
  previousStep,
  formValues,
  handleInputChange,
  formErrors,
  updateFormErrors,
}) => {
  const { dateOfBirth, profileImage } = formValues;

  const { dateOfBirth: dateOfBirthError, profileImage: profileImageError } =
    formErrors;

  const handleSubmit = () => {
    event.preventDefault();
    const { isFormValid, validationErrors } = validateStepThree(formValues);

    if (isFormValid) {
      nextStep();
      return;
    }

    updateFormErrors(validationErrors);
  };

  const inputImageRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [previewLink, setPreviewLink] = useState("");
  const [tempFile, setTempFile] = useState({});

  const openBrowse = () => {
    inputImageRef.current?.click();
  };

  const handleChange = (event) => {
    const file = Array.from(event.target.files)[0];

    if (file) {
      setTempFile(file);
      setPreviewLink(URL.createObjectURL(file));
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = Array.from(event.dataTransfer.files)[0];
    setPreviewLink(URL.createObjectURL(file));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const deleteImage = () => {
    setPreviewLink("");
    setTempFile({});
    inputImageRef.current.value = "";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-between w-120 h-164 mt-45 p-8 rounded-xl bg-white"
    >
      <div>
        <Title />
        <div className="flex flex-col gap-11 ">
          <InputSection
            name="dateOfBirth"
            type="date"
            value={dateOfBirth}
            onChange={handleInputChange}
            error={dateOfBirthError}
            placeholder="Your date of birth"
            label="Date of birth"
          />

          <div className="flex w-104 h-45 ">
            <input
              name="profileImage"
              ref={inputImageRef}
              error={profileImageError}
              placeholder="Browse or Drop Image"
              label="Profile Image"
              type="file"
              hidden
              onChange={(event) => {
                handleChange(event);
                handleInputChange(event);
              }}
            />

            <div
              className={`bg-gray-200 rounded-md flex justify-center items-center  w-104 h-45 border ${
                isDragging ? "border-dashed" : "border-solid "
              }`}
              error={profileImageError}
              onClick={openBrowse}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
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
