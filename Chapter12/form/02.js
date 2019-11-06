import React from "react";

const Form = () => {
  const [value, setValue] = React.useState("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();

        console.log(value);
      }}
    >
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="give me string"
      />
      <div>
        <button type="submit">submit</button>
      </div>
    </form>
  );
};

export default Form;
