import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "@/redux/slices/counter";

const MainPage = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      안녕하세요{count}
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default MainPage;
