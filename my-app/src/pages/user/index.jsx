import "./index.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Profile from "../../components/profile/Profile"

function User () {
    return(
        <div className="wrapper">
            <Header />
            <Profile />
            <Footer />
        </div>
    )
}

export default User