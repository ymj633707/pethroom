import React from 'react';
import '../styles/about.css'

const about = () => {
    return (
        <section className='about_area'>
            <img  className='about_img' src={process.env.PUBLIC_URL + '/images/about/about_bg_pc.jpg'} alt='about_img'/>

            <div className='about_box'>
                <div className='about'>
                    <h4>페스룸의사명</h4>
                    <p>Missin Statement<br/><span style={{color:'#ffc303', fontWeight:'bold'}}>우리는 유기동물의 행복을 되찾아주기 위해 사업을 합니다</span></p>
                </div>
                <div className='about'>
                    <h4>페스룸의 존재 이유</h4>
                    <p>The reason we exist<br/>
                    한국에서만 보더라도 매년 15만 마리 이상의 반려동물들이 이유 없이 가족에게 버림받고 있습니다.
                    그중 20%는 안락사를 당합니다. 함께 살아온 가족에게 이유 없이 버림받고
                    주인에 대한 미움 없이 그리고 기약 없이 기다리다가 죽임을 당합니다.
                    우리는 이에 대한 책임 의식을 갖고, 변화를 만들어내기 위해 사업을 이용하고,자원을 투자하며, 빠르게 움직이고, 거침없이 도전합니다.
                    <br/><br/>
                    페스룸은 반려동물 욕실용품을 만들던 작은 회사에서 출발해, 지금은 반려동물과 반려인에 관련된
                    모든 산업에 진출하고 있습니다. 우리는 모든 제품과 서비스에 반려인과 반려동물 간의 '교감'
                    '소통' '일체화된 커뮤니케이션' 을 표현합니다. 이것이 페스룸이 추구하는 '휴머나이제이션(humanization)'입니다.
                    그러나 나날이 학대받고 버림받는 반려동물들이 늘어나고 있습니다. 이것이 바로 우리가 싸우는 이유이며,
                    우리의 시간과 노력, 그리고 순익의 7%를 유기동물 보호 관련 활동에 기부하는 이유입니다.
                    그렇다고 정신적 기부활동을 잊어서는 안 됩니다.
                    <br/><br/>
                    가장 중요한 것은 유기 동물들의 감정을 살펴주고 이해해주고 보듬어주는 것입니다.
                    페스룸은 직원들이 자부심을 갖고 고객분들이 지지하는 브랜드가 되겠습니다.
                    사회와 지구가 원하는 브랜드가 되겠습니다. 전 세계의 모든 유기동물들이 다시 행복을 되찾을 수 있을 때까지!
                    </p>
                </div>
                <div className='about'>
                    <h4>운영철칙</h4>
                    <p>Operational Principles<br/>
                    1. 휴머나이제이션을 표현하는 디자인<br/>
                    2. 사람들이 쓰는 제품과 서비스와 견주어도 결코 뒤쳐지지 않는 품질<br/>
                    3. 어디로 튈지 모르는 무한한 확장성<br/>
                    4. 산업을 주도하는 주역들과의 상생<br/>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default about;