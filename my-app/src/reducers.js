const initialState = {
  isAuthenticated: !!localStorage.getItem('accessToken'),
    user: {
      email: null,
      firstName: null,
      id: null,
      lastName: null,
      userName: null,
  },
  token:null,
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
      return {
        ...state,
        isAuthenticated: false, 
        user: {
          email: null,
          id: null,
          firstName: null,
          lastName: null,
          userName: null,
        },
        token: null,
      };
    case 'USER':
      return {
        ...state,
        user: {
          email: action.payload.email,
          firstName: action.payload.firstName,
          id: action.payload.id,
          lastName: action.payload.lastName,
          userName: action.payload.userName,
          },
      };
    default:
      return state;
  }
};

export default reducer;
