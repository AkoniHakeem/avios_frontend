// signup functionalities
// signup form
    // name, email, phone, password ... others to come
    const Signup = function(){
        return(
            <div className="card-shadowed">
                <div className="opening-brief"><p>Please, enter your details</p></div>
                <form className="form-primary">
                    <div className="label-input-group">
                        <label>First Name</label>
                        <input className="input-medium"/>
                    </div>
                    <div className="label-input-group">
                        <label>Last Name</label>
                        <input className="input-medium"/>
                    </div >
                    <div className="label-input-group">
                        <label>Email</label>
                        <input className="input-medium"/>
                    </div>

                    <div className="label-input-group">
                        <label>Phone</label>
                        <input className="input-medium"/>
                    </div>
                    <div className="label-input-group">
                        <label>Password</label>
                        <input className="input-medium"/>
                    </div>
                    <div className="label-input-group">
                        <label>Confirm Password</label>
                        <input className="input-medium"/>
                    </div>
                    <button className="btn-primary">Signup</button>
                </form>
            </div>
        )
    }

    export default Signup
