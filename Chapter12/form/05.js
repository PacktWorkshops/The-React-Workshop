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

const Form = () => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(undefined);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();

        try {
          mockAPI(value);

          setError(undefined);
        } catch (e) {
          setError(e.message);
        }
      }}
    >
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
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
