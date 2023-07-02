import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import best from './data/bestData'
import Product from './pages/product';
import About from './pages/about';
import Detail from './pages/detail'
import Cart from './pages/cart'

/* import {Container, Nav, Navbar } from 'react-bootstrap'; */
import { useNavigate, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './pages/store'


function App() {

  const navigate = useNavigate()
  const [products] = useState(best)
  const dispatch = useDispatch() 

  return (
    <div className="App">

      <header>
        <div className='header_area'>
          <div className ='logo' onClick={() => {navigate('/')}}>PASSROOM</div>
          <div className ='lnb' onClick={() => {navigate('/')}}>Home</div>
          <div className ='lnb' onClick={() => {navigate('/product')}}>Product</div>
          <div className ='lnb' onClick={() => {navigate('/about')}}>About</div>
          <div className ='lnb' onClick={() => {navigate('/cart')}}>Cart</div>
        </div>
      </header>

      <Routes>
        <Route path='/' element={
          <>
          <img className='main_img' src={process.env.PUBLIC_URL + '/images/main_img/4F_bathroom_web.gif'} alt='main_gif' />
          <section>
            <h2>BEST</h2>
            <div className='product_area'>
            {
                products.map((product, index) => {
                  return (
                    <div className='product_box' key={index}>
                      <Link to={`detail/${index}`}>
                        <img className="product_img" src={product.image} alt='best_img'/>
                        <h4>{product.title}</h4>
                        <p>{product.desc}</p>
                        <p className='price_txt'>{product.price}원</p>
                      </Link>
                      <button onClick={()=>{
                        dispatch(
                          addItem({
                            id: product.id, 
                            title:product.title, 
                            image:product.image,
                            price:product.price,
                            count:1
                          }))
                      }}>
                        <img className="cart_icon" src={process.env.PUBLIC_URL + '/images/main_img/cart_icon.png'}/>Cart
                        </button>
                    </div>
                  )
                })
              }
            </div>
          </section>
          
          </>
          
        } />

        <Route path='product/*' element={<Product />} />
        <Route path='about' element={<About />} />
        <Route path='detail/:id' element={<Detail  products={products}/>} />
        <Route path='cart' element={<Cart/>} />

      </Routes>

      <footer>
            <div className='footer_area'>
              <div className='box01'>
                <h3>PETHROOM</h3>
                <p>BMSMILE Co., Ltd.</p>
                <p>Tel.1644-9603ㅣEmail : contact@bmsmile.com</p>
                <p>Business License No : 394-81-01000 [사업자정보확인]</p>
                <p>E-Commerce Registration : 2020-Seoul Gangnam-01687</p>
                <p>Address : 4th floor, 8, Teheran-ro 44-gil, Gangnam-gu, Seoul, Republic of Korea</p>
                <p>CEO : Bongsu ParkㅣPersonal Info Manager : Dongwook Lee</p>
              </div>
              <div className='box02'>
                <h4>POLICY</h4>
                <ul>
                  <li><a href='#!'>이용약관</a></li>
                  <li><a href='#!'>개인정보처리방침</a></li>
                  <li><a href='#!'>이용안내</a></li>
                  <li><a href='#!'>반품,환불규정</a></li>
                  <li><a href='#!'>제휴입점문의</a></li>
                </ul>
              </div>
              <div className='box03'>
                <h4>C/S CENTER</h4>
                <p>MON-FRIㅣ09:30 - 17:00</p>
                <p>LUNCH ㅣ 12:30 - 13:30</p>
                <p>SAT, SUN, HOLIDAY OFF</p>
              </div>
              <div className='box04'>
                <h4>SNS SERVICE</h4>
                <p><a href="#!">Instgram</a></p>
                <p><a href="#!">Facebook</a></p>
                <p><a href="#!">Youtube</a></p>
                </div>
            </div>
          </footer>

    </div>
  );
}

export default App;
