import { createGlobalStyle } from 'styled-components'

export const Styles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css");

/* font-family: 'Nanum Gothic', sans-serif; */
/* font-family: 'Oswald', sans-serif */
/* font-family: 'Pretendard Variable'*/


body {
    margin: 0;
    padding: 0;
}

a {
    color: black;
    text-decoration: none;
    font-family: 'Pretendard Variable';
}

li {
    list-style: none;
}

.main_img {
    display: block;
    width: 100%;
    height: 880px;
    object-fit: cover;
}

::-moz-selection {
    background: #1c3761;
    color: #ffc303;
 }
 ::selection {
    background: #1c3761;
    color: #ffc303;
 }

header {
    background-color: #1c3761;
    width: 100%;
    height: 60px;
    position: sticky;
    top: 0;
    z-index: 999;
}

.header_area {
    display: flex;
    align-items: center;
    color: #fff;
    width: 1300px;
    height: 100%;
    margin: 0 auto;
    font-family: 'Oswald';
}

.header_area .logo {
    margin-right: 50px;
    font-size: 28px;
    cursor: pointer;
}

.header_area .lnb {
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 2px;
    margin-right: 30px;
    cursor: pointer;
}

.product_area {
    width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.title {
    font-family: 'Oswald';
    font-weight: 500;
    font-size: 40px;
    margin: 40px 0px;
    text-align: center;
    letter-spacing:3px;
    position: relative;
}

.product_box {
    width: 415px;
    margin-bottom: 30px;
    text-align: center;
    position: relative;
}

.product_box .product_img {
    display: block;
    width: 415px;
    margin-bottom: 15px;
}

.product_box .price_txt {
    font-size: 18px;
    font-weight: 400;
}

.product_box button {
    border: none;
    width: 140px;
    font-family: 'Pretendard Variable';
    font-size: 20px;
    background-color: #fff;
    height: 40px;
    line-height: 40px;
    color: #636363;
}

.product_box .cart_icon {
    width: 30px;
    margin-right: 5px;
    padding-bottom: 5px;
    box-sizing: border-box;
}

.main_banner {
    width: 100%;
    height: auto;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 80px;
}

.main_banner img {
    width: 100%;
}

.sub_list {
    position: relative;
    height: auto;
}

.sub_list ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 60px;
    position: absolute;
    z-index: 9999;
    top: -60px; left:50%;
    transform: translateX(-50%);
    width: 600px;
    background-color: #fff;
    border-radius: 15px 15px 0 0px;
}

.sub_list ul li {
    margin-right: 30px;
    
}

.sub_list ul li a {
    font-family: 'Oswald';
    font-size: 22px;
    font-weight: 400;
    letter-spacing: 2px;
    margin-right: 20px;
    color: #c4c4c4;
    box-sizing: border-box;
}

.datail_area {
    font-family: Pretendard Variable;
    width: 1200px;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    position: relative;
}

.datail_area .txt {
    padding: 30px 50px;
    box-sizing: border-box;
}

.datail_area .txt .item {
    font-weight: 500;
    font-family: 'Oswald';
    letter-spacing: 1px;
    font-size: 20px;
    margin-bottom: 7px;
}

.datail_area .txt h2 {
    margin-bottom: 30px;
}

.datail_area .cart_btn {
    position: absolute;
    bottom: 230px; right: 250px;
    font-family: 'Oswald';
    background-color: #fff;
    padding: 10px 30px;
    box-sizing: border-box;
    transition: 0.3s;
    border: 2px solid #1c3761;

    &:hover {
        background-color: #1c3761;
        color: #fff;
    }
}



footer {
    width: 100%;
    background-color: #1c3761;
}

footer .footer_area {
    width: 1300px;
    display: flex;
    font-family: 'Pretendard Variable';
    color: #fff;
    margin: 0 auto;
    padding: 50px 0px;
    box-sizing: border-box;
}

.footer_area h3 {
    color: #ffc303;
    font-weight: 800;
    margin-bottom: 15px;
}

.footer_area .box01 {
    margin-right: 140px;
}

.footer_area p {
    margin-bottom: 7px;
    font-size: 14px;
}

.footer_area .box02, .box03, .box04 {
    margin-right: 70px;
}

.footer_area h4 {
    font-size: 18px;
    margin-bottom: 15px;
} 

.footer_area .box02 h4 {
    text-align: center;
}

.footer_area .box02 ul li {
    margin-bottom: 7px;
}

.footer_area a{
    color: #fff;
    font-size: 14px;
}

.popup {
    width: 300px;
    height: 200px;
    background-color: #fff;
    border: 1px solid #ccc;
    box-sizing: border-box;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Pretendard Variable';

}

.popup p{
    width: 100%;
    height:150px;
    margin:0;
    font-size: 20px;
    text-align: center;
    line-height: 150px;
}

.btn_box {
    display: flex;
    border-top:1px solid #ccc;
    box-sizing: border-box;
}

.btn_box .popup_btn {
    height:50px;
    line-height: 50px;
    width: calc(300px / 2);
    cursor: pointer;

    &:hover{
        background-color: #1c3761;
        color: #fff
    }
}

`