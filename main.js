'use strict'


// navbar가 자기만큼 내려갔을 때 변화 시작
const navbar= document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll',() => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else{
        navbar.classList.remove('navbar--dark');
    }
})

// // Navbar의 item을 클릭하면 원하는 곳으로 스크롤 되는 이벤트

// My code
// navbar__menuBtn[0].addEventListener('click', ()=>{home.scrollIntoView();})
// navbar__menuBtn[1].addEventListener('click', ()=>{about.scrollIntoView();})
// navbar__menuBtn[2].addEventListener('click', ()=>{skills.scrollIntoView();})
// navbar__menuBtn[3].addEventListener('click', ()=>{work.scrollIntoView();})
// navbar__menuBtn[4].addEventListener('click', ()=>{testimonials.scrollIntoView();})
// navbar__menuBtn[5].addEventListener('click', ()=>{contact.scrollIntoView();})
// 문제점
// navbar__menu라고 선언하면 그 안에 있는 li가 다 눌린다는 걸 간과
// li만 따로 클릭가능하도록 할 수 있었다는 것을 간과




//teacher's code
//원하는 아이디 알기
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(event)=>{
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
    scrollIntoView(link)
})

//Home contact me button click scrolling
//my code
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', ()=>{
    scrollIntoView('#contact')
});
// same with teacher's code ><
// 코드 간결하게 만들기
function scrollIntoView(selector){
    const contact = document.querySelector(selector);
    contact.scrollIntoView({behavior : "smooth"});
}