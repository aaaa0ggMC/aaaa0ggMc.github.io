//processing cookie here!
function c_lanSet(i) {
	m_cookie.lan = i;
	storeCookie(m_cookie);
}

function loadLan(str){
	//console.log(cookie);
	if(m_cookie.lan == -1)return;
	var objx;
	var lanobj = JSON.parse(str);
	for (var i = 0; i < c_lanc; i++) {
		objx = document.getElementById("LAN"+i);
		if(objx){
			objx.innerHTML = lanobj[i][m_cookie.lan];
		}else{
			console.log("Skip null element.");
		}
	}
}
function updateLanDy(ar){
	if(m_cookie.lan == -1)return;
	var lanobj = JSON.parse(document.getElementById("DLANS").innerHTML);
	if(!lanobj){
		console.log("LanObj not exsits!");
		return;
	}
	var objx;
	for (var i = 0; i < ar.length; i++) {
		objx = document.getElementById("DLAN" + ar[i]);
		if(objx){
			objx.innerHTML = lanobj[ar[i]][m_cookie.lan];
		}else{
			console.log("Skip null element.");
		}
	}
}
var m_cookie = new Cookie();
try{
	m_cookie = JSON.parse(document.cookie);
}catch(e){
	m_cookie = new Cookie();
	storeCookie(m_cookie);
}
if(m_cookie == null)
{
	m_cookie = new Cookie();
}