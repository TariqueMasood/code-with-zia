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

  const { formData, updateFormData, resetFormData } = context;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    updateFormData(name, value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
    } catch (error: any) {
      console.log("Error", error);
    }

    resetFormData();
    notify();
    router.push("/");
  };

  return (
    <div className={styles.contactForm}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name*"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Enter Your Email*"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="mobileNumber"
          placeholder="Enter Your Mobile Number*"
          value={formData.mobileNumber}
          onChange={handleChange}
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message..."
        ></textarea>

        <button type="submit">Send Your Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
