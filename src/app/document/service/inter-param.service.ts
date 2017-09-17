import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpAdaptor } from '../../core/http/http-adaptor';
import { InterParam } from '../entity/inter-param';

@Injectable()
export class InterParamService {
    constructor(private httpAdaptor: HttpAdaptor) { }

    list(docId: number, interId: number): Observable<InterParam[]> {
        return this.httpAdaptor.get('/api/doc/inter/param/list', {params: {docId: docId, interId: interId}});
    }

    add(docId: number, interId: number, interParams: InterParam[]): Observable<any> {
        let formData = new FormData();
        formData.append('docId', `${docId}`);
        formData.append('interId', `${interId}`);
        formData.append('reqParam', JSON.stringify(interParams));

        return this.httpAdaptor.post('/api/doc/inter/param/add', formData);
    }
}
