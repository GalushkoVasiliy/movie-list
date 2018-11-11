import { ListFilmsModule } from './list-films.module';

describe('ListFilmsModule', () => {
  let listFilmsModule: ListFilmsModule;

  beforeEach(() => {
    listFilmsModule = new ListFilmsModule();
  });

  it('should create an instance', () => {
    expect(listFilmsModule).toBeTruthy();
  });
});
