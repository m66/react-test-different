import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeValue } from "./inputSlice";

const Input = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.input.value);

  return (
    <div>
      <input type="text" onChange={(e) => dispatch(changeValue(e.target.value))} />
      <span>{inputValue}</span>
    </div>
  );
};

export default Input;
