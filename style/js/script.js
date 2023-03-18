
window.onscroll = function(){
    const header = document.querySelector('header');
    const FixedNav = header.offsetTop;

    if(window.pageYOffset > FixedNav){
        header.classList.add('navbar-fixed');
    } else{
        header.classList.remove('navbar-fixed')
    }
}

const humberger = document.querySelector('#humberger');
const navMenu =document.querySelector('#navmenu');


humberger.addEventListener('click', function(){
    humberger.classList.toggle('humberger-active');
    navMenu.classList.toggle('hidden');
});

