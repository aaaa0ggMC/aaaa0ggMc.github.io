function getURLData() {
	//Data's format must be json!!
	var url = document.URL;
	if(url.indexOf("?")==-1)return "";
	url = url.slice(url.indexOf("?")+1);
	var data = {};
	data["%22"] = "\"";
	data["%3D"] = "=";
	data["%2B"] = "+";
	data["%20"] = " ";
	data["%26"] = "&";
	data["%3F"] = "?";
	data["%23"] = "#";
	//Replacing %22
	for(key in data){
		while(url.indexOf(key) != -1){
			url = url.replace(key,data[key]);
		}
	}
	return url;
}