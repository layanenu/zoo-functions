const data = require('../data/zoo_data');

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(visitantes) {
  return visitantes.reduce(
    (acc, cliente) => {
      if (cliente.age < 18) {
        acc.child += 1;
      }
      if (cliente.age >= 18 && cliente.age < 50) {
        acc.adult += 1;
      }
      if (cliente.age >= 50) {
        acc.senior += 1;
      }
      return acc;
    },
    { child: 0, adult: 0, senior: 0 },
  );
}

function calculateEntry(visitantes) {
  if (visitantes === undefined || Object.keys(visitantes).length === 0) {
    return 0;
  }
  const clientesPorFaixaEtaria = countEntrants(visitantes);
  const TotalPricesadult = clientesPorFaixaEtaria.adult * 49.99;
  const TotalPricessenior = clientesPorFaixaEtaria.senior * 24.99;
  const TotalPricesChilds = clientesPorFaixaEtaria.child * 20.99;
  const totalPrices = TotalPricesadult + TotalPricessenior + TotalPricesChilds;
  return totalPrices;
}

console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
