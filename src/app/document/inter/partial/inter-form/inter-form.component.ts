import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModuleService } from '../../../service/module.service';

@Component({
  selector: 'sb-inter-form',
  templateUrl: './inter-form.component.html',
  styleUrls: ['./inter-form.component.scss']
})
export class InterFormComponent implements OnInit {
  @Input() docId: number;
  @Input() moduleId: number;
  @Input() inter;

  @Output() save = new EventEmitter();

  interForm: FormGroup;

  _modules = [];

  _requestMethods = [
    { label: 'GET', value: 'GET', disabled: false }, { label: 'POST', value: 'POST', disabled: false },
    { label: 'PUT', value: 'PUT', disabled: false }, { label: 'DELETE', value: 'DELETE', disabled: false },
    { label: 'OPTIONS', value: 'OPTIONS', disabled: false }, { label: 'PATCH', value: 'PATCH', disabled: false } ];

  _requestProtocols = [ { label: 'HTTP', value: 'HTTP', disabled: false }, { label: 'HTTPS', value: 'HTTPS', disabled: false}];

  _requestFormats = [ { label: 'application/json', value: 'application/json', disabled: false },
    { label: 'application/x-www-form-urlencoded', value: 'application/x-www-form-urlencoded', disabled: false },
    { label: 'application/form-data', value: 'application/form-data', disabled: false  } ];

  _responseFormats = [ { label: 'application/json', value: 'application/json', disabled: false } ];

  _developmentStatus = [ { label: '草稿', value: 'DRAFT', disabled: false },
    { label: '开发中', value: 'DEVELOPING', disabled: false },
    { label: '已完成', value: 'COMPLETED', disabled: false } ];


  constructor(private fb: FormBuilder, private moduleService: ModuleService) { }

  ngOnInit() {
    this.inter = this.inter || {};

    this.moduleService.list(this.docId).map(modules => {
      modules.forEach(module => {
        this._modules.push({label: module.name, value: module.id, disabled: false});
      });
    }).subscribe();

    this.initForm();
  }

  initForm() {
    let entity = this.inter || {};

    this.interForm = this.fb.group({
      name: [entity.name, Validators.required],
      path: [entity.path, Validators.required],
      moduleId: [entity.moduleId || +this.moduleId],
      deprecated: [entity.deprecated || false],
      method: [entity.method || 'GET'],
      scheme: [entity.scheme || 'HTTP'],
      consume: [entity.consume || 'application/json'],
      produce: [entity.produce || 'application/json'],
      // developmentStatus: [entity.developmentStatus || 'DRAFT'],
      // principal: [entity.principal], // 责任人
      // tags: [entity.tags],
      // code: [entity.code],
      description: [entity.description]
    });
  }

  getFormControl(name) {
    return this.interForm.controls[name];
  }

  _submitForm(event, value) {
    for (let i in this.interForm.controls) {
      this.interForm.controls[i].markAsDirty();
    }
  }

  _save(event) {
    this._submitForm(event, this.interForm.value);

    if (this.interForm.valid) {
      this.save.emit({originalEvent: event, data: this.interForm.value});
    }
  }
}
