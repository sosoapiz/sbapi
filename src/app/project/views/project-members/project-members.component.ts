import { NzMessageService } from 'ng-zorro-antd';
import { ProjectMember } from './../../entity/project-member';
import { Project } from './../../entity/project';
import { ProjectMemberService } from './../../service/project-member.service';
import { ActivatedRoute } from '@angular/router';
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

  _roles = [
    { label: '访客', value: 'guest', disabled: false },
    { label: 'demo', value: 'viewer', disabled: false },
    { label: '管理员', value: 'admin', disabled: false },
  ];

  project: Project;
  members = [];

  _searchOptions = [];

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private projectMemberService: ProjectMemberService, private message: NzMessageService) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      username: [null],
    });

    this.addForm = this.fb.group({
      userIds: [null, Validators.required],
      role: ['guest', Validators.required]
    });

    this.route.data.subscribe( (data: {project: Project}) => {
      this.project = data.project;
      this.loadMembers();
    });
  }

  loadMembers() {
    this.projectMemberService.list(this.project.projId).subscribe(
      members => {
        this.members = members;
      }
    );
  }

  _submitForm() {
    for (const i in this.addForm.controls) {
      this.addForm.controls[i].markAsDirty();
    }
  }

  searchChange(searchText) {
    if (!searchText) {
       this._searchOptions = [];
       return;
    }

    this.projectMemberService.listForAdd(this.project.projId, searchText)
      .map((members: ProjectMember[]) => {
          if (searchText) {
              return members.filter( it => (it.email.includes(searchText) || it.nickName.includes(searchText)));
          } else {
              return members;
          }
      }).subscribe(
        members => {
          this._searchOptions = members;
        }
      );
  }

  getRoleDisplayName(key: string) {
    return {
      admin: '管理员',
      viewer: 'demo',
      guest: '访客'
    }[key];
  }

  addMember(event) {
    // console.log(this.addForm.value);
    this._submitForm();

    if (this.addForm.valid) {
      let data = this.addForm.value;
      data['projId'] = this.project.projId;
      this.projectMemberService.add(data).subscribe(
        ok => {
          this.message.success('添加成员成功');
          this.loadMembers();
        },
        err => {
          this.message.error('添加成员失败，请重试');
        }
      );
    }
  }

  delete(mem: ProjectMember) {
    this.projectMemberService.delete(this.project.projId, mem.userId).subscribe(
      ok => {
        this.message.success('移除成员成功');
        this.loadMembers();
      },
      err => {
        this.message.error('移除成员失败，请重试');
      }
    );
  }
}
