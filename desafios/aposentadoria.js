// Cálculo de aposentadoria
const name = 'Caique';
const gender = 'M';
const age = 23;
const contribution = 1;
const time = age + contribution;

if (gender == 'M' && contribution >= 35 && time >= 95){
    console.log(`${name}, você já pode se aposentar!`)
} else if (gender == 'F' && contribution >= 30 && time >= 85 ){
    console.log(`${name}, você já pode se aposentar!`)
} else {
    console.log(`${name}, você ainda não pode se aposentar...`)
}