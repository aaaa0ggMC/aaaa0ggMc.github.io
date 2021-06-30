clog("PS 这是一个模拟作品");
var gp = document.getElementById("GamePlane");
var HUMAN = 0,DIEGOD = 1;
var cid;
var ct,screenc;
function Menu() {
	gp.innerHTML = document.getElementById("Game@Menu").innerHTML;
}
function StartGame(str) {
	gp.innerHTML = document.getElementById(str).innerHTML;
}
function flushBlock(tar, htmlin) {
	var ele = findEInID("GamePlane", tar);
	ele.innerHTML = htmlin;
}
//player 对象
function Player(mhealth,money,names,type){
	this.mhealth = this.health = mhealth;
	this.money = money;
	this.name = names;
	this.type = type;
}

function updateCanvas(){
	ct.fillStyle = "color:Yellow;";
	ct.fillRect(0,0,100,100);
}

function error(msg){
	idp("emsg").innerHTML = msg;
	document.body.innerHTML = idp("ERROR").innerHTML;
}

function canvasF(){
	screenc = idp("GC");
	ct = screenc.getContext("canvas2d");
	if(ct){
		error("error to get context(maybe broswer do<br/><br/><br/> not support)(run it in another one)");
		return;
	}
	cid = setInterval(function(){
		updateCanvas();
	},10);
}
StartGame("Intro");
INTROF();
