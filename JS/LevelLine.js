//Для работы этой функции необходимо, чтобы к этойже странице был подключен файл с методом золотого сечения
function CreateLevelLines(func, intervalX1, intervalX2, stepX1, stepX2, intervalC, stepC, eps){
	var supFunc=GetSupFunc(func);//Реализовать
	
	for(var i=intervalC.start; i<=intervalC.finish; i=i+stepC){
		for (var j=intrvalX1.start; j<=intervalX1.finish; j=j+stepX1){
			var direct=1;
			var leftLocal=0, rightLocal=0;
			var delta=0;
			var stepLocal=stepX2;
			leftLocal=k;				
			rightLocal=k;	
	
			delta=GetFunctionValue(supFunc,intervalX2.start+stepLocal*direct)-GetFunctionValue(supFunc, intervalX2.start);//Реализовать
			if (delta>0) {
				direct*=-1;
				delta=GetFunctionValue(supFunc,intervalX2.start+stepLocal*direct)-GetFunctionValue(supFunc, intervalX2.start);
			}
			for(var k=intervalX2.start; k<=intervalX2.finish; k=k+stepX2){				
					
				var iteration=0, limit=40;//узкое место, может быть можернезировать..
				while ((delta<0) && (iteration<limit)){
					rightLocal=rightLocal+stepLocal*direct;
					delta=GetFunctionValue(stepFunc, rightLocal+stepLocal*direct)-GetFunctionValue(stepFunc, rightLocal);
				}
			
				leftLocal=rightLocal;			
				rightLocal+=stepLocal*direct;
				if (needDrawing) DrawPoint(j, GoldenSection(supFunc, leftLocal, rightLocal, eps));//Реализовать
				needDrawing=!needDrawing;
				supFunc=-1*supFunc;	//Реализовать			
			}
		
		}
	
	}
	


	return;
}