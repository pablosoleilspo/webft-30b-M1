'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
var array = [1];
var n = 2;
while(num > 1)
{
if(num % n == 0 ){
  array.push(n)
  num = num / n;
}
else {
n++;
}
}
return array;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:                                           
  for(var i = 0; i < array.length; i++){
    for(var j = 0; j < array.length; j++){
      if(array[j] > array[j+1]){
        var arrayf = array[j]
        array[j] = array[j + 1]
        array[j+1] = arrayf
      }
    }
  }
  return array;
}
// var array = [10, -2, -7, 4]
// bubbleSort(array)



function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(var i = 0; i < array.length; i++){
    for(var j = 0; j < array.length; j++){
      if(array[j] > array[j+1]){  //5, 1, 4, 2, 8
        var arrayf = array[j]
        array[j] = array[j + 1]
        array[j+1] = arrayf
        if(array[j] < array[j - 1])
        {
          var arrayfd = array[j]
        array[j] = array[j - 1]
        array[j-1] = arrayfd
        }
      }
    }
  }
  return array;
}
// var array = [5, 1, 4, 2, 8]
// insertionSort(array)


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (i === j) {
        continue;
      }
      if (array[i] < array[j]) {
        var arrayf = array[i];
        array[i] = array[j];
        array[j] = arrayf;
      }
    }
  }
  return array;
}
var array = [5, 1, 4];
selectionSort(array);

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
