"use strict";

var usuario = {
  nome: 'Leonardo',
  idade: 23,
  endereco: {
    cidade: 'São Paulo',
    uf: 'SP'
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(idade);
}

mostraNome(usuario);
