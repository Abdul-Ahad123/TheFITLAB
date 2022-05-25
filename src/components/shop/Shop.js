import React,{useState} from "react";
import './Shop.css'
import Cart from "./Cart";
import ShopNav from "./nav/ShopNav";
import ShopDisp from "./ShopDisp";

const Shop =() => {
  const [show, setshow] = useState(true);

  const [cart, setCart] = useState([]);
    
  const handleClick = (item) =>{
    if(cart.indexOf(item) !== -1) return;   
    setCart([...cart,item]);
  }
  const handleChange = (item,d) => {
    const ind = cart.indexOf(item);
    const arr= cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  }

  return (
    <div>
        <ShopNav setshow={setshow} size={cart.length}/>
        <div>
        <h3>Pre-Workout</h3>  
        </div>
        {show ? (<ShopDisp handleClick={handleClick}/>)
        : (<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>)}
    </div>
  );
}
export default Shop;