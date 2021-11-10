var cierto = true;
var falso = false; 

console.log("Cierto:", cierto, " Falso:", falso );

var a = 10
var b = 10 

var comparacion = a == b; 

// console.log(comparacion)

//operadores de comparacion 
//>, <, >=, <=, ==, ===, !=, !== 
var rangoInicio = 0;
var rangoFinal = 100; 
var numeroAcomparar = 48

var mayorQueInicio = numeroAcomparar > rangoInicio;
var menorQueFinal = numeroAcomparar < rangoFinal;
var dentroDeRango = mayorQueInicio && menorQueFinal;




console.log("¿El número está dentro del rango?: ",dentroDeRango);


var haHechoTrabajo = false;
var nota = 10;
var faltas = false;

var aprobado = (haHechoTrabajo || nota >= 5) && !faltas; 

console.log("¿Aprobó el curso?",aprobado);

