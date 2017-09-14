import { Document } from './../entity/document';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DocumentService {
    constructor(private http: Http) { }

    getOne(id: number): Observable<Document> {
        let document: Document = {id: 1, title: '文档标题', version: 'V1.2.3', isPublished: true, description: '文档描述'};

        return Observable.of(document);
    }

}
