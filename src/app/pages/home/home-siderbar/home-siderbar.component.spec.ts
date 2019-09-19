import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSiderbarComponent } from './home-siderbar.component';

describe('HomeSiderbarComponent', () => {
  let component: HomeSiderbarComponent;
  let fixture: ComponentFixture<HomeSiderbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSiderbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSiderbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
