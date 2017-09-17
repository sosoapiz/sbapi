import { Component, OnInit, ViewChild } from '@angular/core';
import { Module } from '../../../entity/module';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ModuleService } from '../../../service/module.service';
import { ModuleFormComponent } from '../../partial/module-form/module-form.component';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'sb-module-edit',
  templateUrl: './module-edit.component.html',
  styleUrls: ['./module-edit.component.scss']
})
export class ModuleEditComponent implements OnInit {
  err;
  module: Module;
  @ViewChild(ModuleFormComponent) _mf;

  constructor(private router: Router, private route: ActivatedRoute,
    private moduleService: ModuleService, private message: NzMessageService) { }

  ngOnInit() {
    this.route.params.map((params: {moduleId}) => {
      let moduleId = params.moduleId;
      if (moduleId) {
        this.moduleService.getOne(moduleId).map(module => {
          this.module = module;
          this._mf.initForm(module);
        }).subscribe();
      }
    }).subscribe();
  }

  onSave(event) {
    let data = event.data;
    data.id = this.module.id;
    data.moduleId = this.module.id;
    data.docId = this.module.docId;
    this.moduleService.update(data).subscribe(
      ok => {
        // 刷新左侧树
        this.moduleService.flushed.emit(ok);
        this.message.success('更新模块成功');
      },
      err => {
        this.err = err;
      }
    );
  }

  onCancel(event) {}
}
