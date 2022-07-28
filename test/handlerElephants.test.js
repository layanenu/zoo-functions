const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se para o parâmetro count retorna o número inteiro 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Verifica se retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Verifica se retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Verifica se retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Verifica se retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Verifica se retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Verifica se não passando argumentos a função deve retornar undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Verifica se passando para o parâmetro um objeto vazio retorna a frase: parâmetro inválido, é necessário uma string', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Verifica se passada uma string que não contempla uma funcionalidade deve retornar null', () => {
    expect(handlerElephants('teste')).toBeNull();
  });
});
