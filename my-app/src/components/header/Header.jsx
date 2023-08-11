import Logo from "../../img/argentBankLogo.png"
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import "./Header.css";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/authActions';

function Header() {

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        window.location.href = '/';
    };

    const isAuthenticated = useSelector(state => state.isAuthenticated);
    const [isClassAdded, setIsClassAdded] = useState(false);

    useEffect(() => {
        if (isAuthenticated) {
            setIsClassAdded(true);
        } else {
            setIsClassAdded(false);
        }
    }, [isAuthenticated]);


    return (
        <header>
            <Link to={`/`}>
                <img src={Logo} alt="Logo" />
            </Link>
            <nav>
                <Link to={`/user`} className={isClassAdded ? 'nav_button' : 'hide'}>
                    <i className="fa fa-circle-user"></i>
                    <p>$Username</p>
                </Link>
                <Link to={`/sign-in`} className={!isClassAdded ? 'nav_button' : 'hide'}>
                    <i className="fa fa-circle-user"></i>
                    <p>Sign In</p>
                </Link>
                <div className={isClassAdded ? 'nav_button signout' : 'hide'} onClick={() => { if (window.confirm('Are you sure you wish to logout?')) {handleLogout()}} } >
                    <i className="fa fa-sign-out"></i>
                    <p>Sign Out</p>
                </div>
            </nav>
        </header>
    );
}

export default Header;