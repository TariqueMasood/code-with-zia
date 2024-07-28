import React from "react";
import styles from "../../components/register-button/register-button.module.css";

export const RegisterButton = () => {
  return (
    <div>
      <button className={styles.registerButton}>
        yes! i want to register <br />
        <span>(&#8377;89 to &#8377;749) - few seats left</span>
      </button>
    </div>
  );
};
