import { HomeModule } from './home.module';
import { BjaPaginationModule } from 'bja-ngx-pagination';

describe('HomeModule', () => {
  let homeModule: HomeModule;

  beforeEach(() => {
    homeModule = new HomeModule();
  });

  it('should create an instance', () => {
    expect(homeModule).toBeTruthy();
  });
});
