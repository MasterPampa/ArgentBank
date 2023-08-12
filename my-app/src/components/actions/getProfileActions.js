export const user = () => {
    return async (dispatch, getState) => { 
        try {
            const token = getState().token;
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Authorization': 'Bearer ' + token.token,
                }
            });

            if (response.ok) {
                const data = await response.json();
                const userProfile = data.body;

                dispatch({
                    type: 'USER',
                    payload: {
                        email: userProfile.email,
                        firstName: userProfile.firstName,
                        id: userProfile.id,
                        lastName: userProfile.lastName,
                        userName: userProfile.userName,
                    },
                });
            } else {
            }
        } catch (error) {
        }
    };
};
