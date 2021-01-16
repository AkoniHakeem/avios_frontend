const Login = function() {
    return(
        <div className="card-shadowed">
            <div className="opening-brief"><p>Please, enter your login details</p></div>
            <form className="form-primary">
                <div>
                    <label>Phone</label>
                    <input />
                </div>
                <div>
                    <label>Password</label>
                    <input />
                </div>
                <button className="btn-primary">Login</button>
            </form>
        </div>
    )
}

export default Login