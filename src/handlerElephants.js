const { species } = require('../data/zoo_data');

const getElephants = () =>
  species.find((specie) => specie.name === 'elephants');
  // retorna o elemento elephants, ou seja, o objeto elephants (que é o primeiro elemento desse array que satisfaz essa condição)

const averageAge = ({ residents }) =>
  residents.reduce((sum, elephant) => sum + elephant.age, 0) / residents.length;
  // retorna a media de idades (1 único número)

const computeData = (param, elephants) => {
  switch (param) {
  case 'count':
    return elephants.residents.length; // retorna a quantidade de elefantes
  case 'names':
    return elephants.residents.map((elephant) => elephant.name); // retorna um ARRAY com a relação dos nomes de todos os elefantes
  case 'averageAge':
    return averageAge(elephants); // retorna a media de idades
  default:
    return null;
  }
};

const handlerElephants = (param) => { // essa funcao serve para localizar os valores das chaves que o usuário quer, que deve ser escrito como string
  if (param === undefined) { // se o parametro for undefined - retorna undefined
    return undefined;
  }
  if (typeof param !== 'string') { // se o parametro for diferente de string - retorna string
    return 'Parâmetro inválido, é necessário uma string';
  }
  const elephants = getElephants(); // essa constante chama a funcao getElephants que usa o FIND para RETORNAR o OBJETO que contém os dados do elephant
  if (Object.keys(elephants).includes(param)) { // se dentro das CHAVES do OBJETO elephant estiver INCLUIDO o que foi pedido no parametro
    return elephants[param]; // RETORNA aquele parametro
  }
  return computeData(param, elephants);
};

module.exports = handlerElephants;
