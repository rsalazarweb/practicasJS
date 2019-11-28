const API_URL= 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id',1)}`;
const OPTS = { crossDomain: true};

console.log(LUKE_URL)

//CALLBACK
//UNA FUNCIÓN QUE SE VA A EJECUTAR EN ALGÚN FUTURO Y $.GET ES
//EL ENCARGADO DE LLAMARLO
// $.get(LUKE_URL, OPTS, function (luke)
// {
//     console.log(`Hola yo soy ${luke.name}`);
// });

// var onResponse = (persona) => {
//     console.log(`Hola yo soy ${persona.name}`);
// }

const onResponse = (persona) => console.log(`Hola yo soy ${persona.name}`);


$.get(LUKE_URL, OPTS, onResponse);
