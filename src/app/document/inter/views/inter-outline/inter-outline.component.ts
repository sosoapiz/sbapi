import { ActivatedRoute, Router } from '@angular/router';
import { Module } from './../../../entity/module';
import { ModuleService } from './../../../service/module.service';
import { Component, OnInit } from '@angular/core';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { InterService } from '../../../service/inter.service';
import { Inter } from '../../../entity/inter';

@Component({
  selector: 'sb-inter-outline',
  templateUrl: './inter-outline.component.html',
  styleUrls: ['./inter-outline.component.scss']
})
export class InterOutlineComponent implements OnInit {
  document;

  modules: Module[];
  inters: Inter[];

  constructor(private moduleService: ModuleService, private modal: NzModalService,
    private router: Router,  private route: ActivatedRoute, private interService: InterService,
    private message: NzMessageService) { }

  ngOnInit() {
    this.route.data.subscribe((data: { document: Document }) => {
      this.document = data.document;
      this.loadModules();
      this.loadInters();
    });

    this.moduleService.flushed.subscribe( e => {
      this.loadModules();
    });
  }

  loadModules() {
    this.moduleService.list(this.document.id).subscribe(
      modules => {
        this.modules = modules;
        this.modules.forEach( it => {
          this.loadInters(it);
        });
      }
    );
  }

  loadInters(module?) {
    let moduleId = module ? module.id : undefined;
    this.interService.list(this.document.id, moduleId).map(inters => {
      if (module) {
        module['inters'] = inters;
      } else {
        this.inters = inters;
      }
    }).subscribe();
  }

  onAction(event) {
    console.log(event);
  }

  onModuleAction(event, moduleId) {
    switch (event) {
      case 'addInter':
        this.router.navigate(['inter/add'], {relativeTo: this.route, queryParams: {moduleId: moduleId}});
        break;
      case 'edit':
        this.router.navigate(['module', moduleId], {relativeTo: this.route});
        break;
      case 'delete':
        this.modal.confirm({
          content: '确认要删除此模块吗？',
          onOk: () => {
            this.moduleService.delete(this.document.id, moduleId).subscribe(
              ok => {
                this.loadModules();
              }
            );
          }
        });
        break;
      default:
        break;
    }
  }

  onInterAction(event, interId) {
    switch (event) {
      case 'edit':
        this._editInter(interId);
        break;
      case 'delete':
        this._deleteInter(interId);
        break;
      default:
        break;
    }
  }

  _editInter(interId) {
    this.router.navigate(['inter', interId], {relativeTo: this.route});
  }

  _deleteInter(interId) {
    this.modal.confirm({
      content: '确定要删除此接口吗？',
      onOk: () => {
        this.interService.delete(this.document.id, interId).subscribe(
          ok => {
            this.message.success('删除成功');
            this.loadModules();
            this.loadInters();
          }
        );
      }
    });
  }
}
