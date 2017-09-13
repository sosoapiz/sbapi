import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'sb-project-members',
  templateUrl: './project-members.component.html',
  styleUrls: ['./project-members.component.scss']
})
export class ProjectMembersComponent implements OnInit {

  searchForm: FormGroup;

  addForm: FormGroup;

  addExpanded: boolean = false;

  panels = [
    {
      active: false,
      name: '张三 zhangsan',
    },
    {
      active: false,
      name: '李四 lisi'
    },
    {
      active: false,
      name: '王五 wangwu'
    }
  ];

  _submitForm() {
    for (const i in this.searchForm.controls) {
      this.searchForm.controls[i].markAsDirty();
    }
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      username: [null],
    });

    this.addForm = this.fb.group({
      username: [],
      role: ['GUST']
    });
  }

  searchChange(searchText) {
    const query = encodeURI(searchText);
  }
}
