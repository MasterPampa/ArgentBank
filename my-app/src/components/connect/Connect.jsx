import { Link } from "react-router-dom"
import "./Connect.css"

function Connect () {
    return(
        <main className="signin">
            <section className="signin__window">
                <i class="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label for="username">Username</label>
                        <input type="text" id="username"/>
                    </div>
                    <div className="input-wrapper">
                        <label for="password">Password</label>
                        <input type="password" id="password"/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me"/>
                        <label for="remember-me">Remember me</label>
                    </div>
                    <Link to={`/user`} class="sign-in-button">Sign In</Link>
                </form>
            </section>
        </main>
    )
}

export default Connect