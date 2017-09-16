import { ProjectImportComponent } from './../project-import/project-import.component';
import { ProjectAddComponent } from './../project-add/project-add.component';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../service/project.service';
import {
  FormBuilder,
  FormGroup,
  FormControl
} from '@angular/forms';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';

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
    // {id: 1, name: '企慕课堂-部署版', shortName: 'parim-spark', roleName: '拥有者', createDate: '2018-12-23', status: '开启' }
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

  constructor(private fb: FormBuilder, private projectService: ProjectService,
    private modalService: NzModalService, private message: NzMessageService) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({});
    this.controlArray.push({index: 'name', label: '名称', show: true, control: new FormControl()});
    this.controlArray.push({index: 'shortName', label: '短名称', show: true, control: new FormControl()});
    this.controlArray.push({index: 'status', label: '状态', show: true, control: new FormControl()});

    this.controlArray.map((it: {index: string, control: any}) => {
      this.validateForm.addControl(it.index, it.control);
    });

    this.loadData();
  }

  loadData() {
    this.projectService.getList().subscribe(
      pager => {
        this.data = pager.list;
      }
    );
  }

  openAdd() {
    const subscription = this.modalService.open({
      title: '添加项目',
      content: ProjectAddComponent,
      onOk: () => {},
      onCancel() {},
      footer: false,
      maskClosable: false,
      width: 800,
      componentParams: {}
    });

    subscription.subscribe(result => {
      if (result == 'refresh') {
        this.loadData();
      }
    });
  }

  openImport() {
    const subscription = this.modalService.open({
      title: '导入项目',
      content: ProjectImportComponent,
      onOk: () => {},
      onCancel() {},
      footer: false,
      maskClosable: false,
      componentParams: {},
    });

    subscription.subscribe(result => {
      if (result == 'refresh') {
        this.loadData();
      }
    });
  }

  copy(id) {
    this.projectService.copy(id).subscribe(
      ok => {
        this.message.success('复制成功');
        this.loadData();
      },
      err => {
        this.message.warning('复制失败，请重试');
      }
    );
  }

  delete(id) {
    this.projectService.delete(id).subscribe(
      ok => {
        this.message.success('删除成功');
        this.loadData();
      },
      err => {
        this.message.warning('删除失败，请重试');
      }
    );
  }

}
