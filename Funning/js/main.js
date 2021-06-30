
var sv = new Vector(0,0);
var g;
var wcal;

var iter;

//pixels
var px0;//50%Big
var px1;

var head;

var Coliders;

function InitCanvasSZ() {
	if(window.innerWidth*0.75 > window.innerHeight){
		_canvas.height = sv.y = window.innerHeight;
		_canvas.width = sv.x = parseInt(sv.y / 3 * 4);
	}else{
		_canvas.width = sv.x =  window.innerWidth;
		_canvas.height = sv.y = (sv.x * 0.75);
	}
	px0 = parseInt(sv.x * 0.1);
	px1 = parseInt(sv.x * 0.04);
}

function StartPainting(){
	g = _canvas.getContext('2d');
	wcal = document.getElementById('word-cal');
	if(!g){
		_canvas.outerHTML = "<p>对不起，你的浏览器不支持Context2D</p>";
		return;	
	}
	head = new Image();
	head.src = _ihead;
	iter = setInterval(
		function(){
			g.clearRect(0,0,sv.x,sv.y);
			//Draw Background Image
			g.drawImage(head,0,0,sv.x,sv.y);
			//Title
			g.font = px0 + "px 华文行楷";
			wcal.style = "font-size:" + px0 + "px;font-family:华文行楷;" + _wcBsStyle;
			$(_qwc).text("诡异的地方");
			var x = parseInt((sv.x - $(_qwc).width())/2);
			var y = parseInt(($(_qwc).height()));
			g.fillStyle = "#ff0000";
			g.fillText("诡异的地方",x,y);
			//DrawChosenRect
			g.fillStyle = "#BDBDBDaa";
			x = parseInt(sv.x * 0.2);
			y = parseInt(sv.y * 0.5);
			g.linejoin = "round";
			g.fillRect(x,y,parseInt(sv.x * 0.6),parseInt(sv.y * 0.48));
			//DrawTarget0
			g.fillStyle = "#ff0000";
			g.font = px1 + "px 华文行楷";
			wcal.style = "font-size:" + px1 + "px;font-family:华文行楷;" + _wcBsStyle;
			$(_qwc).text("开始超度");
			x = parseInt((sv.x - $(_qwc).width())/2);
			y = parseInt(($(_qwc).height()) + sv.y * 0.52);
			g.fillText("开始超度",x,y);
		}
		,30
	);
}