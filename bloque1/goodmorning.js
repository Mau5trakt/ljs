//Realizar un programa que le de los buenos dias al usuario

const readline = require('readline-sync');

let name = readline.question("Introduzca su nombre: ");
var saludo = "Buenos días"

console.log(saludo+" "+name)

