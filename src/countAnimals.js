// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) { // contar a quantidade de animais que residem no zoológico.
  if (!animal) {
    const allSpecies = {};
    data.species.forEach((especies) => {
      allSpecies[especies.name] = especies.residents.length;
    });
    return allSpecies;
  }
  const filtraAnimal = data.species.filter((element) => element.name === animal.specie);
  if (animal.sex) {
    return filtraAnimal[0].residents.filter((element2) => element2.sex === animal.sex).length;
  }
  return filtraAnimal[0].residents.length;
}

console.log(countAnimals({ specie: 'elephants', sex: 'male' }));

module.exports = countAnimals;
