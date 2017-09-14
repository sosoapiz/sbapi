import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sb-module-form',
  templateUrl: './module-form.component.html',
  styleUrls: ['./module-form.component.scss']
})
export class ModuleFormComponent implements OnInit {
  @Input() module: any;

  moduleForm: FormGroup;

  _submitForm(event, value) {}

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    let entity = this.module || {};
    this.moduleForm = this.fb.group({
      id: [entity.id],
      name: [entity.name],
      description: [entity.description],
    });
  }

  getFormControl(name) {
    return this.moduleForm.controls[name];
  }
}
