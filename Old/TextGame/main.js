var preFrame = 9;
var menu,title,a,b,c,d;
var gm = idp("gm");
var DEBUG = 0;
var frame = (DEBUG==1)?preFrame:0;
var oldf =-1;
var free = idp("free");
var diag = idp("diag");
var cnme = idp("cnme");
var said = idp("said");
var END = 9999;
var endTitle = "";
var endDes = "";

var dX = 1000;
var eX = 10;

function language(str,lanId){

}

function StartGame() {
	menu = idp("Menu");
	hide(menu);
	document.body.style = "";
	title = findOEInID(gm,"tit");
	var sels = findOEInID(gm,"sel");
	a = findOEInID(sels,"s0");
	b = findOEInID(sels,"s1");
	c = findOEInID(sels,"s2");
	d = findOEInID(sels,"s3");
	show(gm);
	idp('botn').remove();
	setInterval(function() {
		if(oldf != frame){
			setTimeout(FrameInit,10,frame);
			oldf = frame;
		}
	},100);
}

function basicText(delay,fn,o,fn2,o2,id) {
	setTimeout(function(){
		fn(o,fn2,o2,id);
	},delay);
}

function clone(obj) {
     var o;
     if (typeof obj == "object") {
         if (obj === null) {             o = null;
         } else {
              if (obj instanceof Array) {
                o = [];
                 for (var i = 0, len = obj.length; i < len; i++) {
                     o.push(clone(obj[i]));
                 }
             } else {
                 o = {};
                 for (var j in obj) {
                     o[j] = clone(obj[j]);
                 }
             }
         }
     } else {
         o = obj;
     }
     return o;
}

var intervalIdList = {};

function transp(a,fn,o,id) {
	var i0 = setInterval(function(e) {
		idp(a).style.opacity = (parseFloat(idp(a).style.opacity) - 0.01);
		if(parseFloat(idp(a).style.opacity) <= 0){
			clearInterval(intervalIdList[e.v]);
			fn(e.fn,e.o);
		}
	},eX,{v:id,a:a,o:o,fn:fn});
	intervalIdList[id] = 0;
	intervalIdList[id] = i0;
}

function delayText(o,id,fr){
	basicText(dX,transp,o,function (e) {
		if(fr != null){
			frame = fr;
		}
	},fr,id);
}

function delayTextN(o,id){
	basicText(dX,transp,o,function (e) {idp(o).remove();},null,id);
}

function reback(o) {
	o.style.opacity = "1.0";
	o.style.transform = "";
	btn(a,"",null,null);
	btn(b,"",null,null);
	btn(c,"",null,null);
	btn(d,"",null,null);
}

function bs(fz,op,tp,lf,rt,other) {
	return "font-size:" + fz + "ch;opacity:"
	 + op + ";top:" + tp +
	  "%;left:" + lf + "%;transform:rotate(" + rt + "deg);" + ((other == null)?"":other);
}

var $r = Math.random;

var TextSBSaid = [{
	ts:0,
	t:'喝....喝...哈[急促的呼吸声]',
	s:bs(4,"1.0",10,10,-40)
},
{
	ts:50,
	t:'喝....喝...[急促的呼吸声]',
	s:bs(6,"1.0",$r()*30,$r()*30,-20)
},{
	ts:50,
	t:'陌生人',
	s:bs($r()*2+3,"1.0",$r()*60,$r()*60,10-$r()*50)
},{
	ts:40,
	t:'如果你听到了这段录音',
	s:bs($r()*2+3,"1.0",$r()*60,$r()*60,10-$r()*50)
},{
	ts:80,
	t:'那...那我可能已经死了',
	s:bs($r()*2+3,"1.0",$r()*60,$r()*60,10-$r()*50)
},{
	ts:90,
	t:'现在我的情况非常严峻',
	s:bs($r()*2+3,"1.0",$r()*60,$r()*60,10-$r()*50)
},{
	ts:30,
	t:'我......',
	s:bs($r()*2+3,"1.0",$r()*60,$r()*60,10-$r()*50)
},{
	ts:50,
	t:'快来陪我吧！QAQ',
	s:bs($r()*2+3,"1.0",$r()*60,$r()*60,10-$r()*50,"color:#ff0000;")
},{
	ts:50,
	t:'No，她来了,她已经来了.....',
	s:bs($r()*3+3,"1.0",$r()*60,$r()*60,10-$r()*50)
},{
	ts:50,
	t:'成为我的新朋友吧！',
	s:bs($r()*2+3,"1.0",$r()*60,$r()*60,10-$r()*50,"color:#ff0000")
},{
	ts:80,
	t:'啊！！',
	s:bs(6,"1.0",30,40,0),
	sc:"document.body.style.backgroundColor = '#ff0000';document.body.style.color = '#ffffff';"
},{

	ts:100,
	t:'',
	s:bs(6,"1.0",30,40,0),
	sc:"document.body.style.backgroundColor = '#000000';document.body.style.color = '#ffffff';"
}];
var textId = (DEBUG==1)?8:0;

