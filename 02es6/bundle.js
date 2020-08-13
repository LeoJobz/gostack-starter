//----------------------------------------------------CLASSES----------------------------------------------------
//#region 
// class List {
//     constructor() {
//         this.data = []
//     }
//     add(data) {
//         this.data.push(data)
//         console.log(this.data)
//     }
// }
// class TodoList extends List {
//     constructor() {
//         super();
//         this.nome = 'Leo'
//     }
//     mostraNome() {
//         console.log(this.nome)
//     }
// }
// var minhaLista = new TodoList();
// document.getElementById('novotodo').onclick = function () {
//     minhaLista.add('novotodo')
// }
// minhaLista.mostraNome();
// //Static methods
// class Matematica {
//     static soma(a, b) {
//         return a + b
//     }
// }
// console.log(Matematica.soma(1,2))
//#endregion
//----------------------------------------------------OPERAÇÕES EM ARRAY----------------------------------------------------
//#region 
// const arr = [1, 3, 4, 5, 6, 7]
// const newArr = arr.map(function(item, index){
//     return item + index
// })
// console.log(newArr)
// const sum = arr.reduce(function(total, next){
//     return total + next
// })
// console.log(sum)
// const filter = arr.filter(function(item) {
//     return item % 2 === 0
// })
// console.log(filter)
// const find = arr.find(function (item) {
//     return item === 4
// })
// console.log(find)
//#endregion
//----------------------------------------------------ARROW FUNCTION----------------------------------------------------
//#region 
// const arr = [1, 3, 4, 5, 6, 7]
// const newArrUm = arr.map(function(item) {
//     return item * 2
// })
// const newArrDois = arr.map(item => {
//     return item * 2
// })
// const newArrTres = arr.map(item => item * 2)
// console.log(newArrTres)
// const teste = () => ({ nome: 'Leonardo '})
// console.log(teste())
//#endregion
//----------------------------------------------------DESESTRUTURAÇÃO----------------------------------------------------
//#region 
// const usuario = {
//     nome: 'Leonardo',
//     idade: 23,
//     endereco: {
//         cidade: 'São Paulo',
//         uf: 'SP'
//     }
// }
// const { nome, idade, endereco: { cidade } } = usuario;
// console.log(nome)
// console.log(idade)
// console.log(cidade)
// function mostraNome({nome, idade}) {
//     console.log(idade)
// }
// mostraNome(usuario)
//#endregion
//----------------------------------------------------OPERADORES REST/SPREAD----------------------------------------------------
//#region 
//REST
// const arr = [0, 1, 2, 3, 4, 5]
// const [ a, b, ...c ] = arr;
// console.log(a)
// console.log(b)
// console.log(c)
// function soma(...params) {
//     return params.reduce((total, next) =>  total + next)
// }
// console.log(soma(1, 2, 3, 4, 5))
// function somaDois(a, b, ...params) {
//     return params
// }
// console.log(1, 2, 3, 4, 5, 6)
// //SPREAD
// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]
// const arr3 = [ ...arr1, ...arr2]
// console.log(arr3)
// const usuario1 = {
//     nome: 'Leonardo',
//     idade: 23,
//     empresa: 'Bitwide'
// }
// const usuario2 = { ...usuario1, nome: 'Patrick' }
// console.log(usuario2)
//#endregion
"use strict";
