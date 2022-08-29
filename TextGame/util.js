var lzyc = document.getElementById("console");
var idLine = 0;

function clog(str) {
	lzyc.innerHTML += "<p id='cl" 
		+ idLine + "'>" + str + "</p>";
	idLine++;
}


function es(o) {
	if(o == null)return "";
	else return o + "";
}

function cclear() {
	lzyc.innerHTML = "";
	idLine = 0;
}

function addAbText(t,text,top,left,trans,id) {
	t.innerHTML += "<p id='" + id + "' style='position:absolute;top:" + top + ";left:" + left + ";transform:" + trans +";>" + text + "</p>";
}

function addAbT(t,text,sty,id) {
	t.innerHTML += "<p id='" + id + "' style='position:absolute;" + sty +"'>" + text + "</p>";
	console.log(t.innerHTML);
}

function cremove(line) {
	lzyc.removeChild(
		document.getElementById("cl" + line));
}

function anim(o,n,s,t) {
	o.style.animation = n + " " + s + "s " + t;
}

function unanim(o) {
	o.style.animation = "";
}

function ostyle(s,o,v) {
	s.style[o] = v;
}

function setTarSH(tar, sh) {
	//show make sure that tar's style has no member
	if (sh)
	{
		tar.style.display = "";
	}
	else
	{
		tar.style.display = "none";
	}
}

function show(tar) {
	setTarSH(tar, true);
}

function hide(tar) {
	setTarSH(tar, false);
}

function idp(s) {
	return document.getElementById(s);
}

//size 已废弃为了兼容，未删去
function Compare0(str1, strs, size) {
	for (var x = 0;x < strs.length;x++)
	{
		if (strs[x] == str1)return true;
	}
	return false;
}

//2020.6.7 5pm 11 累死了，掉了好多头发，终于搞完了这里
//Array 中 length 是属性 不是方法
//Array.from 可以将HTMLCollection转化为Array
function findEInID(uid, cuid) {
	var eles  = document.getElementById(uid).children;
	eles = Array.from(eles);
	for (var x = 0;x < eles.length;x++)
	{
		if (eles[x].id == cuid)
		{
			return eles[x];
		}
	}
	return null;
}

function text(a,s) {
	a.innerHTML = s;
}

function style(a,s) {
	a.style = s;
}

function slowDecay(o,fn) {
	var a = parseFloat(o.style.opacity); 
	a -= 0.01;
	if(a <= 0){
		fn(o);
		return;
	}
	o.style.opacity = a + "";
}

function findOEInID(u, cuid) {
	var eles  = u.children;
	eles = Array.from(eles);
	for (var x = 0;x < eles.length;x++)
	{
		if (eles[x].id == cuid)
		{
			return eles[x];
		}
	}
	return null;
}