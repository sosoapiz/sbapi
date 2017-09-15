import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sb-inter-form',
  templateUrl: './inter-form.component.html',
  styleUrls: ['./inter-form.component.scss']
})
export class InterFormComponent implements OnInit {
  @Input() inter;

  interForm: FormGroup;

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

  _submitForm(event, value) {

  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.inter = this.inter || {};
    this.initForm(this.inter);
  }

  initForm(entity) {
    this.interForm = this.fb.group({
      name: [entity.name],
      url: [entity.url],
      moduleId: [entity.moduleId],
      isPublished: [entity.isPublished || true],
      requestMethod: [entity.requestMethod || 'GET'],
      requestProtocol: [entity.requestProtocol || 'HTTP'],
      requestFormat: [entity.requestFormat || 'application/json'],
      responseFormat: [entity.responseFormat || 'application/json'],
      developmentStatus: [entity.developmentStatus || 'DRAFT'],
      principal: [entity.principal], // 责任人
      tags: [entity.tags],
      code: [entity.code],
      description: [entity.description]
    });
  }

  getFormControl(name) {
    return this.interForm.controls[name];
  }

}
