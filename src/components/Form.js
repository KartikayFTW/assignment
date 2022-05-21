import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/Form.module.scss";

const Form = () => {
  let navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
    cnfPassword: "",
    fullname: "",
    phone: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => {
      return { ...prevValues, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      navigate("/chart");
    }
  }, [formErrors, isSubmit, navigate]);
  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "This is not a valid email";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!values.cnfPassword) {
      errors.cnfPassword = " Confirm Password is required";
    } else if (values.password !== values.cnfPassword) {
      errors.password = "Password do not match";
      errors.cnfPassword = "Password do not match";
    }
    if (!values.phone) {
      errors.phone = "Mobile number is required";
    } else if (!phoneRegex.test(values.phone)) {
      errors.phone = "Mobile number is invalid";
    }

    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.form}>
        <div className={styles.form__heading}>
          <h3>Create an account</h3>
        </div>
        <div className={styles.form__input}>
          <label htmlFor="email" className={styles.form__input__label}>
            Your email address
          </label>
          <input
            type="email"
            name="email"
            className={styles.form__input__inputbox}
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        {formErrors && isSubmit && (
          <p className={styles.form__error}>{formErrors.email}</p>
        )}
        <div className={styles.form__input}>
          <label htmlFor="password" className={styles.form__input__label}>
            Your password
          </label>
          <input
            type="password"
            name="password"
            className={styles.form__input__inputbox}
            value={formValues.password}
            autoComplete="on"
            onChange={handleChange}
          />
        </div>
        {formErrors && isSubmit && (
          <p className={styles.form__error}>{formErrors.password}</p>
        )}
        <div className={styles.form__input}>
          <label htmlFor="cnfPassword" className={styles.form__input__label}>
            Confirm your password
          </label>
          <input
            type="password"
            name="cnfPassword"
            autoComplete="on"
            className={styles.form__input__inputbox}
            value={formValues.cnfPassword}
            onChange={handleChange}
          />
        </div>
        {formErrors && isSubmit && (
          <p className={styles.form__error}>{formErrors.cnfPassword}</p>
        )}
        <div className={styles.form__input}>
          <label htmlFor="fullname" className={styles.form__input__label}>
            Your full name
          </label>
          <input
            type="text"
            name="fullname"
            className={styles.form__input__inputbox}
            value={formValues.name}
            onChange={handleChange}
          />
        </div>

        <div className={styles.form__input}>
          <label htmlFor="phone" className={styles.form__input__label}>
            Your phone number
          </label>
          <input
            type="number"
            name="phone"
            className={`${styles.form__input__inputbox} ${styles["form__input__inputbox--phone"]}`}
            value={formValues.phone}
            onChange={handleChange}
          />
        </div>
        {formErrors && isSubmit && (
          <p className={styles.form__error}>{formErrors.phone}</p>
        )}

        <div className={styles.form__check}>
          <input
            type="checkbox"
            className={styles.form__check__checkbox}
            defaultChecked
          />
          <span className={styles.form__check__text}>
            I read and agree Terms and Conditions
          </span>
        </div>
        <button type="submit" className={styles.form__btn}>
          Create account
        </button>
      </div>
    </form>
  );
};

export default Form;
