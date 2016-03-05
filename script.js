var a_canvas = document.getElementById("a");
var context = a_canvas.getContext("2d");

//face
context.fillStyle = "#4ff4af";
context.beginPath();
context.arc(250, 225, 100, 0, 2*Math.PI);
context.closePath();
context.fill();
context.lineWidth = 2;
context.stroke();
context.fillStyle = "#2c3d55";

//left eye
context.beginPath();
context.arc(210, 190, 15, 0, 2*Math.PI);
context.closePath();
context.fill();

//right eye
context.beginPath();
context.arc(290, 190, 15, 0, 2*Math.PI);
context.closePath();
context.fill();

//mouth
context.beginPath();
context.arc(250, 240, 70, Math.PI, 2*Math.PI, true);
context.closePath();
context.fill();

context.fillStyle = "white"
context.font = "30px Helvetica";
context.fillText("Greetings of the day from Cal!",50,440);