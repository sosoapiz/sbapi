import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterRequestComponent } from './inter-request.component';

describe('InterRequestComponent', () => {
  let component: InterRequestComponent;
  let fixture: ComponentFixture<InterRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
