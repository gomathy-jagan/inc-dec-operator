import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorincdecComponent } from './operatorincdec.component';

describe('OperatorincdecComponent', () => {
  let component: OperatorincdecComponent;
  let fixture: ComponentFixture<OperatorincdecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorincdecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorincdecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
