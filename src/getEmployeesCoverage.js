const data = require('../data/zoo_data');

function getEmployeesCoverage(nameOuId) { // retornar as informações sobre a pessoa colaboradora e por quais espécies ela é responsável.
  if (!nameOuId) {
    const employeerInfo = {};
    data.employees.forEach((element) => {
      // employeerInfo[element.id] = element.id;
      employeerInfo[element.fullName] = element.firstName + element.lastName;
    });
    return employeerInfo;
  }
}

console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
