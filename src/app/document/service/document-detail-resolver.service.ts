import { DocumentService } from './document.service';
import { Document } from './../entity/document';
import { Observable } from 'rxjs/Observable';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class DocumentDetailResolver implements Resolve<Document> {

    constructor(private documentService: DocumentService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Document> {
        let id = route.paramMap.get('docId');

        return this.documentService.getOne(+id)
            .map(doc => {
                return doc;
            })
            .catch(err => {
                this.router.navigate(['/project/list']);
                return Observable.of(err);
            });
    }
}
