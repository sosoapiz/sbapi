import { ProjectMember } from './../entity/project-member';
import { HttpAdaptor } from './../../core/http/http-adaptor';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProjectMemberService {
    constructor(private httpAdaptor: HttpAdaptor) { }

    list(projId: number): Observable<ProjectMember[]> {
        return this.httpAdaptor.get('/api/proj/mem/list', {params: {projId: projId, pageSize: 1000}});
    }

    add(params: any): Observable<any> {
        return this.httpAdaptor.post('/api/proj/mem/add', null, {params: params});
    }

    delete(projId, userId): Observable<any> {
        return this.httpAdaptor.delete('/api/proj/mem/del', {params: {projId: projId, userId: userId}});
    }

    listForAdd(projId: number, searchText?: string): Observable<ProjectMember[]> {
        return this.httpAdaptor.get('/api/proj/mem/listForAdd', {params: {projId: projId, searchText: searchText, pageSize: 1000}});
    }
}
