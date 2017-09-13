import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sb-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {

  data = [
    { title: '部署版学员端API文档', version: 'v1.0.0',
      projectName: '企慕课堂-部署版', projectShortName: 'parim-spark', createDate: '2018-12-23' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
