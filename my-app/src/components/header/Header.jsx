import Logo from "../../img/argentBankLogo.png"
import "./Header.css"
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header>
            <Link to={`/`}>
                <img src={Logo} alt="Logo" />
            </Link>
            <nav>
                <Link to={`/user`} className="nav_button">
                    <i className="fa fa-circle-user"></i>
                    <p>$Username</p>
                </Link>
                <Link to={`/sign-in`} className="nav_button">
                    <i className="fa fa-circle-user"></i>
                    <p>Sign In</p>
                </Link>
                <Link to={`/`} className="nav_button">
                    <i className="fa fa-sign-out"></i>
                    <p>Sign Out</p>
                </Link>
            </nav>
        </header>
    )
}

export default Header