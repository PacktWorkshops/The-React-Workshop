import React from "react";

const validate = value => {
  if (value.length <= 5) {
    return true;
  } else {
    return false;
  }
};

const mockAPI = value =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (validate(value)) {
        resolve("All good.");
      } else {
        reject(new Error("Value's length is over 5."));
      }
    }, 1500)
  );

const Form = () => {
  const [value, setValue] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();

        setLoading(true);

        mockAPI(value)
          .then(_value => {
            setLoading(false);
          })
          .catch(_error => {
            setLoading(false);
          });
      }}
    >
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="give me string"
      />
      {isLoading && <div>...</div>}
      <div>
        <button type="submit">submit</button>
      </div>
    </form>
  );
};

export default Form;
