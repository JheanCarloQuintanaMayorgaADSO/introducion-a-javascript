/*24.Escriba una expresión regular que reconozca los números en punto flotante (por ejemplo -2.3e-1, -3e2, 23, 3.2). */

const expresionRegular = /^[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?$/;

console.log(expresionRegular.test("2.3e-1"));
