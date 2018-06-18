window.onload = function(){}

var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var animationID;
let score1 = 0;
let score2 = 0;
const maxPlayerSpeed = 3.5;
const ballSpeed = 5;
var wDown = false;
var sDown = false;
var aDown = false;
var dDown = false;
var upDown = false;
var downDown = false;
var leftDown = false;
var rightDown = false;
var player1 = new Player(100,250,30,0,0);
var player2 = new Player(600,250,30,0,0);
var ball = new Player(350, 250,10,0,0);


// Useless comment
var person = prompt("Enter your name.");

while (person === null || person.length < 1) {
  person = prompt("Ungültige Eingabe.");
}

var person2 = prompt("Enter the second players name.");
while (person2 === null || person2 === person || person2 === 0 || person2.length < 1) {
  person2 = prompt("Ungültige Eingabe.");
}
if (localStorage.getItem(person) === null) {
  localStorage.setItem(person, 0);
}
if (localStorage.getItem(person2) === null) {
  localStorage.setItem(person2, 0);
}
start();

function start()
{
  if (score1 === 3) {
    score1 = 0;
    score2 = 0;
    var value = localStorage.getItem(person);
    value++;
    localStorage.setItem(person,value);
    window.alert(person + " has won!");
    allFalse();
  }
  else if (score2 === 3) {
    score1 = 0;
    score2 = 0;
    var value = localStorage.getItem(person2);
    value++;
    localStorage.setItem(person2,value);
    window.alert(person2 + " has won!");
    allFalse();
  }
  player1.x = 100;
  player1.y = 250;
  player2.x = 600;
  player2.y = 250;
  ball = new Player(350, 250,10,0,0);
  out.innerHTML = person + "'s Score: " + score1 + "<br>" + person2 + "'s Score: " + score2 + "<br><br>" + person + "'s total wins: " + localStorage.getItem(person) + "<br>" + person2 + "'s total wins: " + localStorage.getItem(person2) + "<br>";
  play();
}
function Player(x,y,z,b,c)
{
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.speedY = 0;
  this.size = z;
  this.yacc = b;
  this.xacc = c;
}
function checkPlayers()
{
  if (wDown) {
    if (player1.y - maxPlayerSpeed < 35) {
      player1.y = 35;
    }
    else {
      player1.y -= maxPlayerSpeed;
    }
  }
  if (sDown) {
    if (player1.y + maxPlayerSpeed > 465) {
      player1.y = 465;
    }
    else {
      player1.y += maxPlayerSpeed;
    }
  }
  if (aDown) {
    if (player1.x - maxPlayerSpeed < 35) {
      player1.x = 35;
    }
    else {
      player1.x -= maxPlayerSpeed;
    }
  }
  if (dDown) {
    if (player1.x + maxPlayerSpeed > 665) {
      player1.x = 665;
    }
    else {
      player1.x += maxPlayerSpeed;
    }
  }
  if (upDown) {
    if (player2.y - maxPlayerSpeed < 35) {
      player2.y = 35;
    }
    else {
      player2.y -= maxPlayerSpeed;
    }
  }
  if (rightDown) {
    if (player2.x + maxPlayerSpeed > 665) {
      player2.x = 665;
    }
    else {
      player2.x += maxPlayerSpeed;
    }
  }
  if (leftDown) {
    if (player2.x - maxPlayerSpeed < 35) {
      player2.x = 35;
    }
    else {
      player2.x -= maxPlayerSpeed;
    }
  }
  if (downDown) {
    if (player2.y + maxPlayerSpeed > 465) {
      player2.y = 465;
    }
    else {
      player2.y += maxPlayerSpeed;
    }
  }
}
function checkBallBoundaries()
{
  if (ball.y + ball.yacc > 485) {
    ball.yacc *= -1;
  }
  if (ball.y + ball.yacc < 15) {
    ball.yacc *= -1;
  }
  if (((ball.y + ball.yacc) > 170 && (ball.y - ball.yacc) < 340) && ball.x + ball.xacc >= 689) {
    score1++;

    start();
  }
  else if (ball.x + ball.xacc > 689) {
    ball.xacc *= -1;
  }
  if (((ball.y + ball.yacc) > 170 && (ball.y - ball.yacc) < 340) && ball.x + ball.xacc <= 15) {
    score2++;
    start();
  }
  else if (ball.x + ball.xacc < 15) {
    ball.xacc *= -1;
  }
}
function renderPlayers()
{
  c.fillStyle = "red";
  c.beginPath();
  c.arc(player1.x,player1.y,player1.size, 0 ,2*Math.PI);
  c.fill();
  c.fillStyle = "blue";
  c.beginPath();
  c.arc(player2.x,player2.y,player2.size, 0 ,2*Math.PI);
  c.fill();
}
function renderBall()
{
  c.fillStyle = "black";
  c.beginPath();
  c.arc(ball.x,ball.y,ball.size, 0 ,2*Math.PI);
  c.fill();
}
function drawField()
{
  c.fillStyle = "limegreen";
  c.beginPath();
  c.rect(3,3,canvas.width-5,canvas.height-5);
  c.fill();
  c.strokeStyle = "white";
  c.beginPath();
  c.arc(canvas.width/2,canvas.height/2, 100 , 0, 2*Math.PI);
  c.stroke();
  c.beginPath();
  c.fillStyle = "white";
  c.arc(canvas.width/2,canvas.height/2, 5 , 0, 2*Math.PI);
  c.fill();
  c.beginPath();
  c.moveTo(canvas.width/2,0);
  c.lineTo(canvas.width/2,canvas.height);
  c.stroke();
  c.beginPath();
  c.rect(3,3,canvas.width-5,canvas.height-5);
  c.stroke();
  c.beginPath();
  c.rect(canvas.width-30,canvas.heigth/3,canvas.width-5,canvas.heigth/3*2);
  c.stroke();
  c.beginPath();
  c.rect(3,canvas.height/2-80, 50 , 160);
  c.stroke();
  c.beginPath();
  c.rect(canvas.width-53,canvas.height/2-80, 50 , 160);
  c.stroke();
}
function moveBall()
{
  var placeX = ball.x;
  var placeY = ball.y;
  ball.y += ball.yacc;
  ball.x += ball.xacc;
  if (placeX != ball.x) {
    if (ball.xacc < 0) {
      ball.xacc += 0.2;
    }
    else if (ball.xacc > 0) {
      ball.xacc -= 0.2;
    }
  }
  if (placeY != ball.y) {
    if (ball.yacc < 0) {
      ball.yacc += 0.2;
    }
    else if (ball.yacc > 0) {
      ball.yacc -= 0.2;
    }
  }
  if (ball.xacc < 0.1 && ball.xacc > -0.1) {
    ball.xacc = 0;
  }
  if (ball.yacc < 0.1 && ball.yacc > -0.1) {
    ball.yacc = 0;
  }
}
function checkBall()
{
    var p1_ball_distance = getDistance(player1.x,player1.y,ball.x,ball.y) - player1.size - ball.size;
	   if(p1_ball_distance < 0){
		  collide(ball,player1);
	 }
	 var p2_ball_distance = getDistance(player2.x,player2.y,ball.x,ball.y) - player2.size - ball.size;
	 if(p2_ball_distance < 0){
		  collide(ball,player2);
	 }
  }

  function collide(cir1,cir2){
	 var dx = (cir1.x - cir2.x) / (cir1.size);
	 var dy = (cir1.y - cir2.y) / (cir1.size);
	 cir2.x -= dx * 2;
	 cir2.y -= dy * 2;
	 cir1.xacc += dx * 2;
	 cir1.yacc += dy * 2;
  }

  function getDistance(x1,y1,x2,y2){
	 return Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2));
  }
