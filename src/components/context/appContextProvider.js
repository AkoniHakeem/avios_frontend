import { useReducer} from "react";
import CartReducer from "../Reducers/cartReducer";
import { AppContext } from "./appContext";

const AppContextProvider = function (props){
    const [cart, cartDispatch] = useReducer(CartReducer, { count: 0,items: []})


    return(
        <AppContext.Provider
        value={
            {
                cartContext: {
                    cart: {...cart},
                    cartDispatch
                },

            }
        }
        >
            {props.children}
        </AppContext.Provider>
    )
}



export default AppContextProvider;