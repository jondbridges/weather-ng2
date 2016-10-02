import { TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';

describe('App: TestProject', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render the awa-header', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const header  = fixture.debugElement.query(By.css('awa-header')).nativeElement;
    fixture.detectChanges();

    expect(header).toBeDefined();
  }));

  it('should render the router-outlet', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const routerOutlet  = fixture.debugElement.query(By.css('router-outlet')).nativeElement;
    fixture.detectChanges();

    expect(routerOutlet).toBeDefined();
  }));
});
