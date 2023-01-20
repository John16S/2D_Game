var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var posX = 20;
var posY = 20;
var speedX = 5;
var speedY = 5;

function draw() {
  posX += speedX;
  posY += speedY;
  context.clearRect(0, 0, canvas.width, canvas.height); //очищение канваса

  context.beginPath(); //
  context.arc(posX, posY, 20, 0, Math.PI * 2, false); //false - против часовой стрелки
  context.fillStyle = "rgb(8, 80, 139)";
  context.fill();
  context.closePath();
}

setInterval(draw, 1000/30); //30 fps
