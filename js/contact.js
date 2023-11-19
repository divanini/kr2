document.querySelector('.logo').addEventListener("click", function () {
    window.location.href = "../index.html";
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

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("date").checked = false;
    document.getElementById("car").value = "";
    document.querySelectorAll('input[name="gender"]').forEach(radio => {
        radio.checked = false;
    })
}

const dateInput = document.getElementById("date");
const today = new Date();
const year = today.getFullYear();
const month = (today.getMonth() + 1).toString().padStart(2, "0");
const day = today.getDate().toString().padStart(2, "0");
const todayDate = `${year}-${month}-${day}`;
dateInput.value = todayDate;


function redirectToGoogle() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const date = document.getElementById("date").value;
    const secret = document.querySelector('input[name="secret"]').value;
    const car = document.getElementById("car").value;

    const query = `Имя: ${name}, Почта: ${email}, Телефон: ${phone}, Пол: ${gender}, Дата: ${date}, Секрет: ${secret}, Выбранная машина: ${car}`;
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;

    window.open(searchUrl, "_blank");
  }