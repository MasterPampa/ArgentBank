const initialState = {
  isAuthenticated: false,
  user: {
    email: null,
    password: null,
    firstName: null,
    lastName: null,
    userName: null,
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      sessionStorage.getItem('accessToken');
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case 'LOGOUT':
      sessionStorage.removeItem('accessToken');
      return {
        ...state,
        isAuthenticated: false, // Mise à jour de l'état isAuthenticated lors de la déconnexion
        user: {
          email: null,
          password: null,
          firstName: null,
          lastName: null,
          userName: null,
        },
      };
    default:
      return state;
  }
};

export default authReducer;
