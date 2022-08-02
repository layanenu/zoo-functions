const data = require('../data/zoo_data');

function renderEmployeer(objeto) {
  return {
    id: objeto.id,
    fullName: `${objeto.firstName} ${objeto.lastName}`,
    species: objeto.responsibleFor.map((element) => {
      const specieObject = data.species.find((specie) => specie.id === element);
      return specieObject.name;
    }),
    locations: objeto.responsibleFor.map((element) => {
      const specieLocation = data.species.find((localizacao) => localizacao.id === element);
      return specieLocation.location;
    }),
  };
}
function findEmployeerById(id) {
  const objeto = data.employees.find((element) => element.id === id);
  if (!objeto) {
    throw new Error('Informações inválidas');
  }
  return renderEmployeer(objeto);
}
function findEmployeerByName(name) {
  const objeto = data.employees
    .find((element) => element.firstName === name || element.lastName === name);
  if (!objeto) {
    throw new Error('Informações inválidas');
  }
  return renderEmployeer(objeto);
}

function getEmployeesCoverage(nameOuId) {
  if (nameOuId && nameOuId.id) {
    return findEmployeerById(nameOuId.id);
  }

  if (nameOuId && nameOuId.name) {
    return findEmployeerByName(nameOuId.name);
  }

  return data.employees.map((employee) => renderEmployeer(employee));
}

module.exports = getEmployeesCoverage;
