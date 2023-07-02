import React from 'react';
import {Link, Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import Detail from './detail'
import best from '../data/bestData'

const Beauty = () => {

    const [products] = useState(best)

    return (
        <Routes>
        <Route path='/' element={
          <>
          <section>
            <h2>BEAUTY</h2>
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

export default Beauty;