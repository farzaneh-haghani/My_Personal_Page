var srcs;


srcs = ['https://th.bing.com/th/id/OIP.ZmR9c4tJ-4ERclMj-Ni3VQHaEg?w=269&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7', 'https://th.bing.com/th/id/OIP.dZ0Qq2oKBoVvONzSfdGsAAHaE8?w=277&h=185&c=7&r=0&o=5&dpr=1.25&pid=1.7', 'https://th.bing.com/th/id/OIP.aqSVE7TUcbsLCQdF_FPfRgHaEK?w=307&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7', 'https://th.bing.com/th/id/OIP.1YM53mG10H_U25iPjop83QHaEo?w=264&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7', 'https://th.bing.com/th/id/OIP.PYipJ_hSncugM2SwnZitvgHaEK?w=293&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'];


document.getElementById('next').addEventListener('click', (event) => {
  srcs.push(srcs.shift());
  let element_image = document.getElementById('image');
  element_image.setAttribute("src", srcs[0]);

});

document.getElementById('previous').addEventListener('click', (event) => {
  srcs.unshift(srcs.slice(-1)[0]);
  let element_image2 = document.getElementById('image');
  element_image2.setAttribute("src", srcs.pop());

});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}