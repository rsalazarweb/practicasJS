class Persona
{
    constructor(nombre, apellido, estatura)
    {
       this.nombre = nombre;
       this.apellido = apellido;
       this.estatura = estatura;
    }

    saludar()
    {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
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

    saludar()
    {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador de ${this.lenguaje}`);
    }
}



//se crea un nuevo objeto con la palabra reservada new seguida del prototipo
var rodrigo = new Desarrollador ('Rodrigo', 'Salazar', 1.73, "JavaScript");

var josmary = new Persona('Josmary', 'Salazar', 1.45);

var sandra = new Persona('Sandra', 'Ugalde', 1.53);