function fm(a) {
	return "frame" + a;
}

var tick = 0;
function tH2(s) {
	return "<h2 class='tt'>" + s + "</h2>";
}
function tH3(s) {
	return "<h3 class='tt'>" + s + "</h3>";
}
function btn(o,s,f,sc) {
	o.innerHTML = s;
	o.onclick = function () {
		if(f != null){
			frame = f;
		}
		if(sc != null){
			eval(sc);
		}
	};
}

var pl = {name:"???"};

function FrameInit(){
	switch(frame){
		case 0:
			reback(title);
			style(document.body,"color:#ffffff;background-color:#000000;");
			text(title,"<h3 class='tt'>与往常一样，你坐着电梯，准备去到学校的寝室。</h3>");
			delayText("tit",fm(frame),frame+1);
			break;
		case 1:
			dX = 100;
			reback(title);
			title.style.transform = 'rotate(-15deg)';
			text(title,"<h2 class='tt'>突然，你好像踩到了什么！！</h2>");
			delayText("tit",fm(frame),frame+1);
			dX = 1000;
			break;
		case 2:
			reback(title);
			text(title,"<h2 class='tt'>一阵诡异的声音开始传遍整个电梯......</h2>");
			delayText("tit",fm(frame),frame+1);
			break;
		case 3:
			text(title,"");
			reback(title);
			dX = 1;
			ex = 50;
			var i03 = setInterval(function(){
				var o = TextSBSaid[textId];
				if(o != null){	
					++tick;
					if(o.ts != null){
						if(tick < o.ts)return;
					}else if(tick < 100)return;
					tick = 0;
					++textId;
					if(o.sc != null){
						eval(o.sc);
					}
					var idg = "SBSaid" + textId;
					addAbT(free,es(o.t),es(o.s),idg);
					delayTextN(idg,fm(frame + idg));
				}else{
					clearInterval(i03);
					++frame;
				}
			},20);
			dX = 1000;
			eX = 20;
			break;
		case 4:
			reback(title);
			text(title,tH2("你醒来了，发现自己做了个梦。"));
			btn(a,"不管不管，继续睡",0,"textId = 0;");
			btn(b,"还是醒来吧",5);
			break;
		case 5:
			reback(title);
			text(title,tH2(""));
			show(diag);
			console.log(cnme);
			said.innerHTML = "我是下北泽大学的一名医学系学生，今年大二，叫做:[点击屏幕任意处]";
			cnme.innerHTML = "???";
			document.body.onclick = function() {
				text(idp("normal"),
					"<p style='text-align:center;' id='b&commit'><input id='nameInput' value='Charlie' type='text' "+
					"style='width:300px;height:auto;text-align:center;' />"+
					"<button onclick='gm_onSetName(\"nameInput\",pl);++frame;' >提交</button></p>");
				said.innerHTML = "我是下北泽大学的一名医学系学生，今年大二，叫做:[输入你的名字]";
				console.log(title);
				document.body.onclick = null;
			};
			break;
		case 6:
			reback(title);			
			cnme.innerHTML = pl.name;
			console.log(cnme.innerHTML);
			hide(idp("b&commit"));
			dg_plData[0][0].n = pl.name;
			said.innerHTML = "我是下北泽大学的一名医学系学生，今年大二，叫做" + pl.name;
			funcDiag(frame+1,0);
			break;
		case 7:
			reback(title);
			btn(a,"去社团看看",8);
			break;
		case 8:
			reback(title);
			text(title,tH2("你走去了社团..."));
			delayText("tit",fm(frame),frame+1);
			break;
		case 9:
			reback(title);
			text(title,tH2("看见了刚入社团的一群学生，一个声音打断了你"));
			delayText("tit",fm(frame),frame+1);
			break;
		case 10:
			reback(title);
			text(title,"");
			show(diag);
			funcDiag(frame+1,1);
			document.body.onclick();
			break;
		case 11:
			reback(title);
			hide(diag);
			btn(a,"是的",frame+1);
			btn(b,"不是",frame+2);
			break;
		case 12:
			reback(title);
			show(diag);
			funcDiag(frame+2,2);
			document.body.onclick();
			break;
		case 13:
			reback(title);
			show(diag);
			funcDiag(frame+1,3);
			document.body.onclick();
			break;
		case 14:
			reback(title);
			show(diag);
			funcDiag(frame+1,4);
			document.body.onclick();
			break;
		case 15:
			reback(title);
			hide(diag);
			btn(a,"去吧",18);
			btn(b,"不去了",16);
			break;
		case 16:
			reback(title);
			show(diag);
			funcDiag(17,5);
			document.body.onclick();
			break;
		case 17:
			reback(title);
			hide(diag);
			text(title,tH2("你没有去，最后你发现他们一行人之后再也没回来过"));
			endTitle = "结局一：无人生还";
			endDes = "他们再也没回来过，而你每天也重复着之前的噩梦....";
			delayText("tit",fm(frame),END);
			break;
		case END:
			reback(title);
			hide(diag);
			text(title,tH2("<p>" + endTitle + "</p><p>" + endDes + "</p>"));
			btn(a,"重来一遍",null,"window.open(location, '_self');");
			btn(b,"关于做这个游戏",null,"hide(gm);show(idp('about'));");
			btn(c,"打包子一下",null,"alert('干得好！！');d.innerHTML='退出';");
			btn(d,"直接退出",null,"window.close();");
			break;
		default:
			reback(title);
			text(title,tH3("游戏只做到这里啦！(>_<)!!!"));
			btn(a,"重来一遍",null,"window.open(location, '_self');");
			btn(b,"关于做这个游戏",null,"hide(gm);show(idp('about'));");
			btn(c,"打包子一下",null,"alert('干得好！！');d.innerHTML='退出';");
			btn(d,"直接退出",null,"window.close();");
			break;
	}
}

