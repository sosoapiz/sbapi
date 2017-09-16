import { FormDataUtil } from './../../core/utils/form-data-util';
import { Project } from './../entity/project';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpAdaptor } from '../../core/http/http-adaptor';

@Injectable()
export class ProjectService {
    constructor(private httpAdaptor: HttpAdaptor) { }

    getList(): Observable<any> {
        return this.httpAdaptor.get('/api/proj/list');
    }

    getOne(id): Observable<Project> {
        // return null;
        // let project: Project = {id: 1, name: '启幕课堂-部署版', shortName: 'parim-spark', status: 'ON',
        //    description: '企慕课堂部署版前端开发API文档管理', document: {id: 1}};

        return this.httpAdaptor.get('/api/proj/info', {params: {projId: id}});
    }

    add(project: Project): Observable<Project> {
        let formData = FormDataUtil.covert(project);
        return this.httpAdaptor.post('/api/proj/add', formData);
    }

    update(project: Project): Observable<Project> {
        let formData = FormDataUtil.covert(project);
        return this.httpAdaptor.post('/api/proj/update', formData);
    }

    copy(id): Observable<any> {
        return this.httpAdaptor.post('/api/proj/copy', null, {params: {projId: id}});
    }

    delete(id): Observable<any> {
        return this.httpAdaptor.get('/api/proj/del', {params: {projId: id}});
    }
}
