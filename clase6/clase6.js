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

function esMayordeEdad(persona)
{
   return persona.edad >= MAYORIA_DE_EDAD;
}

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