import { ProjectDetailResolver } from './service/project-detail-resolver.service';
import { ProjectService } from './service/project.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './views/project-list/project-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectLayoutComponent } from './views/project-layout/project-layout.component';
import { ProjectInfoComponent } from './views/project-info/project-info.component';

@NgModule({
  imports: [
    SharedModule,
    ProjectRoutingModule
  ],
  declarations: [ProjectListComponent, ProjectLayoutComponent, ProjectInfoComponent],
  providers: [ProjectService, ProjectDetailResolver]
})
export class ProjectModule { }
