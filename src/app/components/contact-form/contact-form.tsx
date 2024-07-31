"use client";

import { useContext } from "react";
import styles from "./contact-form.module.css";
import { FormContext } from "@/context/form-context";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const ContactForm = () => {
  const context = useContext(FormContext);
  const notify = () => toast("Form submitted successfully");

  const router = useRouter();

  if (!context) {
    throw new Error("FormComponent must be used within a FormProvider");
  }

  const { formData, updateFormData, resetFormData, errors, validateAllFields } =
    context;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    updateFormData(name, value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateAllFields()) {
      return;
    }

    try {
      await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobileNumber: formData.mobileNumber,
          message: formData.message,
        }),
        headers: {
          "content-type": "application/json",
        },
      });

      resetFormData();
      notify();
      router.push("/");
    } catch (error: any) {
      console.log("Error", error);
    }
  };

  return (
    <div className={styles.contactForm}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name*"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className={styles.error}>{errors.name}</p>}
        </div>
        <div className={styles.inputGroup}>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email*"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>
        <div className={styles.inputGroup}>
          <input
            type="text"
            name="mobileNumber"
            placeholder="Enter Your Mobile Number*"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
          {errors.mobileNumber && (
            <p className={styles.error}>{errors.mobileNumber}</p>
          )}
        </div>
        <div className={styles.inputGroup}>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message..."
            required
          />
          {errors.message && <p className={styles.error}>{errors.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
