const headerNavs = [
  {title: 'About', link: '#about'},
  {title: 'Learned', link: '#learned'},
  {title: 'Skills', link: '#skills'},
  {title: 'Timeline', link: '#timeline'},
  {title: 'Contact', link: '#contact'}
];

const $headerNavUl = document.querySelector('.header__nav ul');

for(const nav of headerNavs){
  const $li = document.createElement('li');
  $li.classList.add('header__nav-item');

  const $a = document.createElement('a');
  $a.textContent = nav.title;
  $a.setAttribute('href', nav.link);

  $li.appendChild($a);
  $headerNavUl.appendChild($li);
}

const aboutCards = [
  {
    img: './images/about_1.svg',
    title: '구조 설계',
    descs: [
      '페이지의 전체 구조와',
      '콘텐츠 흐름을 설계했습니다.'
    ]
  },
  {
    img: './images/about_2.svg',
    title: '레이아웃 구성',
    descs: [
      'Flex와 Grid를 사용해',
      '반응형 레이아웃을 만들었습니다.'
    ]
  },
  {
    img: './images/about_3.png',
    title: '동작 구현',
    descs: [
      '메뉴, 스크롤 등',
      '기본적인 인터랙션을 구현했습니다.'
    ]
  }
];

const $aboutDiv = document.querySelector('.about');

for (let i = 0; i < aboutCards.length; i++) {
  const card = aboutCards[i];

  const $div = document.createElement('div');
  $div.classList.add('about__card');

  const $img = document.createElement('img');
  $img.classList.add('about__icon');
  $img.setAttribute('src', card.img);

  const $h2 = document.createElement('h2');
  $h2.classList.add('about__title')
  $h2.classList.add('_' + (i + 1));
  $h2.textContent = card.title;

  const $p = document.createElement('p');
  $p.classList.add('about__text');

  for (const desc of card.descs) {
    const $word = document.createElement('div');
    $word.textContent = desc;
    $p.appendChild($word);
  }

  $div.appendChild($img);
  $div.appendChild($h2);
  $div.appendChild($p);

  $aboutDiv.appendChild($div);
}

const $contactTabs = document.querySelectorAll('input[name=contact]');
const $contactSlideCon = document.querySelector('.contact__slide-con');

for (let i = 0; i < $contactTabs.length; i++) {
  const $tab = $contactTabs[i];
  const marginLeft = [0, '-100vw'][i];

  $tab.addEventListener('click', () => {
    $contactSlideCon.style.marginLeft = marginLeft;
  });
}

const $menuBtn = document.querySelector('.header__menu-btn');
const $headerNav = document.querySelector('.header__nav');

$menuBtn.addEventListener('click', (e) => {
  $menuBtn.classList.toggle('on');
  $headerNav.classList.toggle('active');

  e.stopPropagation();
});

document
.querySelector('body')
.addEventListener('click', () => {
  $menuBtn.classList.remove('on');
  $headerNav.classList.remove('active');
});