function findElementInID(findin,id) {
	var parent = document.getElementById(findin);
	var childrenElements  = Array.from(parent.children);
	for (var x = 0;x < childrenElements.length;x++)
	{
		if (childrenElements[x].id == id)
		{
			return childrenElements[x];
		}
	}
	return null;
}

function findElementInTag(tag,id,at){
	var parent = document.getElementsByTagName(tag)[at];
	var childrenElements  = Array.from(parent.children);
	for (var x = 0;x < childrenElements.length;x++)
	{
		if (childrenElements[x].id == id)
		{
			return childrenElements[x];
		}
	}
	return null;
}

function Vector(x,y){
	this.x = x;
	this.y = y;
}

function ScaleVec(x,y,w,h,w1,h1){
	return new Vector(x/w*w1,y/h*h1);
}

function V86(pv,sv){
	return ScaleVec(pv.x,pv.y,800,600,sv.x,sv.y);
}

function Center(w,h,mw,mh){
	var x = (mw - w)/2;
	var y = (mh - h)/2;
	return new Vector(x,y);
}

function XYP(px,py,w,h){
	return new Vector(px*w,py*h);
}

function Colider(x,y,w,h,obj){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.obj = obj;
	this.contain = function(p){
		if(p.x >= this.x && p.y >= this.y-this.h)
			if(p.x <= this.x+this.w && p.y <= this.y)
				return true;
		return false;
	};

	this.inter = function(col){
		if(contain(new Vector(col.x,col.y)) || contain(new Vector(col.x + this.w,col.y))
			|| contain(new Vector(col.x,col.y + this.h)) || contain(new Vector(col.x + this.w,col.y + this.h))){
			return true;
		}
		return false;
	};
}