import Logo from "../../img/argentBankLogo.png"
import "./Header.css"

function Header() {
    return(
        <header>
            <div>
                <img src={Logo} alt="Logo" />
            </div>
            <nav>
                <div className="nav_button">
                    <i className="fa fa-circle-user"></i>
                    <p>$Username</p>
                </div>
                <div className="nav_button">
                    <i className="fa fa-circle-user"></i>
                    <p>Sign In</p>
                </div>
                <div className="nav_button">
                    <i className="fa fa-sign-out"></i>
                    <p>Sign Out</p>
                </div>
            </nav>
        </header>
    )
}

export default Header