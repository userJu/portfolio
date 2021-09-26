//Navbar 부분 아래로 내리면서 핑크색되게하기
/*해야하는 일
1. scroll에 대해서 알기
-navbar height 알아오기
 */

// navbar가 자기만큼 내려갔을 때 변화 시작
'use strict'
const navbar= document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll',() => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else{
        navbar.classList.remove('navbar--dark');
    }
})