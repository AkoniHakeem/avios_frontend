import { Link } from "react-router-dom"
import "./authNav.css"

const AuthNav = (props) => {
    return(
        <>
        <Link to="/signup"> <button className="auth-nav-button">Sign Up</button></Link>
        <Link to="/login"><button className="auth-nav-button">Log In</button></Link>
        </>
    )
}

export default AuthNav