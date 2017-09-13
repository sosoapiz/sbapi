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

  validateForm: FormGroup;

  _submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
    }
  }

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    this.route.data.subscribe((data: {project: Project}) => {
      this.project = data.project;
      this.initForm();
    });
  }

  initForm() {
    this.validateForm = this.fb.group({
      name              : [ this.project.name, [ Validators.required ] ],
      shortName         : [ this.project.shortName, [ Validators.required ] ],
      status            : [ this.project.status, null ],
      description       : [ this.project.description, null ],
    });
  }

  getFormControl(name) {
    return this.validateForm.controls[ name ];
  }

  resetForm(e) {}
}
