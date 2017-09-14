import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sb-module-add',
  templateUrl: './module-add.component.html',
  styleUrls: ['./module-add.component.scss']
})
export class ModuleAddComponent implements OnInit {
  module = {};

  constructor() { }

  ngOnInit() {
  }

}
