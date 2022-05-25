import React from 'react'

const Cards = ({item, handleClick}) => {
    const{ title, desc, price, img} = item;
  return (
    <div className='cards'>
        <div className='img_card'>
            <img src={img} alt=''/>
        </div>
        <div className='details'>
            <h5>{title}</h5>
            <p>{desc}</p>
            <p>Rs. {price}</p>
            <button onClick={()=>handleClick(item)}>Add To Cart</button>
        </div>
    </div>
  )
}

export default Cards;