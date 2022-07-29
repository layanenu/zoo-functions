const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se não passando parâmetros retorna o objeto hours', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Verifica se para os parâmetros Monday e 09:00-AM retorna The zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Verifica se para os parâmetros Tuesday e 09:00-AM retorna The zoo is open', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Verifica se para os parâmetros Wednesday e 09:00-PM retorna The zoo is closed', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Verifica se para os parâmetros Thu e 09:00-AM lança uma exceção', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrowError(new Error('The day must be valid. Example: Monday'));
  });
  it('Verifica se para os parâmetros Friday e 09:00-ZM lança uma exceção', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Verifica se para os parâmetros Saturday e 09:00-ZM lança uma exceção', () => {
    expect(() => getOpeningHours('Friday', 'C9:00-AM')).toThrowError(new Error('The hour should represent a number'));
  });
  it('Verifica se para os parâmetros Sunday e 09:c0-AM lança uma exceção', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrowError(new Error('The minutes should represent a number'));
  });
  it('Verifica se para os parâmetros Monday e 13:00-AM lança uma exceção', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrowError(new Error('The hour must be between 0 and 12'));
  });
  it('Verifica se para os parâmetros Tuesday e 09:60-AM lança uma exceção', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrowError(new Error('The minutes must be between 0 and 59'));
  });
});
