/*console.log ("Ejemplo con el while:")
var contador  =  0;
var  N =  50
while (contador < N){
  console.log(contador+1)
  contador  +=1
}
console.log ("Ejemplo con el for:")
for (var i =  0;  i < 50;  ++i){
  console.log(i)
}*/

var array = [10,20,30,40,50];
for (var i=0; i< array.length; i+=1){
  console.log("este es el item:",i," ",array[i])
}

var  estudiantes=[
  {
    nombre:  'Estudiante  1',
    nota:  8
  },
  {
    nombre:  'Estudiante  2',
    nota:  5
  },
  {
    nombre:  'Estudiante  3',
    nota:  1
  },
]
/*for (var i =0; i<estudiantes.length; i+=1){
  console.log(estudiantes[i].nombre,  estudiantes[i].nota)
}*/
console.log("Hecho con for off")
for (var estudiante of  estudiantes ){
  console.log(estudiante.nombre, estudiante.nota)
}
var estudianteaux =
  {
    nombre:  'Estudiante  3',
    nota:  1
  }

for (var key in estudianteaux){
  console.log(key,  estudianteaux[key]);
}
