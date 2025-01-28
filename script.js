let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x'); // Menü simgesini değiştir
    navbar.classList.toggle('active'); // Navbar'ı görünür yap
};
