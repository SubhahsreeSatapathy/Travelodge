import React, { useState } from "react";
import SignupForm from "./SignupForm";
import SignupSuccess from "./SignupSuccess";

const Register = () => {
  const [formIsSubmitted, setFormIsSubmited] = useState(false);
  const submitForm = () => {
    setFormIsSubmited(true);
  };
  return (
    <div>
      {!formIsSubmitted ? (
        <SignupForm submitForm={submitForm} />
      ) : (
        <SignupSuccess />
      )}
    </div>
  );
};

export default Register;
