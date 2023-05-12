const menuToggle = document.querySelector('#toggle-bar')
const listMenu = document.querySelector('.list-menu')

menuToggle.addEventListener('click', function(){
    listMenu.classList.toggle('menu-aktif')
})
