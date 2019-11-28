class Persona
{
    constructor(nombre, apellido, estatura)
    {
       this.nombre = nombre;
       this.apellido = apellido;
       this.estatura = estatura;
    }

    saludar(fn)
    {
        var { nombre, apellido } = this;
        console.log(`Hola, me llamo ${ nombre} ${apellido}`);
        if(fn)
        {
           fn(nombre,apellido, false) 
        }
    }
    
    esAlta()
    {
        return this.estatura > 1.7;
    }
}

class  Desarrollador extends Persona
{
    constructor(nombre, apellido, estatura, lenguaje)
    {
        super(nombre,apellido,estatura)
        this.lenguaje = lenguaje;
    }

    saludar(fn)
    {
        // var nombre = this.nombre;
        // var apellido = this.nombre;
        // var lenguaje = this.lenguaje;
        var { nombre, apellido, lenguaje} = this;
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy Desarrollador de ${lenguaje}`);
        if(fn)
        {
           fn(nombre,apellido, true) 
        }
    }
}

function responderSaludo(nombre, apellido, esDev)
{
    console.log(`Buen día ${nombre} ${apellido}`);
    if(esDev)
    {
        console.log('Ah mirá, no sabía que eras desarrollador / a');
    }
}


//se crea un nuevo objeto con la palabra reservada new seguida del prototipo
var rodrigo = new Desarrollador ('Rodrigo', 'Salazar', 1.73, "JavaScript");

var josmary = new Persona('Josmary', 'Salazar', 1.45);

var sandra = new Persona('Sandra', 'Ugalde', 1.53);

rodrigo.saludar(responderSaludo);
josmary.saludar();
sandra.saludar(responderSaludo);