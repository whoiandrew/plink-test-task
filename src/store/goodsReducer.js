export const INC_BY_PARAM = "INC_BY_PARAM";
export const DEC_BY_PARAM = "DEC_BY_PARAM";

const defaultList = [
  {
    name: "Lenovo IC-512",
    sku: "ZC11501",
    ram: 4,
    price: 550,
    hdd: 512,
  },
  {
    name: "HP Megabook 14",
    sku: "ZC12001",
    ram: 2,
    price: 420,
    hdd: 240,
  },
  {
    name: "Lenovo IC-520",
    sku: "ZC22004",
    ram: 8,
    price: 600,
    hdd: 1024,
  },
  {
    name: "Asus ThinkPad 15-1554",
    sku: "ZC15030",
    ram: 16,
    price: 700,
    hdd: 1024,
  },
  {
    name: "Asus ThinkPad 14-254",
    sku: "ZX5467",
    ram: 8,
    price: 520,
    hdd: 240,
  },
  {
    name: "HP Elitebook 15",
    sku: "ZXC5460",
    ram: 12,
    price: 889,
    hdd: 515,
  },
];

const goodsReducer = (state = defaultList, action) => {
  const { type, sortParam } = action;
  switch (type) {
    case INC_BY_PARAM:
      if (typeof state[0][sortParam] === "number") {
        return [...state.sort((a, b) => b[sortParam] - a[sortParam])];
      }
      return [
        ...state.sort((a, b) =>
          a[sortParam] > b[sortParam]
            ? 1
            : b[sortParam] > a[sortParam]
            ? -1
            : 0,
        ),
      ];
    case DEC_BY_PARAM:
      if (typeof state[0][sortParam] === "number") {
        return [...state.sort((a, b) => a[sortParam] - b[sortParam])];
      }
      return [
        ...state.sort((a, b) =>
          a[sortParam] > b[sortParam]
            ? -1
            : b[sortParam] > a[sortParam]
            ? 1
            : 0,
        ),
      ];
    default:
      return [...state];
  }
};

export const increaseSortCreator = (sortParam) => ({
  type: INC_BY_PARAM,
  sortParam,
});
export const decreaseSortCreator = (sortParam) => ({
  type: DEC_BY_PARAM,
  sortParam,
});

export default goodsReducer;
