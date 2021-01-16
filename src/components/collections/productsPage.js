import { useTitle } from "ahooks";
import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import config from '../../config'
import useFetch from "../useFetchFrom";
const { default: ProductCard } = require("../product-card/productCard");


const ProductsPage = (props) => {
    let {path} = useRouteMatch();
    useTitle(`${path.substring(1)} - avios`, {restoreOnUnmount: true});
    let requestUrl = `${config.avios_BACKENDURL}/api/v1/products/${path}`
    const request = new Request(requestUrl, {
        method: "GET"
    })
    const [products, setProducts] = useState([])
        useFetch(request, (_products) => {
            setProducts(_products)
        })
    return(
        <div className="main-content">
            {products.map(prod => {
                return <ProductCard productImage={prod.imageLocation} key={prod._id} productName={prod.name} productId={prod._id} productDescription={prod.description} productPrice={prod.price}/>
            })}
        </div>
    )
}
export default ProductsPage