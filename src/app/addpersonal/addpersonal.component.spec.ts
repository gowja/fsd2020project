import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpersonalComponent } from './addpersonal.component';

describe('AddpersonalComponent', () => {
  let component: AddpersonalComponent;
  let fixture: ComponentFixture<AddpersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
