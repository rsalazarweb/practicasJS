const API_URL= 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';


const opts = { crossDomain: true};

const onResponse = (persona) => console.log(`Hola yo soy ${persona.name}`);

function obtenerPersonaje(id)
{
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
    $.get(url, opts, onResponse);
}


for (let i = 1; i < 10; i++) {
  var personajes = i;   
  obtenerPersonaje(i);
}
