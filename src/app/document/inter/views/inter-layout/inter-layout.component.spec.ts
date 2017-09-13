import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterLayoutComponent } from './inter-layout.component';

describe('InterLayoutComponent', () => {
  let component: InterLayoutComponent;
  let fixture: ComponentFixture<InterLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
