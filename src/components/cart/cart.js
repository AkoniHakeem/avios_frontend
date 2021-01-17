import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/appContext'
import './cart.css'
import config from "../../config"

/* We can create a use states that can be specified by caller like say 'mini', 'fullpage' or  draggable*/
// this is going to subscribe to  a cart context where it is able to read the cart values
const Cart = (props) => {
    const appContext = useContext(AppContext)
    let cartCount = appContext.cartContext.cart.count;
    const classNames = ["cart-btn"];
    cartCount ? classNames.push("cartNonEmpty") : classNames.push("cartEmpty")
    return(
        <>{
            props.size === 'mini' ?             
            <Link to="/cart">
                <button className={classNames.join(" ")}>
                   Cart({cartCount})
                </button>
            </Link> 
            : 
            <div className="cart-items-container">
                <div>
                    <h3>Please, reviwe your cart items</h3>
                </div>
                <ul className="card-shadowed cart-list">
                {
                    appContext.cartContext.cart.items.map(prodObject => {
                        return (
                                <li key={prodObject.product._id} className="cart-list-item-row">
                                    {/* `${config.avios_BACKENDURL}${prod.Product_Varieties[0].images}` */}
                                    <img className="cart-img"  src={`${config.avios_BACKENDURL}${prodObject.product.Product_Varieties[0].images}`} alt={prodObject.product.name}/>
                                    <label>{prodObject.product.product_name}</label>
                                    <select>
                                        <option value={prodObject.quantity}>{prodObject.quantity}</option>
                                    </select>
                                    <label><strong>N</strong>{prodObject.product.Product_Varieties[0].price * prodObject.quantity}</label>
                                </li>
                        )
                    }) 
                }
                </ul>
                <Link to="/checkout">
                <button className="btn-primary cart-btn-submit">Place Order</button>
                </Link>
            </div>

        }

        </>
    )
}

export default Cart