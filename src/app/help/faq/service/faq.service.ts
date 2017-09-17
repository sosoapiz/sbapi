import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ARTICLES_FAQ } from '../data/index';

@Injectable()
export class FaqService {

    constructor() { }

    get(name: string): Observable<any[]> {
        return Observable.of(ARTICLES_FAQ[name]);
    }
}
