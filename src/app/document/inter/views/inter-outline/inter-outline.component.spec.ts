import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterOutlineComponent } from './inter-outline.component';

describe('InterOutlineComponent', () => {
  let component: InterOutlineComponent;
  let fixture: ComponentFixture<InterOutlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterOutlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
