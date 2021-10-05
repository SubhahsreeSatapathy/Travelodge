import React, { useState, useEffect } from "react";
import { register } from "../apis/userApi";
import validation from "./validation";

const SignupForm = ({ submitForm }) => {
  const [values, setValues] = useState({
    fullName: "",
    emailId: "",
    password: "",
    phoneNumber: "",
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
    register(values)
      .then((res) => {
        console.log(res);
        if (res.data === "Saved Successfully") {
          alert("Registered Successfully!");
          window.location.href = "/login";
        } else {
          alert("User Already Exsits");
        }
      })
      .catch((err) => {
        alert("Error while Register");
        window.location.href = "/";
      });
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
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
              />{" "}
              {errors.fullName && <p className="error">{errors.fullName}</p>}
            </div>
            <div className="email">
              <label className="label">Email ID</label>
              <input
                type="text"
                className="input"
                name="emailId"
                value={values.emailId}
                onChange={handleChange}
              />
              {errors.emailId && <p className="error">{errors.emailId}</p>}
            </div>
            <div className="email">
              <label className="label">Phone Number </label>
              <input
                type="number"
                className="input"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
              />
              {errors.phoneNumber && (
                <p className="error">{errors.phoneNumber}</p>
              )}
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
