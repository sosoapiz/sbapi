import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqLayoutComponent } from './faq-layout.component';

describe('FaqLayoutComponent', () => {
  let component: FaqLayoutComponent;
  let fixture: ComponentFixture<FaqLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
