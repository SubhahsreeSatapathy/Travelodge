import React, { useState } from "react";

export default function Login() {
  const [login, setLogin] = useState({ userName: "", password: "" });
  const [user, setUser] = useState();
  const success = false;
  function handleInputChange(e) {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }
  function submit() {
    console.log("Submited", login);
    if (success) {
      setUser({ user: "nlsdf" });
    } else {
      alert("NO USER FOUND");
    }
  }
  return (
    <div>
      <h1>Login</h1>
      <label>User Name:</label>{" "}
      <input type="text" name="userName" onChange={handleInputChange} />
      <label>Password:</label>{" "}
      <input type="text" name="password" onChange={handleInputChange} />
      <button onClick={submit}>Submit</button>
    </div>
  );
}
