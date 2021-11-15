import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionplanComponent } from './sessionplan.component';

describe('SessionplanComponent', () => {
  let component: SessionplanComponent;
  let fixture: ComponentFixture<SessionplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
