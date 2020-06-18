 //Cálculo de IMC

const name = 'Caique';
const weight = 70;
const height = 1.65;

const imc = weight / (height*2);

if (imc >= 30){
    console.log(`${name}, você está acima do peso.`)
} else if (imc < 29.9){
    console.log(`${name}, você não está acima do peso.`)
}





