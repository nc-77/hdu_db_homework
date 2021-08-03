import { useState } from "react";

const useForm = (defaultState, submitCallback) => {
  const [Info, setInfo] = useState(defaultState);

  const handleChange = (e) => {
    setInfo({
      ...Info,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitCallback();
  };

  return [Info, handleChange, handleSubmit, setInfo];
};

export default useForm;
