//Data
console.log("ee");
var cookie = new Cookie();
try{
	cookie = JSON.parse(document.cookie);
}catch(e){
	cookie = new Cookie();
	document.cookie = JSON.stringify(cookie);
}
console.log(cookie);