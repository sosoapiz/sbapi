import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterResponseComponent } from './inter-response.component';

describe('InterResponseComponent', () => {
  let component: InterResponseComponent;
  let fixture: ComponentFixture<InterResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