function play()
{
  cancelAnimationFrame(animationID);
  checkPlayers();
  checkBall();
  checkBallBoundaries();
  moveBall();
  drawField();
  renderPlayers();
  renderBall();

  animationID = requestAnimationFrame(play);
}
document.onkeyup = function(e){
	if(e.keyCode === 87){
		wDown = false;
	}
	if(e.keyCode === 65){
		aDown = false;
	}
	if(e.keyCode === 68){
		dDown = false;
	}
	if(e.keyCode === 83){
		sDown = false;
	}
	if(e.keyCode === 38){
		upDown = false;
	}
	if(e.keyCode === 37){
		leftDown = false;
	}
	if(e.keyCode === 40){
		downDown = false;
	}
	if(e.keyCode === 39){
		rightDown = false;
	}
}

document.onkeydown = function(e){
	if(e.keyCode === 87){
		wDown = true;
	}
	if(e.keyCode === 65){
		aDown = true;
	}
	if(e.keyCode === 68){
		dDown = true;
	}
	if(e.keyCode === 83){
		sDown = true;
	}
	if(e.keyCode === 38){
		upDown = true;
	}
	if(e.keyCode === 37){
		leftDown = true;
	}
	if(e.keyCode === 40){
		downDown = true;
	}
	if(e.keyCode === 39){
		rightDown = true;
	}
}

function allFalse()
{
   wDown = false;
   sDown = false;
   aDown = false;
   dDown = false;
   upDown = false;
   downDown = false;
   leftDown = false;
   rightDown = false;
   player1 = new Player(100,250,30,0,0);
   player2 = new Player(600,250,30,0,0);
   ball = new Player(350, 250,10,0,0);
}
