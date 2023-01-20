var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var ballRadius = 10;
var posX = 20;
var posY = 20;
var speedX = 4;
var speedY = 2;

function drawBall() {
  if (posX + speedX > canvas.width) {
    speedX -= speedX * 2; //7 -> -7
  } else if (posY + speedY > canvas.height) {
    speedY -= speedY * 2; //5 -> -5
  } else if (posX + speedX < 0) {
    speedX = Math.abs(speedX); //-7 -> 7
  } else if (posY + speedY < 0) {
    speedY = Math.abs(speedY);  //-5 -> 5
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
}

setInterval(draw, 1000 / 30); //30 fps
