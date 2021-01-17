import ProductActions from './productActions/productActons'
import ProductDetail from './productDetail/productDetail'
import './productCard.css'
import { Link, useRouteMatch } from 'react-router-dom'
// import productImage from '../../assets/black_sport_shoe.jpg'
const ProductCard = (props) => {
    const {url, path} =  useRouteMatch();
    return(
        <div className="productCard">
            <div >
                <Link to={`${path}${props.productName.split(" ").join("-")}/${props.productId}`}>
                 <img className="product-image" alt="black shoe" src={props.productImage}></img>
                </Link>
            </div>
            <div>
                <ProductDetail name={props.productName} description={props.productDescription} price={props.productPrice} />
                <ProductActions product={props.prod}/>
            </div>
        </div>
    )
}

export default ProductCard