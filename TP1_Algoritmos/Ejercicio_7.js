var valores = [true, false, 2, "hola", "mundo", 3, "char"];

// elementos de texto y encontrar el de mayor longitud
var elementosTexto = valores.filter(elemento => typeof elemento === 'string');
var mayorTexto = elementosTexto.reduce((mayor, actual) => mayor.length < actual.length ? actual : mayor, '');

// Ordenar los elementos de texto de menor a mayor cantidad de letras
var elementosOrdenados = elementosTexto.sort((a, b) => a.length - b.length);

console.log("Elemento de texto con más letras:", mayorTexto);
console.log("Elementos de texto ordenados por cantidad de letras:", elementosOrdenados);

// Encontrar los dos elementos numéricos
var numeros = valores.filter(elemento => typeof elemento === 'number');

// operaciones matemáticas básicas
var suma = numeros[0] + numeros[1];
var resta = numeros[0] - numeros[1];
var multiplicacion = numeros[0] * numeros[1];
var division = numeros[0] / numeros[1];

console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);