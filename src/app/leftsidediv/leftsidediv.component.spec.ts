import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftsidedivComponent } from './leftsidediv.component';

describe('LeftsidedivComponent', () => {
  let component: LeftsidedivComponent;
  let fixture: ComponentFixture<LeftsidedivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftsidedivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftsidedivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
