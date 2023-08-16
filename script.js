'use strict';

let brgMenu = document.querySelector(".header__menu-list");
let icon = document.querySelector('.burger-icon');
let body = document.body;

icon.addEventListener("click", function() {
    brgMenu.classList.toggle("active-burger");
    icon.classList.toggle("active-icon");
    body.classList.toggle('locked');
});


const menuLinks = document.querySelectorAll(".menu-list__item");

    for (let menuLink of menuLinks) {
        menuLink.onclick = function () {
            brgMenu.classList.remove("active-burger");
            icon.classList.remove("active-icon");
            body.classList.remove('locked');
        };
    }


const links = document.querySelectorAll('a[href^="#"]');
for (let link of links) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const id = link.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}




