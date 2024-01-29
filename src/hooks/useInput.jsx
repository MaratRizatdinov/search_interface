import { useState } from "react";

export const useInput = (init) => {
  const [state, setState] = useState(init);

  const handleChange = (event) => {
    setState(event.target.value);
  };
  return [state,handleChange]
};
