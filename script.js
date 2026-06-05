const menu = document.querySelector("#menu");
const navLinks = document.querySelector(".links");


menu.onclick = () => {
    menu.classList.toggle('bx-x'); 
    navLinks.classList.toggle('active'); 
}

document.querySelectorAll('.links a').forEach(link => {
    link.onclick = () => {
        menu.classList.remove('bx-x');
        navLinks.classList.remove('active');
    }
});