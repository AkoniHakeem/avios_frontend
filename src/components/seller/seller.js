
import { useRef, useState } from "react"
import useFetch from "../useFetchFrom"
import config from "../../config"
import "./seller.css";
const { Link } = require("react-router-dom")
const { default: Menu } = require("./menu")


const Seller = function(props) {
    let requestUrl = config.avios_BACKENDURL+"/api/v1/products/show-products"
    const request = new Request(requestUrl, {
        method: "GET"
    })
    const [products, setProducts] = useState([])
    const [products_id, setProducts_Id] = useState(0);
    const prodListRef = useRef()
        useFetch(request, (_products) => {
            console.log(_products)
            setProducts(_products)
        })
    const deleteVariety = function (product_v) {
        setProducts( ()=>
           { 
            const req = new Request(config.avios_BACKENDURL+"/api/v1/products/delete-prod-var/"+product_v.id, {
                method: "DELETE"
            })
            fetch(req).then((res) => { })
               const prods = [...products]
               const prodV_remaining = prods.find(prod=> prod.id === product_v.product_id).Product_Varieties
               prods.find(prod=> prod.id === product_v.product_id).Product_Varieties = prodV_remaining.filter(p => p.id !== product_v.id);
               prodListRef.current.click();
               console.log(prods)
               return prods;
        }
        )
    }
    return(
        <>
       { 
       props.size === "mini" ? 
       <Link to="/seller">
            <button>Seller</button>
        </Link> :
            <div className="seller-page">
                <div className="products-list">
                    {products.map(p => {
                        return <Link key={p.id+p.product_name} to="#" ref={prodListRef} onClick={()=> {setProducts_Id(p.id); console.log(p.id)}}><Menu  productName={p.product_name} imageLocation={`${config.avios_BACKENDURL}${p.Product_Varieties[0]? p.Product_Varieties[0].images : ""}`} /></Link>
                    })}
                </div>
                {
                products_id === 0 ? "" : 
                <div >
                    <div className="hr"></div>
                        {
                            products.find(p => p.id === products_id).Product_Varieties.length > 0 ? 
                            products.find(p => p.id === products_id).Product_Varieties.map(p_v => 
                        {
                            return (
                            <div key={p_v.id,toString()+p_v.product_id.toString()} className="card-shadowed">
                                <p>size: {p_v.size}</p>
                                <p>color: {p_v.color}</p>
                                <p>quantity: {p_v.quantity}</p>
                                <p>price: {p_v.price}</p>
                                <img className="products-list-img" src={`${config.avios_BACKENDURL}${p_v.images}`} />
                                <button onClick={()=> {
                                    deleteVariety(p_v)
                                }}>Delete</button>
                            </div>
                            )
                        }) : <div>No variants found</div>}
                </div>
                }
            </div>
        }
        </>
    )
}

export default Seller