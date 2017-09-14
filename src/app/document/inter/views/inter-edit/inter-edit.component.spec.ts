import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterEditComponent } from './inter-edit.component';

describe('InterEditComponent', () => {
  let component: InterEditComponent;
  let fixture: ComponentFixture<InterEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
