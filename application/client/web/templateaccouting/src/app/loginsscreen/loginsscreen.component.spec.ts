import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsscreenComponent } from './loginsscreen.component';

describe('LoginsscreenComponent', () => {
  let component: LoginsscreenComponent;
  let fixture: ComponentFixture<LoginsscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginsscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginsscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});