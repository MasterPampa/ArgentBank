import "./index.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Connect from "../../components/connect/Connect"

function Signin () {
    return(
        <div className="wrapper">
            <Header />
            <Connect />
            <Footer />
        </div>
    )
}

export default Signin