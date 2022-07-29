const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  const filtraAnimalPeloId = species.filter((animal) => ids.includes(animal.id));
  return filtraAnimalPeloId;
}

module.exports = getSpeciesByIds;
