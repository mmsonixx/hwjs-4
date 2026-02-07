 //1
const textOne = prompt('Введіть текст').trim();
const textTwo = prompt("Введіть текст").trim();
if (textOne === "" || textTwo === "") {
    alert('Не всі поля заповнені');
} else {
     alert("Обидва поля заповнені");
}

//2
const a = Number(prompt("Введіть перше число: "));
const b = Number(prompt("Введіть друге число: "));
let result = a + b > 10 ? "Сума більша за 10" : "Сума менша або дорівнює 10";
alert(result);

//3
const text = prompt(" ECMAScript — це офіційна назва мови ...? ").trim().toLowerCase();
if (text.includes("JavaScript".toLowerCase())) {
  alert("Текст містить слово JavaScript");
} else {
  alert("Текст не містить слово JavaScript");
}

//4
const number = Number(prompt("Введіть число: "));
if (number > 10 && number < 20) {
    alert("Число входить в діапазон від 10 до 20");
} else {
    alert("Число не входить в діапазон від 10 до 20");
}

//5
const userName = prompt("Введіть i'мя").trim();
const email = prompt("Введіть email").trim();
const password = prompt("Введіть пароль");
if (userName.length >= 3 && email.includes("@") && password.length >= 6) {
  alert("Перенаправлення на іншу сторінку");
} else {
  alert("Помилка: неправильне заповнення");
}