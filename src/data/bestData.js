const best = [
    {
        id: 'best-01',
        image: process.env.PUBLIC_URL+'/images/main_img/best_01.jpg',
        desc: '먼지 최소화 & 단단 응고력 & 사막화 방지를 원한다면',
        title: '더스트 프리 벤토나이트 오리지널',
        item: 'DUST FREE BENTONITE ORIGINAL',
        price: '23,900',
        details: (
            <>
            '페스룸만의 자체 6단계 더스트 프리 공법으로 먼지를 최소화하여 각종 질병 예방이 가능하며 흡수력, 응고력, 탈취력이 뛰어난 페스룸 시그니처 고양이 벤토 모래 <br /><br />입자크기 0.63~2.2mm'
            </>
        )
    },
    {
        id: 'best-02',
        image: process.env.PUBLIC_URL+'/images/main_img/best_02.jpg',
        desc: '눈꼽 제거부터 빗질까지 둥근 헤드로 안전하게',
        title: '이지 페이셜 콤',
        price: '6,900',
        details: '자체개발 둥근헤드와 60개의 견고한 고급 스테인리스 날로 쉽고 안전하게 눈꼽제거부터 얼굴 세밀한 부분까지 빗질가능 이지 페이셜 콤'
    },
    {
        id: 'best-03',
        image: process.env.PUBLIC_URL+'/images/main_img/best_03.jpg',
        desc: '306개의 폴리케톤 빗살로 피부 자극 없이 편안하게',
        title: '힐링 슬리커 브러쉬',
        price: '20,900',
        details: '306개의 부드러운 폴리케톤 빗살로 자극없이! 원터치 손잡이 버튼으로 쉽고 깔끔한 털 제거 힐링 슬리커 브러쉬'
    },
    {
        id: 'best-04',
        image: process.env.PUBLIC_URL+'/images/main_img/best_04.jpg',
        desc: '무자극 실리콘 돌기로 죽은 털 제거와 마사지를 한번에',
        title: '힐링 브러쉬',
        price: '18,900',
        details: '무자극 실리콘 돌기로 죽은 털 제거와 마사지를 한번에'
    },
    {
        id: 'best-05',
        image: process.env.PUBLIC_URL+'/images/main_img/best_05.jpg',
        desc: '언제 어디서든 물 없이 간편하게 세정할 수 있는 워터리스 샴푸',
        title: '제로 워터리스 샴푸',
        price: '11,900',
        details: '물 없이도 간편하고 깔끔한 세정이 가능하며, 자극 없는 식물유래 성분으로 아이들이 핥아도 안전한 제로 워터리스 샴푸'
    },
    {
        id: 'best-06',
        image: process.env.PUBLIC_URL+'/images/main_img/best_06.jpg',
        desc: '초강력 흡수체 최다 함유한 프리미엄 배변패드, 소형 대형',
        title: '스마일패드 (소형/대형)',
        price: '23,900',
        details: '초강력 고분자 흡수체 최다 함유 및 천연 펄프의 중량 강화로 반려동물의 배변을 빠르게 흡수하는 국내 최강 스펙 프리미엄 배변패드'
    },
    {
        id: 'best-07',
        image: process.env.PUBLIC_URL+'/images/main_img/best_07.jpg',
        desc: '미세하고 고운 입자로 기호성을 높인 크랙형 두부 모래',
        title: '파인 크랙 두부 모래 (오리지널/녹차)',
        price: '28,900',
        details: '페스룸이 자체개발한 미세하고 고운 입자로 기호성을 높인 프리미엄 친환경 두부 모래'
    },
    {
        id: 'best-08',
        image: process.env.PUBLIC_URL+'/images/main_img/best_08.jpg',
        desc: '높이&각도 조절 가능한 반려동물 전용 식기',
        title: '웰 핏 테이블 & 보울',
        price: '48,900',
        details: '높이 & 각도조절 가능! 반려동물 체형 최적화 웰 핏 테이블. 국내에서 장인이 수작업으로 생산한 안전한 도자기 그릇 웰 핏 보울'
    },
    {
        id: 'best-09',
        image: process.env.PUBLIC_URL+'/images/main_img/best_09.jpg',
        desc: '급하게 먹는 아이들을 위한 급체방지식기',
        title: '페스룸X위글위글 슬로우 피더',
        price: '14,500',
        details: '페스룸 x 위글위글 콜라보레이션! 위글위글의 디자인 감성과 페스룸의 노하우가 만난 급체방지식기!'
    },
    {
        id: 'best-10',
        image: process.env.PUBLIC_URL+'/images/main_img/best_10.jpg',
        desc: '원형 가이드 안전하게! 높은 절삭력으로 깔끔하게!',
        title: '스마트, 네일 클러퍼 캣츠',
        price: '18,900',
        details: '페스룸 자체개발! 안전한 원형 가이드로 발톱을 흔들림없이 안정적으로 커팅할 수 있으며 고급 스테인리스로 절삭력과 내구성을 높인 고양이 전용 발톱깎이'
    },
    {
        id: 'best-11',
        image: process.env.PUBLIC_URL+'/images/main_img/best_11.jpg',
        desc: '바르는 천연 분해 효소 치약으로 구강 관리를 간편하게',
        title: '덴탈 솔루션 치약 (멜론/고구마)',
        price: '14,900',
        details: '바르기만 해주면 양치시간 끝! 천연 효소 3종 함유로 치석 완벽 예방! 바르기 좋은 제형과 시원한 메론 향으로 기호성도 좋은 덴탈 솔루션 치약'
    },
    {
        id: 'best-12',
        image: process.env.PUBLIC_URL+'/images/main_img/best_12.jpg',
        desc: '오~래 먹는 간식 끝판왕 불리스틱',
        title: '불리츄',
        price: '12,900',
        details: '국내산 한우 우신을 자연 건조해 풍미 가득! 집사와 댕댕이 모두가 행복한 페스룸 불리츄'
    },
    {
        id: 'best-13',
        image: process.env.PUBLIC_URL+'/images/main_img/best_13.jpg',
        desc: '초극세사 원단으로 흡수력 3배! 드라이 시간 단축하는 마법 타월',
        title: '스펀지 타월 M',
        price: '18,900',
        details: '자체 개발 초극세사 원단으로 제작하여 일반 타월보다 흡수력이 3배 이상 높아 드라이 시간을 단축시키며, 피모 안쪽 물기까지 빠르게 흡수합니다.'
    },
    {
        id: 'best-14',
        image: process.env.PUBLIC_URL+'/images/main_img/best_14.jpg',
        desc: '신선한 원물을 그대로 담은 기호성 끝판왕 트릿',
        title: '데일리 트릿',
        price: '15,900',
        details: '신선한 원물이 100% 그대로! 진공 동결건조로 영양 손실은 최소화 하고, 기호성은 높인 100% 휴먼그레이드 원료로 만든 페스룸 데일리 트릿'
    },
    {
        id: 'best-15',
        image: process.env.PUBLIC_URL+'/images/main_img/best_15.jpg',
        desc: '참치 명가 동원의 노하우를 듬뿍 담은 휴먼그레이드 간식',
        title: '퓨어 튜나 스틱',
        price: '3,000',
        details: '태평양에서 잡은 신선한 참치! 참치 명가 동원의 노하우를 듬뿍 담아 더욱 더 맛있는 100% 휴먼그레이드 페스룸 퓨어 튜나 스틱!'
    },
]

export default best