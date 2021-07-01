
var sv = new Vector(0,0);
var g;
var wcal;

var frame = 0;

var iter;

//pixels
var px0;//50%Big
var px1;

var head;

var coliders;

var needUpdate = true;

var au;

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
	needUpdate = true;
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
	coliders = new Array();
	//开始超度按钮
	coliders[0] = new Colider(0,0,0,0,function(){
		frame++;
		au.pause();
		au.src = "";
	});
	coliders[1] = new Colider(0,0,0,0,function(){
		window.close();
	});
	window.onclick = function(e){
		console.log(e.x,e.y);
		for(var c = 0;c < coliders.length;c++){
			console.log(coliders[c]);
			if(coliders[c].contain(new Vector(e.x,e.y))){
				coliders[c].obj();
			}
		}
	};
	au = document.getElementById("audio0");
	au.src = "./rc/head.mp3";
	au.play();
	iter = setInterval(
		function(){
			g.clearRect(0,0,sv.x,sv.y);
			switch(frame){
			case 0:
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
				if(needUpdate){
					coliders[0].x = x;
					coliders[0].y = y;
					coliders[0].w = $(_qwc).width();
					coliders[0].h = $(_qwc).height();
				}
				g.fillText("开始超度",x,y);
				//Target1
				var tmpy = $(_qwc).height();
				$(_qwc).text("不要超度");
				x = parseInt((sv.x - $(_qwc).width())/2);
				y = parseInt(($(_qwc).height()) + sv.y * 0.55 + tmpy);
				if(needUpdate){
					coliders[1].x = x;
					coliders[1].y = y;
					coliders[1].w = $(_qwc).width();
					coliders[1].h = $(_qwc).height();
				}
				g.fillText("不要超度",x,y);
				break;
			case 1:
				break;
			}
			if(needUpdate){
				needUpdate = false;
			}
		}
		,30
	);
}