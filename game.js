let canvas = document.getElementById("Game");
let ctx = canvas.getContext("2d");

//Вызов по клику
document.addEventListener("click", ClickHandler);
function ClickHandler(click) {

}
//Отрисовка
function draw() {

}
//Обновление с частотой 60 кадров в секунду
setInterval(draw, 16.7);