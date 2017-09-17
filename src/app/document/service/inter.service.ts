import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpAdaptor } from '../../core/http/http-adaptor';
import { Inter } from '../entity/inter';
import { FormDataUtil } from '../../core/utils/form-data-util';

@Injectable()
export class InterService {
    constructor(private httpAdaptor: HttpAdaptor) { }

    list(docId, moduleId?): Observable<Inter[]> {
        return this.httpAdaptor.get('/api/doc/inter/list', {params: {docId: docId, moduleId: moduleId}})
            .map(page => page.list);
    }

    getOne(docId, interId): Observable<Inter> {
        return this.httpAdaptor.get('/api/doc/inter/info', {params: {docId: docId, interId: interId}});
    }

    copy(docId, interId): Observable<Inter> {
        return this.httpAdaptor.post('/api/doc/inter/copy', null, {params: {docId: docId, interId: interId}});
    }

    add(inter) {
        let formData = FormDataUtil.covert(inter);
        return this.httpAdaptor.post('/api/doc/inter/add', formData);
    }

    update(inter) {
        let formData = FormDataUtil.covert(inter);
        return this.httpAdaptor.post('/api/doc/inter/update', formData);
    }

    delete(docId, interId) {
        return this.httpAdaptor.get('/api/doc/inter/del', {params: {docId: docId, interId: interId}});
    }
}
