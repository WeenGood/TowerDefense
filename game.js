let canvasG = document.getElementById("Game");
let ctxG = canvasG.getContext("2d");

const BSize = 50;
const ESize = 5;
let xE = 994;
let yE = 994;
let sEx = 1;
let sEy = 1;
let base = true;
let enemy = true;
let xT = 20;
let yT = 5;

document.addEventListener("keydown", keydownHandler);

function keydownHandler(e) {
    if (e.keyCode == 49) {
        if (base == true) {
            base = false;
        }
        else {
            base = true;
            enemy = true;
            xE = 994;
            yE = 994;
        }
    }
    if (e.keyCode == 39) { //Право
        xT = 20;
        yT = 5;
    }
    if (e.keyCode == 37) { //Лево
        xT = -20;
        yT = -5;
    }
    if (e.keyCode == 38) { //Верх
        xT = -5;
        yT = -20;
    }
    if (e.keyCode == 40) { //Низ
        xT = 5;
        yT = 20;
    }
}

function drawBase(base) {
    if (base == true) {
        ctxG.beginPath();
        ctxG.rect(BSize, BSize, 2 * BSize, 2 * BSize);
        ctxG.fillStyle = "blue";
        ctxG.fill();
        ctxG.closePath();
    }
    else {
        ctxG.beginPath();
        ctxG.rect(BSize, BSize, BSize, 2 * BSize);
        ctxG.fillStyle = "red";
        ctxG.fill();
        ctxG.closePath();
        ctxG.beginPath();
        ctxG.rect(2 * BSize, BSize, BSize, 2 * BSize);
        ctxG.fillStyle = "green";
        ctxG.fill();
        ctxG.closePath();
        ctxG.font = "16px Arial";
        ctxG.fillStyle = "black";
        ctxG.fillText("Можно нажать 1", 8, 20);
    }
}

function drawTower() {
    ctxG.beginPath();
    ctxG.rect(100, 300, 20, 20);
    ctxG.fillStyle = "orange";
    ctxG.fill();
    ctxG.closePath();
    ctxG.beginPath();
    ctxG.rect(110, 310, xT, yT);
    ctxG.fillStyle = "black";
    ctxG.fill();
    ctxG.closePath();
}

function MoveEnemy() {
    if (xE + sEx > canvasG.width - ESize || xE + sEx < ESize) {
        sEx = -sEx;
    }
    if (yE + sEy > canvasG.width - ESize || yE + sEy < ESize) {
        sEy = -sEy;
    }
    xE += sEx;
    yE += sEy;
    if (xE == 3 * BSize - ESize || yE == 3 * BSize - ESize) {
        base = false;
        enemy = false;
    }
}
function drawEnemy(enemy) {
    if (enemy == true) {
        ctxG.beginPath();
        ctxG.rect(xE, yE, ESize, ESize);
        ctxG.fillStyle = "red";
        ctxG.fill();
        ctxG.closePath();
    }
}
function rest() {
    xE = 994;
    yE = 994;
    sEx = 1;
    sEy = 1;
    base = true;
    enemy = true;
}

function draw() {
    ctxG.clearRect(0, 0, canvasG.width, canvasG.height);
    drawTower()
    drawBase(base);
    drawEnemy(enemy)
    MoveEnemy()
    requestAnimationFrame(draw);
}

draw();