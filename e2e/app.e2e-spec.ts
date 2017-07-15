import { GymangularPage } from './app.po';

describe('gymangular App', () => {
  let page: GymangularPage;

  beforeEach(() => {
    page = new GymangularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
