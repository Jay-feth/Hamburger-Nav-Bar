const navToggle = document.querySelector('#navToggle');
const ul = document.querySelector('ul');
const navIcon = document.querySelectorAll('.navIcon');
const hamburger = document.querySelector('#hamburger');


navToggle.addEventListener("click", () => {
    ul.classList.toggle('open');
    navIcon.forEach(icon => {
        icon.classList.toggle('hidden');
    });
});

window.addEventListener("resize", () => {
    if(document.body.clientWidth > 720) {
        ul.classList.remove('open');
        navIcon.forEach(icon => {
            icon.classList.add('hidden')
        });
        hamburger.classList.remove('hidden')
    }

});