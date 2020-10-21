

/*Navbar Show/Hide*/
const menu = document.querySelector('.menu');
const menupoints = document.querySelectorAll('.nav-point')


menu.addEventListener('click', () => {
    menu.classList.toggle("change");
    document.querySelector(".navbar").classList.toggle("change");
});

menupoints.forEach(function(elem) {
    elem.addEventListener("click", () => {
        menu.classList.toggle("change");
        document.querySelector(".navbar").classList.toggle("change");
    });
});

/*Scroll Function*/ 

