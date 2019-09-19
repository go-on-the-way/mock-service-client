import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysManageComponent } from './sys-manage.component';

describe('SysManageComponent', () => {
  let component: SysManageComponent;
  let fixture: ComponentFixture<SysManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
