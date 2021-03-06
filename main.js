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
    navbarMenu.classList.remove('active')
    scrollIntoView(link)
    selectNavItem(target);
})

// Navbar Toggle button active
const toggleBtn = document.querySelector('.navbar__toggle-btn')

toggleBtn.addEventListener('click',()=>{
    const result = toggleBtn.classList.toggle("toggle");
    if(result){
        navbarMenu.classList.add('active')
    } else{
        navbarMenu.classList.remove('active')
    }
})






//Home contact me button click scrolling
//my code
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', ()=>{
    scrollIntoView('#contact')
});
// same with teacher's code ><



//scrolling home become transparent
//my code

//home 높이를 알고 그 높이가되면 투명해지기
//scroll event 사용하기

const home = document.querySelector('.home__container')
const homeHeight = home.getBoundingClientRect().height
document.addEventListener('scroll', ()=>{
    home.style.opacity=1-(window.scrollY / homeHeight)
})

//Arrow up Btn
const arrowUp = document.querySelector('.arrow-up')
document.addEventListener('scroll',()=>{
    if(window.scrollY > homeHeight / 2){
        arrowUp.classList.add('visible')
    } else{
        arrowUp.classList.remove('visible')
    }
})
arrowUp.addEventListener('click', ()=>{
    scrollIntoView('#home')
})

//work category click event
const workBtnContainer = document.querySelector('.work__categories')
const projectContainer = document.querySelector('.work__projects')
const projects = document.querySelectorAll('.project')


workBtnContainer.addEventListener('click', (event)=>{
    const filter = event.target.dataset.name || event.target.parentNode.dataset.name;
    if(filter ==null){
        return;
    }

    //Remove selection from the previous item and select the new one
    const active=document.querySelector('.category__btn.selected')
    active.classList.remove('selected');
    const target = event.target.nodeName === "BUTTON" ? event.target :
                                event.target.parentNode;
    // 이 문장에 의해서 target에는 항상 button만 할당됨

    target.classList.add('selected');

    projectContainer.classList.add('anim-out')
    setTimeout(()=>{
        projects.forEach((project)=>{
            console.log(project.dataset.work)
            if(filter === '*' || filter === project.dataset.work){
                project.classList.remove('invisible')
            } else{
                project.classList.add('invisible')
            }
        })
    projectContainer.classList.remove('anim-out')
    },300)


})






// 1. 모든 섹션 요소들을 가지고 온다
// 2. IntersectionObserver를 이용해서 모든 섹션들을 관찰한다
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.

const sectionIds = ['#home','#about','#skills','#work','#testimonials','#contact']
const sections = sectionIds.map(id => document.querySelector(id))
const navItems =sectionIds.map(id=>document.querySelector(`[data-link="${id}"]`))

let selectedNavIndex = 0;
let selectedNavItem = navItems[0];
function selectNavItem(selected){
    selectedNavItem.classList.remove('active')
    selectedNavItem = selected;
    selectedNavItem.classList.add('active')
}

// 코드 간결하게 만들기
//유틸리티 함수는 맨 밑으로
function scrollIntoView(selector){
    const contact = document.querySelector(selector);
    contact.scrollIntoView({behavior : "smooth"});
    selectNavItem(navItems(navItems.indexOf(selector)))    
}

const observerOptions = {
    root:null,
    rootMargin:'0px',
    threshold: 0.3,
}
const observerCallback = (entries, observer)=>{
    entries.forEach(entry=>{
        if(!entry.isIntersecting && entry.intersectionRatio > 0){
            const index = sectionIds.indexOf(`#${entry.target.id}`);
            if(entry.boundingClientRect.y < 0){
                selectedNavIndex = index + 1
            }else{
                selectedNavIndex = index - 1
            }
        }
        })
}
const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section))

window.addEventListener('wheel',()=>{
    if(window.scrollY === 0){
        selectedNavIndex = 0;
    } else if (
        window.scrollY + window.innerHeight ===
        document.body.clientHeight
    ) {
        selectedNavIndex = navItems.length -1;
    }
    selectNavItem(navItems[selectedNavIndex])
})
