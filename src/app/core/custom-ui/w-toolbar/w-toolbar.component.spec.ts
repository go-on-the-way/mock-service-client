import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WToolbarComponent } from './w-toolbar.component';

describe('WToolbarComponent', () => {
  let component: WToolbarComponent;
  let fixture: ComponentFixture<WToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
