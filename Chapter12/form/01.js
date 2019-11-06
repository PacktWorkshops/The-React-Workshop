import React from "react";

const Form = () => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();

        console.log("form submitted");
      }}
    >
      <input placeholder="give me string" />
      <div>
        <button type="submit">submit</button>
      </div>
    </form>
  );
};

export default Form;
