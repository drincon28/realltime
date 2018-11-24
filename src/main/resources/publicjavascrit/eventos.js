/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function cerrarSesion(){ 
//la referencia de la ventana es el objeto window del popup. Lo utilizo para acceder al método close 
var txt;
var r = confirm("Desea cerrar sesion");
if (r === true) {
    txt = "You pressed OK!";
} else {
    txt = "You pressed Cancel!";
}
alert(txt);
}
function validar(){
	var nombre, modelo, marca;
	nombre = document.getElementById("nombre").value;
	modelo = document.getElementById("modelo").value;
	marca = document.getElementById("marca").value;
	
	if(nombre === ""){
		alert("El campo nombre está vacío");
		return false;
	}
	else if(marca === ""){
		alert("Seleccionar el marca del telefono");
		return false;
	}
	else if(modelo === ""){
		alert("Seleccionar el modelo del telefono");
		return false;
	}
	else if(nombre.length>30){
		alert("El nombre supera el maximo de caracteres");
		return false;
	}
}