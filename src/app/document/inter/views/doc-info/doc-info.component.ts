import { Project } from './../../../../project/entity/project';
import { ActivatedRoute } from '@angular/router';
import { Document } from './../../../entity/document';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sb-doc-info',
  templateUrl: './doc-info.component.html',
  styleUrls: ['./doc-info.component.scss']
})
export class DocInfoComponent implements OnInit {
  document: Document;
  docForm: FormGroup;

  _submitForm(event, value) {

  }

  constructor(private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: { document: Document }) => {
      this.document = data.document;
      this.initForm(this.document);
    });
  }

  initForm(entity: Document) {
    this.docForm = this.fb.group({
      id: [entity.id],
      title: [entity.title, Validators.required],
      version: [entity.version],
      isPublished: [entity.isPublished || false],
      description: [entity.description]
    });
  }

  getFormControl(name) {
    return this.docForm.controls[ name ];
  }
}
