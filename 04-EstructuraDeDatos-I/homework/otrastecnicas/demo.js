                                                                    // SETS
var arreglo = [5,1,2,3,4,4,5,5,1,2]
var set1    = new Set(arreglo)

console.log(arreglo)

console.log(set1)

set1.add(15)
set1.add(15)
console.log(set1)


                                                      // Stack // Pila (con clase)
class Stack {
   constructor() {
       this.arr = []
   }
   agregar(element) {
       this.arr.push(element)
   }
   remover() {
       this.arr.pop()
   }
   longitud(){
       return this.arr.length
   }
}

let nuevoStack = new Stack()

nuevoStack.agregar("first")
nuevoStack.agregar("second")

console.log(nuevoStack.arr)

nuevoStack.remover()
console.log(nuevoStack.arr)


// ejemplo con array
//PROBLEMA:nos permite usar metodos que no se corresponden con el funcionamiento
//         de la estructura deseada
let arr2 = []
arr2.push("first")
arr2.push("second")
console.log(arr2)
arr2.pop()
console.log(arr2)


//array
// herramientas: pop, push, shift, unshift, length, etc

//Stack
// herramientas/metodos: agregar, remover


                                                      //Queue fila (funcion constructora)

function Queue() {
this.array=[];
}
Queue.prototype.enqueue = function(element){
 return this.array.unshift(element)
}
Queue.prototype.dequeue = function(){
 return this.array.pop()
}
Queue.prototype.size = function(){
 return this.array.length
}
queue = new Queue();
queue.enqueue('pablo')
queue.enqueue('sam')
queue.enqueue('sam')
queue.dequeue()
queue.dequeue()
console.log(queue.array)
console.log(queue.size());

