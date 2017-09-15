// JavaScript Document

/*画格子*/
var tr=document.getElementsByTagName("tr");
function addTd(tdNum){
	for(var i=1;i<tr.length;i++){
		tr.index=i;
		for(var j=0;j<tdNum;j++){
			var td=document.createElement("td");
			tr[i].appendChild(td);
		}
	}
}
/*得到css属性，兼容性写法 但得到的样式是只读的，写在行内样式里就是可读可写的
function getStyle (obj,attr) {
    return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}*/
/*旋转函数*/
function rightRotate(n,m){
	var deg=box.style.transform;
	if(deg.length==0){
		box.style.transform="rotate("+n+"deg)";
		}
	else{
		deg= deg.replace(/[^-0-9]/ig,"");
		var num=parseInt(deg)+n;
		if(num>=m){
			num=num%360;
		}
		box.style.transform="rotate("+num+"deg)";
	}	
}
/*前进函数*/
function goAhead(deg){
	if(deg.length==0){
		deg=0;
	}
	var top=parseInt(box.style.top);
	var left=parseInt(box.style.left);
	if(deg!=0){
		deg= parseInt(deg.replace(/[^-0-9]/ig,""));
	}
	if(deg==0){
		box.style.top=top-51+"px";
	}
	if(deg==180||deg==-180){
		box.style.top=top+51+"px";
	}
	if(deg==90||deg==-270){
		box.style.left=left+51+"px";
	}
	if(deg==-90||deg==270){
		box.style.left=left-51+"px";
	}
	
}
window.onload=function(){
	var right=document.getElementById("right");
    var left=document.getElementById("left");
    var back=document.getElementById("back");
    var go=document.getElementById("go");
    var box=document.getElementById("box");
	var does=document.getElementById("do");
	addTd(10);
	right.onclick=function(){
		rightRotate(90,360);
	}
	left.onclick=function(){
		rightRotate(-90,-360);
	}
	back.onclick=function(){
		rightRotate(180,360);
	}
	go.onclick=function(){
		var deg=box.style.transform;
		goAhead(deg);
	}
	does.onclick=function(){
		var val=document.getElementById("text").value;
		if(val=="TUN LEF"){
			rightRotate(-90,-360);
		}
		if(val=="TUN RIG"){
			rightRotate(90,360);
		}
		if(val=="TUN BAC"){
			rightRotate(180,360);
		}
		if(val=="GO"){
			var deg=box.style.transform;
		    goAhead(deg);
		}
	}
	}