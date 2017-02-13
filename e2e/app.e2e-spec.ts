import { TestPwaPage } from './app.po';

describe('test-pwa App', function() {
  let page: TestPwaPage;

  beforeEach(() => {
    page = new TestPwaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
