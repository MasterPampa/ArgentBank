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
      // Mettre à jour le state avec les données de l'utilisateur
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case 'LOGOUT':
      // Réinitialiser le state lors de la déconnexion
      sessionStorage.removeItem('accessToken'); // Supprimer le token
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
