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
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

const META = rodrigo.peso - 3;
var dias = 0;
while (rodrigo.peso > META) 
{
    //aumentar de peso
    if(comeMucho(rodrigo))
    {
        aumentarDePeso(rodrigo);
    }
    if(realizaDeporte())
    {
        adelgazar(rodrigo);
    }

    dias += 1;
}

console.log(` ${dias} días hasta que ${rodrigo.nombre} adelgazo`);

