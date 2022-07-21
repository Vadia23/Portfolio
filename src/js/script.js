const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const ratings= document.querySelectorAll('.skills__rating'),
    lines = document.querySelectorAll('.skills__progress-item-scale hr');
    
    ratings.forEach((item, i) => {
        lines [i].style.width = item.innerHTML;
    });
