// delivery address
import "./checkout.css"
import useInputOnchange from "../useInputOnchange"
import { Link } from "react-router-dom"

// checkout / place order button

// read the cart in app context

const Checkout = function(props) {
    const [value, error, bindform, clearInput] = useInputOnchange("Enter your delivery address")
    console.log(JSON.stringify(bindform))
    return (
        <div className="checkout">
            <p>Please, supply the address to forward your orders</p>
            <form className="card-shadowed">
                <div className="label-input-group">
                    <label>Delivery Address</label>
                    <input className="input-medium" {...bindform} />
                </div>
                <Link to="/thank-you-for-your-order">
                    <button className="checkout-btn">Checkout</button>
                </Link>
            </form>
        </div>
    )
}

export default Checkout
