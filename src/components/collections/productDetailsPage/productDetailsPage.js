import { useState } from "react"
import { useParams } from "react-router-dom"
import useFetch from "../../useFetchFrom"
import config from '../../../config'
import ProductActions from "../../product-card/productActions/productActons"
import ProductDetail from "../../product-card/productDetail/productDetail"
import "./productDetailsPage.css"
const ProductDetailsPage = function () {
    const {productName, productId}= useParams();
    const [product, setproduct] = useState({})
    console.log(useParams())
    const requestUrl = `${config.avios_BACKENDURL}/api/v1/products/one/${productId}`
    const request = new Request(requestUrl, {
        method:"GET"
    })
    useFetch(request, (product) => {
        setproduct(product);
        console.log(product);
    })
    const getQuantityOptions = function () {
        let quantityArray = [];
        for (let index = 1; index <= 20; index++) {
            quantityArray.push(index)
        }
        return quantityArray;
    }
    return(
        <div className="product-details-page-container">
            {/* image area */}
            <div className="details-image-area">
                <img src={product.imageLocation} alt={productName}></img>
            </div>
            {/* details area */}
            <div className="details-area">
                <ProductDetail name={product.name} 
                price={product.price} 
                description={product.description}/>
            </div>
            <div className="product-action-style">
            <ProductActions product={product} quantityArray={getQuantityOptions()}/>
            </div>
            {/* more details area */}
            <div className="more-details-area">

            </div>
        </div>
    )
}
export default ProductDetailsPage