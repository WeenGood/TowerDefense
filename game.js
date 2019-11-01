//let > var
let canvas = document.getElementById("Game");
let ctx = canvas.getContext("2d");

//Общие переменные игрока. Будут отображаться в интерфейсе
start = true;
life = 20;
gold = 0;

//Функции, которые будут выполняться после клика мыши/нажатия на экран
document.addEventListener("click", ClickHandler);
function ClickHandler(click) {
    //
}

//База
class Base {

    //Место базы на карте заранее определено, но она знает свои координаты
    constructor(x, y) {
        this.pos = [x, y];
        this.size = 100;
    }

    //Будут вызываться, когда враг пройдет на территорию базы
    getDamage() {
        life -= 1;
        if (life < 0) {
            start = false;
        }
    }

    //Золото будет накапливаться со временем
    mineGold() {
        gold += 10;
    }
}

//Башня
class Tower {

    //Место башни на карте заранее определено, но она знает свои координаты
    constructor(x, y) {
        this.pos = [x, y];
        this.size = 25;
        this.radius = 100;
        this.damage = 5;
        this.level = 0;
    }

    //Улучшение башни вызывается через другую функцию
    upgrade() {
        this.level += 1;
        this.radius = this.radius + this.level * 10;
        this.damage = this.damage + this.level * 2;
    }
}

//Создание базы
let base = new Base(50,50);

//Отрисовка базы
function drawBase(t_base) {
    ctx.closePath();
    ctx.rect(t_base.pos[0], t_base.pos[1], t_base.size, t_base.size);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}

//Отрисовка
function Draw() {
    if (start) {
        drawBase(base);
    }
}

//Обновление с частотой 60 кадров в секунду
//Подходит лучше, чем requestAnimationFrame(), так как не зависит от частоты кадров
setInterval(Draw, 16.7);