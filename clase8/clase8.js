var rodrigo = {
    nombre: 'Rodrigo',
    apellido: 'Salazar',
    edad: 28,
    peso: 70
}


console.log(`Al inicio de año ${rodrigo.nombre} pesa ${rodrigo.peso}`);

const PESO_CAMBIANTE = 0.2;
const DIAS_DEL_ANIO = 365;

const aumentarDePeso = persona => persona.peso += PESO_CAMBIANTE;
const adelgazar = persona => persona.peso -= PESO_CAMBIANTE;
for(var i = 0; i <= DIAS_DEL_ANIO; i++)
{
    var random;
    random = Math.random();

    if(random < 0.25)
    {
        //aumento de peso
        aumentarDePeso(rodrigo);
    } 
    else if(random < 0.5)
    {
        adelgazar(rodrigo);
        // adelgazar
    }
}

console.log(`Al final del año ${rodrigo.nombre} pesa ${rodrigo.peso.toFixed(1)} kg`);

