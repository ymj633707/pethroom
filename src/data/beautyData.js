const beautyData = [
    {
        id: 'beauty-01',
        image: process.env.PUBLIC_URL+'/images/beauty/beauty_01.jpg',
        desc: '눈곱 제거부터 빗질까지 둥근 헤드로 안전하게',
        title: '이지 페이셜 콤',
        item: 'EASY FACIAL COMB',
        price: '6,900',
        details: (
            <>
            자체개발 둥근헤드와 60개의 견고한 고급 스테인리스 날로 쉽고 안전하게 눈곱<br/>제거부터 얼굴 세밀한 부분까지 빗질가능 이지 페이셜 콤
            <br/><br/>
            6.5 x 6.8 x 0.8 cm
            </>
        )
    },
    {
        id: 'beauty-02',
        image: process.env.PUBLIC_URL+'/images/beauty/beauty_02.jpg',
        desc: '306개의 폴리케톤 빗살로 피부 자극 없이 편안하게',
        title: '힐링 슬리커 브러쉬',
        item: 'HEALING SLICKER BRUSH',
        price: '20,900',
        details: (
            <>
            306개의 부드러운 폴리케톤 빗살로 자극없이!<br/>
            원터치 손잡이 버튼으로 쉽고 깔끔한 털 제거 힐링 슬리커 브러쉬
            <br/><br/>
            10.0 x 14.5 x 5.0cm
            </>
        )
    },
    {
        id: 'beauty-03',
        image: process.env.PUBLIC_URL+'/images/beauty/beauty_03.jpg',
        desc: '무자극 실리콘 돌기로 죽은 털 제거와 마사지를 한번에',
        title: '힐링 브러쉬',
        item: 'HEALING BRUSH',
        price: '18,900',
        details: (
            <>
            144개의 실리콘 돌기로 죽은 털 완벽 제거! 털 날림 방지 특허로 편안하게<br/>
            마사지가 가능한 무자극&피부 손상 제로! 브러쉬와 마사지를 한번에! 힐링브러쉬
            <br/><br/>
            8cm x 13.5cm x 9cm
            </>
        )
    },
    {
        id: 'beauty-04',
        image: process.env.PUBLIC_URL+'/images/beauty/beauty_04.jpg',
        desc: '로얄젤리추출물 78% 함유로 번들거림 없이 산뜻하게 발바닥 관리',
        title: '포우 케어 에센스',
        item: 'PAW-CARE ESSENCE',
        price: '19,900',
        details: (
            <>
            로얄젤리추출물이 78% 함유! 건조한 반려동물의 발바닥을 촉촉하고 건강하게<br/>
            관리해주며, 빠르게 흡수되는 산뜻한 제형으로 번들거림없이 사용할 수 있는<br />포우-케어 에센스
            <br/><br/>
            85ml
            </>
        )
    },
    {
        id: 'beauty-05',
        image: process.env.PUBLIC_URL+'/images/beauty/beauty_05.jpg',
        desc: '원형 가이드 안전하게! 높은 절삭력으로 깔끔하게!',
        title: '스마트 네일 클리퍼 캣츠',
        item: 'SMART NAIL CLIPPERS CATS',
        price: '18,900',
        details: (
            <>
            페스룸 자체개발! 안전한 원형 가이드로 발톱을 흔들림없이 안정적으로 커팅할<br/>
            수 있으며 고급 스테인리스로 절삭력과 내구성을 높인 고양이 전용 발톱깎이<br />스마트 네일 클리퍼 캣츠
            <br/><br/>
            8.8cm x 13.7cm x 1.7cm
            </>
        )
    },
    {
        id: 'beauty-06',
        image: process.env.PUBLIC_URL+'/images/beauty/beauty_06.jpg',
        desc: '바르는 천연 분해 효소 치약으로 구강 관리를 간편하게',
        title: '덴탈 솔루션 치약',
        item: 'DENTAL SOLUTION TOOTHPASTE',
        price: '14,900',
        details: (
            <>
            바르기만 해주면 양치시간 끝! 천연 효소 3종 함유로 치석 완벽 예방!<br/>
            바르기 좋은 제형과 시원한 메론 향으로 기호성도 좋은 덴탈 솔루션 치약
            <br/><br/>
            60g
            </>
        )
    },
    {
        id: 'beauty-07',
        image: process.env.PUBLIC_URL+'/images/beauty/beauty_07.jpg',
        desc: '천연 분해 효소 치약과 극초소형 칫솔 헤드로 간편한 치아 관리',
        title: '덴탈 솔루션 세트XS',
        item: 'DENTAL SOLUTION SET (XS)',
        price: '17,900',
        details: (
            <>
            바르기만 해주면 양치가 끝나는 덴탈 솔루션 치약<br/>
            프리미엄 초극세사모 신개념 초소형 덴탈 클린 칫솔 XS
            <br/><br/>
            147mm / 5mm / 60g
            </>
        )
    },
    {
        id: 'beauty-08',
        image: process.env.PUBLIC_URL+'/images/beauty/beauty_08.jpg',
        desc: '저자극/저독성 세정제로 안전하게 예방하는 귀 질환',
        title: '네이처 이어 클리너',
        item: 'NATURE EAR CLEANER',
        price: '15,900',
        details: (
            <>
            수 많은 연구 끝에 탄생한 페스룸 귀세정제! 원인부터 케어하여 귓속 환경을<br/>
            청결하게 만들어 줍니다. 저자극/저독성, 귀 질환 예방, 안심할 수 있는<br />네이처 이어 클리너
            <br/><br/>
            120ml
            </>
        )
    },
    {
        id: 'beauty-09',
        image: process.env.PUBLIC_URL+'/images/beauty/beauty_09.jpg',
        desc: '한 듯 안 한 듯 편안한 착용감',
        title: '컴피 메쉬 넥카라',
        item: 'COMFY MESH NECK COLLAR',
        price: '21,900',
        details: (
            <>
            핥거나 긁는 행동을 막을 수 있는 최적의 형태로 쉽게 착용이 가능하며,<br/>
            부드러운 3D 에어 메쉬 소재를 사용하여 편안한<br />COMFY MESH NECK COLLAR
            <br/><br/>
            20~25cm / 25~30cm
            </>
        )
    },
    {
        id: 'beauty-10',
        image: process.env.PUBLIC_URL+'/images/beauty/beauty_10.jpg',
        desc: '구강이 작은 반려동물을 위한 극초소형 헤드와 기능성 초극세사모',
        title: '덴탈 클린 칫솔 XS',
        price: '5,900',
        item: 'DENTAL CLEAN TOOTHBRUSH (XS)',
        details: ( 
        <>
        고양이와 소형견이 편안하게 양치 가능! 자체 개발한 초소형 헤드와 프리미엄<br/>
        항균 초극세사모를 적용한 신개념 칫솔! 덴탈 클린 칫솔(XS)
        <br/><br/>
        147mm / 5mm
        </>
        )
    },
    {
        id: 'beauty-11',
        image: process.env.PUBLIC_URL+'/images/beauty/beauty_11.jpg',
        desc: '특허 성분 3종으로 자극 없이 피지를 관리하는 고양이 전용 패드',
        title: '아쿠아 그루밍 클린 패드',
        price: '19,900',
        item: 'AQUA GROOMING CLEAN PAD',
        details: ( 
            <>
            한 장으로 편리하게 그루밍 사각지대 집중 관리!<br/>
            턱부터 꼬리까지 모든 부위에 사용 가능한 고양이 전용 패드<br/>
            페스룸 아쿠아 그루밍 클린 패드
            <br/><br/>
            50매 / 6cm
            </>
            )
    },
    {
        id: 'beauty-12',
        image: process.env.PUBLIC_URL+'/images/beauty/beauty_12.jpg',
        desc: '저자극/저독성 안심 성분과 극세사 원단으로 간편한 귀 세정!',
        title: '네이처 이어 클리너 패드',
        price: '17,900',
        item: 'NATURE EAR CLEANER PAD',
        details: ( 
            <>
            저자극 안심 성분과 부드러운 극세사 원단이 합쳐져<br/>
            쉽고 깨끗하게 데일리 귀 세정 가능한 네이처 이어 클리너 패드!
            <br/><br/>
            53ml / 50매
            </>
            )
    },
    {
        id: 'beauty-13',
        image: process.env.PUBLIC_URL+'/images/beauty/beauty_13.jpg',
        desc: '입 크기가 작은 반려동물을 위한 집중 케어 세트',
        title: '덴탈 브러쉬 세트 XS',
        price: '10,500',
        item: 'DENTAL CLEAN TOOTHBRUSH (XS)',
        details: ( 
        <>
        둥근헤드로 잇몸자극 없이 치아 한 개씩 집중케어 딥포인트 칫솔<br/>
        프리미엄 초극세사모 신개념 초소형 덴탈 클린 칫솔
        <br/><br/>
        4 x 155mm / 5 x 147mm
        </>
        )
    },
    {
        id: 'beauty-14',
        image: process.env.PUBLIC_URL+'/images/beauty/beauty_14.jpg',
        desc: '잇몸 자극 없이 포인트 집중케어! 간편해진 치아 관리 솔루션',
        title: '포인트 솔루션 세트',
        price: '17,900',
        item: 'POINT SOLUTION SET',
        details: ( 
            <>
            둥근헤드로 잇몸자극 없이 치아 한 개씩 집중케어 딥포인트 칫솔<br/>
            바르기만 해주면 양치가 끝나는 덴탈 솔루션 치약
            <br/><br/>
            4 x 155mm / 60g
            </>
        )
    },
    {
        id: 'beauty-15',
        image: process.env.PUBLIC_URL+'/images/beauty/beauty_15.jpg',
        desc: '누구나 쉽고 안전한 털 관리를 위해',
        title: '이지 케어 세트',
        price: '22,900',
        item: 'EASY CARE SET',
        details: ( 
            <>
            둥근 헤드로 쉽고 안전하게 눈곱 제거부터 세밀한 부분까지 케어 이지 페이셜 콤<br/>
            144개 실리콘 돌기로 죽은털 완벽 제거 힐링 브러쉬
            <br/><br/>
            이지 페이셜 콤6.5 x 6.8 x 0.8 cm<br/>
            힐링 브러쉬8cm x 13.5cm x 9cm
            </>
        )
    },
]

export default beautyData