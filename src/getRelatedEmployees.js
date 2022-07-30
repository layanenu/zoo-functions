const data = require('../data/zoo_data');

function isManager(id) { // verificar se o colaborador é gerente
  return data.employees.some((element) => (element.managers.includes(id)));
}

function getRelatedEmployees(managerId) { // retornar as pessoas lideradas pela gerencia
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const pessoasLideradas = data.employees.filter((element) => element.managers.includes(managerId)); // filtra as pessoas lideradas
  const fullNamePessoasLideradas = pessoasLideradas
    .map((element) => `${element.firstName} ${element.lastName}`); // usa o map para retornar só o fullName
  return fullNamePessoasLideradas;
}

module.exports = { isManager, getRelatedEmployees };
