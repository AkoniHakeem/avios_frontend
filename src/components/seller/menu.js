import "./seller.css";

const Menu = function (props) {
    return(
        <div className="card-shadowed products-list">
            <img className="products-list-img" src={props.imageLocation} alt={props.productName}/>
            <h4>{props.productName}</h4>
        </div>
    )
}

export default Menu