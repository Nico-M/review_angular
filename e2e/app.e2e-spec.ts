import { ReviewPage } from './app.po';

describe('review App', () => {
  let page: ReviewPage;

  beforeEach(() => {
    page = new ReviewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
