import React, { useState, useEffect } from "react";
import { login } from "../apis/userApi";
import validation from "./validation";

const Login = ({ submitForm }) => {
  const [values, setValues] = useState({
    emailId: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setErrors(validation(values));
    setDataIsCorrect(true);
    login(values)
      .then((res) => {
        if (res.data.result === null) {
          alert("No user found");
        } else {
          alert("Logged In successfully!");
          localStorage.setItem("isLoggedIn", "true");
          window.location.href = "/rooms";
        }
      })
      .catch((err) => {
        console.log("Error while loggin");
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
            <h2 className="title">Sign In</h2>
          </div>
          <form className="form-wrraper">
            <div className="email">
              <label className="label">Email ID</label>
              <input
                type="text"
                className="input"
                name="emailId"
                value={values.emailId}
                onChange={handleChange}
              />
              {/* {errors.email && <p className="error">{errors.email}</p>}
               */}
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
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
