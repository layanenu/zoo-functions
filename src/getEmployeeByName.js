const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return data.employees
    .find((element) => employeeName === element.firstName || employeeName === element.lastName);
}

module.exports = getEmployeeByName;
