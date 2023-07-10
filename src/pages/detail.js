import React from 'react';
import {useParams} from 'react-router-dom'
import {addItem} from '../pages/store'
import { useDispatch } from 'react-redux'


export default function Detail(props) {

    const {products} = props
    const {id} = useParams()
    const dispatch = useDispatch()

  return (
    <>
    <div className="detail_area">
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
    <div className="notice_area">
        <h4>DELIVERY</h4>
        <div className="box">
          <p>배송 방법 : 택배</p>
          <p>배송 지역 : 전국지역</p>
          <p>배송 비용 : 3,000원</p>
          <p>배송 기간 : 3일 ~ 7일</p>
          <p>배송 안내 :</p>
          <p>※<span style={{fontWeight:'bold'}}>배송기간 : </span>
            평일 오전 9시 30분 이전 결제 완료된 주문건은 오전 당일 출고를 원칙으로 하며,<br/>
            평일 오전 9시 30분 이후~ 오후 2시 이전 결제 완료된 주문건은 오후 당일 출고를 원칙으로 도와드리고 있습니다.<br/>
            오후 2시 이후 주문건의 경우, 익영업일 순차적으로 출고 진행되오니 참고 부탁드립니다. 아울러 배송은 평균 1~3일 정도 소요되며,<br/>
            제주도 및 도서산간 지역의 경우 배송이 다소 지연될 수 있는 점 양해 부탁드립니다.
            </p>
        </div>
    </div>
    <div className="notice_area">
        <h4>EXCHANGE & RETURN</h4>
        <div className="box">
          <p style={{fontWeight:'bold'}}>교환 및 반품이 가능한 경우</p>
          <p>- 상품을 인도받은 날로부터 7일 이내에 한해 계약에 관한 청약 철회가 가능합니다.</p>
          <p>- 공급받으신 상품 및 용역의 내용이 표시. 광고 내용과 다르거나 다르게 이행된 경우에는 공급받은 날로부터 3개월 이내, 그 사실을 알게 된 날로부터 30일 이내</p>
          <p style={{fontWeight:'bold'}}>교환 및 반품이 불가능한 경우</p>
          <p>- 고객님의 책임 있는 사유로 상품 등이 멸실 또는 훼손된 경우. 단, 상품의 내용을 확인하기 위하여 포장 등을 훼손한 경우는 제외</p>
          <p>- 포장을 개봉하였거나 포장이 훼손되어 상품 가치가 상실된 경우</p>
          <p> (예:'개봉 시 교환/환불 불가 스티커'를 훼손한 경우, 제품 단 상자가 훼손되어 상품가치가 상실된 경우)</p>
          <p>- 고객님의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우 단, 화장품 등의 경우 시용제품을 제공한 경우에 한 합니다.</p>
          <p>- 시간의 경과에 의하여 재판매가 곤란할 정도로 상품 등의 가치가 현저히 감소한 경우</p>
          <p>  (자세한 내용은 CS센터의 Q&A 게시판을 이용해 주시기 바랍니다.)</p>
          <p>※ 단순 변심으로 인한 교환, 반품하실 경우 상품 반송 비용은 고객님께서 부담하셔야 합니다. (색상 및 사이즈 교환 등 포함)</p>
        </div>
    </div>
    </>
  )
}