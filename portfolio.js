var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab')
}

var navlink = document.getElementsByClassName('nav-link');

function activateTab(navtab){
    for(navitem of navlink){
        navitem.classList.remove('active');
    }
    event.currentTarget.classList.add('active');
    document.getElementById(navtab).classList.add('active');
}

var sidemenu = document.getElementById('sidemenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav #sidemenu li a');

closeMenu.addEventListener('click', closemenu);
openMenu.addEventListener('click', openmenu);

menu_items.forEach(item => {
    item.addEventListener('click',function(){
        closemenu();
    })
})

function openmenu(){
    sidemenu.style.right = '0';
}

function closemenu(){
    sidemenu.style.right = '-200px';
}

document.querySelector('.switcher-btn').onclick = () => {
    document.querySelector('.color-switcher').classList.toggle('active');
}

const setter = () => {
    const stored = localStorage.getItem('theme');
    document.querySelector(':root').style.setProperty('--main-color', stored);
}

setter();


let themeButtons = document.querySelectorAll('.theme-buttons');

themeButtons.forEach(color => {
    color.addEventListener('click', (theme) => {
        let dataColor = color.getAttribute('data-color');
         document.querySelector(':root').style.setProperty('--main-color', dataColor);
         localStorage.setItem('theme', dataColor)
    });
});



themeButtons.forEach(stuff =>{
    stuff.addEventListener('click', () =>{
        document.querySelector('.color-switcher').classList.toggle('active');
    })
})





/*<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.2/typed.js" integrity="sha512-czS2hv7J6JWyaQyLkBm9/5POh0ADLqOn0Nutu0Pz2GeZyA6kMv7hIUGGvrF8F3ZyivBWMTjAttfZ1ye+V5ddgw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>
    import Typed from 'typed.js';

var typed = new Typed(".auto-type", {
    strings: ["Frontend", "Web"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
</script>-->*/ 