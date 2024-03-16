import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import { Cart } from "./components/Cart";
/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */



function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [arr, setArr] = useState([]);
  const [price, setPrice] = useState(0.0);
  const [itemsInCart, setMap] = useState(new Map());

  const addToCart = (item) => {
    const updatedArr = [
      ...arr,
      item.name
    ];
    setArr(updatedArr);
    setPrice(price + item.price)
    var updatedCart = new Map()
    updatedArr.forEach((val) => {
      if (updatedCart.get(val) === undefined) {
        updatedCart.set(val, 1)
      } else {
        updatedCart.set(val, updatedCart.get(val) + 1)
      }
    })
    setMap(updatedCart)
    console.log(itemsInCart)
    console.log("add to cart");
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <div className="items">
        {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
          // <p>Bakery Item {index}</p> // replace with BakeryItem component
          <BakeryItem name={item.name} img={item.image} desp={item.description} price={item.price} addToCart={addToCart}/>
        ))}
      </div>
      <div>
        <h2>Cart</h2>
        <div>
          {Array.from(itemsInCart.keys()).map((item, index) => (
            <Cart name={item} cnt={itemsInCart.get(item)}/>
          ))}
        </div>
          
        <p className="total">Total: {price}$</p>
      </div>
    </div>
  );
}

export default App;
