//Data
var cookie = new Cookie();
try{
	var str = GetCookieStrI(1);
	if(str == null){
		throw new DomException();
	}
	cookie = JSON.parse(str);
}catch(e){
	cookie = new Cookie();
	var str = GetCookieStrI(0);
	if(str == null){
		alert("输入Cookie失败！正在返回主界面！");
		window.open("../index.html","_blank");
		window.close();
	}
}