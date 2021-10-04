import React, { useState, useEffect } from "react";
import validation from "./validation";

const SignupForm = ({ submitForm }) => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    setDataIsCorrect(true);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
  }, [errors]);
  return (
    <div>
      <div className="container">
        <div className="app-wrapper">
          <div>
            <h2 className="title">Create Account</h2>
          </div>
          <form className="form-wrraper">
            <div className="name">
              <label className="label">Full Name</label>
              <input
                type="text"
                className="input"
                name="fullname"
                value={values.fullname}
                onChange={handleChange}
              />{" "}
              {errors.fullname && <p className="error">{errors.fullname}</p>}
            </div>
            <div className="email">
              <label className="label">Email ID</label>
              <input
                type="text"
                className="input"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="password">
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="password">
              <label className="label">Confirm Password </label>
              <input
                type="password"
                className="input"
                name="confirm"
                value={values.confirm}
                onChange={handleChange}
              />
              {errors.confirm && <p className="error">{errors.confirm}</p>}
            </div>
            <div>
              <button className="submit" onClick={handleFormSubmit}>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
