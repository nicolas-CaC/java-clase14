// Preparar el mate
// 1- Nos fijamos los elemento

let yerba = true;
let agua = true;
const matero = 'verde';

let frio = true;
let tempJusta = false;
let muyCaliente = false;

if (tempJusta) {
    console.log('Nos preparamos el mate')

} else if (muyCaliente) {
    console.log('Enfriamos el agua')

    if (tempJusta) {
        console.log('Nos preparamos el mate')
    }

} else {
    console.log('Seguimos calentando el agua')

    if (tempJusta) {
        console.log('Nos preparamos el mate')
    }
}



