
calcular = document.getElementById("calcular");
kg = document.getElementById("kg"); 
m = document.getElementById("metros");
imc = document.getElementById("imc");
lectura = document.getElementById("lectura");
/*Función para el script*/
	calcular.onclick = function(){
		if(kg.value!="" && metros.value!=""){
			imcx = (kg.value / (metros.value* metros.value));
			imc.innerHTML = imcx
			console.log(imcx);

			if(imcx<17){ lectura.innerHTML = "Gravemente inferior al normal"; }
            else if(imcx>=17 && imcx<=18.49){ lectura.innerHTML = "Peso inferior al normal"; }
			else if(imcx>=18.5 && imcx<=24.99){ lectura.innerHTML = "Peso normal"; }
			else if(imcx>=25 && imcx<=29.99){ lectura.innerHTML = "Peso superior al normal"; }
			else if(imcx>=30 && imcx<=34.99){ lectura.innerHTML = "Obesidad"; }
			else if(imcx>=35 && imcx<=39.99){lectura.innerHTML = "Gravemente obeso"; }
			else if(imcx>=40 && imcx<=43.99){lectura.innerHTML = "Extremadamente obeso"; }
			else if(imcx>=44){lectura.innerHTML = "Extremadamente obeso, por favor trate de perder peso"; }
            else if(imcx!=Number){imc.innerHTML = "No habeis ingresado un caracter correcto"; }
 
		}else{
			/*Confirmación en caso de dar click sin rellenar*/
var pregunta = confirm("¿Tienes algún problema?");
   if(pregunta == true){window.location="ayuda.html";}
      else {window.location="index.html"};
       }
       };

