import { NzMessageService } from 'ng-zorro-antd';
import { ProjectService } from './../../service/project.service';
import { Project } from './../../entity/project';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'sb-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent implements OnInit {
  project: Project;
  err;

  constructor(private router: Router, private route: ActivatedRoute,
    private projectService: ProjectService, private message: NzMessageService) { }

  ngOnInit() {
    this.route.data.subscribe((data: {project: Project}) => {
      this.project = data.project;
    });
  }

  onSave(event) {
    let data = event.data;
    data.projId = this.project.projId;
    this.projectService.update(data).subscribe(
      proj => {
        this.message.success('更新项目信息成功');
      },
      err => {
        this.err = err;
      }
    );
  }
}
