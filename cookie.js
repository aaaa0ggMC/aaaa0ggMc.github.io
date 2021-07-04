//processing cookie here!
function DocCookie(){
	this.lan = -1;
}
function storeCookie(){
	document.cookie = JSON.stringify(cookie);
	console.log(JSON.stringify(cookie));
	console.log(document.cookie);
}

function c_lanSet(i) {
	cookie.lan = i;
	console.log(cookie);
	storeCookie();
}

function loadLan(str){
	if(cookie.lan == -1)return;
	var objx;
	var lanobj = JSON.parse(str);
	for (var i = 0; i < c_lanc; i++) {
		objx = document.getElementById("LAN"+i);
		if(objx){
			objx.innerHTML = lanobj[i][cookie.lan];
		}else{
			console.log("Skip null element.");
		}
	}
}
function updateLanDy(ar){
	if(cookie.lan == -1)return;
	var lanobj = JSON.parse(document.getElementById("DLANS").innerHTML);
	if(!lanobj){
		console.log("LanObj not exsits!");
		return;
	}
	var objx;
	for (var i = 0; i < ar.length; i++) {
		objx = document.getElementById("DLAN" + ar[i]);
		if(objx){
			objx.innerHTML = lanobj[ar[i]][cookie.lan];
		}else{
			console.log("Skip null element.");
		}
	}
}
var cookie = new DocCookie();
try{
	cookie = JSON.parse(document.cookie);
}catch(e){
	cookie = new DocCookie();
	storeCookie();
}