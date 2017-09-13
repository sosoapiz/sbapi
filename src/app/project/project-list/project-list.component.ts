import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'sb-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  validateForm: FormGroup;
  controlArray = [];
  isCollapse = true;
  data = [
    { name: '企慕课堂-部署版', shortName: 'parim-spark', roleName: '拥有者', createDate: '2018-12-23', status: '开启' }
  ];

  toggleCollapse() {
    this.isCollapse = !this.isCollapse;
    this.controlArray.forEach((c, index) => {
      c.show = this.isCollapse ? (index < 6) : true;
    });
  }

  resetForm() {
    this.validateForm.reset();
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({});
    this.controlArray.push({index: 'name', label: '名称', show: true, control: new FormControl()});
    this.controlArray.push({index: 'shortName', label: '短名称', show: true, control: new FormControl()});
    this.controlArray.push({index: 'status', label: '状态', show: true, control: new FormControl()});

    this.controlArray.map((it: {index: string, control: any}) => {
      this.validateForm.addControl(it.index, it.control);
    });
  }

}
