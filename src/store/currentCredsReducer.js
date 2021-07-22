const defaultFormState = {
  fullName: "",
  email: "",
  country: "",
  city: "",
  address: "",
};

const currentCredsReducer = (state = defaultFormState, action) => {
  switch (action.type) {
    case "UPDATE_CREDS":
      return { ...state, ...action.creds };
    default:
      return { ...state };
  }
};

export default currentCredsReducer;
