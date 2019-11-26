//objetos
var persona = 
{
    nombre: 'Rodrigo',
    apellido: 'Salazar',
    edad: 28
}

function imprimirNombreEnMayusculas(persona)
{
    // var nombre = persona.nombre
    var { nombre } = persona;
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(persona);

function muestraNombreYEdad(persona)
{
    var { nombre } = persona;
    var { edad } = persona;

    var nombreEdad = `Hola me llamo ${nombre} y tengo ${edad} años`;
    
    return nombreEdad;
}

console.log(muestraNombreYEdad(persona));