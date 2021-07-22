import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseSortCreator,
  decreaseSortCreator,
} from "../../store/goodsReducer";
import { useState } from "react";
import { useEffect, memo } from "react";

const SELECT_PROPS = {
  decrease: "decrease",
  increase: "increase",
};

const Selector = ({ sortParam }) => {
  const dispatch = useDispatch();
  const [selectValue, setSelectValue] = useState(SELECT_PROPS.decrease);
  const handleSelect = (e) => {
    setSelectValue(e.target.value);
  };
  useEffect(() => {
    switch (selectValue) {
      case SELECT_PROPS.increase:
        dispatch(increaseSortCreator(sortParam));
        break;
      case SELECT_PROPS.decrease:
        dispatch(decreaseSortCreator(sortParam));
        break;
      default:
        break;
    }
  }, [selectValue, dispatch, sortParam]);
  return (
    <td>
      <select
        value={selectValue}
        onChange={handleSelect}
        style={{ fontSize: "0.5rem" }}
      >
        <option disabled>Sort by</option>
        <option value={SELECT_PROPS.increase}>Increasing</option>
        <option value={SELECT_PROPS.decrease}>Decreasing</option>
      </select>
    </td>
  );
};

export default memo(Selector);
