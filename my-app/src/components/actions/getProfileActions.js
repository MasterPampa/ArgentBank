export const user = () => {
    return async (dispatch) => {
        try {
            const token = localStorage.getItem('accessToken');
            console.log(token)
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Authorization': 'Bearer' + token,
                  }
            })
            if (response.ok) {
                const data = await response.json();
                const userProfile = data.body;
                console.log(userProfile)

                dispatch({
                    type: 'USER',
                    payload: {
                        email: userProfile.email,
                        firstName: userProfile.firstName,
                        id: userProfile.id,
                        lastName: userProfile.lastName,
                        userName: userProfile.userName,
                    }
                })
            } else {}
        } catch (error){}
    }
}