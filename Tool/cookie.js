function Cookie(){
	this.characters = [];
	this.places = [];
	this.things = [];
	this.lan = -1;
	this.FUG = true;//第一次用Generator
}


function GetCookieStrI(i){
	var d_str = document.cookie,y;
	for(var x = 0;x < i;x++){
		y = d_str.indexOf(';');
		if(y == -1){
			return null;
		}
		d_str =d _str.slice(y+1);
	}
	y = d_str.indexOf(';');
	if(y == -1){
		return null;
	}
	d_str = d_str.slice(0,y);
	return d_str;
}


//json不可储存函数！！
function storeCookie(c){
	document.cookie = JSON.stringify(c);
}

function RestartCookie(){
	cookie = new Cookie();
	storeCookie(cookie);
}
