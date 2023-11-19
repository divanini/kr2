document.querySelector('.logo').addEventListener("click", function () {
    window.location.href = "index.html";
});

document.querySelector('.all').addEventListener("click", function () {
    window.location.href = "html/cars.html";
});

document.querySelector('.contact-btn').addEventListener("click", function () {
    window.location.href = "html/contact.html";
});

const menu = document.querySelector('.menu');
const list = document.querySelector('.nav__links');
const close = document.querySelector('.close');
menu.onclick = function () {
  list.classList.toggle('is-opened');
}
close.onclick = function () {
  list.classList.remove('is-opened');
}

document.querySelector('.avatar').addEventListener("click", function () {
    window.open("https://www.mercedes-benz.com/en/innovation/concept-cars/vision-avtr/", '_blank');
});

document.querySelector(".bugatti").addEventListener("click", function () {
    window.location.href = ("https://www.bugatti.com/the-bugatti-heritage/modern-icons/veyron/");
})

