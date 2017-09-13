import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterOutlineItemComponent } from './inter-outline-item.component';

describe('InterOutlineItemComponent', () => {
  let component: InterOutlineItemComponent;
  let fixture: ComponentFixture<InterOutlineItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterOutlineItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterOutlineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
