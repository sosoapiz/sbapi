import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Project } from './../../entity/project';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sb-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {
  @Input() project: Project;
  @Output() save: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();

  projectForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  get isCreate() {
    return !this.project.projId;
  }

  ngOnInit() {
    this.project = this.project || new Project();

    this.initForm(this.project);
  }

  initForm(entity: Project) {
    this.projectForm = this.fb.group({
      name              : [ entity.name, [ Validators.required ] ],
      code              : [ entity.code, [ Validators.required ] ],
      status            : [ entity.status == 'open', null ],
      description       : [ entity.description, null ],
    });
  }

  getFormControl(name) {
    return this.projectForm.controls[ name ];
  }

  _submitForm(event, value) {
    for (const i in this.projectForm.controls) {
      this.projectForm.controls[ i ].markAsDirty();
    }

    if (this.projectForm.valid) {
      this._save(event, this.projectForm.value);
    }
  }

  _save(event, value) {
    value.status = value.status ? 'open' : 'close';
    this.save.emit({originalEvent: event, data: value, next: false});
  }

  _saveAndNext(event, value) {
    for (const i in this.projectForm.controls) {
      this.projectForm.controls[ i ].markAsDirty();
    }

    value.status = value.status ? 'open' : 'close';
    this.save.emit({originalEvent: event, data: value, next: true});
  }

  _cancel(event) {
    this.cancel.emit({originalEvent: event});
  }

  _resetForm(event) {
    this.initForm(this.project);
  }
}
