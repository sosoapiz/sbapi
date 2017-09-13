import { ProjectInfoComponent } from './views/project-info/project-info.component';
import { ProjectDetailResolver } from './service/project-detail-resolver.service';
import { ProjectLayoutComponent } from './views/project-layout/project-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './views/project-list/project-list.component';
import { MainLayoutComponent } from '../shared/layout/main-layout/main-layout.component';
import { ProjectMembersComponent } from './views/project-members/project-members.component';
import { ProjectDocumentsComponent } from './views/project-documents/project-documents.component';
import { SendNoticeComponent } from './views/send-notice/send-notice.component';
import { ProjectLogComponent } from './views/project-log/project-log.component';


const routes: Routes = [
  {
      path: '', component: MainLayoutComponent,
      children: [
        { path: 'list', component: ProjectListComponent },
      ]
  },
  {
    path: ':id', component: ProjectLayoutComponent, resolve: {project: ProjectDetailResolver},
    children: [
      { path: '', children: [
        { path: '', redirectTo: 'info', pathMatch: 'full' },
        { path: 'info', component: ProjectInfoComponent },
        { path: 'members', component: ProjectMembersComponent },
        { path: 'document/view/list', component: ProjectDocumentsComponent },
        { path: 'sendNotice', component: SendNoticeComponent },
        { path: 'log/list', component: ProjectLogComponent },
        { path: 'document/:docId/inter', loadChildren: 'app/document/inter/inter.module#InterModule'}
      ]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule { }

export const routedComponents = [ProjectListComponent];
