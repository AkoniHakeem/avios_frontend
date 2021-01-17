import { useTitle } from "ahooks";
import React, { useState } from "react";
import config from '../../config'
import useFetch from "../useFetchFrom";
const { default: ProductCard } = require("../product-card/productCard");


const ProductsPage = (props) => {
    let requestUrl = `${config.avios_BACKENDURL}/api/v1/products/show-products`
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
                return <ProductCard prod={prod} productImage={`${config.avios_BACKENDURL}${prod.Product_Varieties[0].images}`} key={prod.id} productName={prod.product_name} productId={prod.id} productDescription={prod.product_description} productPrice={prod.Product_Varieties[0].price}/>
            })}
        </div>
    )
}
export default ProductsPage