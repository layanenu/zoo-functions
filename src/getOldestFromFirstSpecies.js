const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const idEmployeer = data.employees.find((element) => element.id === id);
  // encontra a pessoa colaboradora pelo id
  const firstSpecie = idEmployeer.responsibleFor[0];
  const specie = data.species.find((element) => element.id === firstSpecie);
  // encontra a primeira espécie de animal que a pessoa colaboradora é responsável;
  const oldSpecie = specie.residents.sort((a, b) => b.age - a.age)[0];
  // ordena idades para encontrar o mais velho
  const InfosKeyOldSpecie = Object.values(oldSpecie);
  return InfosKeyOldSpecie;
  // retorna infos do mais velho
}

module.exports = getOldestFromFirstSpecies;
