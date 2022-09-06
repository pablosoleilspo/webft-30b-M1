"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
}
BinarySearchTree.prototype.size = function () {
  if(this.right === null && this.left === null) return 1
  else if(this.right != null && this.left === null) return 1 + this.right.size()
  else if(this.right === null && this.left !== null) return 1 + this.left.size()
  else if(this.right != null && this.left !== null) return 1 + this.right.size() + this.left.size()
  }

BinarySearchTree.prototype.insert = function (value) {
  if(value < this.value){
    if(this.left === null){
      this.left = new BinarySearchTree(value)
    }
    else{
         this.left.insert(value)
    }
  }
  else{
if(this.right === null){
  this.right = new BinarySearchTree(value)
}
else{
  this.right.insert(value)
}
  }          
  }

  BinarySearchTree.prototype.contains = function (value) {
    if(this.value === value) return true
   
    if(value < this.value){
      if(!this.left) return false
      else{
       return this.left.contains(value)
      }
    }
    else{
      if(value > this.value){
        if(!this.right) return false
        else{
         return this.right.contains(value)
        }
    }
  }
}
BinarySearchTree.prototype.depthFirstForEach = function (cb,order) {
  if(order === 'post-order'){
    if(this.left) this.left.depthFirstForEach(cb, order)
    if(this.right) this.right.depthFirstForEach(cb, order)
    cb(this.value)
  }
  if(order === 'pre-order'){
    cb(this.value)
    if(this.left) this.left.depthFirstForEach(cb, order)
    if(this.right) this.right.depthFirstForEach(cb, order)
  }
  else{
    if(this.left) this.left.depthFirstForEach(cb, order)
    cb(this.value)
    if(this.right) this.right.depthFirstForEach(cb, order)
  }
  }

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array=[]) {
  // si tiene ramas
  if(this.left !== null){
    array.push(this.left) //[piña] // 2 [apple]
  }

  if(this.right !== null){
    array.push(this.right) //[piña, kiwi] // 2 [apple, banana]
  }

  //1 [piña, kiwi] // 2 [apple, banana]

  cb(this.value) // papa // piña

  while(array.length > 0){
    array.shift() // piña
    .breadthFirstForEach(cb, array)
  }
}

// let lista= new BinarySearchTree(10)
// lista.insert(5);
// lista.insert(6);
// lista.contains(5)
    
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
