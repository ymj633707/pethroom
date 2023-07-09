import React from 'react';
import {useNavigate, Link, Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import Detail from './detail'
import hygieneData from '../data/hygieneData'
import { useDispatch } from 'react-redux';
import { addItem } from './store'

const Hygiene = () => {
    const [products] = useState(hygieneData)

    const dispatch = useDispatch() 
    const [cartPopup, setCartPopup] = useState(false);

    function CartPopup(props) {
    const { setCartPopup } = props;
    const navigate = useNavigate();
    
  
    return (
      <div className='popup'>
        <p>장바구니에 담았습니다.</p>
          <div className='btn_box'>
          <div
            className='popup_btn'
            style={{ borderRight:'1px solid #ccc', boxSizing:'border-box' }}
            onClick={() => setCartPopup(false)}
          >
            계속 쇼핑하기
          </div>
          <div
            className="popup_btn"
            onClick={() => {
              navigate("/cart");
            }}
          >
            장바구니 전체보기
          </div>
          </div>
      </div>
    );
  }

    return (
        <Routes>
        <Route path='/' element={
          <>
          <section>
            <h2 className='title'>HYGIENE</h2>
            <div className='product_area'>
            {
                products.map((product, index) => {
                  return (
                    <div className='product_box' key={index}>
                      <Link to={`/detail/${index}`}>
                        <img className="product_img" src={product.image} alt='best_img'/>
                        <h4>{product.title}</h4>
                        <p>{product.desc}</p>
                        <p className='price_txt'>{product.price}원</p>
                      </Link>

                      <button onClick={()=>{
                        setCartPopup(true);
                        dispatch(
                          addItem({
                            id: product.id, 
                            title:product.title, 
                            image:product.image,
                            price:product.price,
                            count:1
                          }))
                      }}>
                        <img className="cart_icon" src={process.env.PUBLIC_URL + '/images/main_img/cart_icon.png'} alt='cart_icon'/>Cart
                        </button>

                        {cartPopup ? <CartPopup setCartPopup={setCartPopup} /> : null}

                    </div>
                  )
                })
              }
            </div>
          </section>
          
          </>
          
        } />

        <Route path='detail/:id' element={<Detail  products={products}/>}  />

      </Routes>
    );
};

export default Hygiene;