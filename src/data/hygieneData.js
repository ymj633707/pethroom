const hygieneData = [
    {
        id: 'food-01',
        image: process.env.PUBLIC_URL+'/images/hygiene/hygiene_01.jpg',
        desc: '악취와 유해세균 99.9% 제거 살균소취제, 리필과 함께 구매하세요',
        title: '안티 오도어 세트',
        item: 'ANTI ODOUR SET',
        price: '49,900',
        details:(
            <>
            깔끔한 무향, 인증 받은 소취(악취 제거)력 99.9%!<br/>
            신개념 원료로 악취균을 근본적으로 분해 및 제거하는<br />제로 오도어 스프레이
            <br/><br/>
            제조일로부터 24개월
            </>
        )
    },
    {
        id: 'food-02',
        image: process.env.PUBLIC_URL+'/images/hygiene/hygiene_02.jpg',
        desc: '먼지 최소화 & 단단 응고력 & 사막화 방지를 원한다면',
        title: '더스트 프리 벤토나이트 오리지널',
        item: 'DUST FREE BENTONITE ORIGINAL',
        price: '23,900',
        details: (
            <>
            페스룸만의 자체 '6단계 더스트 프리 공법'으로 먼지를 최소화하여<br/>
            각종 질병 예방이 가능하며, 흡수력, 응고력, 탈취력도 뛰어난<br />페스룸 시그니처 고양이 벤토 모래
            <br/><br/>
            입자크기 0.63 ~ 2.2 mm
            </>
        )
    },
    {
        id: 'food-03',
        image: process.env.PUBLIC_URL+'/images/hygiene/hygiene_03.jpg',
        desc: '초강력 흡수체 최다 함유한 프리미엄 배변패드, 소형/대형',
        title: '스마트 패드',
        item: 'SMILE PADS',
        price: '11,900',
        details: (
            <>
            초강력 고분자 흡수체 최다 함유 및 천연 펄프의 중량 강화로 반려동물의 배변을<br/>
            빠르게 흡수하는 국내 최강 스펙 프리미엄 배변패드
            <br/><br/>
            소형 40 x 50 cm / 대형 60 x 76 cm
            </>
        )
    },
    {
        id: 'food-04',
        image: process.env.PUBLIC_URL+'/images/hygiene/hygiene_04.jpg',
        desc: '미세하고 고운 입자로 기호성을 높인 크랙형 두부 모래',
        title: '파인 크랙 두부 모래',
        item: 'FINE CRACKED TOFU',
        price: '28,900',
        details: (
            <>
            페스룸이 자체개발한 미세하고 고운 입자로 기호성을 높인<br/>
            프리미엄 친환경 두부 모래
            <br/><br/>
            7L (2.8kg)
            </>
        )
    },
    {
        id: 'food-05',
        image: process.env.PUBLIC_URL+'/images/hygiene/hygiene_05.jpg',
        desc: '먼지 최소화 & 높은 기호성 & 높은 순간흡수력을 원한다면',
        title: '더스트 프리 벤토나이트 파인',
        item: 'DUST FREE BENTONITE FINE',
        price: '23,900',
        details: (
            <>
            자체 6단계 '더스트 프리 공법'으로 먼지 최소화는 기본,<br/>
            자체 개발 가는 입자로 부드러운 촉감과 기호성을 극대화하였으며<br />응고력, 탈취력 또한 뛰어난 프리미엄 벤토나이트
            <br/><br/>
            입자크기 0.6 ~ 0.99 mm
            </>
        )
    },
    {
        id: 'food-06',
        image: process.env.PUBLIC_URL+'/images/hygiene/hygiene_06.jpg',
        desc: '강력 탈취력 & 먼지 최소화 & 산뜻한 포레스트향을 원한다면',
        title: '오도어 프리 벤토나이트 포레스트',
        item: 'ODOUR FREE BENTONITE FOREST',
        price: '23,900',
        details: (
            <>
           먼지 최소화는 기본, 프리미엄 4가지 원료 추가 구성으로 항균,탈취력이 보다<br/>
           뛰어나며, 유아에게도 사용 가능한 알러지 프리등급<br />포레스트향을 첨가한 기능성 모래
            <br/><br/>
            입자크기 0.6 ~ 0.99 mm
            </>
        )
    },
    {
        id: 'food-07',
        image: process.env.PUBLIC_URL+'/images/hygiene/hygiene_07.jpg',
        desc: '손쉽게 열리는 100% 생분해 배변봉투 (120매)',
        title: '이지 오픈 풉백',
        item: 'EASY OPEN POOP BAG',
        price: '23,900',
        details: (
            <>
            손쉽게 열리는 야외 배변 필수템!<br/>
            페스룸 이지 오픈 풉백
            <br/><br/>
            23cm X 33cm
            </>
        )
    },
    {
        id: 'food-08',
        image: process.env.PUBLIC_URL+'/images/hygiene/hygiene_08.jpg',
        desc: '사막화 방지 4중 설계로 완성된 초대형 돔 형태 화장실',
        title: '와이드 커브 화장실',
        item: 'WIDE CURVE LITTER BOX',
        price: '54,900',
        details: (
            <>
            고양이가 좋아하는 돔 형태와 초대형 사이즈, 사막화 방지 4중 설계까지!<br/>
            분리형이라 묘주도 편리한 프리미엄 고양이 화장실<br />와이드 커브 리터 박스
            <br/><br/>
            50cm x 69cm x 40cm
            </>
        )
    },
    {
        id: 'food-09',
        image: process.env.PUBLIC_URL+'/images/hygiene/hygiene_09.jpg',
        desc: '특수 돌기와 홀 설계로 사막화 완벽 차단 매트',
        title: '클린 업 매트',
        item: 'CLEAN-UP MAT',
        price: '24,900',
        details: (
            <>
            9,000개 이상의 돌기와 3,000개 이상의 홀로 반려묘의 사막화를 차단하고,<br/>
            민감한 반려묘의 젤리 보호를 위해 쿠션감(경도)을 조절한 사막화 방지<br />클린 업 매트
            <br/><br/>
            클린 업 매트(M) 60cm x 65cm / 클린 업 매트(L) 80c mx 65cm
            </>
        )
    },
    {
        id: 'food-10',
        image: process.env.PUBLIC_URL+'/images/hygiene/hygiene_10.jpg',
        desc: '원형 가이드 안전하게! 높은 절삭력으로 깔끔하게!',
        title: '스마트, 네일 클러퍼 캣츠',
        item: 'ANTI ODOUR SET',
        price: '18,900',
        details: (
            <>
            깔끔한 무향, 인증 받은 소취(악취 제거)력 99.9%!<br/>
            신개념 원료로 악취균을 근본적으로 분해 및 제거하는<br />제로 오도어 스프레이
            <br/><br/>
            20~25cm / 25~30cm
            </>
        )
    },
    {
        id: 'food-11',
        image: process.env.PUBLIC_URL+'/images/hygiene/hygiene_11.jpg',
        desc: '바르는 천연 분해 효소 치약으로 구강 관리를 간편하게',
        title: '덴탈 솔루션 치약 (멜론/고구마)',
        item: 'ANTI ODOUR SET',
        price: '14,900',
        details: (
            <>
            깔끔한 무향, 인증 받은 소취(악취 제거)력 99.9%!<br/>
            신개념 원료로 악취균을 근본적으로 분해 및 제거하는<br />제로 오도어 스프레이
            <br/><br/>
            20~25cm / 25~30cm
            </>
        )
    },
    {
        id: 'food-12',
        image: process.env.PUBLIC_URL+'/images/hygiene/hygiene_12.jpg',
        desc: '오~래 먹는 간식 끝판왕 불리스틱',
        title: '불리츄',
        item: 'ANTI ODOUR SET',
        price: '12,900',
        details: (
            <>
            깔끔한 무향, 인증 받은 소취(악취 제거)력 99.9%!<br/>
            신개념 원료로 악취균을 근본적으로 분해 및 제거하는<br />제로 오도어 스프레이
            <br/><br/>
            20~25cm / 25~30cm
            </>
        )
    },
    {
        id: 'food-13',
        image: process.env.PUBLIC_URL+'/images/hygiene/hygiene_13.jpg',
        desc: '초극세사 원단으로 흡수력 3배! 드라이 시간 단축하는 마법 타월',
        title: '스펀지 타월 M',
        item: 'ANTI ODOUR SET',
        price: '18,900',
        details: (
            <>
            깔끔한 무향, 인증 받은 소취(악취 제거)력 99.9%!<br/>
            신개념 원료로 악취균을 근본적으로 분해 및 제거하는<br />제로 오도어 스프레이
            <br/><br/>
            20~25cm / 25~30cm
            </>
        )
    },
    {
        id: 'food-14',
        image: process.env.PUBLIC_URL+'/images/hygiene/hygiene_14.jpg',
        desc: '신선한 원물을 그대로 담은 기호성 끝판왕 트릿',
        title: '데일리 트릿',
        item: 'ANTI ODOUR SET',
        price: '15,900',
        details: (
            <>
            깔끔한 무향, 인증 받은 소취(악취 제거)력 99.9%!<br/>
            신개념 원료로 악취균을 근본적으로 분해 및 제거하는<br />제로 오도어 스프레이
            <br/><br/>
            20~25cm / 25~30cm
            </>
        )
    },
    {
        id: 'food-15',
        image: process.env.PUBLIC_URL+'/images/hygiene/hygiene_15.jpg',
        desc: '참치 명가 동원의 노하우를 듬뿍 담은 휴먼그레이드 간식',
        title: '퓨어 튜나 스틱',
        item: 'ANTI ODOUR SET',
        price: '3,000',
        details: (
            <>
            깔끔한 무향, 인증 받은 소취(악취 제거)력 99.9%!<br/>
            신개념 원료로 악취균을 근본적으로 분해 및 제거하는<br />제로 오도어 스프레이
            <br/><br/>
            20~25cm / 25~30cm
            </>
        )
    },
]

export default hygieneData