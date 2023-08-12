import Logo from "../../img/argentBankLogo.png"
import { Link } from 'react-router-dom';
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
    const userProfile = JSON.parse(localStorage.getItem('userProfile')) || {};

    return (
        <header>
            <Link to={`/`}>
                <img src={Logo} alt="Logo" />
            </Link>
            <nav>
                {isAuthenticated && (
                    <Link to={`/user`} className='nav_button'>
                        <i className="fa fa-circle-user"></i>
                        <p>{userProfile.firstName}</p>
                    </Link>
                )}
                {!isAuthenticated && (
                    <Link to={`/sign-in`} className='nav_button'>
                        <i className="fa fa-circle-user"></i>
                        <p>Sign In</p>
                    </Link>
                )}
                {isAuthenticated && (
                    <div className='nav_button signout' onClick={() => { if (window.confirm('Are you sure you wish to logout?')) {handleLogout()}} } >
                        <i className="fa fa-sign-out"></i>
                        <p>Sign Out</p>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Header;
