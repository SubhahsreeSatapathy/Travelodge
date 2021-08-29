import React, { useState } from "react";

export default function Register() {
  const [register, setRegister] = useState({ userName: "", password: "" });
  function handleInputChange(e) {
    setRegister({ ...register, [e.target.name]: e.target.value });
  }
  function submit() {
    console.log("Submited" + register);
  }
  return (
    <div>
      <h1>Register</h1>
      <label>User Name:</label>{" "}
      <input type="text" name="userName" onChange={handleInputChange} />
      <label>Password:</label>{" "}
      <input type="text" name="password" onChange={handleInputChange} />
      <button onClick={submit}>Submit</button>
    </div>
  );
}
