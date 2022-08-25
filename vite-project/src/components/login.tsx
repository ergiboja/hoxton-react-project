 import "./login.css"
 import { BrowserRouter as Router, Link } from "react-router-dom";




function Login() {
    return (
        <div className="container">
            <form>
                <h1>Login</h1>
                <div className="input-field">
                    <i className="uil uil-envelope icon"></i><input type="email" required placeholder="Enter Your Email:" />
                </div>
                <div className="input-field">
                    <i className="uil uil-lock icon"></i><input type="password" required placeholder="Enter Your Password:" />
                </div>
                <button type="submit" value="Submit">Login</button>
                <h2>Don't have an account ? <Link to="/register">SignUp Now</Link> </h2>




            </form>













        </div>

    )
}

export default Login