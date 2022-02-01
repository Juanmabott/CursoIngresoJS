/*
Bottaro Juan Manuel
E/S 05
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let NombreIngresado
	let EdadIngresada
	NombreIngresado= document.getElementById('txtIdNombre').value
    //document.getElementById('txtIdNombre').value="Su nombre es "+NombreIngresado;
    EdadIngresada= document.getElementById('txtIdEdad').value
    //document.getElementById('txtIdEdad').value="Su edad es "+EdadIngresada;
    
    alert("su nombre es "+NombreIngresado+" y su edad es "+EdadIngresada);
}

