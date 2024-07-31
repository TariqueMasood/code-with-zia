"use client";

import { FormContextProps, FormData } from "@/@types/form";
import { ReactNode, createContext, useState } from "react";

const FormContext = createContext<FormContextProps | undefined>(undefined);

const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobileNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});

  const validateField = (name: string, value: string): string | null => {
    switch (name) {
      case "name":
        return value.trim() === "" ? "Name is required" : null;
      case "email":
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailPattern.test(value) ? "Invalid email address" : null;
      case "mobileNumber":
        const mobilePattern = /^[0-9]{10}$/;
        return !mobilePattern.test(value) ? "Invalid mobile number" : null;
      case "message":
        return value.trim() === "" ? "Message is required" : null;
      default:
        return null;
    }
  };

  const updateFormData = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const resetFormData = () => {
    setFormData({
      name: "",
      email: "",
      mobileNumber: "",
      message: "",
    });

    setErrors({});
  };

  const validateAllFields = () => {
    const newErrors: { [key: string]: string | null } = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      const value = formData[key as keyof FormData];
      const error = validateField(key, value);
      newErrors[key] = error;
      if (error) isValid = false;
    });

    setErrors(newErrors);
    return isValid;
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        updateFormData,
        resetFormData,
        errors,
        validateAllFields,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };
