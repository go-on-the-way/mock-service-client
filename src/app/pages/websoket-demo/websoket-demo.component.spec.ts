import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsoketDemoComponent } from './websoket-demo.component';

describe('WebsoketDemoComponent', () => {
  let component: WebsoketDemoComponent;
  let fixture: ComponentFixture<WebsoketDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsoketDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsoketDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
