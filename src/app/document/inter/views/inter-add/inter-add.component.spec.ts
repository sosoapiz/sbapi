import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterAddComponent } from './inter-add.component';

describe('InterAddComponent', () => {
  let component: InterAddComponent;
  let fixture: ComponentFixture<InterAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
