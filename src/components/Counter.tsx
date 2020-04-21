import React from "react";
import { getCount } from "../redux/reducer/testReducer";
import { addToCount, subFromCount } from "../redux/actions/testActions";
import { useSelector, useDispatch } from "react-redux";

export default () => {
  const count = useSelector((state) => getCount(state));
  const dispatch = useDispatch();
  return (
    <div>
      {count}
      <button onClick={() => dispatch(addToCount())}>+</button>
      <button onClick={() => dispatch(subFromCount())}>-</button>
    </div>
  );
};
