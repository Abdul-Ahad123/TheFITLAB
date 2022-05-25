import React,{useState} from "react";
import Cards from './Cards'
import './Shop.css'
import list from "./ShopItems";

const ShopDisp = ({handleClick}) => {

    return (
        <section>
          {
            list.map((item) => (
              <Cards key={item.id} item={item} handleClick={handleClick }/>
            ))
          }
        </section>
  );
}
export default ShopDisp;