burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar');
navlist=document.querySelector('.nav-list');
rightnav=document.querySelector('.rightnav');

burger.addEventListener('click',()=>{
    rightnav.classList.toggle('visibility-resp');
    navlist.classList.toggle('visibility-resp');
    navbar.classList.toggle('h-nav-resp');
})