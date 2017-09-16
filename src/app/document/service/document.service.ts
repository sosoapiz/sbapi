import { HttpAdaptor } from './../../core/http/http-adaptor';
import { Document } from './../entity/document';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DocumentService {
    constructor(private httpAdaptor: HttpAdaptor) { }

    getOne(id: number): Observable<Document> {
        return this.httpAdaptor.get('/api/doc/info', {params: {docId: id}});
    }

}
