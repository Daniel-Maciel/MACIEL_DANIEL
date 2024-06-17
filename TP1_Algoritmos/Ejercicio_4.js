var num1 = 3;
var num2 = 7;

if (num1 < num2) {
    console.log("num1 es menor que num2");
} else {
    console.log("num1 no es menor que num2");
}

if (num2 <= 1) {
    console.log("num2 es menor o igual que 1");
} else {
    console.log("num2 no es menor o igual que 1");
}

if (num2 > 0) {
    console.log("num2 es mayor que 0");
} else {
    console.log("num2 no es mayor que 0");
}

console.log("num2 es positivo");

if (num1 >= 0) {
    console.log("num1 es mayor o igual que 0");
} else {
    console.log("num1 no es mayor o igual que 0");
}

if (num1 <= 1) {
    console.log("num1 es menor o igual que 1");
} else {
    console.log("num1 no es menor o igual que 1");
}

console.log("num1 es positivo");

if (num1 + 1 < num2) {
    console.log("Incrementar en 1 unidad el valor de num1 hace que sea menor que num2");
} else if (num1 + 1 === num2) {
    console.log("Incrementar en 1 unidad el valor de num1 hace que sea igual que num2");
} else {
    console.log("Incrementar en 1 unidad el valor de num1 no lo hace menor ni igual que num2");
}
