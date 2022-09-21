let a = 1;
let b = 2;
const resultado = a + b;
const esMayor = a > b;
const esMenor = a < b;
const mayorIgual = a >= b;
const menorIgual = a <= b;


// console.log(resultado)
console.log(esMayor)
console.log(esMenor)

if (esMenor) {
    console.log('a es menor a b')
}

if (a === b) {
    console.log('a es estrictamente igual a b')
}

if (a == b) {
    console.log('a es igual a b (no recomendable)')
}

// OPERADOR AND: &&

let x = 2;
let y = 3;

if ((x === 2) && (y === 3)) {
    console.log('AND: ambas preguntas me dan true')
} else {
    console.log('AND: alguna de las preguntas dio falso')
}

// OPERADOR OR: ||
if ((a < b) || (a > b)) {
    console.log('OR: a es mayor o igual a b')
} else {
    console.log('OR: a es igual a b')
}

// OPERADOR NOT: !

const existe = true;

if (!existe) {
    console.log('NOT: Google me va a decir que existe')
} else {
    console.log('NOT: Google me dice que no existe')
}

if (x !== y) {
    console.log('X es distinto a y')
} else {
    console.log('X e Y son iguales')
}