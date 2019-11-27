//Prototipo
function Persona(nombre, apellido, estatura)
{
   this.nombre = nombre;
   this.apellido = apellido;
   this.estatura = estatura;
}

// Persona.prototype.esAlta = function ()
// {
//     if (this.estatura >= 1.7) {
//         console.log(`La persona ${this.nombre} es alto`);
//     } 
//     else 
//     {
//         console.log(`la persona ${this.nombre} es baja`);
//     }
// }

Persona.prototype.esAlta = function()
{
    return this.estatura > 1.7;
}

Persona.prototype.saludar = function ()
{
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

//se crea un nuevo objeto con la palabra reservada new seguida del prototipo
var rodrigo = new Persona('Rodrigo', 'Salazar', 1.73);

var josmary = new Persona('Josmary', 'Salazar', 1.45);

var sandra = new Persona('Sandra', 'Ugalde', 1.53);
