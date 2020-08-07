import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdetailComponent } from './mdetail.component';

describe('MdetailComponent', () => {
  let component: MdetailComponent;
  let fixture: ComponentFixture<MdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
