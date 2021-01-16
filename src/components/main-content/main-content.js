import './main-content.css'
import { useState } from 'react'
import useFetch from '../useFetchFrom'
import { Route, Switch } from 'react-router-dom'
import ProductsPage from '../collections/productsPage'
import ProductDetailsPage from '../collections/productDetailsPage/productDetailsPage'
import config from '../../config'
import Cart from '../cart/cart'
import Checkout from '../cart/checkout'
import Thanks from '../cart/thanks'
import Signup from '../authNav/signup'
import Login from '../authNav/login'

const MainContent = (props) => {
    let requestUrl = config.avios_BACKENDURL+"/api/v1/products/show-products"
    const request = new Request(requestUrl, {
        method: "GET"
    })
    const [products, setProducts] = useState([])
        useFetch(request, (_products) => {
            console.log(_products)
            setProducts(_products)
        })


    return(
        <div className="main-content">
            <Switch>
                <Route exact path="/">""
                </Route>
                {products.map(p => {
                    return <Route exact key={p.id} path={`/${p.name}`}><ProductsPage/></Route>})}
                {
                    products.map(
                        c => {
                            return <Route exact key={c.id+`${c.name}`} path={`/${c.name}/:productName/:productId`}>
                                    <ProductDetailsPage />
                            </Route>
                        }
                    )
                }
                <Route path="/cart">
                    <Cart size="big"/>
                </Route>
                <Route path="/checkout">
                    <Checkout/>
                </Route>
                <Route path="/thank-you-for-your-order">
                    <Thanks/>
                </Route>
                <Route path="/signup">
                    <Signup/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
            </Switch>
        </div>
    )
}

export default MainContent