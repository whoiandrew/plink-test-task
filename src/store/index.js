import { combineReducers } from "redux";
import currentCredsReducer from "./currentCredsReducer";
import goodsReducer from "./goodsReducer";
import currentGoodsReducer from "./currentGoodReducer";

const allReducers = combineReducers({
  goods: goodsReducer,
  currentCreds: currentCredsReducer,
  currentGoods: currentGoodsReducer,
});

export default allReducers;
