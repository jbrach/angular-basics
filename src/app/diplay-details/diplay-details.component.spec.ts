import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplayDetailsComponent } from './diplay-details.component';

describe('DiplayDetailsComponent', () => {
  let component: DiplayDetailsComponent;
  let fixture: ComponentFixture<DiplayDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiplayDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
