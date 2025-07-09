import ErrorRepository from '../basic';

describe('ErrorRepository', () => {
  let repo;

  beforeEach(() => {
    repo = new ErrorRepository();
  });

  test('translate возвращает описание ошибки для известного кода', () => {
    expect(repo.translate(400)).toBe('Неверный запрос — сервер не понял запрос из-за неверного синтаксиса.');
    expect(repo.translate(404)).toBe('Не найдено — запрашиваемый ресурс не найден на сервере.');
    expect(repo.translate(503)).toBe('Сервис недоступен — сервер временно не может обработать запрос.');
  });

  test('translate возвращает "Unknown error" для неизвестного кода', () => {
    expect(repo.translate(999)).toBe('Unknown error');
    expect(repo.translate(0)).toBe('Unknown error');
  });
});
