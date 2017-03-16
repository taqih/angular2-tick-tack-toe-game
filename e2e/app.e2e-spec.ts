import { TickTackPage } from './app.po';

describe('tick-tack App', () => {
  let page: TickTackPage;

  beforeEach(() => {
    page = new TickTackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
