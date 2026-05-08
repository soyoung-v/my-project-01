# One Page Portfolio

HTML, CSS, JavaScript로 제작한 정적 원페이지 포트폴리오 사이트입니다.

프론트엔드 학습 내용과 소개 콘텐츠를 한 페이지에 정리한 랜딩 페이지 형태이며, 섹션 구성, 반응형 레이아웃, 기본 UI 인터랙션을 중심으로 구성했습니다.

## 기술 스택

- HTML5
- CSS3
- JavaScript
- Google Fonts

## 주요 기능

- 섹션 이동 네비게이션
  - 상단 메뉴를 통해 About, Learned, Skills, Timeline, Contact 섹션으로 이동
- About 카드 동적 렌더링
  - JavaScript 배열 데이터를 기반으로 소개 카드 출력
- 모바일 메뉴 토글
  - 모바일 화면에서 메뉴 버튼 클릭 시 네비게이션 열기/닫기
- Contact 섹션 탭 전환 UI
  - 연락처 보기와 문의 폼 UI를 탭 형태로 전환
- 반응형 레이아웃
  - 화면 크기에 따라 모바일/데스크톱 레이아웃 분기
- 시각 효과
  - Intro 타이핑 커서 애니메이션
  - About 카드 hover 효과
  - Timeline hover 효과
  - Learned / Skills 로고 애니메이션

## 화면 구성

| 섹션 | 설명 |
|---|---|
| Intro | 메인 비주얼과 타이핑 커서 애니메이션 |
| About | 소개 카드 영역 |
| Learned | 학습 과정 소개 섹션 |
| Skills | 기술 요소 소개 섹션 |
| Timeline | 학습 흐름을 정리한 타임라인 섹션 |
| Contact | 연락처 정보와 문의 폼 UI 탭 구성 |

## 프로젝트 구조

```text
FEproject/
├── index.html
├── script.js
├── style.css
├── styles/
│   ├── 1-intro.css
│   ├── 2-header.css
│   ├── 3-main.css
│   ├── 4-about.css
│   ├── 5-lea-sk.css
│   ├── 6-timeline.css
│   ├── 7-contact.css
│   └── 8-footer.css
└── images/
```

## 주요 구현 포인트

### JavaScript 기반 UI 렌더링

HTML에 모든 메뉴와 카드를 직접 작성하지 않고, JavaScript 데이터 배열을 이용해 일부 UI를 동적으로 렌더링했습니다.

### 섹션 단위 CSS 분리

CSS 파일을 섹션 단위로 분리하고, 메인 스타일 파일에서 import하는 방식으로 구성했습니다.

### 반응형 레이아웃

Media Query를 사용해 모바일과 데스크톱 화면에서 레이아웃이 다르게 보이도록 처리했습니다.

### 기본 인터랙션

메뉴 토글, 탭 전환, hover 애니메이션 등 기본적인 사용자 인터랙션을 JavaScript와 CSS로 구성했습니다.

## 실행 방법

### 1. 저장소 클론

```bash
git clone <repository-url>
```

### 2. 프로젝트 폴더 이동

```bash
cd FEproject
```

### 3. 실행

`index.html` 파일을 브라우저에서 직접 열어 확인할 수 있습니다.

또는 간단한 로컬 서버를 실행할 수 있습니다.

```bash
python3 -m http.server
```

이후 브라우저에서 로컬 주소로 접속합니다.

```text
http://localhost:8000
```

## 참고 사항

- 이 프로젝트는 정적 원페이지 사이트입니다.
- Contact 섹션의 문의 폼은 전송 기능이 없는 UI 구성입니다.
- 별도의 백엔드, 데이터 저장, API 연동 기능은 포함되어 있지 않습니다.
- 로그인, 회원가입, 이메일 발송 기능은 포함되어 있지 않습니다.
