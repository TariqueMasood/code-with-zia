import React from "react";
import styles from "./register-button.module.css";

interface RegisterButtonProps {
  buttonText: string;
  priceRange?: string;
  additionalText?: string;
  className?: string;
}

export const RegisterButton: React.FC<RegisterButtonProps> = ({
  buttonText,
  priceRange,
  additionalText,
  className,
}) => {
  const buttonClassName = `${styles.registerButton} ${className || ""}`;
  return (
    <div>
      <button className={buttonClassName}>
        {buttonText} <br />
        {priceRange && (
          <span>
            {priceRange} {additionalText && `- ${additionalText}`}
          </span>
        )}
        {!priceRange && additionalText && <span>{additionalText}</span>}
      </button>
    </div>
  );
};
