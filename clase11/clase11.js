var rodrigo = {
    nombre: 'Rodrigo',
    estatura: 1.73
};

var sandra = {
    nombre: 'Sandra',
    estatura: 1.50
}

var josmary = {
    nombre: 'Josmary',
    estatura: 1.45
}

var personas = Array(rodrigo, sandra, josmary);
// for (var i = 0; i <= personas.length; i++) {
//     var persona = personas[i];
//     console.log(`${persona.nombre} mide ${persona.estatura} mts`);
// }
// const esAlta = (persona) => 
// {
//     return persona.estatura > 1.7;
// }
const esAlta = ({estatura}) => estatura > 1.7;
// var personas2 = [rodrigo, sandra, josmary];
// console.log(personas2);
var personasAltas = personas.filter(esAlta)
// var personasAltas = personas.filter(function(persona)
// {
//     return persona.estatura > 1.7;
// });

console.log(personasAltas);

const esBaja = ({estatura}) => estatura < 1.7;

var personasBajas = personas.filter(esBaja);

console.log(personasBajas);


const pasarAlturaCms = persona => ({
    ...persona,
    estatura: persona.estatura * 100
});

var personasCms = personas.map(pasarAlturaCms);
console.log(personasCms);


