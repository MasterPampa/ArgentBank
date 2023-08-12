export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.body.token;

        localStorage.setItem('accessToken', token);
        
        dispatch({
          type: 'LOGIN',
          payload: { token }
        });
      } else {
      }
    } catch (error) {
    }
  };
};


 export const logout = () => {
  localStorage.removeItem('accessToken');
  return { type: 'LOGOUT' };
};