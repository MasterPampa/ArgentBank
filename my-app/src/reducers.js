const initialState = {
  isAuthenticated: false,
  user: {
    email: null,
    firstName: null,
    id: null,
    lastName: null,
    userName: null,
  },
  token: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
      };
    case 'LOGOUT':
      return initialState;
    case 'USER':
      return {
        ...state,
        user: {
          ...state.user,
          email: action.payload.email,
          firstName: action.payload.firstName,
          id: action.payload.id,
          lastName: action.payload.lastName,
          userName: action.payload.userName,
        },
      };
    case 'USER_NAME':
      return {
        ...state,
        user: {
          ...state.user,
          userName: action.payload,
        },
      };
    default:
      return state;
  }
};
export default reducer