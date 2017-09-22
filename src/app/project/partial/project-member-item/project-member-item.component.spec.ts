import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMemberItemComponent } from './project-member-item.component';

describe('ProjectMemberItemComponent', () => {
  let component: ProjectMemberItemComponent;
  let fixture: ComponentFixture<ProjectMemberItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectMemberItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMemberItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
