"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { initialFormValues } from "@/constants/constants";
import { FirstStep, SecondStep, ThirdStep, FinalStep } from "@/components";

const Home = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormValues);

  const dataFunction = () => {
    const getData = localStorage.getItem("multiStepFormData");
    return getData ? JSON.parse(getData) : null;
  };

  useEffect(() => {
    const data = dataFunction();
    if (data) {
      setFormValues(data);
      setCurrentStep(data.step);
    }
  }, []);

  const updateFormErrors = (error) => {
    setFormErrors((previousErrors) => ({ ...previousErrors, ...error }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormValues((previousValues) => ({ ...previousValues, [name]: value }));
    setFormErrors((previousErrors) => ({ ...previousErrors, [name]: "" }));
  };

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const previousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const StepsComponents = [FirstStep, SecondStep, ThirdStep, FinalStep][
    currentStep
  ];

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <StepsComponents
            formValues={formValues}
            formErrors={formErrors}
            currentStep={currentStep}
            nextStep={nextStep}
            previousStep={previousStep}
            setFormErrors={setFormErrors}
            updateFormErrors={updateFormErrors}
            handleInputChange={handleInputChange}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Home;
