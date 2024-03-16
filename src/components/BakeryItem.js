// TODO: create a component that displays a single bakery item
export default function BakeryItem(props) {
    return (
        <div className="oneItem">
            <img src={props.img} className="itemImage"></img>
            <p className="title">{props.name}</p>
            <p className="desp">{props.desp}</p>
            <p className="price">Price: {props.price}$</p>
            <button onClick={() => props.addToCart(props)}>Add to cart</button>
        </div>
    );
}