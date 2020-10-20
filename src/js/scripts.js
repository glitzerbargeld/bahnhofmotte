for(let i=0; i<10; i++){
    console.log("test");

}

const menu = document.querySelector('.menu');
const menupoints = document.querySelectorAll('.nav-point')
console.log(menupoints);


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