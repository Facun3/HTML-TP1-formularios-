function init(){
	//variables
	var resultado = document.getElementById('resultado');
	var reset = document.getElementById('reset');
	var suma = document.getElementById('suma');
	var resta = document.getElementById('resta');
	var multiplicacion = document.getElementById('multiplicacion');
	var division = document.getElementById('division');
	var igual = document.getElementById('igual');
	var uno = document.getElementById('uno');
	var dos = document.getElementById('dos');
	var tres = document.getElementById('tres');
	var cuatro = document.getElementById('cuatro');
	var cinco = document.getElementById('cinco');
	var seis = document.getElementById('seis');
	var siete = document.getElementById('siete');
	var ocho = document.getElementById('ocho');
	var nueve = document.getElementById('nueve');
	var cero = document.getElementById('cero');
}
uno.onclick = function(e){
	resultado.textContent = resultado.textContent + "1";
}
dos.onclick = function(e){
	resultado.textContent = resultado.textContent + "2";
}
tres.onclick = function(e){
	resultado.textContent = resultado.textContent + "3";
}
cuatro.onclick = function(e){
	resultado.textContent = resultado.textContent + "4";
}
cinco.onclick = function(e){
	resultado.textContent = resultado.textContent + "5";
}
seis.onclick = function(e){
	resultado.textContent = resultado.textContent + "6";
}
siete.onclick = function(e){
	resultado.textContent = resultado.textContent + "7";
}
ocho.onclick = function(e){
	resultado.textContent = resultado.textContent + "8";
}
nueve.onclick = function(e){
	resultado.textContent = resultado.textContent + "9";
}
cero.onclick = function(e){
	resultado.textContent = resultado.textContent + "0";
}
reset.onclick = function(e){
	resultado.textContent="";
}
suma.onclick = function(e){
	resultado.textContent = resultado.textContent + "+";
}
resta.onclick = function(e){
	resultado.textContent = resultado.textContent + "-";
}
multiplicacion.onclick = function(e){
	resultado.textContent = resultado.textContent + "*";
}
division.onclick = function(e){
	resultado.textContent = resultado.textContent + "/";
}
igual.onclick = function(e){
	var res = eval(resultado.textContent);
	resultado.textContent = res;
}
	
document.onkeypress = function(e){
		let ent2= event.keyCode || e.charCode;
		let entry = String.fromCharCode(ent2);
		//alert("Valor asci ingresado: "+ent2)
		let numbers = ["0","1","2","3","4","5","6","7","8","9","-","+","/","*","."];
		console.log(ent2);
		if(numbers.includes(entry)){
			resultado.textContent=resultado.textContent + entry; //filtro numerico
		}
		else if(ent2==13){
				var res = eval(resultado.textContent);
				resultado.textContent = res;
			} // Defino Enter
}
document.onkeydown = function(e){ 
	var a = event.keyCode || e.charCode; 
	if(a==8){
		resultado.textContent="";
	}
}
