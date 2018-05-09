import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetnameComponent } from './resetname.component';

describe('ResetnameComponent', () => {
  let component: ResetnameComponent;
  let fixture: ComponentFixture<ResetnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
