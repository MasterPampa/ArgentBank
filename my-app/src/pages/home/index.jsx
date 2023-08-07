import Header from "../../components/header/Header"
import Banner from "../../components/banner/Banner"
import Features from "../../components/features/Features"

import "./index.css"

function Home () {
    return(
        <div>
            <Header />
            <main>
                <Banner />
                <Features />
            </main>
        </div>
    )
}
export default Home