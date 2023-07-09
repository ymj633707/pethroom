import React from 'react';
import {useParams} from 'react-router-dom'
import {addItem} from '../pages/store'
import { useDispatch } from 'react-redux'


export default function Detail(props) {

    const {products} = props
    const {id} = useParams()
    const dispatch = useDispatch()

  return (
    <div className="datail_area">
        <img src={products[id].image} alt='product_img' style={{display:'block'}}/>
        <div className="txt">
        <p className='item'>{products[id].item}</p>
        <h2>{products[id].title}</h2>
        <p>{products[id].details}</p>
        <h4>{products[id].price}원</h4>
        </div>
        <button 
        className="cart_btn"
        onClick={() => {
          dispatch(addItem({id: products[id].id, title:products[id].title, count:1, price:products[id].price, image:products[id].image}))
        }}
        >ADD TO CART</button>
    </div>
  )
}