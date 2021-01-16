
const CartReducer = function(cart, action) {
    console.log("reducer called with action ", action.type)
    const reducerFunction = {
        addToCart(){
            console.log("cart initial ",cart)
            console.log("sent payload ",action.payload)
            let _cart;
             _cart = {
                ...cart, 
                count: cart.count + Number(action.payload.count), // I would need to update this to the count of each single product
                // we are updating the object values that has changed, 
                //this is esssential so react is able to track what has changed
                items: cart.items.some(prod => prod.product._id === action.payload.product._id) ? 
                (()=> {
                    const cartItems = [...cart.items]; 
                    let productObj = cartItems.find(prodObject => prodObject.product._id === action.payload.product._id);
                    console.log("prod.quantity before - ", productObj.quantity)
                    console.log("payload.count -- ", action.payload.count)
                    productObj.quantity =  Number(productObj.quantity) + Number(action.payload.count) 
                    console.log("prod.quantity after - ", productObj.quantity);
                    cart.items = cartItems
                    return [...cart.items];
                })() 
                : 
                (()=>{
                    cart.items.push({product: action.payload.product, quantity: action.payload.count});
                    return cart.items
                })()
            }
            console.log("cart later", _cart);
            return _cart;

            // we have got a new copy of cart context, we can do stuff with it

        },

        removeFromCart(){

        },

        emptyCart(){

        },

        default() {
            console.log("default called")
            return {
                count: 0,
                items: {}
            }
        }
    }
    return reducerFunction[action.type]() || reducerFunction["default"]();

}

export default CartReducer