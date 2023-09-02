import "./Profile.css"
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { userName } from "../actions/userNameActions";

function Profile () {
    const user = useSelector(state => state.user);
    const oldUserName = user.userName;
    const dispatch = useDispatch();

    const [isEditing, setIsEditing] = useState(false);
    const [newUserName, setNewUserName] = useState('');

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };
    const handleSubmitClick = () => {
        dispatch(userName(newUserName));
    }

    return (
            <div className="profile">
                    {isEditing ? (
                        <div className="userInfo">
                            <h1>Edit user info</h1>
                            <div className="edit">
                                <div className="edit__form">
                                    <h3>User name: </h3>
                                    <input className="edit__form__input"
                                        type="text"
                                        placeholder={oldUserName}
                                        onChange={e => setNewUserName(e.target.value)}
                                    />
                                </div>
                                <div className="edit__form">
                                    <h3>First name: </h3>
                                    <input className="edit__form__input locked"
                                        type="text"
                                        defaultValue={user.firstName}
                                        disabled
                                    />
                                </div>
                                <div className="edit__form">
                                    <h3>Last name: </h3>
                                    <input className="edit__form__input locked"
                                        type="text"
                                        defaultValue={user.lastName}
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="editButtons">
                                <button className="profile__button saveClose" onClick={handleSubmitClick}>Save</button>
                                <button className="profile__button saveClose" onClick={handleEditClick}>Close</button>
                            </div>
                        </div>
                    ) : (
                        <div className='userInfo'>
                            <h1>Welcome back</h1>
                            <p>{user.firstName + ' ' + user.lastName + ' !'}</p>
                            <button className="profile__button" onClick={handleEditClick}>Edit Name</button>
                        </div>
                    )}
            </div>
    )
}

export default Profile