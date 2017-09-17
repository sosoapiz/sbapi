import { Component, OnInit, Input } from '@angular/core';
import { InterParamService } from '../../../service/inter-param.service';
import { NzMessageService } from 'ng-zorro-antd';
import { InterParam } from '../../../entity/inter-param';

@Component({
  selector: 'sb-inter-request',
  templateUrl: './inter-request.component.html',
  styleUrls: ['./inter-request.component.scss']
})
export class InterRequestComponent implements OnInit {
  @Input() docId: number;
  @Input() interId: number;

  interParams: InterParam[];

  _positions = [
    { label: 'body', value: 'body', disabled: false },
    { label: 'cookie', value: 'cookie', disabled: false },
    { label: 'formData', value: 'formData', disabled: false },
    { label: 'header', value: 'header', disabled: false },
    { label: 'path', value: 'path', disabled: false },
    { label: 'query', value: 'query', disabled: false },
  ];

  // 'sys_string' | 'sys_boolean' |  'sys_integer_int32' | 'sys_integer_int64' |
  // 'sys_number_float' | 'sys_number_double' | 'sys_number_decimal' | 'sys_file' | 'sys_ref' | 'cust_json' ;
  _typies = [
    { label: 'string', value: 'sys_string', disabled: false },
    { label: 'boolean', value: 'sys_boolean', disabled: false },
    { label: 'int', value: 'sys_integer_int32', disabled: false },
    { label: 'long', value: 'sys_integer_int64', disabled: false },
    { label: 'float', value: 'sys_number_float', disabled: false },
    { label: 'double', value: 'sys_number_double', disabled: false },
    { label: 'decimal', value: 'sys_number_decimal', disabled: false },
    { label: 'file', value: 'sys_file', disabled: false },
    { label: 'ref', value: 'sys_ref', disabled: false },
    { label: '自定义', value: 'cust_json', disabled: false },
  ];

  constructor(private interParamSerivce: InterParamService, private message: NzMessageService) { }

  ngOnInit() {
    this.loadParams();
  }

  loadParams() {
    this.interParamSerivce.list(this.docId, this.interId).subscribe(
      interParams => {
        this.interParams = interParams;
        if (!this.interParams || this.interParams.length == 0) {
          this.add(null);
        }
      }
    );
  }

  add(event) {
    let interParam = new InterParam();
    interParam.position = 'query';
    interParam.type = 'sys_string';
    this.interParams = [...(this.interParams ? this.interParams : []), interParam];
  }

  save(event) {
    this.interParamSerivce.add(this.docId, this.interId, this.interParams).subscribe(
      ok => {
        this.message.success('保存成功');
        this.loadParams();
      }
    );
  }

  reload(event) {
    this.loadParams();
  }

  clean(event) {
    this.interParams = [];
    this.add(event);
  }

  delete(event, id) {
    this.interParams = this.interParams.filter( it => it.id != id);
    if (!this.interParams || this.interParams.length == 0) {
      this.add(null);
    }
  }

}
