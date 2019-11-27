function heredade(prototipoHijo, prototipoPadre)
{
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

//Prototipo
function Persona(nombre, apellido, estatura)
{
   this.nombre = nombre;
   this.apellido = apellido;
   this.estatura = estatura;
}

Persona.prototype.saludar = function ()
{
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.esAlta = function()
{
    return this.estatura > 1.7;
}

function Desarrollador(nombre, apellido)
{
    this.nombre = nombre;
    this.apellido = apellido;
}
heredade(Desarrollador, Persona);

Desarrollador.prototype.saludar = function ()
{
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador`);
}


//se crea un nuevo objeto con la palabra reservada new seguida del prototipo
var rodrigo = new Desarrollador ('Rodrigo', 'Salazar', 1.73);

var josmary = new Persona('Josmary', 'Salazar', 1.45);

var sandra = new Persona('Sandra', 'Ugalde', 1.53);
