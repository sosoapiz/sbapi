import { Module } from './../../../entity/module';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sb-module-form',
  templateUrl: './module-form.component.html',
  styleUrls: ['./module-form.component.scss']
})
export class ModuleFormComponent implements OnInit {
  @Input() module: Module;

  @Output() save: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();

  moduleForm: FormGroup;

  _submitForm(event, value) {
    for (const i in this.moduleForm.controls) {
      this.moduleForm.controls[ i ].markAsDirty();
    }
  }

  constructor(private fb: FormBuilder) { }

  get isCreate() {
    return !this.module.id;
  }

  ngOnInit() {
    this.initForm(this.module || {});
  }

  initForm(entity) {
    this.moduleForm = this.fb.group({
      id: [entity.id],
      name: [entity.name],
      description: [entity.description],
    });
  }

  getFormControl(name) {
    return this.moduleForm.controls[name];
  }

  _save(event) {
    this._submitForm(event, this.moduleForm.value);
    if (this.moduleForm.valid) {
      this.save.emit({originalEvent: event, data: this.moduleForm.value, next: false});
    }
  }

  _saveAndNext(event) {
    this._submitForm(event, this.moduleForm.value);
    if (this.moduleForm.valid) {
      this.save.emit({originalEvent: event, data: this.moduleForm.value, next: true});
    }
  }

  _cancel(event) {
    this.cancel.emit({originalEvent: event});
  }
}
