var tlen = 0;
var tempTMID = 0;

function stringEditInDelay(target,str1,str2,delay,ori,us) {
	target.innerHTML = str1;
	us.onclick = function(){};
	setTimeout(function(t,s,o){
		t.innerHTML = "";
		setTimeout(function(t,s){
			t.innerHTML = str2;
			setTimeout(function(t,o){
				us.onclick = function(){
					stringEditInDelay(document.getElementById('show0'),'123','456',1010,'//等待演示',this);
				};
				t.innerHTML = o;
			},delay,t,o);
		},delay,t,s,o);
	},delay,target,str2,ori);
}

function SlowlySTop(XPerTM){
	var nowX = window.pageYOffset;
	var dx = setInterval(function(){
		nowX -= XPerTM;
		if(nowX <= 0){
			clearInterval(dx);
			window.scrollTo(0,0);
		}else{
			window.scrollTo(0,nowX);
		}
	},10);
}

function printDelay(target,str,delay,us){
	target.innerHTML = "";
	us.onclick = function(){};
	var uid = setInterval(function(t,s){
		if(tlen >= s.length){
			tlen = 0;
			us.onclick = function(){
				printDelay(document.getElementById('show1'),'HelloWorld!',100,this);
			};
			clearInterval(uid);
		}else{
			t.innerHTML += s[tlen];
			tlen++;
		}	
	},delay,target,str);
}