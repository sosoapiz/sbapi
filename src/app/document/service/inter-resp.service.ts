import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpAdaptor } from '../../core/http/http-adaptor';
import { InterResp } from '../entity/inter-resp';
import { FormDataUtil } from '../../core/utils/form-data-util';

@Injectable()
export class InterRespService {
    constructor(private httpAdaptor: HttpAdaptor) { }

    list(docId: number, interId: number): Observable<InterResp[]> {
        return this.httpAdaptor.get('/api/doc/inter/resp/list', {params: {docId: docId, interId: interId}});
    }

    getOne(docId, respId): Observable<InterResp> {
        return this.httpAdaptor.get('/api/doc/inter/resp/info', {params: {docId: docId, respId: respId}});
    }

    add(interResp) {
        let formData = FormDataUtil.covert(interResp);
        formData.append('respId', interResp.id);
        return this.httpAdaptor.post('/api/doc/inter/resp/add', formData);
    }

    update(interResp) {
        let formData = FormDataUtil.covert(interResp);
        formData.append('respId', interResp.id);
        return this.httpAdaptor.post('/api/doc/inter/resp/update', formData);
    }

    delete(docId, respId) {
        return this.httpAdaptor.get('/api/doc/inter/resp/del', {params: {docId: docId, respId: respId}});
    }
}
