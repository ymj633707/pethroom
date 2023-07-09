import React from 'react';
import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom'
import Food from './food'
import Beauty from './beauty'
import Detail from './detail';
import Hygiene from './hygiene'

const Product = () => {
    const location = useLocation();
    const isDetailPage = location.pathname.includes('/detail/');

    return (
        <div>
            {!isDetailPage && (
                <>
                    <img className='main_img' src={process.env.PUBLIC_URL + '/images/main_img/3F_restaurant_web.gif'} alt='main_gif' style={{height:700}}/>
                    <div className='sub_list'>
                        <ul>
                            <li><Link to='/product/food' style={{ color: location.pathname === '/product/food' ? '#000' : '#7c7c7c' }}>FOOD</Link></li>
                            <li><Link to='/product/beauty' style={{ color: location.pathname === '/product/beauty' ? '#000' : '#7c7c7c' }}>BEAUTY</Link></li>
                            <li><Link to='/product/hygiene' style={{ color: location.pathname === '/product/hygiene' ? '#000' : '#7c7c7c' }}>HYGIENE</Link></li>
                        </ul>
                    </div>
                </>
            )}

            <Routes>
                <Route path='/food/*' element={<Food />} />
                <Route path='*' element={<Navigate to='food' />} />
                <Route path='/beauty/*' element={<Beauty />} />
                <Route path='/hygiene/*' element={<Hygiene />} />
                <Route path='/detail' element={<Detail />} />
            </Routes>
        </div>
    );
};

export default Product;
