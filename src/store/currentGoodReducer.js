const defaultGoodState = {
  name: "",
  price: 0,
  ram: 0,
  sku: "",
  hdd: 0,
};

const currentGoodsReducer = (state = defaultGoodState, action) => {
  switch (action.type) {
    case "UPDATE_GOOD":
      return { ...state, ...action.goodInfo };
    default:
      return { ...state };
  }
};

export default currentGoodsReducer;
