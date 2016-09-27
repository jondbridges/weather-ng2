import { browser, element, by } from 'protractor/globals';

export class WeatherNg2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('awa-app h1')).getText();
  }
}
