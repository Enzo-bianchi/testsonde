import { SondeprodottiPage } from './app.po';

describe('sondeprodotti App', function() {
  let page: SondeprodottiPage;

  beforeEach(() => {
    page = new SondeprodottiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
