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
                <div className="nav_button">
                    <i className="fa fa-circle-user"></i>
                    <p>$Username</p>
                </div>
                <Link to={`/sign-in`} className="nav_button">
                    <i className="fa fa-circle-user"></i>
                    <p>Sign In</p>
                </Link>
                <div className="nav_button">
                    <i className="fa fa-sign-out"></i>
                    <p>Sign Out</p>
                </div>
            </nav>
        </header>
    )
}

export default Header