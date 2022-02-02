import { MyshopPage } from './app.po';

describe('myshop App', () => {
  let page: MyshopPage;

  beforeEach(() => {
    page = new MyshopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
