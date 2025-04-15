"use client";

import { FirstStep } from "@/components/FirstStep";
import { SecondStep } from "@/components/SecondStep";
import { ThirdStep } from "@/components/ThirdStep";
import { FinalStep } from "@/components/FinalStep";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { initialFormValues } from "@/constants/constants";

const Home = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formError, setFormError] = useState(initialFormValues);

  console.log("formValues", formValues);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormValues((previousValues) => ({ ...previousValues, [name]: value }));
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
            nextStep={nextStep}
            previousStep={previousStep}
            handleInputChange={handleInputChange}
            formValues={formValues}
            formError={formError}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Home;
