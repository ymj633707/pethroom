import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, addCount, subCount, addItem } from './store';
import '../styles/cart.css';


export default function Cart({setCartPopup }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [deliveryCost, setDeliveryCost] = useState(0);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();


  useEffect(() => {
    setCartPopup(false); // App 컴포넌트의 setCartPopup을 호출하여 cartPopup 상태 값을 업데이트
  }, [setCartPopup]);

  useEffect(() => {
    let calculatedTotalPrice = 0;

    for (let i = 0; i < state.cart.length; i++) {
      const price = parseInt(state.cart[i].price.replace(',', ''));
      calculatedTotalPrice += price * state.cart[i].count;
    }

    setTotalPrice(calculatedTotalPrice);
  }, [state.cart]);

  useEffect(() => {
    if (state.cart.length === 0) {
      setDeliveryCost(0);
    } else {
      setDeliveryCost(totalPrice < 50000 ? 3000 : 0);
    }
  }, [totalPrice, state.cart]);

  return (
    <div className="wrap">
      <h2>
        <span style={{ fontWeight: 'bold' }}>{state.user.name} </span>님의 CART
      </h2>
      <h3>회원가입기간: {state.user.memberYear} 년</h3>

      <Table striped bordered hover style={{marginBottom:80}}>
        <thead>
          <tr>
            <th style={{ width: 100 }}>상품이미지</th>
            <th style={{ width: 700 }}>상품명</th>
            <th style={{ width: 150 }}>수량</th>
            <th style={{ width: 150 }}>구매금액</th>
            <th style={{ width: 100 }}>변경</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((item, i) => {
            return (
              <tr key={i}>
                <td className="item_img">
                  <img src={state.cart[i].image} alt="img" />
                </td>
                <td className="item_txt">{state.cart[i].title}</td>
                <td style={{padding:20, boxSizing:'border-box'}}>
                  <p>{state.cart[i].count}</p>
                  <button
                    className="count_btn"
                    style={{marginRight:10}}
                    onClick={() => dispatch(subCount(state.cart[i].id))}
                  >
                    -
                  </button>
                  <button
                    className="count_btn"
                    onClick={() => dispatch(addCount(state.cart[i].id))}
                  >
                    +
                  </button>
                </td>
                <td className="price" >
                  {(parseInt(state.cart[i].price.replace(',', '')) * state.cart[i].count).toLocaleString()} 원
                </td>
                <td style={{padding:'40px 0px', boxSizing:'border-box'}}>
                  <button
                    className="delete_btn"
                    style={{boxSizing:'border-box', border:'1px solid #636363', width:50}}
                    onClick={() => {
                      dispatch(deleteItem(state.cart[i].id));
                      if (state.cart.length === 1) {
                        setTotalPrice(0);
                      }
                    }}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Table bordered hover>
        <thead>
          <tr>
            <th style={{ width: '25%' }}>총 상품금액</th>
            <th style={{ width: '25%' }}>배송비</th>
            <th style={{ width: '50%' }}>결제예정금액</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{totalPrice.toLocaleString()} 원</td>
            <td>{deliveryCost.toLocaleString()} 원</td>
            <td>{(totalPrice + deliveryCost).toLocaleString()} 원</td>
          </tr>
        </tbody>
      </Table>
      <p className="guide">* 50,000원이상 구매시 무료배송입니다</p>
    </div>
  );
}
