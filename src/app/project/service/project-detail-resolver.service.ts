import { ProjectService } from './project.service';
import { Project } from './../entity/project';
import { Observable } from 'rxjs/Observable';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class ProjectDetailResolver implements Resolve<Project> {

    constructor(private projectService: ProjectService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Project> {
        let id = route.paramMap.get('id');

        return this.projectService.getOne(id)
            .map(project => {
                return project;
            })
            .catch(err => {
                this.router.navigate(['/project/list']);
                return Observable.of(err);
            });
    }
}
