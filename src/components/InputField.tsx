import React from "react";
import { JsxElement } from "typescript";

const InputField = () => {
  return (
    <form>
      <input type="text" placeholder="Enter ur task" />
      <button type="submit"> Go </button>
    </form>
  );
};

export default InputField;
