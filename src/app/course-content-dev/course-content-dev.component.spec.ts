import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseContentDevComponent } from './course-content-dev.component';

describe('CourseContentDevComponent', () => {
  let component: CourseContentDevComponent;
  let fixture: ComponentFixture<CourseContentDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseContentDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseContentDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
