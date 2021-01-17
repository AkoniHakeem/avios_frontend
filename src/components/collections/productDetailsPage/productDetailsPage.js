import { useState } from "react"
import { useParams } from "react-router-dom"
import useFetch from "../../useFetchFrom"
import config from '../../../config'
import ProductActions from "../../product-card/productActions/productActons"
import ProductDetail from "../../product-card/productDetail/productDetail"
import "./productDetailsPage.css"

const ProductDetailsPage = function (props) {
    const {productId}= useParams();
    const [prod_varieties, setProd_Variety] = useState([])
    const [currentProductV, setCurrentProductV] = useState(props.prod.Product_Varieties[0])
    const requestUrl = `${config.avios_BACKENDURL}/api/v1/products/one/${productId}`
    const request = new Request(requestUrl, {
        method:"GET"
    })
    useFetch(request, (product_varieties) => {
        setProd_Variety(product_varieties);
        console.log("prod varieties - ", product_varieties);
    })
    console.log(useParams())

    // const getQuantityOptions = function () {
    //     let quantityArray = [];
    //     for (let index = 1; index <= 20; index++) {
    //         quantityArray.push(index)
    //     }
    //     return quantityArray;
    // }
    const prodVImage_OnClick = function (e) {
        const prodV = prod_varieties.find(p => p.id == Number(e.target.alt))
        setCurrentProductV(prodV)
        console.log("prodV is - ", prodV)
    }
    return(
        <div className="product-details-page-container">
            <div className="product-pictures-varieties-selection">
                <div className="product-pictures-varieties"> 
                    {prod_varieties.map( p => {
                        return <div key={p.id+"_"+p.product_id}><img src={`${config.avios_BACKENDURL}${p.images}`}  alt={p.id} onClick={(e)=>{prodVImage_OnClick(e)}}/></div>
                    })}
                </div>
                <div className="details-image-area">
                    <img src={`${config.avios_BACKENDURL}${currentProductV.images}`} alt={currentProductV.size}></img>
                </div>
            </div>

            {/* details area */}
            <div className="details-area">
                <ProductDetail name={props.prod.product_name} 
                price={currentProductV.price} 
                description={props.prod.product_description}/>
            </div>
            <div className="product-action-style">
            <ProductActions product={prod_varieties} quantityArray={[1,2]}/>
            </div>
            {/* more details area */}
            <div className="more-details-area">

            </div>
        </div>
    )
}
export default ProductDetailsPage