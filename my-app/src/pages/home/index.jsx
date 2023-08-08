import Header from "../../components/header/Header"
import Banner from "../../components/banner/Banner"
import Features from "../../components/features/Features"
import Footer from "../../components/footer/Footer"

import "./index.css"

function Home () {
    return(
        <div>
            <Header />
            <main>
                <Banner />
                <Features />
            </main>
            <Footer />
        </div>
    )
}
export default Home