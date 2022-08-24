 import "./login.css"




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
                <h2>Don't have an account ? <a href="">SignUp Now</a> </h2>




            </form>













        </div>

    )
}

export default Login