function funcDiag(frameTo,id) {
	document.body.onclick = function() {
		if(!UpdateDialogue(dg_plData[id])){
			document.body.onclick = null;
			hide(diag);
			dialogId = 0;
			console.log(dialogId);
			frame = frameTo;
			return;
		}
		++dialogId;
	}
}

var dialogId = 0;
var dg_plData = [
[{
	t:"我在大一时参加了学校的探险俱乐部，专门探险那些诡异的地方",
	n:"PL_NAME"
},
{
	t:"几天是我参加社团的第114天，我要努力啦！！！",
}],
[
{
	t:"你好",
	n:"???"
},{
	t:"？？？",
	n:"PL_NAME"
},{
	t:"我叫Cindy，是新来的成员",
	n:"Cindy"
},{
	t:"你是这里的学长吗？？"
}
],[
{
	t:"是的，我来这里114天了。",
	n:"PL_NAME"
},{
	t:"哇，是吗，难怪你的衣服上别着一个徽章。",
	n:"Cindy"
}
],[
{
	t:"不是的，我只来来看看",
	n:"PL_NAME"
},{
	t:"哇哦，真的吗，为什么你的衣服上别着去年入社人可得的徽章？？",
	n:"Cindy"
},{
	t:"呃，哈哈....[尴尬地笑]",
	n:"PL_NAME"
}
],[
{
	t:"对了，最近似乎有件大事件，需要我们去探索，你要不要参加？？",
	n:"Cindy"
}
],[
{
	t:"算了，最近有点忙，不去了吧！",
	n:"PL_NAME"
},{
	t:"好吧",
	n:"Cindy"
}
]
];
var lastName = "";

function UpdateDialogue(dta) {
	var o = dta[dialogId];
	if(o != null){
		console.log(o);
		if(o.n == null){
			if(lastName != "")cnme.innerHTML = lastName;
			else cnme.innerHTML = "???";
		}else {
			var init = o.n;
			if(o.n == "PL_NAME")init = pl.name;
			cnme.innerHTML = init;
			lastName = init;
		}
		if(o.t == null)said.innerHTML = "";
		else said.innerHTML = o.t;
		if(o.sc != null)eavl(o.sc);
	}else return false;
	return true;
}

function gm_onSetName(id,tg) {
	tg.name = idp(id).value;
}