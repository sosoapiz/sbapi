import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { MainLayoutComponent } from '../shared/layout/main-layout/main-layout.component';


const routes: Routes = [
  {
      path: '', component: MainLayoutComponent,
      children: [
        { path: 'list', component: ProjectListComponent },
      ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule { }

export const routedComponents = [ProjectListComponent];
