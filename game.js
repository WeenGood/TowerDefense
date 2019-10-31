let canvas = document.getElementById("Game");
let ctx = canvas.getContext("2d");

start = true;
life = 20;
gold = 0;

//Вызов по клику
document.addEventListener("click", ClickHandler);
function ClickHandler(click) {
    //
}

//База
class Base {

    constructor(x, y) {
        this.pos = [x, y];
        this.size = 100;
    }

    getDamage() {
        life = life - 1;
        if (life < 0) {
            start = false;
        }
    }

    mineGold() {
        gold = gold + 10;
    }
}

//Башня
class Tower {

    constructor(x, y) {
        this.pos = [x, y];
        this.size = 25;
        this.radius = 100;
        this.damage = 5;
    }
    //
}

//Отрисовка
function Draw() {
    while (start) {
        //
    }
}

//Обновление с частотой 60 кадров в секунду
setInterval(Draw, 16.7);