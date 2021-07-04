function Cookie(){
	this.characters = [];
	this.places = [];
	this.things = [];
	this.lan = -1;
	this.FUG = true;//第一次用Generator
}

//json不可储存函数！！
function storeCookie(c){
	document.cookie = JSON.stringify(c);
}

function RestartCookie(){
	cookie = new Cookie();
	storeCookie(cookie);
}