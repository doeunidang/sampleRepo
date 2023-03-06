const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
    searchInputEl.focus();
});
//search라는 클래스를 가지고있는 div요소를 클릭하면 함수가 실행된다
//함수 내용은 인풋요소에 포커스가 된다는 뜻
//--> search클래스를 가진 div요소를 클릭하면 input 요소에 포커스가 된다.

searchInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused'); //특정 요소에 클래스 정보를 가지고 있는 객체에서 어떤 클래스 내용을 추가하겠다.
    searchInputEl.setAttribute('placeholder', '통합검색'); //searchInputEl부분에 html속성을 지정하는 것
});
//searchInputEl 부분에 포커스가 되면 두 번째 인수로 작성하는 함수(function)가 실행된다.
//이 때 실행되는 함수를 handler라고 표현함

searchInputEl.addEventListener('blur',function(){
    searchEl.classList.remove('focused'); 
    searchInputEl.setAttribute('placeholder', ''); 
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle( function(){ //화면이 스크롤되면 함수를 실행하겠다!
    console.log(window.scrollY);
    if(window.scrollY>500){
        badgeEl.style.display='none';
    } else{
        badgeEl.style.display='block';
    }
},300));