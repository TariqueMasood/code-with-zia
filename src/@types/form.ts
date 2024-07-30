export interface FormData {
  name: string;
  email: string;
  mobileNumber: string;
  message: string;
}

export interface FormContextProps {
  formData: FormData;
  updateFormData: (name: string, value: string) => void;
  resetFormData: () => void;
}
