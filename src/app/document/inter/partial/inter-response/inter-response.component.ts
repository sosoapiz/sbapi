import { Component, OnInit, Input } from '@angular/core';
import { InterResp } from '../../../entity/inter-resp';
import { InterRespService } from '../../../service/inter-resp.service';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'sb-inter-response',
  templateUrl: './inter-response.component.html',
  styleUrls: ['./inter-response.component.scss']
})
export class InterResponseComponent implements OnInit {

  @Input() docId: number;
  @Input() interId: number;

  interRespes: InterResp[];

  respForm: FormGroup;
  isConfirmLoading: boolean = false;
  editingResp: InterResp;

  _typies = [
    { label: 'string', value: 'sys_string', disabled: false },
    { label: 'array', value: 'sys_array', disabled: false },
    { label: 'object', value: 'sys_object', disabled: false },
    { label: 'boolean', value: 'sys_boolean', disabled: false },
    { label: 'int', value: 'sys_integer_int32', disabled: false },
    { label: 'long', value: 'sys_integer_int64', disabled: false },
    { label: 'float', value: 'sys_number_float', disabled: false },
    { label: 'double', value: 'sys_number_double', disabled: false },
    { label: 'decimal', value: 'sys_number_decimal', disabled: false },
    // { label: 'file', value: 'sys_file', disabled: false },
    { label: 'ref', value: 'sys_ref', disabled: false },
    { label: '自定义', value: 'cust_json', disabled: false },
  ];

  constructor(private interRespService: InterRespService, private message: NzMessageService,
    private modal: NzModalService, private fb: FormBuilder) { }

  ngOnInit() {
    this.loadRespes();
  }

  loadRespes() {
    this.interRespService.list(this.docId, this.interId).subscribe(
      respes => {
        this.interRespes = respes;
      }
    );
  }


  openAdd(event) {
    let resp = new InterResp();
    this.editingResp = resp;
    this.initForm(resp);
  }

  openEdit(event, interResp) {
    this.editingResp = interResp;
    this.initForm(interResp);
  }

  initForm(entity: InterResp) {
    this.respForm = this.fb.group({
      code: [entity.code],
      description: [entity.description],
      type: [entity.type || 'sys_string'],
    });
  }

  getFormControl(name) {
    return this.respForm.controls[name];
  }

  _submitForm(event, value) {
    for (let i in this.respForm.controls) {
      this.respForm.controls[i].markAsDirty();
    }
  }

  handleOk(event) {
    if (!this.respForm) {
      return;
    }

    this._submitForm(event, this.respForm.value);

    if (this.respForm.valid) {
      let data = this.respForm.value;
      data['respId'] = this.editingResp.id;
      data['docId'] = this.docId;
      data['interId'] = this.interId;
      this.isConfirmLoading = true;
      this.interRespService[data.respId ? 'update' : 'add'].call(this.interRespService, data).subscribe(
        ok => {
          this.message.success('保存成功');
          this.isConfirmLoading = false;
          this.loadRespes();
          this.handleCancel(event);
        },
        err => {
          this.message.warning('保存失败，请重新尝试');
          this.isConfirmLoading = false;
        }
      );
    }

  }

  handleCancel(event) {
    this.respForm = null;
    this.editingResp = null;
  }

  delete(event, id) {
    this.interRespService.delete(this.docId, id).subscribe(
      ok => {
        this.message.success('保存成功');
        this.loadRespes();
      },
      err => {
        this.message.warning('保存失败，请重新尝试');
      }
    );
  }

  clean(event) {
    this.interRespes.forEach(it => {
      this.delete(event, it.id);
    });
  }

}
