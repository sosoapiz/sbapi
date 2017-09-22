import { ProjectMember } from './../../entity/project-member';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sb-project-member-item',
  templateUrl: './project-member-item.component.html',
  styleUrls: ['./project-member-item.component.scss']
})
export class ProjectMemberItemComponent implements OnInit {

  @Input() member: ProjectMember;

  constructor() { }

  ngOnInit() {
  }

}
