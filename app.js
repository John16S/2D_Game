var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");

function draw() {
    context.beginPath(); //
    context.arc(50, 50, 20, 0, Math.PI * 2, false); //false - против часовой стрелки
    context.fillStyle = "rgb(8, 80, 139)";
    context.fill();
    context.closePath();
}

draw();