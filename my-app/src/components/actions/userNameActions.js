export const userName = (newUserName) => {
    return async (dispatch, getState) => {
        try {
            const token = getState().token;
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'PUT',
                body: JSON.stringify({ userName: newUserName }),
                headers: {
                    'accept': 'application/json',
                    'Authorization': 'Bearer ' + token.token,
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                dispatch({
                    type: 'USER_NAME',
                    payload: newUserName
                });
            } else {
                console.log("Erreur de mise à jour du nom d'utilisateur. Statut de réponse:", response.status);
            }
        } catch (error) {
            console.error("Erreur lors de la mise à jour du nom d'utilisateur:", error);
        }
    };
}
