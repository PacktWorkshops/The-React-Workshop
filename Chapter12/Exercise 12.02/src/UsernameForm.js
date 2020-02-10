import React from "react";
import { useForm } from "./FormHooks";

const UsernameForm = () => {
  const { state, changeValue, validateInput, clearErrors } = useForm();
  const validate = () => {
    clearErrors();
    validateInput(v =>
      v.length < 3 ? "Username must not be under 3 characters!" : null
    );
    validateInput(v =>
      v.toLowerCase() === "test" ? "Cannot use a test username!" : null
    );
  };
  return (
    <div className="UsernameForm">
      <h3>Username Form</h3>
      <ul className="errors">
        {state.errors.map((error, index) => (
          <li key={`e-${index}`}>{error}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Username"
        onChange={changeValue}
        value={state.value}
      />
      <button onClick={validate}>Validate</button>
    </div>
  );
};

export default UsernameForm;
