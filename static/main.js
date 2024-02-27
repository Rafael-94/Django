const ficha = document.getElementById("ficha");
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono")
const genero = document.getElementsByName("genero")
console.log(genero)




const validarFicha = function () {
  let exp = /^[a-zA-Z]{3}_[0-9]{5}$/;
  let campo = ficha.value;

  if (!exp.test(campo)) {
    alert("Campo de ficha incorrecto");
  }
}


const validarNombre = function () {
  let exp = /^[A-Za-z]+$/;
  let campo = nombre.value;

  if (!exp.test(campo)) {
    alert("Campo de nombre incorrecto.Solo se permiten letras.");
  }
}


const validarApellidos = function () {
  let exp = /^[A-Za-z]+$/;
  let campo = apellidos.value;

  if (!exp.test(campo)) {
    alert("Campo de nombre incorrecto.Solo se permiten letras.");
  }
}



const validarCorreo = function () {
  let exp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let campo = correo.value;

  if (!exp.test(campo)) {
    alert("Campo de correo incorrecto.Debe ser un correo válido.");
  }
}

const validargenero = function () {



}

const numeros = (e) => {

  if ((e.keyCode < 48 || e.keyCode > 57) && webkitURL.keyCode) {
    e.preventDefault()
  }
}



correo.addEventListener("blur", validarCorreo);
apellidos.addEventListener("blur", validarApellidos);
nombre.addEventListener("blur", validarNombre);
ficha.addEventListener("blur", validarFicha);


telefono.addEventListener("keypress", numeros);