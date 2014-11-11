//Sanya------------------------
/*вызывается для объекта programData. При этом direction будет содержать наилучшие направление из 40 возможных.
  Возвращает true если в этом направлении функция уменьшается, false в обратном случае                   	*/
function GetDirection_Sanya(){
	//alert('Получаем направление');
	var direction={x:0, y:0}, directionCount=40;
	var arrayDirection=new Array(directionCount);
	var h=0.01; //Пробный шаг
	var minValue=Number.POSITIVE_INFINITY, indexMin=0;
	for(var i=0; i<directionCount; i++){
		arrayDirection[i]={direct:{x:0,y:0}, tryPoint:{x:0, y:0}, funcValueInTryPoint:0, deltaFunc:0};
		arrayDirection[i].direct.x=-1+2*Math.random();
		arrayDirection[i].direct.y=-1+2*Math.random();	
		arrayDirection[i].direct.x=arrayDirection[i].direct.x/Math.sqrt(Math.pow(arrayDirection[i].direct.x,2)+Math.pow(arrayDirection[i].direct.y,2));
		arrayDirection[i].direct.y=arrayDirection[i].direct.y/Math.sqrt(Math.pow(arrayDirection[i].direct.x,2)+Math.pow(arrayDirection[i].direct.y,2));
		arrayDirection[i].tryPoint.x=this.minPoint.x+h*arrayDirection[i].direct.x;
		arrayDirection[i].tryPoint.y=this.minPoint.y+h*arrayDirection[i].direct.y;
		arrayDirection[i].funcValueInTryPoint=GetFunctionValue(this.func_js, arrayDirection[i].tryPoint.x, arrayDirection[i].tryPoint.y);
		arrayDirection[i].deltaFunc=arrayDirection[i].funcValueInTryPoint-GetFunctionValue(this.func_js, this.minPoint.x, this.minPoint.y);
		
		if (arrayDirection[i].deltaFunc<minValue) {
			indexMin=i;
			minValue=arrayDirection[i].deltaFunc;			
		}
		//console.log(i+': '+arrayDirection[i].direct.x+';'+arrayDirection[i].direct.y+'*'+arrayDirection[i].tryPoint.x+';'+arrayDirection[i].tryPoint.y+'*'+arrayDirection[i].funcValueInTryPoint+'*'+arrayDirection[i].deltaFunc);
	}
	//console.log(arrayDirection[indexMin].direct.x+';'+arrayDirection[indexMin].direct.y+'*'+indexMin);
	this.direction=arrayDirection[indexMin].direct;
	
	
	if (minValue<0) {return true;}
	else {return false;}	
}
//вызывается для объекта programData. Свойство programData.next_minPoint получает значение следующей точки минимума в направление programData.direction
function MakeStep_Sanya(){
	var leftLocal={x:0, y:0}, rightLocal={x:0,y:0};
	var delta=0;
	var workStep=this.step;//Если поставить например 0.01 то траектории получаются сглаженными!
	leftLocal.x=this.minPoint.x;
	leftLocal.y=this.minPoint.y;
	rightLocal.x=leftLocal.x;
	rightLocal.y=leftLocal.y;
	
	delta=GetFunctionValue(this.func_js, this.minPoint.x+workStep*this.direction.x, this.minPoint.y+workStep*this.direction.y)-GetFunctionValue(this.func_js, this.minPoint.x, this.minPoint.y);
	
	var iteration=0, limit=40;//узкое место, может быть можернезировать..
	while ((delta<0) && (iteration<limit)){
		//alert('еще шаг, потому что функция отрицательна, сдвигаемся из точки '+rightLocal.x+';'+rightLocal.y+'в точку '+(rightLocal.x+workStep*this.direction.x)+';'+(rightLocal.y+workStep*this.direction.y));
		rightLocal.x=rightLocal.x+workStep*this.direction.x;
		rightLocal.y=rightLocal.y+workStep*this.direction.y;
		delta=GetFunctionValue(this.func_js, rightLocal.x+workStep*this.direction.x, rightLocal.y+workStep*this.direction.y)-GetFunctionValue(this.func_js, rightLocal.x, rightLocal.y);
		iteration++;
	}
	//console.log('***********************MakeStep****************************');
	//console.log('из точки'+leftLocal.x+';'+leftLocal.y+'  '+'от: '+rightLocal.x+';'+rightLocal.y+' до: '+(rightLocal.x+workStep*this.direction.x)+';'+(rightLocal.y+workStep*this.direction.y));
	leftLocal.x=rightLocal.x;
	leftLocal.y=rightLocal.y;
	rightLocal.x+=workStep*this.direction.x;
	rightLocal.y+=workStep*this.direction.y;
	this.next_minPoint=GoldenSection(this.func_js, {x:leftLocal.x, y:leftLocal.y}, {x:rightLocal.x, y:rightLocal.y}, this.eps);
	
	//console.log('точка минимума: '+this.next_minPoint.x+';'+this.next_minPoint.y);
	//console.log('***********************************************');
	return;
}
//-----------------------------
//Deneir------------------------
function GetDirection_Deneir(){


}
function MakeStep_Deneir(){


}
//-----------------------------
//Light------------------------
function GetDirection_Light(){

}
function MakeStep_Light(){

}
//-----------------------------
//Makar------------------------
function GetDirection_Makar(){

}
function MakeStep_Makar(){

}
//-----------------------------