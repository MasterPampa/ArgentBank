import Logo from "../../img/argentBankLogo.png"
import { Link, useNavigate } from 'react-router-dom';
import "./Header.css";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/authActions';
import Cookies from "js-cookie";

function Header() {

    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.isAuthenticated);
    const userName = useSelector(state => state.user.firstName)
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <header>
            <Link to={`/`}>
                <img src={Logo} alt="Logo" />
            </Link>
            <nav>
                {isAuthenticated && (
                    <Link to={`/user`} className='nav_button'>
                        <i className="fa fa-circle-user"></i>
                        <p>{userName}</p>
                    </Link>
                )}
                {!isAuthenticated && (
                    <Link to={`/sign-in`} className='nav_button'>
                        <i className="fa fa-circle-user"></i>
                        <p>Sign In</p>
                    </Link>
                )}
                {isAuthenticated && (
                    <div className='nav_button signout' onClick={handleLogout}>
                        <i className="fa fa-sign-out"></i>
                        <p>Sign Out</p>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Header;
