import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { ModuleService } from './../../../service/module.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sb-module-add',
  templateUrl: './module-add.component.html',
  styleUrls: ['./module-add.component.scss']
})
export class ModuleAddComponent implements OnInit {
  document;
  module = {};
  err;

  constructor(private moduleService: ModuleService, private message: NzMessageService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data: { document: Document }) => {
      this.document = data.document;
    });
  }

  onSave(event) {
    let data = event.data;
    data.docId = this.document.id;
    this.moduleService.add(data).subscribe(
      ok => {
        this.moduleService.flushed.emit(ok);
        this.message.success('添加模块成功');
        // 刷新左侧树
      },
      err => {
        this.err = err;
      }
    );
  }

  onCancel(event) {}
}
