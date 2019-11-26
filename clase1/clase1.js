var nombre = 'Rodrigo';
var apellido = 'Salazar';

var nombreEnMayusculas = nombre.toUpperCase();
var apellidoEnMinusculas = apellido.toLocaleLowerCase();

console.log(nombreEnMayusculas + " " + apellidoEnMinusculas);

var primeraLetraDelNombre = nombre.charAt(7);

console.log(primeraLetraDelNombre);

var cantidadDeLetrasDelNombre = nombre.length;

console.log(cantidadDeLetrasDelNombre);

var nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

var str = nombre.substr(1,3);

console.log(str);