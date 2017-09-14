import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseUrlComponent } from './base-url.component';

describe('BaseUrlComponent', () => {
  let component: BaseUrlComponent;
  let fixture: ComponentFixture<BaseUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
