export const login = (email, password) => {
    return {
      type: 'LOGIN',
      payload: fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' }
      }).then(response => response.json())
    };
  };