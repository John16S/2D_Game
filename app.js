var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var ballRadius = 10;
/* ball */
var posX = 20;
var posY = 20;
var speedX = 4;
var speedY = 2;
/* stick */
var stickWidth = 75;
var stickHeight = 10;
var stickUpPosX = (canvas.width - stickWidth) / 2;
var stickDownPosX = (canvas.width - stickWidth) / 2;
var stickSpeed = 10;

var rightPressed = false;
var leftPressed = false;
var aPressed = false;
var dPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = true;
  }
  if (e.keyCode == 37) {
    leftPressed = true;
  }
  if (e.keyCode == 65){
    aPressed = true;
  }
  if (e.keyCode == 68){
    dPressed = true;
  }
}
function keyUpHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = false;
  }
  if (e.keyCode == 37) {
    leftPressed = false;
  }
  if (e.keyCode == 65){
    aPressed = false;
  }
  if (e.keyCode == 68){
    dPressed = false;
  }
}

function drawBall() {
  if (posX + speedX > canvas.width) {
    speedX -= speedX * 2; //7 -> -7
  } else if (posY + speedY > canvas.height) {
    speedY -= speedY * 2; //5 -> -5
  } else if (posX + speedX < 0) {
    speedX = Math.abs(speedX); //-7 -> 7
  } else if (posY + speedY < 0) {
    speedY = Math.abs(speedY); //-5 -> 5
  }

  context.beginPath();
  context.arc(posX, posY, ballRadius, 0, Math.PI * 2, false); //false - против часовой стрелки
  context.fillStyle = "rgb(8, 80, 139)";
  context.fill();
  context.closePath();
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height); //очищение канваса
  drawBall(); //рисуем круг(мяч)
  //меняем координаты круга(мяча)
  posX += speedX;
  posY += speedY;

  //логика нажатия кнопок
  if (rightPressed && stickDownPosX < canvas.width - stickWidth) {
    stickDownPosX += stickSpeed;
  } else if (leftPressed && stickDownPosX > 0) {
    stickDownPosX -= stickSpeed;
  } else if (dPressed && stickUpPosX < canvas.width - stickWidth) {
    stickUpPosX += stickSpeed;
  } else if (aPressed && stickUpPosX > 0) {
    stickUpPosX -= stickSpeed;
  }

  drawStick(stickUpPosX, 0);  //рисуем верхний стик
  drawStick(stickDownPosX, canvas.height - stickHeight); //риусем нижний стик
}

function drawStick(xPosition, yPosition) {
  context.beginPath();
  context.rect(xPosition, yPosition, stickWidth, stickHeight);
  context.fillStyle = "red";
  context.fill();
  context.closePath();
}

setInterval(draw, 1000 / 30); //30 fps
