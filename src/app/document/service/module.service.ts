import { FormDataUtil } from './../../core/utils/form-data-util';
import { Module } from './../entity/module';
import { HttpAdaptor } from './../../core/http/http-adaptor';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ModuleService {
    constructor(private httpAdaptor: HttpAdaptor) { }

    list(docId): Observable<Module[]> {
        return this.httpAdaptor.get('/api/doc/module/list', {params: {docId: docId}});
    }

    getOne(moduleId): Observable<Module> {
        return this.httpAdaptor.get('/api/doc/module/info', {params: {moduleId: moduleId}});
    }

    add(module) {
        let formData = FormDataUtil.covert(module);
        return this.httpAdaptor.post('/api/doc/module/add', formData);
    }

    update(module) {
        let formData = FormDataUtil.covert(module);
        return this.httpAdaptor.post('/api/doc/module/update', formData);
    }

    delete(id) {
        return this.httpAdaptor.get('/api/doc/module/del', {params: {projId: id}});
    }
}
