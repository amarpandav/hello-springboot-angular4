import { HelloSpringbootAngular4Page } from './app.po';

describe('hello-springboot-angular4 App', () => {
  let page: HelloSpringbootAngular4Page;

  beforeEach(() => {
    page = new HelloSpringbootAngular4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
