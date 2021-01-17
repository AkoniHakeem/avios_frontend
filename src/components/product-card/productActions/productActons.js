import { useContext, useState } from 'react'
import { AppContext } from '../../context/appContext';
import './productActions.css'

const ProductActions = (props) => {
    const appContext = useContext(AppContext)
    let [selection, setSelection] = useState(1);// initialization helps to ensure there is always 
                                    //cart count of 1 to add when the select tags are not available
    const addToCart = function () {
        const cartDispatch = appContext.cartContext.cartDispatch
        cartDispatch({type:"addToCart", payload:{count: Number(selection), product: {...props.product}}})
    }

    const setNewSelection = function (e) {
        setSelection(e.target.value)
    }
        
    return (
        <div>
            {props.quantityArray? 
            <select onChange={(e) => setNewSelection(e)}>
                {props.quantityArray.map(
                    (item, index) => {
                        return(
                            <option key={index} value={item}>{item}</option>
                        )
                    }
                )}
            </select> : ''
            }
            <button className="product-action-btn" onClick={addToCart.bind(this)}>Add To Cart</button>
        </div>
    )
}

export default ProductActions