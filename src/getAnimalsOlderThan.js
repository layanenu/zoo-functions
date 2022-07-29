const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.some((element) => {
    if (element.name === animal) {
      return element.residents.every((element2) => element2.age >= age);
    }
    return false;
  });
}

console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
