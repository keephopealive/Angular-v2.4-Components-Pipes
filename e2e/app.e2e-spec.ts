import { CurrencyPipesPage } from './app.po';

describe('currency-pipes App', function() {
  let page: CurrencyPipesPage;

  beforeEach(() => {
    page = new CurrencyPipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
