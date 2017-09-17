import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterService } from '../../../service/inter.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Observable } from 'rxjs/Observable';
import { InterFormComponent } from '../../partial/inter-form/inter-form.component';

@Component({
  selector: 'sb-inter-add',
  templateUrl: './inter-add.component.html',
  styleUrls: ['./inter-add.component.scss']
})
export class InterAddComponent implements OnInit {

  err;

  docId;
  moduleId;

  // @ViewChild(InterFormComponent) interFormComponent;

  constructor(private route: ActivatedRoute, private interService: InterService,
    private message: NzMessageService) { }

  ngOnInit() {
    this.route.paramMap.map(paramMap => {
      this.docId = paramMap.get('docId');
    }).subscribe();
    this.route.queryParamMap.map(qm => {
      this.moduleId = qm.get('moduleId');
    }).subscribe();
  }

  onSave(event) {
    let data = event.data;
    data.docId = this.docId;
    this.interService.add(data).subscribe(
      ok => {
        this.message.success('添加接口成功');
        // 刷新树
      },
      err => {
        this.err = err;
      }
    );
  }

}
