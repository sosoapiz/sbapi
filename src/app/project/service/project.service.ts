import { Project } from './../entity/project';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProjectService {
    constructor(private http: Http) { }

    getOne(id): Observable<Project> {
        // return null;
        let project: Project = {id: 1, name: '启幕课堂-部署版', shortName: 'parim-spark', status: 'ON', description: '企慕课堂部署版前端开发API文档管理'};

        return Observable.of(project);
    }
}
