import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterService } from '../../../service/inter.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'sb-inter-edit',
  templateUrl: './inter-edit.component.html',
  styleUrls: ['./inter-edit.component.scss']
})
export class InterEditComponent implements OnInit {
  err;
  inter;
  docId;
  moduleId;

  // @ViewChild(InterFormComponent) interFormComponent;

  constructor(private route: ActivatedRoute, private interService: InterService,
    private message: NzMessageService) { }

  ngOnInit() {
    this.route.paramMap.map(paramMap => {
      this.docId = paramMap.get('docId');
      let interId = paramMap.get('interId');
      this.loadInter(interId);
    }).subscribe();

    this.route.queryParamMap.map(qm => {
      this.moduleId = qm.get('moduleId');
    }).subscribe();
  }

  loadInter(interId) {
    this.inter = null;
    this.interService.getOne(this.docId, interId).map(inter => {
      this.inter = inter;
    }).subscribe();
  }

  onSave(event) {
    let data = event.data;
    data.interId = this.inter.interId;
    data.docId = this.docId;
    this.interService.update(data).subscribe(
      ok => {
        this.message.success('修改接口成功');
        // 刷新树
      },
      err => {
        this.err = err;
      }
    );
  }

}
