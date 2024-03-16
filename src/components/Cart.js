export function Cart(props) {
    return(
        <p className="itemsInCart">{props.cnt} x {props.name}</p>
    );
}