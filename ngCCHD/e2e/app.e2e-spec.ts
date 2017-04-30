import { NgCCHD2Page } from './app.po';

describe('ng-cchd2 App', () => {
  let page: NgCCHD2Page;

  beforeEach(() => {
    page = new NgCCHD2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
