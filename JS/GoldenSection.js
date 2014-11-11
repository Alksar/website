//Метод ЗС для функции двух переменных, a и b = {x,y}. func содержит строку с функцией
function GoldenSection(func, a, b, eps){
	//alert('новый поиск');
	var x1={x:0,y:0}, x2={x:0,y:0}, fx1=0, fx2=0, fi=(1+Math.sqrt(5))/2,
		leftBorder={x:0,y:0}, rightBorder={x:0,y:0};
	leftBorder.x=a.x;
	leftBorder.y=a.y;
	rightBorder.x=b.x;
	rightBorder.y=b.y;
	//var leftBorderSave=leftBorder, rightBorderSave=rightBorder;

		while(Math.sqrt(Math.pow(rightBorder.x-leftBorder.x,2)+Math.pow(rightBorder.y-leftBorder.y,2))>eps){
			//alert('расстояние между точками '+Math.sqrt(Math.pow(rightBorder.x-leftBorder.x,2)+Math.pow(rightBorder.y-leftBorder.y,2)));
			x1.x=rightBorder.x-(rightBorder.x-leftBorder.x)/fi;
			x1.y=rightBorder.y-(rightBorder.y-leftBorder.y)/fi;
			fx1=GetFunctionValue(func, x1.x, x1.y);
			x2.x=leftBorder.x+(rightBorder.x-leftBorder.x)/fi;
			x2.y=leftBorder.y+(rightBorder.y-leftBorder.y)/fi;
			fx2=GetFunctionValue(func, x2.x, x2.y);
			if (fx1>fx2){
				leftBorder.x=x1.x;
				leftBorder.y=x1.y;
			}
			else if (fx1<fx2) {
				rightBorder.x=x2.x;
				rightBorder.y=x2.y;
			}
			else {
				leftBorder.x=x1.x;
				leftBorder.y=x1.y;
				rightBorder.x=x2.x;
				rightBorder.y=x2.y;
			}
		}
		//alert('расстояние между точками '+Math.sqrt(Math.pow(rightBorder.x-leftBorder.x,2)+Math.pow(rightBorder.y-leftBorder.y,2)));
	//leftBorder=leftBorderSave;
	//rightBorder=rightBorderSave;
	return ({x: (leftBorder.x+rightBorder.x)/2, y: (leftBorder.y+rightBorder.y)/2});
}

/*GoldenSection(f(),a,b,eps){
	var x1=0, x2=0, fx1=0, fx2=0, fi=(1+Math.sqrt(5))/2,
		leftBorder=a, rightBorder=b;
	
	while(Math.abs(rightBorder-leftBorder)>=eps){
		x1=rightBorder-(rightBorder-leftBorder)/fi;
		fx1=f(x1);
		x2=leftBorder+(rightBorder-leftBorder)/fi;
		fx2=f(x2);
		if (fx1>fx2){
			leftBorder=x1;
		}
		else rightBorder=x2;
	}
	return (leftBorder+rightBorder)/2;
}*/