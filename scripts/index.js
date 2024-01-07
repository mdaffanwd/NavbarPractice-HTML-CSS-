const menu = document.querySelector('#menu')
const navlist = document.querySelector('.nav-links ul')

menu.addEventListener('click', () => {
    console.log(menu.classList.toggle('ri-menu-unfold-line'));
    navlist.classList.toggle('open')
})