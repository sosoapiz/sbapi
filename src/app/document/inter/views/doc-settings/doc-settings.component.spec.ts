import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocSettingsComponent } from './doc-settings.component';

describe('DocSettingsComponent', () => {
  let component: DocSettingsComponent;
  let fixture: ComponentFixture<DocSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
