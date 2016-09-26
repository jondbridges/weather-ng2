import { WeatherNg2Page } from './app.po';

describe('weather-ng2 App', function() {
  let page: WeatherNg2Page;

  beforeEach(() => {
    page = new WeatherNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
