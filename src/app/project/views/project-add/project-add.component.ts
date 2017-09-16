import { ProjectService } from './../../service/project.service';
import { Component, OnInit } from '@angular/core';
import { NzModalSubject, NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'sb-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.scss']
})
export class ProjectAddComponent implements OnInit {
  err;

  constructor(private subject: NzModalSubject , private projectService: ProjectService, private message: NzMessageService) { }

  ngOnInit() {
  }

  onSave(event) {
    this.projectService.add(event.data).subscribe(
      proj => {
        this.message.success('添加项目成功');

        this.subject.next('refresh');
        if (!event.next) {
          // 会先执行上面的刷新并关闭窗口
          this.subject.next('onOk');
        }
      },
      err => {
        this.err = err;
      }
    );
  }

  onCancel(event) {
    this.subject.next('onCancel');
  }
}
