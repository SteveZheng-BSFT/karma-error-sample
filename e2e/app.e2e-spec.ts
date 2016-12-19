import { KarmaErrorSamplePage } from './app.po';

describe('karma-error-sample App', function() {
  let page: KarmaErrorSamplePage;

  beforeEach(() => {
    page = new KarmaErrorSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
