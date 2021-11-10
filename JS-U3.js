

var form = document.querySelector('form');
var usuario = document.getElementById('usuario');
var clave = document.getElementById('clave');
var submit = document.getElementById('submit');
var guia = document.querySelector('h5');


//submit - Envio formulario

form.onsubmit = function(e) {
 if ((usuario.value === null) || (usuario.value === '')) {
 e.preventDefault();
 guia.textContent = 'Completá el usuario';
 }

 else if((clave.value === null) || (clave.value === '')) {
 e.preventDefault();
 guia.textContent = 'Completá la contraseña';
 }

 else if(usuario.value.includes('@')){
 guia.textContent = 'Ingreso completo';
 }

 else{
 e.preventDefault();
 guia.textContent = 'Coloque el "@" en el usuario';  
 }
}

