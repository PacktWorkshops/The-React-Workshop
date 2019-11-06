import React from "react";

const validate = value => {
  if (value.length <= 5) {
    return true;
  } else {
    return false;
  }
};

const mockAPI = value => {
  if (validate(value)) {
    return "All good.";
  } else {
    throw new Error("Value's length is over 5.");
  }
};

const useForm = ({ handler }) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(undefined);

  return {
    value,
    changeHandler: e => setValue(e.target.value),
    error,
    submitHandler: e => {
      e.preventDefault();

      try {
        handler(value);

        setError(undefined);
      } catch (e) {
        setError(e.message);
      }
    }
  };
};

const Form = () => {
  const { changeHandler, submitHandler, value, error } = useForm({
    handler: mockAPI
  });

  return (
    <form onSubmit={submitHandler}>
      <input
        value={value}
        onChange={changeHandler}
        placeholder="give me string"
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <div>
        <button type="submit">submit</button>
      </div>
    </form>
  );
};

export default Form;
