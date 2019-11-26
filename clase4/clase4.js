//objetos
var persona = 
{
    nombre: 'Rodrigo',
    apellido: 'Salazar',
    edad: 28
}

function imprimirNombreEnMayusculas({nombre})
{
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(persona);