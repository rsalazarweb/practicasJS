var persona = {
    nombre: 'Rodrigo',
    apellido: 'Salazar',
    edad: 28,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    pianista: true
}

var otraPersona = {
    nombre: 'Josmary',
    apellido: 'Salazar',
    edad: 14
}

function imprimirProfesiones(persona)
{
    console.log(`${persona.nombre} es: `);
    if(persona.ingeniero)
    {
        console.log('Ingeniero');
    }

    if(persona.cocinero)
    {
        console.log('Cocinero');
    }

    if(persona.cantante)
    {
        console.log('Cantante');
    }

    if(persona.dj)
    {
        console.log('DJ');
    }

    if(persona.pianista)
    {
        console.log('Pianista');
    }
}

imprimirProfesiones(persona);

const MAYORIA_DE_EDAD = 18;

const esMayordeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;
const esMenordeEdad = ({ edad }) => edad < MAYORIA_DE_EDAD;
// const esMayordeEdad = persona => persona.edad >= MAYORIA_DE_EDAD;
// const esMayordeEdad = persona =>
// {
//     return persona.edad >= MAYORIA_DE_EDAD;
// }

// const esMayordeEdad = function(persona)
// {
//     return persona.edad >= MAYORIA_DE_EDAD;
// }

// function esMayordeEdad(persona)
// {
//    return persona.edad >= MAYORIA_DE_EDAD;
// }

function imprimirMayorDeEdad(persona)
{
    if(esMayordeEdad(persona))
    {
        console.log(`${persona.nombre} es mayor de edad`);
    } else 
    {
        console.log(`${persona.nombre} es menor de edad`);
    }
}

imprimirMayorDeEdad(persona);

function permitirAcceso(persona)
{
    if(!esMayordeEdad(persona))
     {
         console.log('ACCESO DENEGADO');
     }
}

function permitirAcceso(persona)
{
    if(!esMayordeEdad(persona))
     {
         console.log('ACCESO DENEGADO');
     }
}

permitirAcceso(otraPersona);