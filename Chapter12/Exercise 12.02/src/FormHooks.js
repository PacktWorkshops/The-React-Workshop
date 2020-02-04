import React from "react";

const useForm = () => {
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case "change_value":
          return { ...state, value: action.value };
        case "add_error":
          return { ...state, errors: [...state.errors, action.error] };
        case "clear_errors":
          return { ...state, errors: [] };
        default:
          return state;
      }
    },
    {
      value: "",
      errors: []
    }
  );
  const changeValue = event => {
    const newValue = event.target.value;
    dispatch({ type: "change_value", value: newValue });
  };
  const validateInput = fn => {
    const error = fn(state.value);
    if (error !== null) {
      dispatch({
        type: "add_error",
        error: error
      });
    }
  };
  const clearErrors = () => {
    dispatch({ type: "clear_errors" });
  };

  return { state, changeValue, validateInput, clearErrors };
};

export { useForm };
