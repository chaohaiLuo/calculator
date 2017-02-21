var num=0,
	result=0,
	numShow="0", //屏幕显示
	operate=0, //输入状态，0为可输入状态
	cal=0,  //计算状态
	quit=0,//防止重复按键计算状态
	state=0;
function command(num){
	var str=String(document.getElementById("screen").value);
	str=(str!="0")?((operate==0)?str:""):"";
	str=str+String(num);
	document.getElementById("screen").value=str;
	operate=0;
	quit=0;
}
function dbzero(){
	var str=String(document.getElementById("screen").value);
	str=(str!="0")?((operate==0)?str+"00":"0"):"0";
	document.getElementById("screen").value=str;
	operate=0;
}
function dot(){
	var str=String(document.getElementById("screen").value);
	str=(str!="0")?((operate==0)?str:"0"):"0";
	for(var i=0;i<=str.length;i++){
		if(str.substr(i,1)=="."){
			return false;
		}
	}
	str=str+".";
	document.getElementById("screen").value=str;
	operate=0;
}
function clearScreen(){
	num=0;
	result=0;
	numShow=0;
	document.getElementById("screen").value="0";
}
function del(){
	var str=String(document.getElementById("screen").value);
	str=(str!="0")?str:"";
	str=str.substr(0,str.length-1);
	str=(str!="")?str:"0";
	document.getElementById("screen").value=str;
}
function calculate(){
	numShow=Number(document.getElementById("screen").value);
	if(num!=0&&quit!=1){
		switch(cal){
			case 0:
					result=num+numShow;
					break;
			case 1:
					result=num-numShow;
					break;
			case 2:
					result=num*numShow;
					break;
			case 3:
					if(numShow!=0){
						result=num/numShow;
					}
					else{
						alert("被除数不能为零");
					}
			case 4:
					result=num%numShow;
					break;
		}
	}
	else{
		result=numShow;
	}
	numShow=String(result);
	document.getElementById("screen").value=numShow;
	num=result;
}
function plus(){
	calculate();
	cal=0;
	operate=1;
}
function minus(){
	calculate();
	cal=1;
	operate=1;
}
function times(){
	calculate();
	cal=2;
	operate=1;
}
function divide(){
	calculate();
	cal=3;
	operate=1;
}
function present(){
	calculate();
	cal=4;
	operate=1;
}
function equal(){
	calculate();
	operate=1;
	num=0;
	result=0;
	numShow="0";
}
function sw(){
	if(state==0){
		document.getElementById("screen").style.backgroundColor="#97b465";
		document.getElementById("screen").style.color="#000";
		state=1;
		clearScreen();
	}
	else if(state==1){
		document.getElementById("screen").style.backgroundColor="#3a3c43";
		document.getElementById("screen").style.color="#3a3c43";
		state=0;
	}

	
}
