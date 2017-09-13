import { Router, ActivatedRoute } from '@angular/router';
import { Project } from './../../entity/project';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sb-project-layout',
  templateUrl: './project-layout.component.html',
  styleUrls: ['./project-layout.component.scss']
})
export class ProjectLayoutComponent implements OnInit {
  isCollapsed = false;

  project: Project;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: { project: Project }) => {
      this.project = data.project;
    });
  }

}
